import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngTuple } from 'leaflet';

type Espacio = {
  id: string;
  nombre: string;
  x: number; // horizontal
  y: number; // vertical
};

type Props = {
  edificio: string;
  piso: string;
};

const MapaCampus = ({ edificio, piso }: Props) => {
  const bounds: [LatLngTuple, LatLngTuple] = [[0, 0], [1000, 1000]];
  const imagenUrl = `/mapas/${edificio}_piso-${piso}.png`;

  // Espacios dummy, luego se puede cargar dinámicamente según edificio y piso
  const espacios: Espacio[] = [
    { id: 'aula-101', nombre: 'Aula 101', x: 200, y: 600 },
    { id: 'lab-201', nombre: 'Laboratorio 201', x: 800, y: 400 }
  ];

  return (
    <MapContainer
      center={[500, 500]}
      zoom={-2}
      crs={L.CRS.Simple}
      style={{ height: '80vh', width: '80vw', maxWidth: '1000px', maxHeight: '1000px', margin: '0 auto' }}
    >
      <ImageOverlay url={imagenUrl} bounds={bounds} />
      {espacios.map((espacio) => (
        <Marker key={espacio.id} position={[espacio.y, espacio.x]}>
          <Popup>{espacio.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapaCampus;
