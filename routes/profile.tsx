import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import CambiadorColor from "../islands/CambiadorColor.tsx";
import FormularioNombre from "../components/FormularioNombre.tsx";
import MensajeBienvenida from "../components/MensajeBienvenida.tsx";

interface DatosPagina {
  nombreUsuario?: string;
}

export const handler: Handlers<DatosPagina> = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    const nombre = cookies.username;
    return ctx.render({ nombreUsuario: nombre });
  },

  async POST(req) {
    const datos = await req.formData();
    const nombre = datos.get("nombre")?.toString();

    const headers = new Headers();
    if (nombre) {
      setCookie(headers, {
        name: "username",
        value: nombre,
        path: "/",
        httpOnly: true,
      });
    }

    headers.set("location", "/profile");
    return new Response(null, { status: 303, headers });
  },
};

export default function PaginaPerfil(props: PageProps<DatosPagina>) {
  const nombre = props.data.nombreUsuario;

  return (
    <CambiadorColor>
      <div style="text-align: center; margin-top: 2rem;">
        {nombre ? (
          <MensajeBienvenida nombre={nombre} />
        ) : (
          <FormularioNombre />
        )}
      </div>
    </CambiadorColor>
  );
}
