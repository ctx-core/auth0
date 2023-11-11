import { AUTH0_CLIENT_ID_ } from '../AUTH0_CLIENT_ID/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {unknown}data
 * @return {import('../_types/index.js').auth0__client_id__body_T}
 */
export function auth0__body_(
	ctx,
	data
) {
	return { client_id: AUTH0_CLIENT_ID_(ctx), ...data }
}
export {
	auth0__body_ as auth0_body_,
}
