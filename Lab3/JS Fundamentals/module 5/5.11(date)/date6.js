function getSeconds(){

let date = new Date();

date.setHours(0,0,0,0);
return Math.round(Date.now()-date.getTime()/1000);


}
getSeconds();