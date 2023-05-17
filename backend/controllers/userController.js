import asyncHandler from 'express-async-handler';
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.json(200).json({ message: 'authUser' });
});

export { authUser };
