import { throw_missing_env } from '@ctx-core/env';
export function validate_auth0_env() {
    if (!process.env.AUTH0_CLIENT_ID)
        throw_missing_env('AUTH0_CLIENT_ID');
    if (!process.env.AUTH0_DOMAIN)
        throw_missing_env('AUTH0_DOMAIN');
}
//# sourceMappingURL=src/validate_auth0_env.js.map