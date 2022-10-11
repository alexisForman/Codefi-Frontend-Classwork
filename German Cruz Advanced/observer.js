export default class Observable    {
    subscribers = [];

    constructor()   {}

    subscribe(fn)   {
        this.subscribers.push(fn);
    }
   
    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter((subscriber) => {
            return subscriber != fn;
        });
    }

    broadcast(value)    {
        this.subscribers.forEach((sub) => {
            sub(value);
        });
    }
}

let celebrityObsv = new Observable();
celebrityObsv.subscribe((event)  =>{
    console.log(`I am going to $(event).`);
})

celebrityObsv.subscribe(event)=>{
    console.log(`I am not going to $(event).`);

}