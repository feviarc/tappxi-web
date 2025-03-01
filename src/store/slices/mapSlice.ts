import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Driver {
  id: string;
  status: 'available' | 'busy';
  latitude: number;
  longitude: number;
}

interface MapState {
  drivers: Driver[];
}

const initialState: MapState = {
  drivers: [
    // Datos de ejemplo para pruebas
    {
      id: '1',
      status: 'available',
      latitude: 19.4326,
      longitude: -99.1332
    },
    {
      id: '2',
      status: 'busy',
      latitude: 19.4340,
      longitude: -99.1400
    }
  ]
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setDrivers(state, action: PayloadAction<Driver[]>) {
      state.drivers = action.payload;
    },
    updateDriverStatus(state, action: PayloadAction<{id: string; status: 'available' | 'busy'}>) {
      const driver = state.drivers.find(d => d.id === action.payload.id);
      if (driver) driver.status = action.payload.status;
    }
  },
});

export const { setDrivers, updateDriverStatus } = mapSlice.actions;
export default mapSlice.reducer;
