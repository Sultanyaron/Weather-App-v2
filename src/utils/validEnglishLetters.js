export const validLetter = ( event ) => {
    const { charCode } = event ;
    if(charCode >= 60 && charCode <= 90){
        return true;
    };
    if(charCode >= 97 && charCode <= 122){
        return true;
    };
    if(charCode === 32){
        return true
    };
    return false;
};