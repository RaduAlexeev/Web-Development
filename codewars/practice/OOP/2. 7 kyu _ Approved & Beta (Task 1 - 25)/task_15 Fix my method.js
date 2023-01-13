// https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript

function myFunction() {
    let myObject = {
        objProperty: "string",
        objMethod: function objMethod() {
            return myObject.objProperty
        } 
    }
    
    return myObject
}

console.log(myFunction().objMethod())