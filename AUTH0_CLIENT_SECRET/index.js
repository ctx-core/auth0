import { import_meta_env_ } from 'ctx-core/env'
import { be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	AUTH0_CLIENT_SECRET$_,
	AUTH0_CLIENT_SECRET_,
	AUTH0_CLIENT_SECRET__set,
] = /** @type {be_sig_triple_T<string>} */ be_sig_triple_(()=>
	import_meta_env_().AUTH0_CLIENT_SECRET,
{ id: 'AUTH0_CLIENT_SECRET' })
export {
	AUTH0_CLIENT_SECRET$_ as AUTH0_CLIENT_SECRET__,
}
