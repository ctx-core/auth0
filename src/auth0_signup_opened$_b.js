import { be_ } from '@ctx-core/object';
import { eq_ } from '@ctx-core/function';
import { derived$ } from '@ctx-core/store';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'auth0_signup_opened$';
export const auth0_signup_opened$_b = be_(key, ctx => derived$(auth0_opened$_b(ctx), eq_('signup')));
export { auth0_signup_opened$_b as b__opened__signup, };
//# sourceMappingURL=src/auth0_signup_opened$_b.js.map