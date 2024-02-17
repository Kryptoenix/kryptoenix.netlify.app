import { s as site } from "./site.js";
const favicon = {
  src: site.protocol + site.domain + "/favicon.png",
  sizes: "48x48",
  type: "image/png"
};
const any = {
  180: {
    src: site.protocol + site.domain + "/assets/kryptoenix@180.png",
    sizes: "180x180",
    type: "image/png"
  },
  192: {
    src: site.protocol + site.domain + "/assets/kryptoenix@192.png",
    sizes: "192x192",
    type: "image/png"
  },
  512: {
    src: site.protocol + site.domain + "/assets/kryptoenix@512.png",
    sizes: "512x512",
    type: "image/png"
  }
};
const maskable = {
  192: {
    src: site.protocol + site.domain + "/assets/kryptoenix_mask@192.png",
    sizes: "192x192",
    type: "image/png"
  },
  512: {
    src: site.protocol + site.domain + "/assets/kryptoenix_mask@512.png",
    sizes: "512x512",
    type: "image/png"
  }
};
export {
  any as a,
  favicon as f,
  maskable as m
};
