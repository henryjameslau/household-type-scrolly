import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.a137b498.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/index.f2b814bd.js","_app/immutable/chunks/index.dce56931.js"];
export const stylesheets = ["_app/immutable/assets/2.303d87e2.css"];
export const fonts = [];
