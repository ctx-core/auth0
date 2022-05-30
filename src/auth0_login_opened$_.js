import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_opened$_ } from './auth0_opened$_.js'
/** @type {import('./auth0_login_opened$_.d.ts').auth0_login_opened$_} */
export const auth0_login_opened$_ = be_('auth0_login_opened$', ctx=>
	computed_(auth0_opened$_(ctx),
		$=>!$ || $ === 'login'))
