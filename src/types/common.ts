import { ReactNode } from 'react';

export interface SafetyTip {
    tip: string;
    icon?: ReactNode;
}

export interface District {
    name: string;
    description: string;
    coordinates: [number, number];
    landmark: string;
    priceRange: string;
    isRedZone?: boolean;
}

export interface Location {
    name: string;
    description: string;
    coordinates: [number, number];
} 