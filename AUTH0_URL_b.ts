import { _b } from '@ctx-core/object'
import { writable } from '@ctx-core/store'
export const AUTH0_URL_b = _b('AUTH0_URL', ()=>
	writable(process.env.AUTH0_URL))
export {
	AUTH0_URL_b as b__AUTH0_URL,
}
