import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';


export const load: PageLoad = async ({ params }) => {
	const logs = import.meta.glob('/src/posts/*/*.md');

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(logs)) {

		if (path.split(/\/|\./)[3] === params.log) {
			match = { path, resolver: resolver as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();
	
	if (!post) {
		throw error(404);
	}

	return {
		component: post.default,
		metadata: post.metadata
	};
};
