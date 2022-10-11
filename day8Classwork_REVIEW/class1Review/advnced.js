function changeTextColor()  {
    // document.getElementByName('h1').style.color = "#C00C00";
    // document.getElementsByTagName('h1').style.color = "#C00C00";

    document.getElementById('changeIt').style.color = "#C00C00";
    //This worked fine.
};

changeTextColor();

let yellowBtn = document.getElementById('yellowBtn');
yellowBtn.addEventListener('click', makeItYellow);

function makeItYellow() {
    document.getElementById('changeIt').style.color = "#FFFF00";
};