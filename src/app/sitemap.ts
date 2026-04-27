import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gestion-cartera-bucaramanga-iota.vercel.app/";

  const routes = [
    // 🔥 PRINCIPALES (MUY IMPORTANTES PARA SEO)
    "",
    "/contacto",

    // 👇 LANDINGS / SERVICIOS (AJUSTA SEGÚN TU WEB)
    //"/servicios",
    //"/cobranza",
    //"/cobranza/prejuridica",
    //"/cobranza/juridica",
    //"/cobranza/empresas",
    //"/cobranza/inmobiliarias",
    //"/cobranza/salud",

    // 📚 BLOG
    "/blog",

    // 🧠 ARTÍCULOS
    "/blog/recuperar-cartera-vencida",
    "/blog/cliente-no-paga-bucaramanga",
    "/blog/cobro-prejuridico-bucaramanga",
    "/blog/cobro-juridico-bucaramanga",
    "/blog/cobrar-deuda-urgente-bucaramanga",
    "/blog/errores-cobranza-bucaramanga",
    "/blog/estrategias-cobranza-bucaramanga",
    "/blog/evitar-morosidad-clientes-bucaramanga",
    "/blog/flujo-de-caja",
    "/blog/negociar-deudas",
    "/blog/proceso-recuperacion-cartera-colombia",
    "/blog/cartera-sin-abogados",
    "/blog/tiempo-cobro-juridico",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),

    // 🎯 SEO INTELIGENTE
    changeFrequency: route === "" ? "weekly" : "monthly",

    priority:
      route === ""
        ? 1
        : route.includes("cobranza")
          ? 0.9
          : route === "/blog"
            ? 0.8
            : 0.7,
  }));
}
