import { useState } from 'react';
import MapaCampus from './components/MapaCampus';
import { SelectorEdificioPiso } from './components/SelectorEdificioPiso';

function App() {
  const [edificio, setEdificio] = useState('edificio-a');
  const [piso, setPiso] = useState('1');

  return (
    <>
      <SelectorEdificioPiso
        edificio={edificio}
        piso={piso}
        setEdificio={setEdificio}
        setPiso={setPiso}
      />
      <MapaCampus edificio={edificio} piso={piso} />
    </>
  );
}

export default App;
