'use strict';

module.exports = function(app) {
	var programs = require('../controllers/programsController.js');

	app.route('/programs')
		.get(programs.get_all_programs);
};
