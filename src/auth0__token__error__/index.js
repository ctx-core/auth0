import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__opened__ } from '../auth0__opened__/index.js'
/** @type {typeof import('index.d.ts').auth0__token__error__} */
export const auth0__token__error__ = be_('auth0__token__error__', ctx=>{
	const auth0__token__error_ = atom_(null)
	let auth0_opened
	auth0__opened__(ctx).subscribe($=>{
		if (auth0_opened !== $) {
			auth0_opened = $
			auth0__token__error_.$ = null
		}
	})
	return auth0__token__error_
})
export {
	auth0__token__error__ as auth0_token_error__,
	auth0__token__error__ as auth0_token_error$_,
}
