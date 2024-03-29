import { s as site } from "../../../chunks/site.js";
import { a as any, m as maskable } from "../../../chunks/icon.js";
const prerender = true;
const trailingSlash = "never";
const GET = () => new Response(
  JSON.stringify(
    {
      name: site.title,
      short_name: site.title,
      lang: site.lang,
      description: site.description,
      id: site.protocol + site.domain + "/",
      start_url: "/",
      scope: "/",
      display: "standalone",
      orientation: "portrait",
      background_color: site.themeColor,
      theme_color: site.themeColor,
      icons: [
        ...Object.values(any).filter((icon) => icon.sizes !== "180x180").map((icon) => ({ ...icon, purpose: "any" })),
        ...Object.values(maskable).map((icon) => ({ ...icon, purpose: "maskable" }))
      ]
    },
    null,
    2
  ),
  {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8"
    }
  }
);
export {
  GET,
  prerender,
  trailingSlash
};
