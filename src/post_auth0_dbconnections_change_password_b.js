import { be_ } from '@ctx-core/object';
import { fetch } from '@ctx-core/fetch';
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b';
const key = 'post_auth0_dbconnections_change_password';
export const post_auth0_dbconnections_change_password_b = be_(key, ctx => {
    const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx);
    return post_auth0_dbconnections_change_password;
    function post_auth0_dbconnections_change_password(body) {
        const promise = fetch(`https://${AUTH0_DOMAIN$._}/dbconnections/change_password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return promise;
    }
});
//# sourceMappingURL=src/post_auth0_dbconnections_change_password_b.js.map