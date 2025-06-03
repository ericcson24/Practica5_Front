export default function FormularioNombre() {
  return (
    <form method="POST">
      <label>
        Escribe tu nombre:
        <input type="text" name="nombre" required />
      </label>
      <br />
      <button type="submit" style="margin-top: 1rem;">Guardar nombre</button>
    </form>
  );
}
