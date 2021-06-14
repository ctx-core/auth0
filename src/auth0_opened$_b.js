import { be_, assign } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { subscribe, writable$ } from '@ctx-core/store';
import { auth0_email$_b } from './auth0_email$_b';
const key = 'auth0_opened$';
export const auth0_opened$_b = be_(key, ctx => {
    const auth0_email$ = auth0_email$_b(ctx);
    const auth0_opened$ = assign(writable$(undefined), {
        open_auth0_change_password,
        reload_auth0_opened,
    });
    let auth0_opened_reload_unsubscribe;
    if (has_dom) {
        reload_auth0_opened();
    }
    return auth0_opened$;
    function open_auth0_change_password() {
        auth0_opened$.set('change_password');
    }
    function reload_auth0_opened() {
        if (!auth0_opened_reload_unsubscribe) {
            auth0_opened_reload_unsubscribe =
                subscribe(auth0_email$, reload_auth0_opened);
            return;
        }
        auth0_opened$.set(null);
    }
});
export { auth0_opened$_b as b__opened__auth0, };
//# sourceMappingURL=src/auth0_opened$_b.js.map