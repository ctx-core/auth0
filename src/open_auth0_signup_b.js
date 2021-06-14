import { be_ } from '@ctx-core/object';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'open_auth0_signup';
export const open_auth0_signup_b = be_(key, ctx => {
    const auth0_opened$ = auth0_opened$_b(ctx);
    return open_auth0_signup;
    function open_auth0_signup() {
        auth0_opened$._ = 'signup';
    }
});
//# sourceMappingURL=src/open_auth0_signup_b.js.map