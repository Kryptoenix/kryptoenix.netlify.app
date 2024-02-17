

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bd810f8c.js","_app/immutable/chunks/scheduler.9b9e513e.js","_app/immutable/chunks/index.781c9930.js","_app/immutable/chunks/icon.9d7289f6.js","_app/immutable/chunks/index.834d9e00.js","_app/immutable/chunks/stores.34e8a7d4.js","_app/immutable/chunks/singletons.63d6ca40.js","_app/immutable/chunks/footer.5fe447a3.js"];
export const stylesheets = [];
export const fonts = [];
