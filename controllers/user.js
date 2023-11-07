const User = require("../models/user");

module.exports = {
  index: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },
  store: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "data berhasil ditambah",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "data berhasil didapat berdasarkan id",
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },
  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "data berhasil dihapus",
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },
};
