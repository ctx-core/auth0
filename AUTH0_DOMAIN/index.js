import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	AUTH0_DOMAIN$_,
	AUTH0_DOMAIN_,
	AUTH0_DOMAIN__set,
] = be_atom_triple_('AUTH0_DOMAIN', ()=>
	atom_(import_meta_env_().AUTH0_DOMAIN))
export { AUTH0_DOMAIN$_ as AUTH0_DOMAIN__ }
