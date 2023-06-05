import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__opened$_ } from '../auth0__opened$_/index.js'
import { auth0__userinfo$_ } from '../auth0__userinfo$_/index.js'
export const [
	auth0__email__,
	auth0__email_,
] = be_computed_pair_(ctx=>{
	const auth0__email_ = computed_(auth0__userinfo$_(ctx),
		$=>$ ? $?.email : null)
	let auth0_email
	auth0__email_.subscribe((_auth0_email)=>{
		if (auth0_email !== _auth0_email) {
			auth0_email = _auth0_email
			auth0__opened$_(ctx).$ = null
		}
	})
	return auth0__email_
})
export {
	auth0__email__ as auth0_email__,
	auth0__email__ as auth0_email$_,
}
