import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://gestion-cartera-bucaramanga-iota.vercel.app/";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // Bloquea cosas innecesarias
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
