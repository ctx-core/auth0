import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
export const AUTH0_URL = 'https://cdn.auth0.com/js/auth0/9.23.1/auth0.min.js'
export const [
	AUTH0_URL$_,
	AUTH0_URL_,
	AUTH0_URL__set,
] = be_atom_triple_('AUTH0_URL', ()=>
	atom_(import_meta_env_().AUTH0_URL || AUTH0_URL))
export { AUTH0_URL$_ as AUTH0_URL__ }
