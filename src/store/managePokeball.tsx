import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useStore from './useStore';

interface ManagePokeballState {
  pokeball: any[];
  pokeballQtd: number;
  addToPokeball: (pokemon: any) => void;
  removeFromPokeball: (id: number) => void;
  removeAllFromPokeball: () => void;
}

export interface PersistedState {
  pokeball: Pokeball[];
}

export interface Pokeball {
  id: number;
  name: string;
  image: string;
}

export const useManagePokeball = create<ManagePokeballState>()(
  persist(
    (set, get) => ({
      pokeball: [],
      pokeballQtd: 0,
      addToPokeball: (pokemon) =>
        set((state) => ({
          pokeball: [...get().pokeball, pokemon],
          pokeballQtd: state.pokeball.length + 1,
        })),
      removeFromPokeball: (id) =>
        set((state) => ({
          pokeball: get().pokeball.filter((entry) => entry.id !== id),
          pokeballQtd: state.pokeball.length - 1,
        })),
      removeAllFromPokeball: () =>
        set(() => ({
          pokeballQtd: 0,
          pokeball: [],
        })),
    }),
    {
      name: 'pokeball-storage',
      partialize: (state) => ({
        pokeball: state.pokeball,
      }),
      merge: (persistedState, currentState) => {
        const { pokeball } = persistedState as PersistedState;

        return {
          ...currentState,
          pokeball: pokeball,
          pokeballQtd: pokeball.length,
        };
      },
    }
  )
);

export function usePokeballCart() {
  const cartManage = useStore(useManagePokeball, (state) => state);

  if (!cartManage) {
    return null;
  }

  return cartManage;
}
