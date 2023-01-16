import type { PageLoad } from './$types';

const data = await fetch('https://api.github.com/orgs/sideral-tech/repos');
let repos = await data.json();

const excludedRepos = ['.github', 'sideral.tech'];
repos = repos.filter((x: App.Repo) => !excludedRepos.includes(x.name));

export const load: PageLoad = () => {
	return { repos };
};
