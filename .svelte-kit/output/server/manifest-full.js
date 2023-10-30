export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","404.html","data/household-type.csv","favicon.png"]),
	mimeTypes: {".html":"text/html",".csv":"text/csv",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.46a8c38b.js","app":"_app/immutable/entry/app.4f44d928.js","imports":["_app/immutable/entry/start.46a8c38b.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/singletons.68113de6.js","_app/immutable/chunks/index.dce56931.js","_app/immutable/entry/app.4f44d928.js","_app/immutable/chunks/scheduler.a3b372f9.js","_app/immutable/chunks/index.f2b814bd.js"],"stylesheets":[],"fonts":[]},
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
