import { be_ } from '@ctx-core/object';
import { auth0_token_error$_b } from './auth0_token_error$_b';
import { logout_auth0_token_b } from './logout_auth0_token_b';
const key = 'logout_auth0_token_error';
export const logout_auth0_token_error_b = be_(key, ctx => {
    const auth0_token_error$ = auth0_token_error$_b(ctx);
    const logout_auth0_token = logout_auth0_token_b(ctx);
    return logout_auth0_token_error;
    function logout_auth0_token_error(error) {
        auth0_token_error$._ = error;
        if (error) {
            logout_auth0_token();
        }
    }
});
//# sourceMappingURL=src/logout_auth0_token_error_b.js.map