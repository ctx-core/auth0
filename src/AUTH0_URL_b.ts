import { _b } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
const key = 'AUTH0_URL'
export interface AUTH0_URL_Ctx {
	AUTH0_URL?:AUTH0_URL_T
}
export const AUTH0_URL_b = _b<AUTH0_URL_Ctx, typeof key>(key, ()=>
	writable<$AUTH0_URL_T>(process.env.AUTH0_URL as $AUTH0_URL_T))
export type $AUTH0_URL_T = string
export interface AUTH0_URL_T extends Writable<$AUTH0_URL_T> {}
export {
	AUTH0_URL_b as b__AUTH0_URL,
}
