import { be_ } from 'ctx-core/be'
import { be_memo_pair_, memo_, nullish__none_ } from 'ctx-core/rmemo'
import { auth0__opened__set } from '../auth0__opened/index.js'
import { auth0__userinfo_ } from '../auth0__userinfo/index.js'
export const [
	auth0__email$_,
	auth0__email_,
] =
	be_memo_pair_(
		ctx=>
			nullish__none_([auth0__userinfo_(ctx)],
				auth0__userinfo=>
					auth0__userinfo.email),
		{ id: 'auth0__email' }
	).add((
		ctx,
		auth0__email$,
		prev_auth0__email
	)=>{
		const auth0__email = auth0__email$._
		if (auth0__email !== prev_auth0__email) {
			auth0__opened__set(ctx, null)
		}
		return auth0__email
	})
export {
	auth0__email$_ as auth0__email__,
	auth0__email$_ as auth0_email__,
	auth0__email$_ as auth0_email$_,
}
