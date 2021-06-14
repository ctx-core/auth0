import { be_ } from '@ctx-core/object';
import { set_auth0_token_b } from './set_auth0_token_b';
const key = 'clear_auth0_token';
export const clear_auth0_token_b = be_(key, ctx => {
    const set_auth0_token = set_auth0_token_b(ctx);
    return clear_auth0_token;
    function clear_auth0_token(value = null) {
        set_auth0_token(value);
    }
});
//# sourceMappingURL=src/clear_auth0_token_b.js.map