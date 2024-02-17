export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/image1.jpeg","assets/kryptoenix.png","assets/kryptoenix@180.png","assets/kryptoenix@192.png","assets/kryptoenix@512.png","assets/kryptoenix_mask@192.png","assets/kryptoenix_mask@512.png","favicon.png","first-post/damaged-itemvbs.png","first-post/decompiled1.png","first-post/deobfs2.png","first-post/fetched-vbs.png","first-post/malhelper.png","first-post/malware.png","first-post/toolsmal.png","first-post/worm1.png","first-post/worm2.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9824e75f.js","app":"_app/immutable/entry/app.efda7ae2.js","imports":["_app/immutable/entry/start.9824e75f.js","_app/immutable/chunks/scheduler.9b9e513e.js","_app/immutable/chunks/singletons.63d6ca40.js","_app/immutable/chunks/index.834d9e00.js","_app/immutable/entry/app.efda7ae2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.9b9e513e.js","_app/immutable/chunks/index.781c9930.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/atom.xml",
				pattern: /^\/atom\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/atom.xml/_server.ts.js'))
			},
			{
				id: "/feed.json",
				pattern: /^\/feed\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/feed.json/_server.ts.js'))
			},
			{
				id: "/first-post",
				pattern: /^\/first-post\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/manifest.webmanifest",
				pattern: /^\/manifest\.webmanifest\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/manifest.webmanifest/_server.ts.js'))
			},
			{
				id: "/posts.json",
				pattern: /^\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/posts.json/_server.ts.js'))
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/tags.json",
				pattern: /^\/tags\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/tags.json/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
