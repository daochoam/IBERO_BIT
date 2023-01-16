/*
const fs = require('fs');

let data = fs.readFileSync('./articles.json');
console.log(data);
let data_ = JSON.parse(data);
console.log(data_);

*/
const fs = require('fs');

const jsons = [];
async function loadJSONS() {
    jsons.push(JSON.parse(fs.readFileSync("../datas/menu.json",'utf-8')));
    jsons.push(JSON.parse(fs.readFileSync("../datas/blades.json",'utf-8')));
    //jsons.push(await fetch("url_hacia_tus_json/json2.json").then(res => res.json()));
    //console.log(jsons);
    return jsons
}

const top=loadJSONS();
console.log(top.menu);
