function  onlyCharacter( str ) {
    if(typeof str !== 'string') {
        return 'Invalid';
    }
    str = str.trim();
    str = str.replaceAll(" ","");
    str = str.toUpperCase();
    return str;
}

//const res = onlyCharacter(true);
//console.log(res);



