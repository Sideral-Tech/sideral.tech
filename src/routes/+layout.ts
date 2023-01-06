// thanks https://github.com/mvasigh/sveltekit-mdsvex-blog

import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const modules = import.meta.glob(`/src/posts/*.md`);
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) => ({ slug: path.split(/\/|\./)[3], ...(post as App.MdsvexFile).metadata } as App.Post)
		)
	);

	const posts = await Promise.all(postPromises);
	posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
	return { posts };
};  
