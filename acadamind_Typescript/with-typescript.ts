function add(a: number, b: number)  {
    return a+b;
}

const result = add(2, 5);

console.log(result);

//If I compile the TS to JS without first saving the file, it makes an empty .js file. 
//If I then save the work, or add on new work, I can compile again and the changes from
//the ts file will be pushed into the originally created .js file. A new .js file isnt
//created at every compilation.

//To open the node.js terminal I can either got to or "control `"

//Typescript needs to be intalled into each project I want to use it in. It isnt enough
//to just make a typescript file. To install typescript type npm intall typescript into
//the terminal. To compile typescript to javascript type npx tsc into the terminal.