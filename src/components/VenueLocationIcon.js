import L from 'leaflet'

export const VenueLocationIcon = L.icon({
    iconUrl: require('../assets/venue_location_icon.svg'), 
    iconRetinaUrl: require('../assets/venue_location_icon.svg'),  
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,  
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
})

export const RedLocationIcon = L.icon({
    iconUrl: require('../assets/red_icon.png'), 
    iconRetinaUrl: require('../assets/red_icon.png'),  
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,  
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
})