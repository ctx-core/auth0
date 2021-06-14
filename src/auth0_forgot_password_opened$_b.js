import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'auth0_forgot_password_opened$';
export const auth0_forgot_password_opened$_b = be_(key, ctx => derived$(auth0_opened$_b(ctx), auth0_opened => auth0_opened == 'forgot_password'));
export { auth0_forgot_password_opened$_b as b__opened__forgot_password, };
//# sourceMappingURL=src/auth0_forgot_password_opened$_b.js.map