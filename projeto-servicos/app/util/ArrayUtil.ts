

var array = [];

export default class ArrayUtil {
    private k: number;

    public object(id: number | string): object{
        return array.filter(function (object) {
            return object.id == id;
        })[0];
    }

    public setObject(id: number | string, val: string | number): void{
        array.splice(this.k, 1);
        this.isNotRepetion({id: id, val: val});
    }

    public toArray(){
        return array;
    }

    public clear(): void{
        array = [];
    }

    public isAttrsEmpty(attr: string): boolean{
        let increment = 0;
        for(let i = 0; i < array.length; i++){
            const arrayKeys = Object.keys(array[i]);
            for(let j = 0; j < arrayKeys.length; j++){
                if(arrayKeys[i] == attr){
                    if(array[i][attr] != ""){
                        increment++;
                    }
                }
            }
        }

        if(increment > 0){
            if(increment == array.length){
                return false;
            }
        }

        return true;
    }

    public isEmpty(): boolean{
        return array.length == 0;
    }

    public isNotRepetion(object): boolean | object{
        if(array.length == 0){
            array.push(object);
            return false;
        }
        for(let i = 0; i < array.length; i++){
            if(array[i].id == object.id){
                this.k = i;
                return true;
            }
        }
        array.push(object);
        return false;
    }
}
