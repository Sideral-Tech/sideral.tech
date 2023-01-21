import type { PageLoad } from './$types';

const data = await fetch('https://api.github.com/orgs/sideral-tech/repos', {
	method: 'GET',
	headers: {
		Authorization: `Bearer `
	}
});
let repos: App.Repo[] = await data.json();

const excludedRepos = ['.github'];
repos = repos.filter((x: App.Repo) => !excludedRepos.includes(x.name));

export const load: PageLoad = () => {
	return { repos };
};
