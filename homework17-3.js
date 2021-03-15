
let textname=(Math.floor(Math.random()*(89999999)+10000000));
var fs = require('fs');
var os= require('os');

fs.writeFile(textname+'.txt', JSON.stringify(os.cpus()), function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Write operation complete.');
});
global.console.log(os.cpus());