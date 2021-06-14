import { be_ } from '@ctx-core/object';
import { fetch } from '@ctx-core/fetch';
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b';
const key = 'post_auth0_dbconnections_signup';
export const post_auth0_dbconnections_signup_b = be_(key, ctx => {
    const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx);
    return post_auth0_dbconnections_signup;
    function post_auth0_dbconnections_signup(body) {
        return (fetch(`https://${AUTH0_DOMAIN$._}/dbconnections/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }));
    }
});
//# sourceMappingURL=src/post_auth0_dbconnections_signup_b.js.map