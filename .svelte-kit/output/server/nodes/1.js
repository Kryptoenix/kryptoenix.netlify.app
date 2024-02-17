

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.afbbbf71.js","_app/immutable/chunks/scheduler.9b9e513e.js","_app/immutable/chunks/index.781c9930.js","_app/immutable/chunks/stores.34e8a7d4.js","_app/immutable/chunks/singletons.63d6ca40.js","_app/immutable/chunks/index.834d9e00.js"];
export const stylesheets = [];
export const fonts = [];
