import type { LatLngTuple } from 'leaflet';

export interface District {
    name: string;
    description: string;
    landmark: string;
    priceRange: string;
    coordinates: [number, number]; // Using tuple type instead of LatLngTuple
    isRedZone?: boolean;
}

export interface SafetyTip {
    tip: string;
    icon: any; // We'll type this properly when using it
}

export interface Location {
    name: string;
    description: string;
    coordinates: [number, number];
} 