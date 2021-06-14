import { be_ } from '@ctx-core/object';
import { auth0_opened$_b } from './auth0_opened$_b';
const key = 'close_auth0';
export const close_auth0_b = be_(key, ctx => {
    const auth0_opened$ = auth0_opened$_b(ctx);
    return close_auth0;
    function close_auth0() {
        auth0_opened$._ = null;
    }
});
//# sourceMappingURL=src/close_auth0_b.js.map