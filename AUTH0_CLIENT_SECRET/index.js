import { import_meta_env_ } from 'ctx-core/env'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	AUTH0_CLIENT_SECRET$_,
	AUTH0_CLIENT_SECRET_,
	AUTH0_CLIENT_SECRET__set,
] = /** @type {be_sig_triple_T<string>} */
id_be_sig_triple_(
	'AUTH0_CLIENT_SECRET',
	()=>
		import_meta_env_().AUTH0_CLIENT_SECRET)
export {
	AUTH0_CLIENT_SECRET$_ as AUTH0_CLIENT_SECRET__,
}
