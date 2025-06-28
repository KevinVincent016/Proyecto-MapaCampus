type Props = {
  edificio: string;
  piso: string;
  setEdificio: (e: string) => void;
  setPiso: (p: string) => void;
};

export const SelectorEdificioPiso = ({ edificio, piso, setEdificio, setPiso }: Props) => {
  return (
    <div className="absolute top-4 left-4 z-[1000] bg-white p-4 rounded shadow">
      <label className="mr-2">Edificio:</label>
      <select value={edificio} onChange={(e) => setEdificio(e.target.value)} className="mr-4">
        <option value="edificio-a">Edificio A</option>
        <option value="edificio-b">Edificio B</option>
      </select>

      <label className="mr-2">Piso:</label>
      <select value={piso} onChange={(e) => setPiso(e.target.value)}>
        <option value="1">Piso 1</option>
        <option value="2">Piso 2</option>
      </select>
    </div>
  );
};
