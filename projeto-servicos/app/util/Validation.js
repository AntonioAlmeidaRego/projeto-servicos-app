import ArrayUtil from './ArrayUtil';


export default class Validation {

    constructor() {
        this._arrayUtil = new ArrayUtil();
    }

    get toArray(){
        return this._arrayUtil.toArray();
    }

    setValInput(id: number | string, val: number | string){
        if(this._arrayUtil.isNotRepetion({id: id, val: val})){
            this._arrayUtil.setObject(id, val);
        }
    }

    isEmail(str: string): boolean{
        let array = str.split("");
        for(let i = 0;i< array.length;i++){
            if(array[i] == "@"){
                let res = str.substring(i, str.length);
                if((res == "@hotmail.com") || (res == "@gmail.com") || (res == "@outlook.com")){
                    return true;
                }
            }
        }
        return false;
    }
}
