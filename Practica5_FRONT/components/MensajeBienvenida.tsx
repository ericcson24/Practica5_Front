interface Props {
  nombre: string;
}

export default function MensajeBienvenida({ nombre }: Props) {
  return <h1>Hola, {nombre} 👋</h1>;
}
