/** @type {typeof import('./index.d.ts').user_id_} */
export const user_id_ = jwt_token_decoded=>
	jwt_token_decoded && (jwt_token_decoded.user_id || jwt_token_decoded.sub)
export { user_id_ as _user_id }
