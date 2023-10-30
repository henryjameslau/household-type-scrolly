export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","data/household-type.csv","favicon.png"]),
	mimeTypes: {".csv":"text/csv",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b0007f88.js","app":"_app/immutable/entry/app.77ae9a9b.js","imports":["_app/immutable/entry/start.b0007f88.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/singletons.01628712.js","_app/immutable/chunks/index.dce56931.js","_app/immutable/entry/app.77ae9a9b.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/index.f2b814bd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
