

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.aef8d9b2.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/index.f2b814bd.js","_app/immutable/chunks/singletons.699bce67.js","_app/immutable/chunks/index.dce56931.js"];
export const stylesheets = [];
export const fonts = [];
