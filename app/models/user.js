var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  
  initialize: function() {
    console.log(this);
    this.on('creating', function(model, attrs, options) {
      console.log('Attributes: ', this.attributes.username);
      model.set('username', this.attributes.username);
      model.set('salt', 'abce3');
      model.set('password', bcrypt.hashSync(this.attributes.password) + model.get('salt'));
    });
  }
});

module.exports = User;