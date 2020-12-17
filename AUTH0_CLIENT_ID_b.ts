import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const AUTH0_CLIENT_ID_b = _b('AUTH0_CLIENT_ID', ()=>
	writable(process.env.AUTH0_CLIENT_ID as string) as AUTH0_CLIENT_ID_type
)
export type $AUTH0_CLIENT_ID_type = string
export interface AUTH0_CLIENT_ID_type extends Writable<$AUTH0_CLIENT_ID_type> {}
export {
	AUTH0_CLIENT_ID_b as b__AUTH0_CLIENT_ID
}
