import { be_ } from '@ctx-core/object';
import { fetch } from '@ctx-core/fetch';
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b';
const key = 'get_jwks_json';
export const get_jwks_json_b = be_(key, ctx => {
    const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx);
    return get_jwks_json;
    async function get_jwks_json() {
        return fetch(`https://${AUTH0_DOMAIN$._}/.well-known/jwks.json`);
    }
});
//# sourceMappingURL=src/get_jwks_json_b.js.map