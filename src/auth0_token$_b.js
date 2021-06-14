import { be_, assign } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { derived$, subscribe } from '@ctx-core/store';
import { jwt_token_exp_ } from '@ctx-core/jwt';
import { sync_localStorage } from '@ctx-core/local-storage';
import { auth0_token_json$_b } from './auth0_token_json$_b';
import { in_auth0_token$_b } from './in_auth0_token$_b';
import { validate_auth0_token_current } from './validate_auth0_token_current';
import { clear_auth0_token_b } from './clear_auth0_token_b';
import { logout_auth0_token_b } from './logout_auth0_token_b';
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b';
import { set_auth0_token_b } from './set_auth0_token_b';
const key = 'auth0_token$';
export const auth0_token$_b = be_(key, ctx => {
    const auth0_token_json = auth0_token_json$_b(ctx);
    const clear_auth0_token = clear_auth0_token_b(ctx);
    const logout_auth0_token = logout_auth0_token_b(ctx);
    const logout_auth0_token_error = logout_auth0_token_error_b(ctx);
    const set_auth0_token = set_auth0_token_b(ctx);
    const auth0_token$ = derived$(in_auth0_token$_b(ctx), ($auth0_token) => ($auth0_token && $auth0_token.error)
        ? false
        : $auth0_token);
    if (has_dom) {
        subscribe(auth0_token_json, $auth0_token_json => {
            if ($auth0_token_json == null) {
                clear_auth0_token();
                return;
            }
            sync_localStorage('$auth0_token_json', $auth0_token_json);
            if ($auth0_token_json) {
                schedule_auth0_token_current_validate();
            }
        });
    }
    if (has_dom) {
        window.addEventListener('storage', set_auth0_token_json);
    }
    return assign(auth0_token$, {
        set_auth0_token,
        clear_auth0_token,
        logout_auth0_token,
        schedule_auth0_token_current_validate,
        set_auth0_token_json,
    });
    function schedule_auth0_token_current_validate() {
        const auth0_token = auth0_token$._;
        const id_token = auth0_token === null || auth0_token === void 0 ? void 0 : auth0_token.id_token;
        if (!id_token)
            return;
        const jwt_token_exp = jwt_token_exp_(id_token);
        const now = Date.now();
        const validate_millis = now - jwt_token_exp;
        setTimeout(async () => {
            try {
                validate_auth0_token_current(auth0_token);
            }
            catch (error) {
                if (error.type === 'bad_credentials') {
                    console.error(error);
                    logout_auth0_token_error(error);
                    return;
                }
                throw error;
            }
        }, validate_millis);
    }
    function set_auth0_token_json(event) {
        if (event.key === 'auth0_token_json') {
            auth0_token_json.set(event.newValue);
        }
    }
});
export { auth0_token$_b as b__token__auth0 };
//# sourceMappingURL=src/auth0_token$_b.js.map