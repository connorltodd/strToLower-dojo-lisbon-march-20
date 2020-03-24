//function strToLower(str) {
    //const newString = str.toLowerCase();
    //return newString;
//}

//function strToLower(str) {
    //let array = [];

    //for (let i = 0; i < str.length; i++){
        //let newString = str.charCodeAt(i);
        //array.push(newString);
        //console.log(newString);
        //return newString;
    

    function strToLower(str) {
        let newStr = "";
        for(let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            console.log(code);
            if(code >= 65 && code <= 90) {
                code += 32;
            } newStr += String.fromCharCode(code);
            
        }
        console.log(newStr);
        return newStr;
    }
    
    



strToLower("HELLo WORLD");

module.exports = strToLower;