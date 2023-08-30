import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	AUTH0_CLIENT_ID$_,
	AUTH0_CLIENT_ID_,
	AUTH0_CLIENT_ID__set,
] = be_atom_triple_('AUTH0_CLIENT_ID', ()=>
	atom_(import_meta_env_().AUTH0_CLIENT_ID))
export {
	AUTH0_CLIENT_ID$_ as AUTH0_CLIENT_ID__,
}
