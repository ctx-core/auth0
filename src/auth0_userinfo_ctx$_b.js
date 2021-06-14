import { be_ } from '@ctx-core/object';
import { tup } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { auth0_userinfo$_b } from './auth0_userinfo$_b';
import { auth0_userinfo_auth0_token$_b } from './auth0_userinfo_auth0_token$_b';
const key = 'auth0_userinfo_ctx$';
export const auth0_userinfo_ctx$_b = be_(key, ctx => derived$(tup(auth0_userinfo$_b(ctx), auth0_userinfo_auth0_token$_b(ctx)), ([auth0_userinfo, auth0_userinfo_auth0_token]) => ({
    auth0_userinfo,
    auth0_userinfo_auth0_token,
})));
export { auth0_userinfo_ctx$_b as b__ctx__auth0_userinfo };
//# sourceMappingURL=src/auth0_userinfo_ctx$_b.js.map