import { import_meta_env_ } from 'ctx-core/env'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	AUTH0_DOMAIN$_,
	AUTH0_DOMAIN_,
	AUTH0_DOMAIN__set,
] = /** @type {be_sig_triple_T<string>} */
id_be_sig_triple_(
	'AUTH0_DOMAIN',
	()=>
		import_meta_env_().AUTH0_DOMAIN)
export { AUTH0_DOMAIN$_ as AUTH0_DOMAIN__ }
