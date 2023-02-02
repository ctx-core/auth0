import type { nullish } from '@ctx-core/function'
import type { auth0_password_confirmation_data_I } from '../_types'
import type { change_password_error_I } from '../validate_auth0_password_confirmation'
export declare function validate_auth0_change_password(
	data:auth0_password_confirmation_data_I
):change_password_error_I|nullish
