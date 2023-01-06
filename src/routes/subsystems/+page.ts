import type { PageLoad } from './$types';

const subsystems = [
	{
		name: 'vela',
		categories: ['DNS', 'Tunnel'],
		description: 'Orbiting around the smallest quark star in the universe.',
		url: '//vela.sideral.tech',
		modules: [
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			},
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			},
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			},
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			}
		]
	},
	{
		name: 'vela',
		categories: ['DNS', 'Tunnel'],
		description: 'Orbiting around the smallest quark star in the universe.',
		url: '//vela.sideral.tech',
		modules: [
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			}
		]
	},
	{
		name: 'vela',
		categories: ['DNS', 'Tunnel'],
		description: 'Orbiting around the smallest quark star in the universe.',
		url: '//vela.sideral.tech',
		modules: [
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			}
		]
	},
	{
		name: 'vela',
		categories: ['DNS', 'Tunnel'],
		description: 'Orbiting around the smallest quark star in the universe.',
		url: '//vela.sideral.tech',
		modules: [
			{
				name: 'Foundry',
				logo: 'https://cdn.discordapp.com/emojis/967578777133674606.gif',
				url: '//foundry.sideral.tech'
			}
		]
	}
];

export const load: PageLoad = () => {
	return { subsystems };
};
