import { nullish__check_ } from '@ctx-core/function'
import { atom_, be_computed_pair_, computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__userinfo__response_pair$_ } from '../auth0__userinfo__response_pair/index.js'
const override__auth0__userinfo$_ = be_(()=>
	atom_())
export const [
	auth0__userinfo$_,
	auth0__userinfo_,
] = be_computed_pair_(ctx=>
	computed_([
		override__auth0__userinfo$_(ctx),
		auth0__userinfo__response_pair$_(ctx)
	], (
		override__auth0__userinfo,
		auth0__userinfo__response_pair
	)=>
		override__auth0__userinfo !== undefined
		? override__auth0__userinfo
		: nullish__check_([auth0__userinfo__response_pair], ()=>{
			const [payload] = auth0__userinfo__response_pair
			return (
				typeof payload === 'string' || 'error' in payload
				? null
				: payload)
		})))
export function auth0__userinfo__set(ctx, auth0__userinfo) {
	override__auth0__userinfo$_(ctx).$ = auth0__userinfo
}
export {
	auth0__userinfo$_ as auth0__userinfo__,
	auth0__userinfo$_ as auth0_userinfo__,
	auth0__userinfo$_ as auth0_userinfo$_,
}
