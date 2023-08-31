import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened__set } from '../auth0__opened/index.js'
import { auth0__userinfo_ } from '../auth0__userinfo/index.js'
export const [
	auth0__email$_,
	auth0__email_,
] = be_computed_pair_('auth0__email', ctx=>{
	let _auth0__email
	return computed_(()=>{
		const auth0__email = nullish__none_([auth0__userinfo_(ctx)],
			auth0__userinfo=>
				auth0__userinfo.email)
		if (auth0__email !== _auth0__email) {
			_auth0__email = auth0__email
			auth0__opened__set(ctx, null)
		}
		return auth0__email
	})
})
export {
	auth0__email$_ as auth0__email__,
	auth0__email$_ as auth0_email__,
	auth0__email$_ as auth0_email$_,
}
