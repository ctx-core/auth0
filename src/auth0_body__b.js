import { be_, assign } from '@ctx-core/object';
import { AUTH0_CLIENT_ID$_b } from './AUTH0_CLIENT_ID$_b';
export function auth0_body__b(ctx, key) {
    return be_(key, () => {
        const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx);
        return auth0_body_;
        function auth0_body_(data) {
            return assign({ client_id: AUTH0_CLIENT_ID$._ }, data);
        }
    })(ctx);
}
export { auth0_body__b as _auth0_body_b };
//# sourceMappingURL=src/auth0_body__b.js.map