import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'AUTH0_URL$';
export const AUTH0_URL$_b = be_(key, () => writable$(process.env.AUTH0_URL));
export { AUTH0_URL$_b as b__AUTH0_URL, };
//# sourceMappingURL=src/AUTH0_URL$_b.js.map