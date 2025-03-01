import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import { Box, Paper, Typography, Button } from '@mui/material';
import { TaxiMarker } from '../../components/maps/TaxiMarker'; // Adjust the import path as needed
import { RootState } from '../../store/store'; // Adjust the import path as needed

interface Driver {
  status: 'available' | 'busy';
  longitude: number;
  latitude: number;
}

const MapView = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const { drivers } = useSelector((state: RootState) => state.map);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initializeMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-99.1332, 19.4326],
      zoom: 12
    });

    initializeMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setUserLocation([longitude, latitude]);
        initializeMap.flyTo({ center: [longitude, latitude], zoom: 14 });
      },
      (error) => console.error('Error getting location:', error)
    );

    setMap(initializeMap);

    return () => initializeMap.remove();
  }, []);

  useEffect(() => {
    if (!map) return;

    const markers: mapboxgl.Marker[] = [];

    drivers.forEach((driver: Driver) => {
      const markerElement = document.createElement('div');
      const root = ReactDOM.createRoot(markerElement);
      root.render(<TaxiMarker status={driver.status} />);
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([driver.longitude, driver.latitude])
        .addTo(map);

      markers.push(marker);
    });

    return () => {
      markers.forEach(marker => {
        const root = ReactDOM.createRoot(marker.getElement());
        root.unmount();
        marker.remove();
      });
    };
  }, [drivers, map]);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Box ref={mapContainer} sx={{ width: '100%', height: '100%' }} />

      <Paper sx={{
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 1,
        p: 2,
        maxWidth: 350,
        width: '100%',
        borderRadius: 2,
        boxShadow: 3
      }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Solicitar Taxi
        </Typography>
        
        <Button
          variant="contained"
          fullWidth
          sx={{ mb: 2 }}
          onClick={() => {
            if (userLocation) {
              map?.flyTo({
                center: userLocation,
                zoom: 15,
                essential: true
              });
            }
          }}
        >
          Usar mi ubicación actual
        </Button>
      </Paper>

      {userLocation && (
        <Box sx={{
          position: 'absolute',
          transform: 'translate(-50%, -100%)',
          left: '50%',
          top: '50%',
          fontSize: '24px',
          color: '#1976d2',
          pointerEvents: 'none'
        }}>
          📍
        </Box>
      )}
    </Box>
  );
}

export default MapView;
