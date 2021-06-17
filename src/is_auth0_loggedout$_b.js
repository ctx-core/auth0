import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_token$_b } from './auth0_token$_b';
const key = 'is_auth0_loggedout$';
export const is_auth0_loggedout$_b = be_(key, ctx => derived$(auth0_token$_b(ctx), auth0_token => auth0_token === null));
export { is_auth0_loggedout$_b as b__is__loggedout__auth0, };
//# sourceMappingURL=src/is_auth0_loggedout$_b.js.map