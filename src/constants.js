// Shared constants - validation messages and form states
export const FORM_MESSAGES = {
  NAME_REQUIRED: 'Name is required.',
  EMAIL_REQUIRED: 'Email is required.',
  EMAIL_INVALID: 'Email is not valid.',
  SUBJECT_REQUIRED: 'Subject is required.',
  MESSAGE_MIN: 'Message must be at least 20 characters long.',
  SUCCESS: 'Your message has been sent successfully!',
  ERROR: 'Something went wrong. Please try again.',
  EMAIL_PATTERN: /^\S+@\S+\.\S+$/,
  MESSAGE_MIN_LENGTH: 20,
};

export const SUBMIT_STATES = {
  IDLE: 'idle',
  SUCCESS: 'success',
  ERROR: 'error',
};
