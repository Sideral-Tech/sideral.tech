declare namespace App {
	interface MdsvexFile {
		default: import('svelte/internal').SvelteComponent;
		metadata: Record<string, string>;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface Post {
		slug: string;
		title: string;
		author: string;
		description: string;
		tags: string[];
		date: string;
	}

	interface Subsystem {
		name: string;
		categories: string[];
		description: string;
		url: string;
		modules: Module[];
	}

	interface Module {
		name: string;
		logo: string;
		url: string;
	}
}
