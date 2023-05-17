// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = (req, res) => {
  res.json(200).json({ message: 'authUser' });
};

export { authUser };
