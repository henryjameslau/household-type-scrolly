export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "household-type-scrolly/_app",
	assets: new Set([".nojekyll","404.html","data/household-type.csv","favicon.png"]),
	mimeTypes: {".html":"text/html",".csv":"text/csv",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.31178b3f.js","app":"_app/immutable/entry/app.b25e6d34.js","imports":["_app/immutable/entry/start.31178b3f.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/singletons.699bce67.js","_app/immutable/chunks/index.dce56931.js","_app/immutable/entry/app.b25e6d34.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/index.f2b814bd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
