let EMBLEM_TEXT_MAPPINGS = require('./mappings');

module.exports = (cipherText,land)=>{
    if(!EMBLEM_TEXT_MAPPINGS[land] || !cipherText){
        return "Land or Cipher Text Invalid";
    }
    let plainText = "";
    let algo = EMBLEM_TEXT_MAPPINGS[land].length;
    for(let i = 0; i< cipherText.length;i++){
        let intialCharCode = cipherText.charCodeAt(i);
        let finalCharCode = intialCharCode - algo;
        if(finalCharCode < 65){
            finalCharCode = 90 - (65 - finalCharCode - 1)
        }
        plainText += String.fromCharCode(finalCharCode);
    }
    return plainText;
}