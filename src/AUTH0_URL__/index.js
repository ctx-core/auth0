import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { AUTH0_URL } from '../AUTH0_URL/index.js'
import { import_meta_env_ } from '@ctx-core/env'
/** @type {typeof import('./index.d.ts').AUTH0_URL__} */
export const AUTH0_URL__ = be_('AUTH0_URL__',
	()=>
		atom_(import_meta_env_().AUTH0_URL || AUTH0_URL))
export { AUTH0_URL__ as AUTH0_URL$_ }
