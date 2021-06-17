import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'auth0_closed$';
export const auth0_closed$_b = be_(key, ctx => derived$(auth0_opened$_b(ctx), auth0_opened => auth0_opened === null));
export { auth0_closed$_b as b__closed__auth0, };
//# sourceMappingURL=src/auth0_closed$_b.js.map