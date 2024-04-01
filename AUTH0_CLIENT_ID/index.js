import { import_meta_env_ } from 'ctx-core/env'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	AUTH0_CLIENT_ID$_,
	AUTH0_CLIENT_ID_,
	AUTH0_CLIENT_ID__set,
] = /** @type {be_sig_triple_T<string>} */
id_be_sig_triple_(
	'AUTH0_CLIENT_ID',
	()=>
		import_meta_env_().AUTH0_CLIENT_ID)
export {
	AUTH0_CLIENT_ID$_ as AUTH0_CLIENT_ID__,
}
