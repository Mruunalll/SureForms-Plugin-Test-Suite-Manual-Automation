const validSubmission = {
  name: 'Mrunal QA',
  email: 'test@example.com',
  phone: '9876543210',
  message: 'This is a Playwright test submission.'
};

const invalidEmailSubmission = {
  name: 'Mrunal QA',
  email: 'invalid-email',
  message: 'Testing invalid email validation.'
};

const edgeCaseSubmission = {
  name: 'Mrunal QA Special !@#$%',
  email: 'edge.case@example.com',
  phone: '9999999999',
  message: 'Long message with symbols: !@#$%^&*() and unicode-ready text.'
};

module.exports = {
  edgeCaseSubmission,
  invalidEmailSubmission,
  validSubmission
};
