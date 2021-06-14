import { be_ } from '@ctx-core/object';
import { set_auth0_token_b } from './set_auth0_token_b';
const key = 'logout_auth0_token';
export const logout_auth0_token_b = be_(key, ctx => {
    const set_auth0_token = set_auth0_token_b(ctx);
    return logout_auth0_token;
    function logout_auth0_token() {
        set_auth0_token(null);
    }
});
//# sourceMappingURL=src/logout_auth0_token_b.js.map