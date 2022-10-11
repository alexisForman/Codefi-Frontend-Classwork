import { userService } from "../user/user.service.js";

export default class Settings{
    constructor(){
        this.render();
        this.addEventListeners();
        this.changeUsername(userService.user.username)
        userService.userObsv.subscribe((data) =>    {
            this.changeUsername(data);
        })
    }

    render()    {
        let appElem = document.getElementById("app");

        appElem.insertAdjacentHTML('beforeend', 
        `<h1 class= 'text-center'>Settings</h1>
        <div class = "container">
        <form>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>

</form>
</div>`
        );
    }

addEventListeners() {
//declare variables
let settingsBtnElem = document.getElementById('settings-btn');

settingsBtnElem.addEventListener('click', (event)=>{
    event.preventDefault();
    let newUsername = document.getElementById('user-input').value;
    this.changeUsername(newUsername);
    userService.next(newUsername)
})

}    
}

changeUsername(username)    {
    let userLabelElem = document.getElementById('user-label');

    userLabelElem.innerText = `username: ${username}`
}