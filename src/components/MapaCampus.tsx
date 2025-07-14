import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import geojsonRaw from '../data/map.geojson?raw';

const geojsonData = JSON.parse(geojsonRaw);

const MapaCampus = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <MapContainer
        center={[3.341831, -76.529410]}
        zoom={18}
        maxZoom={18}
        minZoom={16}
        scrollWheelZoom={true}
        style={{
          height: '90vh',
          width: '90vw',
          margin: '0 auto',
        }}
        maxBounds={[[3.336947, -76.532478], [3.343609, -76.527232]]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON
          data={geojsonData}
          onEachFeature={(feature, layer) => {
            if (feature.properties?.nombre) {
              layer.bindPopup(feature.properties.nombre);
            }
          }}
          style={() => ({
            color: 'blue',
            weight: 2,
            fillOpacity: 0.3,
          })}
        />
      </MapContainer>
    </div>
  );
};

export default MapaCampus;
