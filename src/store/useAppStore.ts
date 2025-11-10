import { create } from 'zustand';

export interface Hotspot {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface Student {
  id: string;
  name: string;
  roll: string;
  hostel: string;
  pickup: string;
  drop: string;
  poolId?: string;
  status: 'waiting' | 'pooled' | 'assigned' | 'enroute' | 'completed';
}

export interface Driver {
  id: string;
  name: string;
  plate: string;
  lat: number;
  lng: number;
  status: 'idle' | 'assigned' | 'enroute';
  assignedPoolId?: string;
}

export interface Pool {
  id: string;
  studentIds: string[];
  pickup: string;
  drop: string;
  otp: string;
  otpVerified: boolean;
  driverId?: string;
  status: 'pending' | 'assigned' | 'verified' | 'started' | 'completed';
}

export interface Trip {
  id: string;
  poolId: string;
  driverId: string;
  route: [number, number][];
  currentPosition?: [number, number];
  progress: number;
  status: 'pending' | 'started' | 'completed';
}

interface AppState {
  currentUser: { role: 'student' | 'driver' | 'admin'; id: string } | null;
  hotspots: Hotspot[];
  students: Student[];
  drivers: Driver[];
  pools: Pool[];
  trips: Trip[];
  demoStep: 'idle' | 'seeded' | 'pooled' | 'assigned' | 'verified' | 'moving' | 'completed';
  
  setCurrentUser: (user: { role: 'student' | 'driver' | 'admin'; id: string } | null) => void;
  seedDemo: () => void;
  createPools: () => void;
  assignDrivers: () => void;
  verifyOtp: (poolId: string, code: string) => boolean;
  startTrips: () => void;
  completeTrips: () => void;
  updateTripProgress: (tripId: string, progress: number, position: [number, number]) => void;
  resetDemo: () => void;
}

const TIET_CENTER = { lat: 30.3558, lng: 76.3651 };

const initialHotspots: Hotspot[] = [
  { id: 'main-gate', name: 'Main Gate', lat: 30.3570, lng: 76.3660 },
  { id: 'amritam-hall', name: 'AMRITAM HALL', lat: 30.3545, lng: 76.3640 },
  { id: 'vyom-hall', name: 'VYOM HALL', lat: 30.3560, lng: 76.3650 },
  { id: 'c-block', name: 'C Block', lat: 30.3555, lng: 76.3665 },
  { id: 'venture-lab', name: 'Venture Lab', lat: 30.3565, lng: 76.3670 },
];

export const useAppStore = create<AppState>((set, get) => ({
  currentUser: null,
  hotspots: initialHotspots,
  students: [],
  drivers: [],
  pools: [],
  trips: [],
  demoStep: 'idle',

  setCurrentUser: (user) => set({ currentUser: user }),

  seedDemo: () => {
    const students: Student[] = [
      // 7 students at AMRITAM HALL
      { id: 's1', name: 'Ishaan Sharma', roll: '102303795', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'c-block', status: 'waiting' },
      { id: 's2', name: 'Mehak Arora', roll: '102303801', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'c-block', status: 'waiting' },
      { id: 's3', name: 'Abhiram Singh', roll: '102303812', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'c-block', status: 'waiting' },
      { id: 's4', name: 'Jyotika Mehra', roll: '102303823', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'c-block', status: 'waiting' },
      { id: 's5', name: 'Aarav Gupta', roll: '102303834', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'venture-lab', status: 'waiting' },
      { id: 's6', name: 'Kabir Malhotra', roll: '102303856', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'venture-lab', status: 'waiting' },
      { id: 's7', name: 'Ananya Nanda', roll: '102303867', hostel: 'AMRITAM', pickup: 'amritam-hall', drop: 'venture-lab', status: 'waiting' },
      
      // 1 student at VYOM HALL
      { id: 's8', name: 'Riya Verma', roll: '102303845', hostel: 'VYOM', pickup: 'vyom-hall', drop: 'venture-lab', status: 'waiting' },
    ];

    const drivers: Driver[] = [
      // Driver positioned away from students (will move to pickup)
      { id: 'd1', name: 'Raj Kumar', plate: 'PB11-ER-4101', lat: 30.3538, lng: 76.3635, status: 'idle' },
      // Driver positioned away from students (will move to pickup)
      { id: 'd2', name: 'Anil Verma', plate: 'PB11-ER-4102', lat: 30.3540, lng: 76.3638, status: 'idle' },
      // Driver at Main Gate (stays idle throughout)
      { id: 'd3', name: 'Surinder Pal', plate: 'PB11-ER-4103', lat: 30.3570, lng: 76.3660, status: 'idle' },
    ];

    set({ students, drivers, demoStep: 'seeded' });
  },

  createPools: () => {
    const { students } = get();
    
    const pools: Pool[] = [
      {
        id: 'pool-1',
        studentIds: ['s1', 's2', 's3', 's4'], // 4 students from AMRITAM HALL to C Block
        pickup: 'amritam-hall',
        drop: 'c-block',
        otp: '123456',
        otpVerified: false,
        status: 'pending',
      },
      {
        id: 'pool-2',
        studentIds: ['s5', 's6', 's7', 's8'], // 3 from AMRITAM + 1 from VYOM to Venture Lab
        pickup: 'amritam-hall', // Start at AMRITAM
        drop: 'venture-lab',
        otp: '789012',
        otpVerified: false,
        status: 'pending',
      },
    ];

    const updatedStudents = students.map(s => {
      const pool = pools.find(p => p.studentIds.includes(s.id));
      if (pool) {
        return { ...s, poolId: pool.id, status: 'pooled' as const };
      }
      return s;
    });

    set({ pools, students: updatedStudents, demoStep: 'pooled' });
  },

  assignDrivers: () => {
    const { pools, drivers } = get();
    
    // Pool 1: d1 -> AMRITAM HALL (pickup 4) -> C Block
    // Pool 2: d2 -> AMRITAM HALL (pickup 3) -> VYOM HALL (pickup 1) -> Venture Lab
    const poolAssignments = [
      { poolId: 'pool-1', driverId: 'd1' },
      { poolId: 'pool-2', driverId: 'd2' },
    ];

    const updatedPools = pools.map(pool => {
      const assignment = poolAssignments.find(a => a.poolId === pool.id);
      return {
        ...pool,
        driverId: assignment?.driverId,
        status: 'assigned' as const,
      };
    });

    const updatedDrivers = drivers.map(driver => {
      const assignment = poolAssignments.find(a => a.driverId === driver.id);
      if (assignment) {
        return {
          ...driver,
          status: 'assigned' as const,
          assignedPoolId: assignment.poolId,
        };
      }
      return driver; // d3 stays idle
    });

    const updatedStudents = get().students.map(s => {
      const pool = updatedPools.find(p => p.studentIds.includes(s.id));
      if (pool && pool.driverId) {
        return { ...s, status: 'assigned' as const };
      }
      return s;
    });

    // Create realistic routes following roads
    const trips: Trip[] = updatedPools.map(pool => {
      if (pool.id === 'pool-1') {
        // Pool 1: Driver starts away → AMRITAM HALL (pickup 4 students) → C Block
        return {
          id: `trip-${pool.id}`,
          poolId: pool.id,
          driverId: pool.driverId!,
          route: [
            [30.3538, 76.3635], // Driver starting position (away from students)
            [30.3540, 76.3637], // Road waypoint
            [30.3542, 76.3638], // Road waypoint
            [30.3543, 76.3639], // Road waypoint
            [30.3545, 76.3640], // AMRITAM HALL - pickup 4 students
            [30.3546, 76.3642], // Road waypoint
            [30.3548, 76.3645], // Road waypoint
            [30.3549, 76.3648], // Road waypoint
            [30.3550, 76.3652], // Road waypoint
            [30.3552, 76.3657], // Road waypoint
            [30.3553, 76.3660], // Road waypoint
            [30.3554, 76.3663], // Road waypoint
            [30.3555, 76.3665], // C Block - drop all 4 students
          ],
          progress: 0,
          status: 'pending',
        };
      } else {
        // Pool 2: Driver starts away → AMRITAM (pickup 3) → VYOM (pickup 1) → Venture Lab
        return {
          id: `trip-${pool.id}`,
          poolId: pool.id,
          driverId: pool.driverId!,
          route: [
            [30.3540, 76.3638], // Driver starting position (away from students)
            [30.3542, 76.3639], // Road waypoint
            [30.3544, 76.3640], // Road waypoint
            [30.3545, 76.3640], // AMRITAM HALL - pickup 3 students
            [30.3547, 76.3642], // Road waypoint
            [30.3549, 76.3644], // Road waypoint
            [30.3552, 76.3646], // Road waypoint
            [30.3555, 76.3648], // Road waypoint
            [30.3558, 76.3649], // Road waypoint
            [30.3560, 76.3650], // VYOM HALL - pickup 1 student
            [30.3561, 76.3653], // Road waypoint
            [30.3562, 76.3657], // Road waypoint
            [30.3563, 76.3662], // Road waypoint
            [30.3564, 76.3666], // Road waypoint
            [30.3565, 76.3670], // Venture Lab - drop all 4 students
          ],
          progress: 0,
          status: 'pending',
        };
      }
    });

    set({ 
      pools: updatedPools, 
      drivers: updatedDrivers, 
      students: updatedStudents,
      trips,
      demoStep: 'assigned' 
    });
  },

  verifyOtp: (poolId, code) => {
    const { pools } = get();
    const pool = pools.find(p => p.id === poolId);
    
    if (pool && pool.otp === code) {
      const updatedPools = pools.map(p => 
        p.id === poolId ? { ...p, otpVerified: true, status: 'verified' as const } : p
      );
      
      set({ pools: updatedPools });
      
      const allVerified = updatedPools.every(p => p.otpVerified);
      if (allVerified) {
        set({ demoStep: 'verified' });
      }
      
      return true;
    }
    
    return false;
  },

  startTrips: () => {
    const { trips, pools, drivers, students } = get();
    
    const updatedTrips = trips.map(t => ({
      ...t,
      status: 'started' as const,
      currentPosition: t.route[0],
    }));

    const updatedPools = pools.map(p => ({
      ...p,
      status: 'started' as const,
    }));

    const updatedDrivers = drivers.map(d => ({
      ...d,
      status: 'enroute' as const,
    }));

    const updatedStudents = students.map(s => ({
      ...s,
      status: 'enroute' as const,
    }));

    set({ 
      trips: updatedTrips, 
      pools: updatedPools,
      drivers: updatedDrivers,
      students: updatedStudents,
      demoStep: 'moving' 
    });
  },

  updateTripProgress: (tripId, progress, position) => {
    const { trips } = get();
    
    const updatedTrips = trips.map(t =>
      t.id === tripId ? { ...t, progress, currentPosition: position } : t
    );

    set({ trips: updatedTrips });
  },

  completeTrips: () => {
    const { trips, pools, drivers, students } = get();
    
    const updatedTrips = trips.map(t => ({
      ...t,
      status: 'completed' as const,
      progress: 1,
    }));

    const updatedPools = pools.map(p => ({
      ...p,
      status: 'completed' as const,
    }));

    const updatedDrivers = drivers.map(d => ({
      ...d,
      status: 'idle' as const,
      assignedPoolId: undefined,
    }));

    const updatedStudents = students.map(s => ({
      ...s,
      status: 'completed' as const,
    }));

    set({ 
      trips: updatedTrips, 
      pools: updatedPools,
      drivers: updatedDrivers,
      students: updatedStudents,
      demoStep: 'completed' 
    });
  },

  resetDemo: () => {
    set({
      students: [],
      drivers: [],
      pools: [],
      trips: [],
      demoStep: 'idle',
    });
  },
}));
