var Schema = {
  signal : {
    id : {type : 'increments', nullable: false, primary: true},
    value1 : {type : 'string', maxlength: 20, nullable: false},
    value2 : {type : 'string', maxlength: 20, nullable: false},
	created_at: {type: 'dateTime', nullable: false}
  },
  command: {
    id: {type: 'increments', nullable: false, primary: true},
    text: {type: 'string', maxlength: 250, nullable: false},
	created_at: {type: 'dateTime', nullable: false}
  }
};

module.exports = Schema;