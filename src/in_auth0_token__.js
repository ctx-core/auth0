import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_json__ } from './auth0_token_json__.js'
/** @type {import('./in_auth0_token__.d.ts').in_auth0_token__} */
export const in_auth0_token__ = be_('in_auth0_token__', ctx=>{
	let auth0_token_json, in_auth0_token
	const in_auth0_token_ = computed_(auth0_token_json__(ctx), $=>{
		if ($ && typeof $ === 'string') {
			try {
				if (auth0_token_json === $) return in_auth0_token
				auth0_token_json = $
				in_auth0_token = JSON.parse(auth0_token_json)
				return in_auth0_token
			} catch (err) {
				queueMicrotask(()=>auth0_token_json__(ctx).$ = null)
				throw err
			}
		}
		return null
	})
	return in_auth0_token_
})
export { in_auth0_token__ as in_auth0_token$_ }
