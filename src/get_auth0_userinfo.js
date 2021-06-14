import { fetch } from '@ctx-core/fetch';
import { verify_access_token_header_authorization_ } from './verify_access_token_header_authorization_';
export function get_auth0_userinfo(params) {
    const { auth0_token, AUTH0_DOMAIN, } = params;
    const authorization = verify_access_token_header_authorization_(auth0_token);
    return (fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
        headers: {
            'Content-Type': 'application/json',
            authorization,
        }
    }));
}
//# sourceMappingURL=src/get_auth0_userinfo.js.map