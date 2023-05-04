import { import_meta_env_ } from '@ctx-core/env'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	AUTH0_CLIENT_ID__,
	AUTH0_CLIENT_ID_,
	AUTH0_CLIENT_ID__set,
] = be_atom_triple_(()=>
	atom_(import_meta_env_().AUTH0_CLIENT_ID))
export { AUTH0_CLIENT_ID__ as AUTH0_CLIENT_ID$_ }
