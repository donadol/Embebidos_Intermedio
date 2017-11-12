var Schema = {
  signals : {
    id : {type : 'increments', nullable: false, primary: true},
    type : {type : 'string', maxlength: 20, nullable: false},
    value2 : {type : 'string', maxlength: 20, nullable: false},
    //created_at: {type: 'dateTime', nullable: false}
    created_at: {type : 'string', maxlength: 20, nullable: false}
  },
  commands : {
    id: {type: 'increments', nullable: false, primary: true},
    text: {type: 'string', maxlength: 250, nullable: false},
	  //created_at: {type: 'dateTime', nullable: false}
	  created_at : {type : 'string', maxlength: 20, nullable: false}
  }
};

module.exports = Schema;