import { useEffect, useState } from "preact/hooks";

export default function CambiadorColor(props: { children: preact.JSX.Element }) {
  const colores = ["#fefefe", "#e3f2fd", "#e8f5e9", "#fffde7", "#f3e5f5"];
  const [colorFondo, setColorFondo] = useState(colores[0]);

  useEffect(() => {
    let indice = 0;
    const intervalo = setInterval(() => {
      indice = (indice + 1) % colores.length;
      setColorFondo(colores[indice]);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colorFondo,
        minHeight: "100vh",
        transition: "background 0.5s ease",
      }}
    >
      {props.children}
    </div>
  );
}
