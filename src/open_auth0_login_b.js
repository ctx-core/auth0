import { be_ } from '@ctx-core/object';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'open_auth0_login';
export const open_auth0_login_b = be_(key, ctx => {
    const auth0_opened$ = auth0_opened$_b(ctx);
    return open_auth0_login;
    function open_auth0_login() {
        auth0_opened$._ = 'login';
    }
});
//# sourceMappingURL=src/open_auth0_login_b.js.map