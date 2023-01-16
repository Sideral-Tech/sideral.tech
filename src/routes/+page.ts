import type { PageLoad } from './$types';

const sloganList: string[] = [
	'Conquest through superior technology.',
	'Powering the future through unstoppable force.',
	'Technology as the ultimate weapon.',
	'Leading the galaxy through unrivaled power.',
	'Defending our interests with the most advanced weaponry.',
	'Dominion through technology.'
];

const randomSlogan = sloganList[Math.floor(Math.random() * sloganList.length)];

export const load: PageLoad = () => {
	return { randomSlogan };
};
