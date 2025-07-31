import { create } from 'zustand';

const useDeviceStore = create((set) => ({
  isDesktop: window.innerWidth >= 1024,
  updateDesktop: (size = 1024) => set({ isDesktop: window.innerWidth >= size }),
}));

export default useDeviceStore;

