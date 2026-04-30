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

const longInputSubmission = {
  name: 'Mrunal QA Boundary '.repeat(12).trim(),
  email: 'boundary@example.com',
  phone: '4155550188',
  message: 'Boundary message '.repeat(40).trim()
};

module.exports = {
  edgeCaseSubmission,
  invalidEmailSubmission,
  longInputSubmission,
  validSubmission
};
