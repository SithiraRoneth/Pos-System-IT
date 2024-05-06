export default class CustomerModel{
    constructor(id,name,address,contact) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._contact = contact;
    }
    get id(){
        return this._id;
    }
    get Name(){
        return this._name;
    }
    get address(){
        return this._address;
    }
    get contact(){
        return this._contact;
    }

    set id(id){
        this._id = id;
    }
    set name(name){
        this._name = name;
    }
    set address(address){
        this._address = address;
    }
    set contact(contact){
        this._contact = contact;
    }
}