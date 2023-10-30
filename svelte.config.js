import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		prerender:{
			handleHttpError: 'ignore',
			handleMissingId: 'ignore'
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};