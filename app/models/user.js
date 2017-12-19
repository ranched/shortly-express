var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      model.set('username', this.attributes.username);
      model.set('salt', 'abce3');
      model.set('password', bcrypt.hashSync(this.attributes.password) + model.get('salt'));
    });
  }
});

module.exports = User;