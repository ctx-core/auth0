import { import_meta_env_ } from '@ctx-core/env'
import { be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	AUTH0_DOMAIN$_,
	AUTH0_DOMAIN_,
	AUTH0_DOMAIN__set,
] = /** @type {be_atom_triple_T<string>} */ be_atom_triple_(()=>
	import_meta_env_().AUTH0_DOMAIN,
{ id: 'AUTH0_DOMAIN' })
export { AUTH0_DOMAIN$_ as AUTH0_DOMAIN__ }
