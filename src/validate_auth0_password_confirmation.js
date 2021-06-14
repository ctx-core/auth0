export function validate_auth0_password_confirmation(data) {
    const { password, password_confirmation } = data;
    const change_password_error = {};
    let has_errors;
    if (password != password_confirmation) {
        change_password_error.password_confirmation = 'Your passwords do not match.';
        has_errors = true;
    }
    return has_errors && change_password_error;
}
//# sourceMappingURL=src/validate_auth0_password_confirmation.js.map