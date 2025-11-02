import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type EventsType = {
  _id: string;
  title: string;
  description: string;
  date: Date;
  location: {
    type: string;
    coordinates: number[];
  };
  maxParticipants: number;
  currentParticipants: number;
};

interface EventState {
  Events: EventsType[];
  CurrentEvent?: EventsType | null;
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  Events: [],
  CurrentEvent: null,
  loading: false,
  error: null
};

const EventSlice = createSlice({
  name: "Events",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
       state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error= action.payload;
    },
    setEvents: (state, action: PayloadAction<EventsType[]>) => {
      state.Events = action.payload;
      state.loading = false;
      state.error = null;
    },
    setCurrentEvent: (state, action: PayloadAction<EventsType | null>) => {
      state.CurrentEvent = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setEvents, setCurrentEvent, setLoading, setError } = EventSlice.actions;
export default EventSlice.reducer;
