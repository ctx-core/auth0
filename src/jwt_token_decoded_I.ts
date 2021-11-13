import type { JwtPayload } from 'jsonwebtoken'
export interface jwt_token_decoded_I extends JwtPayload {
	user_id:string
	email:string
	sub?:string
}
