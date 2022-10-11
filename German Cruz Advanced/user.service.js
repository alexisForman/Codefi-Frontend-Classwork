import Observable from "./observer";

class UserService(
    user = {
        username: ''
    }
    userObsv;

    constructor(username)   {
        this.user.username = username;
        this.userObsv = new Observable();
    }

    next(data)  {
        this.userObsv.broadcast(data)
    }
)

export let userServuce = new UserService('John123')