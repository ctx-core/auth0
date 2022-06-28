import { type nullish } from '@ctx-core/function'
import type { signup_data_I } from '../_types'
import { type validate_auth0_email_error_T } from '../validate_auth0_email'
export declare function validate_auth0_signup(
	data:signup_data_I
):validate_auth0_email_error_T&{ password_confirmation?:string }|nullish
