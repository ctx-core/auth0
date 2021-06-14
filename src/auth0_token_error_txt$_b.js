import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { auth0_token_error$_b } from './auth0_token_error$_b';
const key = 'auth0_token_error_txt$';
export const auth0_token_error_txt$_b = be_(key, ctx => derived$(auth0_token_error$_b(ctx), auth0_token_error => auth0_token_error
    ? auth0_token_error.error_message || auth0_token_error.message
        ? auth0_token_error.error_message || auth0_token_error.message
        : auth0_token_error.error_description
            ? auth0_token_error.error_description
            : auth0_token_error.error
                ? auth0_token_error.error
                : ''
    : ''));
export { auth0_token_error_txt$_b as b__txt__error__token__auth0, };
//# sourceMappingURL=src/auth0_token_error_txt$_b.js.map