import { be_, assign } from '@ctx-core/object';
import { fetch } from '@ctx-core/fetch';
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b';
const key = 'post_auth0_passwordless_start';
export const post_auth0_passwordless_start_b = be_(key, ctx => {
    const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx);
    return post_auth0_passwordless_start;
    function post_auth0_passwordless_start(body) {
        const { hostname, pathname } = window.location;
        const redirect_uri = `https://${hostname}/auth?redirect_url=${pathname}`;
        assign(body, { authParams: { redirect_uri } });
        const AUTH0_DOMAIN = AUTH0_DOMAIN$._;
        return (fetch(`https://${AUTH0_DOMAIN}/passwordless/start`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }));
    }
});
//# sourceMappingURL=src/post_auth0_passwordless_start_b.js.map