import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	AUTH0_CLIENT_SECRET$_,
	AUTH0_CLIENT_SECRET_,
	AUTH0_CLIENT_SECRET__set,
] = be_atom_triple_('AUTH0_CLIENT_SECRET', ()=>
	atom_(import_meta_env_().AUTH0_CLIENT_SECRET))
export {
	AUTH0_CLIENT_SECRET$_ as AUTH0_CLIENT_SECRET__,
}
