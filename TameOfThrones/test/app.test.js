const assert = require("assert");
const path = require("path");
const decrypt = require("../helpers/decrypt");
const exist = require('../helpers/exist');
const initateTakeover = require('../geektrust');

describe("Deciphers the cipher",function(){
    it("Cipher Decryption Test",function(){
        let t1 = decrypt("ROZO","AIR");
        let t2 = decrypt("FDIXXSOKKOFBBMU","LAND");
        let t3 = decrypt("AYDSSNJFFJAWWHP", "AIR")
        assert.strictEqual(t1,"OLWL");
        assert.strictEqual(t2,"AYDSSNJFFJAWWHP");
        assert.notStrictEqual(t3,"UDRAUGONU");

    })
})

describe("Text Exist Check",function(){
    it("Test to check if emblem exists in message",function(){
        let t1 = exist("AYDSSNJFFJAWWHP","LAND");
        let t2 = exist("UDRAUGONU","FIRE");
        let t3 = exist("AJXGAMUTA","AIR");
        assert.strictEqual(t1,true);
        assert.strictEqual(t2,true);
        assert.notStrictEqual(t3,true);

    })
})

describe("Expected output receive",function(){
    it("Test to check if message is correct",function(done){
        initateTakeover(path.join(__dirname,"../testInput.txt"),(err,data)=>{
            assert.strictEqual(data,"SPACE LAND ICE FIRE");
            done();
        });
    })
})