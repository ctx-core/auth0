import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_token_json$_b } from './auth0_token_json$_b';
const key = 'in_auth0_token$';
export const in_auth0_token$_b = be_(key, ctx => derived$(auth0_token_json$_b(ctx), auth0_token_json => {
    if (auth0_token_json && typeof auth0_token_json === 'string') {
        const auth0_token_json$ = auth0_token_json$_b(ctx);
        try {
            return JSON.parse(auth0_token_json) || false;
        }
        catch (err) {
            console.warn(err);
            auth0_token_json = null;
            setTimeout(() => auth0_token_json$._ = auth0_token_json);
        }
    }
    return auth0_token_json;
}));
export { in_auth0_token$_b as b__token__auth0__ };
//# sourceMappingURL=src/in_auth0_token$_b.js.map