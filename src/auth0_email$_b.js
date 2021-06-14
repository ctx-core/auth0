import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_userinfo$_b } from './auth0_userinfo$_b';
const key = 'auth0_email$';
export const auth0_email$_b = be_(key, ctx => derived$(auth0_userinfo$_b(ctx), auth0_userinfo => {
    var _a;
    return (auth0_userinfo === null)
        ? null
        : (_a = auth0_userinfo) === null || _a === void 0 ? void 0 : _a.email;
}));
export { auth0_email$_b as b__email__auth0, auth0_email$_b as b__email, };
//# sourceMappingURL=src/auth0_email$_b.js.map