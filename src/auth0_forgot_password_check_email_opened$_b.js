import { eq_ } from '@ctx-core/function';
import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'auth0_forgot_password_check_email_opened$';
export const auth0_forgot_password_check_email_opened$_b = be_(key, (ctx) => derived$(auth0_opened$_b(ctx), eq_('forgot_password_check_email')));
export { auth0_forgot_password_check_email_opened$_b as b__opened__forgot_password_check_email, };
//# sourceMappingURL=src/auth0_forgot_password_check_email_opened$_b.js.map