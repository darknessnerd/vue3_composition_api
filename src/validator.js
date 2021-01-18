export function required() {
  return {
    type: 'required',
  };
}
export function length(min, max) {
  return {
    type: 'length',
    options: {
      min,
      max,
    },
  };
}
/**
 *
 * @param value - valut to validate
 * @param validators - array
 */
export function validate(value, validators) {
  const result = {
    valid: true,
  };
  validators.every((validator) => {
    if (validator.type === 'required' && (!value || !value.length)) {
      result.valid = false;
      return false;
    }
    if (validator.type === 'length'
      && (value.length < validators.options.min || value.length > validators.options.max)) {
      result.valid = false;
      result.message = 'This field has invalid length';
      return false;
    }
    return true;
  });
  return result;
}
