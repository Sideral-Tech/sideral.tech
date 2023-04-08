import type { PageLoad } from './$types';

import subsystems from './subsystems.json';

export const load: PageLoad = () => {
	return { subsystems };
};
