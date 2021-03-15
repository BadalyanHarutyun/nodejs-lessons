var fs=require('fs');

let str=fs.readFileSync("input.txt","UTF-8",(err,data)=>{
if(err){
 console.error(err);
    return;
}


})
let newstr="";
for(let i=0;i<str.length;i++){
if(str.charAt(i)==String.fromCharCode(32))
{
	newstr=newstr+"-"
}else{
	newstr+=str.charAt(i);
}
}
fs.writeFile('write.txt', newstr, function (err) { 
  if (err){
        console.log(err);
    }else{
    	console.log("Task is done");
    }
 
});