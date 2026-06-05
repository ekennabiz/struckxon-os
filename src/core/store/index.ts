import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Mission {
  id: string;
  title: string;
  completed: boolean;
}

interface StruckxonState {
  userName: string;
  activeProjects: number;
  financialGrowth: number;
  learningProgress: number;
  dailyMissions: Mission[];
  toggleMission: (id: string) => void;
}

export const useStore = create<StruckxonState>()(
  persist(
    (set) => ({
      userName: 'Alex',
      activeProjects: 14,
      financialGrowth: 28.4,
      learningProgress: 65,
      dailyMissions: [
        { id: '1', title: 'Review Q3 Family Business Expansion', completed: false },
        { id: '2', title: 'Finalize AI System Workflows', completed: true },
        { id: '3', title: 'Audit monthly investment budget', completed: false },
      ],
      
      // Action to toggle mission status
      toggleMission: (id) =>
        set((state) => ({
          dailyMissions: state.dailyMissions.map((mission) =>
            mission.id === id
              ? { ...mission, completed: !mission.completed }
              : mission
          ),
        })),
    }),
    {
      name: 'struckxon-os-storage', // The key used in local storage
    }
  )
);