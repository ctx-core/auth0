import { be_, assign } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
import { auth0_token$_b } from './auth0_token$_b';
const key = 'auth0_logout_msg$';
export const auth0_logout_msg$_b = be_(key, ctx => {
    const auth0_logout_msg$ = writable$(undefined);
    const { logout_auth0_token } = auth0_token$_b(ctx);
    return assign(auth0_logout_msg$, {
        auth0_logout,
    });
    function auth0_logout() {
        logout_auth0_token();
        auth0_logout_msg$.set({
            time: Date.now(),
        });
    }
});
export { auth0_logout_msg$_b as b__msg__auth0_logout, };
//# sourceMappingURL=src/auth0_logout_msg$_b.js.map