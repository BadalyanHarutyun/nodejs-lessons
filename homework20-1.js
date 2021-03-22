const os = require('os');
const fs = require('fs');
fs.writeFile(os.userInfo().username+".txt",JSON.stringify(os.userInfo()),function(err) {
	if(err){
		return console.log(err);
	}else{

		console.log("The file was saved!");
	}
	
})
