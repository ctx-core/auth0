import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'auth0_change_password_opened$';
export const auth0_change_password_opened$_b = be_(key, ctx => derived$(auth0_opened$_b(ctx), auth0_opened => auth0_opened === 'change_password'));
export { auth0_change_password_opened$_b as b__opened__change_password, };
//# sourceMappingURL=src/auth0_change_password_opened$_b.js.map