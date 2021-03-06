'use strict';

var mongoose = require('mongoose'),
  Pkg = mongoose.model('Pkg');

exports.get_all_pkgs = function(req, res) {
  Pkg.find({}, function(err, pkgs) {
    if (err)
      res.send(err);
    res.json(pkgs);
  });
};

exports.create_pkg = function(req, res) {
  var new_pkg = new Pkg(req.body);
  new_pkg.save(function(err, pkg) {
    if (err)
      res.send(err);
    res.json(pkg);
  });
};

exports.delete_pkg = function(req, res) {
  Pkg.remove({ _id: req.params.id }, function(err, pkg) {
    if (err)
      res.send(err);
    res.json({ message: 'Package successfully deleted' });
  });
};

exports.get_pkg = function(req, res) {
  Pkg.findById(req.params.id, function(err, pkg) {
    if (err)
      res.send(err);
    res.json(pkg);
  });
};

exports.update_pkg = function(req, res) {
  Pkg.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, pkg) {
    if (err)
      res.send(err);
    res.json(pkg);
  });
};
