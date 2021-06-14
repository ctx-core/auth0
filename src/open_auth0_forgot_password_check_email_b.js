import { be_ } from '@ctx-core/object';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'open_auth0_forgot_password_check_email';
export const open_auth0_forgot_password_check_email_b = be_(key, ctx => {
    const auth0_opened$ = auth0_opened$_b(ctx);
    return open_auth0_forgot_password_check_email;
    function open_auth0_forgot_password_check_email() {
        auth0_opened$._ = 'forgot_password_check_email';
    }
});
//# sourceMappingURL=src/open_auth0_forgot_password_check_email_b.js.map