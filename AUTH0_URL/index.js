import { import_meta_env_ } from '@ctx-core/env'
import { be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const AUTH0_URL = 'https://cdn.auth0.com/js/auth0/9.23.3/auth0.min.js'
export const [
	AUTH0_URL$_,
	AUTH0_URL_,
	AUTH0_URL__set,
] = /** @type {be_atom_triple_T<string>} */ be_atom_triple_(()=>
	import_meta_env_().AUTH0_URL || AUTH0_URL)
	.config({ id: 'AUTH0_URL' })
export { AUTH0_URL$_ as AUTH0_URL__ }
