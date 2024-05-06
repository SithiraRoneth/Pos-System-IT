export default class ItemModel{
    constructor(name,description,qty,price) {
        this._name = name;
        this._description = description;
        this._qty = qty;
        this._price = price;
    }
    get name(){
        return this._name;
    }
    get description(){
        return this._description;
    }
    get qty(){
        return this._qty;
    }
    get price(){
        return this._price;
    }
    set name(name){
        this._name = name;
    }
    set description(description){
        this._description = description;
    }
    set price(price){
        this._price = price;
    }

}