export default function isValid(type, data) {
  if (type === 'required') return data.length;
  if (type === 'email') return isValidEmail(data);
}

/**
 * Check if string is a valid email
 *
 * @param {string} email
 *
 * @return {boolean}
 */
export const isValidEmail = (email) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email,
  );
};
