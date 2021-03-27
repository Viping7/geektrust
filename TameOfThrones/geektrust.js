const fs = require("fs");
const readline = require('readline');
const decrypt = require('./helpers/decrypt');
const exist = require('./helpers/exist');
const filename = process.argv[2];

const initateTakeover = (filePath,callback) => {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        console: false
    });
    let finalOutPut = "SPACE";
    let allieCount = 0;
    
    readInterface.on('line',function(line){
        line = line.toUpperCase();
        let msgArr = line.split(' ');
        let decryptedMsg = decrypt(msgArr[1],msgArr[0]);
        if(exist(decryptedMsg,msgArr[0])){
            allieCount += 1
            finalOutPut +=` ${msgArr[0]}`;
        }
    })
    
    readInterface.on('close',function(line){
        if(allieCount >=3){
            callback(null,finalOutPut);
        }else{
            callback(null,"NONE");
        }
    })
}
if(filename){
    initateTakeover(filename,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
}else{
    console.log("File missing please check");
}

module.exports = initateTakeover;