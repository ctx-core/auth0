import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'auth0_login_opened$';
export const auth0_login_opened$_b = be_(key, ctx => derived$(auth0_opened$_b(ctx), auth0_login_opened => !auth0_login_opened
    || auth0_login_opened == 'login'));
export { auth0_login_opened$_b as login_opened };
//# sourceMappingURL=src/auth0_login_opened$_b.js.map