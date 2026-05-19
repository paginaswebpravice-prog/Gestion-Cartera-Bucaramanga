import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gestion-cartera-bucaramanga-iota.vercel.app";

  const staticDate = "2026-01-01";

  const routes: MetadataRoute.Sitemap = [
    // 🏠 HOME
    {
      url: `${baseUrl}/`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 1,
    },

    // 📞 CONTACTO
    {
      url: `${baseUrl}/contacto`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // 🧠 BLOG HOME
    {
      url: `${baseUrl}/blog`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🏢 SERVICIOS (alta intención comercial)
    {
      url: `${baseUrl}/servicios/cobranza-empresas`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/cobro-juridico-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/cobro-prejuridico-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/negociacion-deudas`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/recuperacion-cartera`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // 🏗️ SECTORES (intención media-alta SEO)
    {
      url: `${baseUrl}/sectores/cobranza-clinicas`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sectores/cobranza-construccion`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sectores/cobranza-educacion`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sectores/cobranza-inmobiliarias`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/sectores/cobranza-pymes`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },

    // 📚 BLOG POSTS (alta autoridad SEO)
    {
      url: `${baseUrl}/blog/recuperar-cartera-vencida`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cliente-no-paga-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cobro-prejuridico-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/cobro-juridico-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/cobrar-deuda-urgente-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/errores-cobranza-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/estrategias-cobranza-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/evitar-morosidad-clientes-bucaramanga`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/flujo-de-caja`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/negociar-deudas`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/proceso-recuperacion-cartera-colombia`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cartera-sin-abogados`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/tiempo-cobro-juridico`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  return routes;
}
