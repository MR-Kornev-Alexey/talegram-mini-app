import { create } from 'zustand';
import { Webinar } from '@/types/webinar';

type DataState = {
    webinars: Webinar[];
    setWebinars: (data: Webinar[]) => void;
};

export const useDataStore = create<DataState>((set) => ({
    webinars: [],
    setWebinars: (data) => set({ webinars: data }),
}));