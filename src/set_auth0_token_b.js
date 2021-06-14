import { be_ } from '@ctx-core/object';
import { auth0_token_json$_b } from './auth0_token_json$_b';
const key = 'set_auth0_token';
export const set_auth0_token_b = be_(key, ctx => {
    const auth0_token_json$ = auth0_token_json$_b(ctx);
    return set_auth0_token;
    function set_auth0_token(auth0_token) {
        auth0_token_json$.set(JSON.stringify(auth0_token));
    }
});
//# sourceMappingURL=src/set_auth0_token_b.js.map