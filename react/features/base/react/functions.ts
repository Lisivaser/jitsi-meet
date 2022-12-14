/**
 * Returns the field value in a platform generic way.
 *
 * @param {Object | string} fieldParameter - The parameter passed through the change event function.
 * @returns {string}
 */
export function getFieldValue(fieldParameter: { target: { value: string; }; } | string) {
    return typeof fieldParameter === 'string' ? fieldParameter : fieldParameter?.target?.value;
}
