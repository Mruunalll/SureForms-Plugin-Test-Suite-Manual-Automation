const validSubmission = {
  name: 'Mrunal QA',
  email: 'test@example.com',
  phone: '4155552671',
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
  phone: '4155550199',
  message: 'Long message with symbols: !@#$%^&*() and unicode-ready text.'
};

module.exports = {
  edgeCaseSubmission,
  invalidEmailSubmission,
  validSubmission
};
