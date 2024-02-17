import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.5c762d28.js","_app/immutable/chunks/scheduler.9b9e513e.js","_app/immutable/chunks/index.781c9930.js","_app/immutable/chunks/posts.bddda4f7.js","_app/immutable/chunks/icon.9d7289f6.js","_app/immutable/chunks/index.834d9e00.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/0.3a0e5eb5.css","_app/immutable/assets/posts.59f26d89.css"];
export const fonts = [];
