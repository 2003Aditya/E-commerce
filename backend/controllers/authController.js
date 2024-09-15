const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/jwtConfig');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn });

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });

  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: 'invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn });
    res.json({ token, user, message: `welcome ${user.username}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
