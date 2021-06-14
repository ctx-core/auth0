import { be_ } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { writable$ } from '@ctx-core/store';
const key = 'auth0_token_json$';
export const auth0_token_json$_b = be_(key, _ctx => {
    const auth_token_json$ = writable$((has_dom && localStorage.getItem(key)) || null);
    return auth_token_json$;
});
export { auth0_token_json$_b as b__json__token__auth0, };
//# sourceMappingURL=src/auth0_token_json$_b.js.map