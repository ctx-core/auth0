import { validate_current_jwt } from '@ctx-core/jwt';
export function validate_auth0_token_current(auth0_token) {
    const id_token = auth0_token && auth0_token.id_token;
    validate_current_jwt(id_token);
}
//# sourceMappingURL=src/validate_auth0_token_current.js.map