const site = {
  protocol: {}.URARA_SITE_PROTOCOL ?? false ? "http://" : "https://",
  //domain: ({}).URARA_SITE_DOMAIN ?? 'kryptoenix.github.io',
  domain: {}.URARA_SITE_DOMAIN ?? "localhost:5173",
  title: "Kryptoenix",
  subtitle: "Cybersecurity",
  lang: "en-US",
  description: "Powered by SvelteKit/Urara",
  author: {
    avatar: "/assets/kryptoenix@512.png",
    name: "Kryptoenix",
    //status: '🌸',
    bio: "Exploring the realm of cybersecurity"
  },
  themeColor: "#3D4451"
};
export {
  site as s
};
