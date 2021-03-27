let EMBLEM_TEXT_MAPPINGS = require('./mappings');

module.exports = (text,land) => {
    let emblem = EMBLEM_TEXT_MAPPINGS[land];

    if(!emblem){
        console.log("Land is Invalid");
        return false;
    }
    return emblem.split('').every((l)=>{
        if(text.indexOf(l) > -1){
            text.replace(l,'');
            return true;
        }
    })
}