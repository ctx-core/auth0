import { assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_ } from '../AUTH0_CLIENT_ID__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {any}data
 * @return {import('../_types').auth0__client_id__body_T}
 */
export function auth0__body_(ctx, data) {
	return assign({ client_id: AUTH0_CLIENT_ID_(ctx) }, data)
}
export {
	auth0__body_ as auth0_body_,
}
