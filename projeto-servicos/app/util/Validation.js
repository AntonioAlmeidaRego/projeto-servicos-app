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
}
