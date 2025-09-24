// store/authStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of your user data
interface User {
  name: string;
  email: string;
  _id:string
  role:string
  phone:string
}

// Define the state and actions of your authentication store
interface AuthState {
  token: string | null;
  user: User | null;
  isLoggedIn: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

// Create the store with TypeScript and persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isLoggedIn: false,
      login: (token, user) => set({ token, user, isLoggedIn: true }),
      logout: () => set({ token: null, user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);