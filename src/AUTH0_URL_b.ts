import { _b } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'AUTH0_URL'
export const AUTH0_URL_b = _b<auth0_Ctx, typeof key>(key, ()=>
	writable<$AUTH0_URL_T>(process.env.AUTH0_URL as $AUTH0_URL_T))
export type $AUTH0_URL_T = string
export interface AUTH0_URL_T extends Writable<$AUTH0_URL_T> {}
export {
	AUTH0_URL_b as b__AUTH0_URL,
}
