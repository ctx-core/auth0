import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_json$_ } from './auth0_token_json$_.js'
/** @type {import('./in_auth0_token$_.d.ts').in_auth0_token$_} */
export const in_auth0_token$_ = be_('in_auth0_token$', ctx=>{
	let auth0_token_json, in_auth0_token
	const in_auth0_token$ = computed_(auth0_token_json$_(ctx), $=>{
		if ($ && typeof $ === 'string') {
			try {
				if (auth0_token_json === $) return in_auth0_token
				auth0_token_json = $
				in_auth0_token = JSON.parse(auth0_token_json)
				return in_auth0_token
			} catch (err) {
				queueMicrotask(()=>auth0_token_json$_(ctx).$ = null)
				throw err
			}
		}
		return null
	})
	return in_auth0_token$
})
