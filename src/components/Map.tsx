import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LatLngTuple } from 'leaflet';
import { Button, Typography } from '@mui/material';
import { Directions, MyLocation } from '@mui/icons-material';
import { useLocation } from '../context/LocationContext';

export interface Location {
    name: string;
    description: string;
    coordinates: [number, number];
    cuisine?: string;
    specialty?: string;
    priceRange?: string;
    contact?: string;
}

export interface MapProps {
    locations: Location[];
}

// Create a loading component
const LoadingMap = () => (
    <div style={{
        height: '400px',
        width: '100%',
        borderRadius: '12px',
        backgroundColor: '#1a1b1f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#66FFB2'
    }}>
        Loading map...
    </div>
);

// Create the map component without SSR
const DynamicMap = dynamic(
    async () => {
        const { MapContainer, TileLayer, Marker, Popup, useMapEvents } = await import('react-leaflet');
        const L = await import('leaflet');

        // Import Leaflet CSS
        if (typeof window !== 'undefined') {
            require('leaflet/dist/leaflet.css');

            // @ts-ignore - ignore the TypeScript error for _getIconUrl
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });
        }

        const LocationMarker = () => {
            const [position, setPosition] = useState<LatLngTuple | null>(null);
            const [error, setError] = useState<string | null>(null);
            const map = useMapEvents({
                locationfound(e) {
                    setPosition([e.latlng.lat, e.latlng.lng]);
                    map.flyTo(e.latlng, 16);
                    setError(null);
                },
                locationerror(e) {
                    setError(e.message);
                    console.error('Location error:', e);
                }
            });

            useEffect(() => {
                map.locate({
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                });
            }, [map]);

            return (
                <>
                    {error && (
                        <div style={{
                            position: 'absolute',
                            top: 10,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1000,
                            backgroundColor: 'rgba(255,0,0,0.8)',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            fontSize: '14px'
                        }}>
                            {error === 'User denied Geolocation'
                                ? 'Please enable location access in your browser settings'
                                : 'Could not get your location'}
                        </div>
                    )}
                    {position && (
                        <Marker
                            position={position}
                            icon={new L.Icon({
                                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            })}
                        >
                            <Popup>
                                <div style={{ textAlign: 'center' }}>
                                    <strong>You are here! 📍</strong>
                                    <br />
                                    <small>Accuracy: High</small>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </>
            );
        };

        const MapComponent = ({ locations }: MapProps) => {
            const mapRef = useRef<L.Map>(null);
            const { selectedLocation } = useLocation();
            const [showLocation, setShowLocation] = useState(false);
            const [locationError, setLocationError] = useState<string | null>(null);
            const [mapHeight, setMapHeight] = useState('400px');

            useEffect(() => {
                const updateMapHeight = () => {
                    setMapHeight(window.innerWidth < 600 ? '300px' : '400px');
                };

                updateMapHeight();
                window.addEventListener('resize', updateMapHeight);

                return () => window.removeEventListener('resize', updateMapHeight);
            }, []);

            const openInGoogleMaps = (coordinates: [number, number]) => {
                const [lat, lng] = coordinates;
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
            };

            useEffect(() => {
                if (selectedLocation && mapRef.current) {
                    mapRef.current.flyTo(selectedLocation.coordinates, 16, {
                        duration: 1.5,
                        easeLinearity: 0.25
                    });
                }
            }, [selectedLocation]);

            const handleLocationClick = () => {
                if (!navigator.geolocation) {
                    setLocationError('Geolocation is not supported by your browser');
                    return;
                }

                setShowLocation(true);
                setLocationError(null);

                if (mapRef.current) {
                    mapRef.current.locate({
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    });
                }
            };

            return (
                <>
                    <Button
                        variant="contained"
                        startIcon={<MyLocation />}
                        onClick={handleLocationClick}
                        sx={{
                            mb: 2,
                            width: { xs: '100%', sm: 'auto' },
                            backgroundColor: '#66FFB2',
                            color: '#000',
                            '&:hover': {
                                backgroundColor: '#4CD594'
                            }
                        }}
                    >
                        Show My Location
                    </Button>
                    {locationError && (
                        <Typography
                            color="error"
                            sx={{ mb: 2 }}
                        >
                            {locationError}
                        </Typography>
                    )}
                    <MapContainer
                        ref={mapRef}
                        center={[41.0082, 28.9784]}
                        zoom={13}
                        style={{
                            height: mapHeight,
                            width: '100%',
                            borderRadius: '12px',
                            touchAction: 'manipulation'
                        }}
                        scrollWheelZoom={false}
                        dragging={true}
                        doubleClickZoom={false}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        />
                        {showLocation && <LocationMarker />}
                        {locations.map((location, index) => (
                            <Marker
                                key={index}
                                position={location.coordinates}
                                eventHandlers={{
                                    click: () => {
                                        if (mapRef.current) {
                                            mapRef.current.flyTo(location.coordinates, 16);
                                        }
                                    }
                                }}
                            >
                                <Popup>
                                    <div style={{
                                        minWidth: '200px',
                                        maxWidth: '300px',
                                        padding: '8px'
                                    }}>
                                        <h3 style={{ margin: '0 0 8px 0' }}>{location.name}</h3>
                                        <p style={{ margin: '0 0 8px 0' }}>{location.description}</p>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<Directions />}
                                            onClick={() => openInGoogleMaps(location.coordinates)}
                                            sx={{
                                                mt: 1,
                                                width: '100%',
                                                backgroundColor: '#66FFB2',
                                                color: '#000',
                                                '&:hover': {
                                                    backgroundColor: '#4CD594'
                                                }
                                            }}
                                        >
                                            Navigate
                                        </Button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </>
            );
        };

        return MapComponent;
    },
    {
        ssr: false,
        loading: LoadingMap
    }
);

const Map: React.FC<MapProps> = (props) => {
    return <DynamicMap {...props} />;
};

export default Map; 