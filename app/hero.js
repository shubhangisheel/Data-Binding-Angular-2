"use strict";
/**
 * Created by shubhangisheel on 2016-10-02.
 */
var Hero = (function () {
    function Hero(name, id) {
        this.name = name;
        this.id = id;
    }
    return Hero;
}());
exports.Hero = Hero;
/* 'public id:number' : This brief syntax does a lot:

 Declares a constructor parameter and its type.
 Declares a public property of the same name.
 Initializes that property with the corresponding argument when creating an instance of the class.

 We created a class because usually ngFor iterates of array of objects. PReviously we had array of strings defined directly
 in the component itself which is not a good practice. Now we are creating a class whose objects will become elements of
 array. Thus Hero is a class here with 2 properties: id and number.

 Note: export is there so that we can import that class in component and use it.
 */ 
//# sourceMappingURL=hero.js.map