import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
export declare const auth0_email_b: auth0_email_b_type;
export declare type $auth0_email_type = Token | false;
export interface auth0_email_type extends Readable<$auth0_email_type> {
}
export interface auth0_email_b_type extends B<auth0_email_type> {
}
export { auth0_email_b as b__email__auth0, auth0_email_b as b__email, };
