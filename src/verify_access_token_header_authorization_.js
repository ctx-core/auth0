import { throw_unauthorized } from '@ctx-core/error';
import { access_token_header_authorization_ } from './access_token_header_authorization_';
export function verify_access_token_header_authorization_(auth0_token) {
    const access_token_header_authorization = access_token_header_authorization_(auth0_token);
    if (!access_token_header_authorization) {
        throw_unauthorized({
            auth0_token,
            error_message: 'verify_access_token_header_authorization_'
        });
    }
    return access_token_header_authorization;
}
export { verify_access_token_header_authorization_ as _verify_access_token_header_authorization };
//# sourceMappingURL=src/verify_access_token_header_authorization_.js.map