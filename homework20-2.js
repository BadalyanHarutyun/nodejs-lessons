const fs =require('fs');
const os =require('os');
let date =new Date();
fs.rename(os.userInfo().username+".txt",date.getMonth()+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".txt",(err)=>{if(err){console.log(err);}else{console.log("rename success");}});