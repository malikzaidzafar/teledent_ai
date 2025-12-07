const { testUserService } = require('../services/user.service.js');

async function testUserController(req, res) {
  try {
    const user = await testUserService();
    res.status(200).json({
      message: 'User service working',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error: error.message
    });
  }
}

module.exports = {
  testUserController
};
