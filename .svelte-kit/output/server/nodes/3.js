

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.md.js')).default;
export const imports = ["_app/immutable/nodes/3.f69c2a3d.js","_app/immutable/chunks/scheduler.9b9e513e.js","_app/immutable/chunks/index.781c9930.js","_app/immutable/chunks/profile.d44cdb83.js","_app/immutable/chunks/posts.bddda4f7.js","_app/immutable/chunks/icon.9d7289f6.js","_app/immutable/chunks/index.834d9e00.js","_app/immutable/chunks/footer.5fe447a3.js"];
export const stylesheets = ["_app/immutable/assets/posts.59f26d89.css"];
export const fonts = [];
