import { be_ } from 'ctx-core/be'
import { be_memo_pair_, memo_ } from 'ctx-core/rmemo'
import { auth0__token__json_, auth0__token__json__set } from '../auth0__token__json/index.js'
export const [
	auth0__in__token$_,
	auth0__in__token_,
] = be_memo_pair_(be_(ctx=>{
	let _auth0__token__json, in_auth0_token
	return memo_(()=>{
		if (auth0__token__json_(ctx) && typeof auth0__token__json_(ctx) === 'string') {
			try {
				if (_auth0__token__json === auth0__token__json_(ctx)) return in_auth0_token
				_auth0__token__json = auth0__token__json_(ctx)
				in_auth0_token = JSON.parse(_auth0__token__json)
				return in_auth0_token
			} catch (err) {
				queueMicrotask(()=>
					auth0__token__json__set(ctx, null))
				throw err
			}
		}
		return null
	})
}, { id: 'auth0__in__token' }))
export {
	auth0__in__token$_ as auth0__in__token__,
	auth0__in__token$_ as in_auth0_token__,
	auth0__in__token$_ as in_auth0_token$_,
}
