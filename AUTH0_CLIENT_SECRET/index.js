import { import_meta_env_ } from '@ctx-core/env'
import { be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	AUTH0_CLIENT_SECRET$_,
	AUTH0_CLIENT_SECRET_,
	AUTH0_CLIENT_SECRET__set,
] = /** @type {be_atom_triple_T<string>} */ be_atom_triple_(()=>
	import_meta_env_().AUTH0_CLIENT_SECRET,
{ id: 'AUTH0_CLIENT_SECRET' })
export {
	AUTH0_CLIENT_SECRET$_ as AUTH0_CLIENT_SECRET__,
}
