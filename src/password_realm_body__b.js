import { be_, assign } from '@ctx-core/object';
export function password_realm_body__b(ctx, key, auth0_body_fn) {
    return be_(key, () => {
        return password_realm_body_;
        function password_realm_body_(data) {
            const password_realm_body = auth0_body_fn(assign({
                grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
                realm: 'Username-Password-Authentication',
                connection: 'Username-Password-Authentication',
                data
            }));
            return password_realm_body;
        }
    })(ctx);
}
export { password_realm_body__b as _password_realm_body_b };
//# sourceMappingURL=src/password_realm_body__b.js.map