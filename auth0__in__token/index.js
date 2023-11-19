import { be_computed_pair_ } from '@ctx-core/nanostores'
import { auth0__token__json_, auth0__token__json__set } from '../auth0__token__json/index.js'
export const [
	auth0__in__token$_,
	auth0__in__token_,
] = be_computed_pair_(ctx=>{
	const auth0__token__json = auth0__token__json_(ctx)
	if (auth0__token__json && typeof auth0__token__json === 'string') {
		try {
			return JSON.parse(auth0__token__json)
		} catch (err) {
			queueMicrotask(()=>
				auth0__token__json__set(ctx, null))
			throw err
		}
	}
	return null
})
	.config({ id: 'auth0__in__token' })
	.oninit((ctx, auth0__in__token$)=>{
		auth0__in__token$.$ = 1
	})
export {
	auth0__in__token$_ as auth0__in__token__,
	auth0__in__token$_ as in_auth0_token__,
	auth0__in__token$_ as in_auth0_token$_,
}
