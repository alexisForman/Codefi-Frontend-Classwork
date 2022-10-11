import Home from "./pages/home";
import Settings from "../pages/settings.js";
import { userService } from "../user/user.service.js";

export default class NavBar{
    // user = {
    //     username: ''
    // }
    // Apparently theres lots of ways to do this. Cruz deleted this but I just commented it out so I can refer back to it. 
    constuctor()    {
        this.render();
        this.addEventListeners();
        this.changeUsername();

        this.changeUsername{userService.user.username};
        userService.userobsv.subscribe((data) =>    {
            console.log("This is the data -->", data)
        })
    }

    render()    {
        let appElem = document.getElementById('app');
        appElem.insertAdjacentHTML('beforeend', `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item" id='settings style='cursor:pointer'>
            <div id='user'></div>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>`)
    
}

addEventListeners() {
    //declare variables/access elements
    let homeElem = document.getElementById('home');
    let settingsElem = document.getElementById('settings')
    let appELem = document.getElementById('app');

    //attach event listeners
    homeElem.addEventListener('click', () => {
        console.log('home')

        //clear the app element
            appElem.innerHTML = '';
        //reinitialize the navbar and home
            new Navbar();
            new Home();
    })

    settingsElem.addEventListener('click', ()=> {


        //clear the app element

        //reinitialize the navbar and home

    });

    }

    changeUsername(username)    {
        let userElem = document.getElementById('user');
        userElem.innerText = `Welcome, ${username!}`;
    }
}