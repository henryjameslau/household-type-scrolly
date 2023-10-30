

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9e16dc55.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/index.f2b814bd.js"];
export const stylesheets = ["_app/immutable/assets/0.b10ebf40.css"];
export const fonts = [];
