import { be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { auth0__token__json$_, auth0__token__json__set } from '../auth0__token__json/index.js'
export const [
	auth0__in__token$_,
	auth0__in__token_,
] = be_computed_pair_(ctx=>{
	let _auth0__token__json, in_auth0_token
	return computed_(auth0__token__json$_(ctx),
		auth0__token__json=>{
			if (auth0__token__json && typeof auth0__token__json === 'string') {
				try {
					if (_auth0__token__json === auth0__token__json) return in_auth0_token
					_auth0__token__json = auth0__token__json
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
})
export {
	auth0__in__token$_ as auth0__in__token__,
	auth0__in__token$_ as in_auth0_token__,
	auth0__in__token$_ as in_auth0_token$_,
}
