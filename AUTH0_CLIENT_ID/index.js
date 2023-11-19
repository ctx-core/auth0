import { import_meta_env_ } from '@ctx-core/env'
import { be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	AUTH0_CLIENT_ID$_,
	AUTH0_CLIENT_ID_,
	AUTH0_CLIENT_ID__set,
] = /** @type {be_atom_triple_T<string>} */ be_atom_triple_(()=>
	import_meta_env_().AUTH0_CLIENT_ID)
	.config({ id: 'AUTH0_CLIENT_ID' })
export {
	AUTH0_CLIENT_ID$_ as AUTH0_CLIENT_ID__,
}
