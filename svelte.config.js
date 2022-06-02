import { windi } from "svelte-windicss-preprocess";
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({})
	],
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			resolve: {
				alias: {
					'@stores': path.resolve('./src/stores'),
					'@components': path.resolve('./src/components')
				}
			}
		}
	},
};

export default config;
