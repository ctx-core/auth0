import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened__ } from '../auth0_opened__/index.js'
/** @type {import('auth0_token_error__.d.ts').auth0_token_error__} */
export const auth0_token_error__ = be_('auth0_token_error__', ctx=>{
	const auth0_token_error_ = atom_(null)
	let auth0_opened
	auth0_opened__(ctx).subscribe($=>{
		if (auth0_opened !== $) {
			auth0_opened = $
			auth0_token_error_.$ = null
		}
	})
	return auth0_token_error_
})
export { auth0_token_error__ as auth0_token_error$_ }
