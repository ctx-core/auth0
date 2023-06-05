import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__token__json$_ } from '../auth0__token__json$_/index.js'
export const [
	auth0__in__token$_,
	auth0__in__token_,
] = be_computed_pair_(ctx=>{
	let auth0__token__json, in_auth0_token
	return computed_(auth0__token__json$_(ctx), $=>{
		if ($ && typeof $ === 'string') {
			try {
				if (auth0__token__json === $) return in_auth0_token
				auth0__token__json = $
				in_auth0_token = JSON.parse(auth0__token__json)
				return in_auth0_token
			} catch (err) {
				queueMicrotask(()=>auth0__token__json$_(ctx).$ = null)
				throw err
			}
		}
		return null
	})
})
export {
	auth0__in__token$_ as auth0__in__token__,
	auth0__in__token$_ as in_auth0_token__,
	auth0__in__token$_ as in_auth0_token$_,
}
