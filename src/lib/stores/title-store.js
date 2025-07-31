import { create } from 'zustand';

const useTitleStore = create((set) => ({
  title: '',
  setTitle: (title) => set({ title }),
}));

export default useTitleStore;

