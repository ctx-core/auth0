import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { be_ } from 'ctx-core/all'
import { auth0__opened__set } from '../auth0__opened/index.js'
import { auth0__userinfo$_ } from '../auth0__userinfo/index.js'
export const [
	auth0__email$_,
	auth0__email_,
] = be_computed_pair_(be_(ctx=>{
	let auth0__email$ = computed_(auth0__userinfo$_(ctx),
		auth0__userinfo=>auth0__userinfo.email)
	let _auth0__email
	auth0__email$.subscribe(auth0__email=>{
		if (auth0__email !== _auth0__email) {
			_auth0__email = auth0__email
			auth0__opened__set(ctx, null)
		}
	})
	return auth0__email$
}, { id: 'auth0__email' }))
export {
	auth0__email$_ as auth0__email__,
	auth0__email$_ as auth0_email__,
	auth0__email$_ as auth0_email$_,
}
