import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const AUTH0_CLIENT_ID_b = _b('AUTH0_CLIENT_ID', ()=>
	writable(process.env.AUTH0_CLIENT_ID as string))
export type $AUTH0_CLIENT_ID_type = string
export type AUTH0_CLIENT_ID_type = Writable<$AUTH0_CLIENT_ID_type>
export {
	AUTH0_CLIENT_ID_b as b__AUTH0_CLIENT_ID
}
