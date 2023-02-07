import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token__json__ } from '../auth0__token__json__/index.js'
/** @type {typeof import('./index.d.ts').auth0__in__token__} */
export const auth0__in__token__ = be_('auth0__in__token__', ctx=>{
	let auth0_token_json, in_auth0_token
	return computed_(auth0__token__json__(ctx), $=>{
		if ($ && typeof $ === 'string') {
			try {
				if (auth0_token_json === $) return in_auth0_token
				auth0_token_json = $
				in_auth0_token = JSON.parse(auth0_token_json)
				return in_auth0_token
			} catch (err) {
				queueMicrotask(()=>auth0__token__json__(ctx).$ = null)
				throw err
			}
		}
		return null
	})
})
export {
	auth0__in__token__ as in_auth0_token__,
	auth0__in__token__ as in_auth0_token$_,
}
