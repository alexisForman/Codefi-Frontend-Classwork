A class is a blueprint for objects

class User  {
    username = ''
    constructor(newUsername)    {
        this.userName = newUsername;
        console.log("instance was created!")
    }
printMyName()   {
    console.log(`My name is $(this.username)`)
}
}

let user = new User ("John123")

properties: DataTransfer
constructor: this is executed when an intsance gets created

methods define logic to manipulate Data

You can think of a class as a function with some syntactic sugar