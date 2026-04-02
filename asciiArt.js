const figlet = require('figlet');


const {argv} = require('node:process');

figlet(argv[2], function (err, data){
	if (err){
		console.log("Something went wrong");
		return;
	}
	console.log(data);
	
});
