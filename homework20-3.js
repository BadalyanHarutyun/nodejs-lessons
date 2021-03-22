const fs= require('fs');

let str=fs.readFileSync('./homework3.txt','UTF-8');
let newstr=str.split(",");
newstr=newstr.join(" ");
fs.writeFile('replace.txt',newstr, (err) => {
    if (err) {
        throw err;
    }
    console.log("File is replace.");
}
)
fs.unlink('./homework3.txt',(err) => {
    if (err) {
        throw err;
    }
    console.log("File is deleted");
});