const fs=require('fs');
const web=['html','css','js','txt'];
fs.mkdir('./web',(err)=>{if(err){console.log(err);}});
for(let i=0;i<web.length;i++){
	fs.writeFile('./web/'+web[i]+"."+web[i],"hi",(err,data)=>{if(err){console.log(err);}});
}