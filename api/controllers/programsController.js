'use strict';

exports.get_all_programs = function(req, res) {
  res.json([
    {
      id: 'test1',
      begin: Date.parse('2020-06-12T12:00:00.000+00:00'),
      duration: 2*60*60*1000,
      title: 'Test 1',
      pkg: 'or',
      people: ['walker', 'gabca'],
    },
    {
      id: 'test2',
      begin: Date.parse('2020-06-14T09:15:00.000+00:00'),
      duration: 2*60*60*1000,
      title: 'Test 2',
      pkg: 'psy',
      people: [],
    },
    {
      id: 'test3',
      begin: Date.parse('2020-08-18T17:35:00.000+00:00'),
      duration: 2*60*60*1000,
      title: 'Test 3',
      pkg: 'hosp',
      people: ['verca'],
    },
    {
      id: 'invalid1',
      begin: Date.parse('2020-03-18T17:00:00.000+00:00'),
      duration: 2*60*60*1000,
      title: 'Invalid date',
    },
  ]);
};
