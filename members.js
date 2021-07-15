//Global Variables
//Old Animation Code \/
/*var pos = 0;


setInterval(function() {
    var scrollPosition = window.pageYOffset;

    if(scrollPosition == 0) {
        //Kyle Johnson
        initiateUser(1, true);
        initiateUser(2, false);
    }
    if(scrollPosition >= 1) {
        //Shawn Johnson
        initiateUser(2, true);
        initiateUser(1, false);
        initiateUser(3, false);
    }
}, 1);

function initiateUser(user, active) {
    if(user == 1) {
        //Kyle Johnson
        if(active == true) {
            interval = setInterval(animation(user, active), 10);
            pos = 0;
        } else if(active == false) {
            interval = setInterval(animation(user, active), 10);
            pos = 100;
        }
    } else if(user == 2) {
        //Shawn Johnson
        if(active == true) {

        } else if(active == false) {

        }
    }
}

function animation(user, active) {
    if(user == 1) {
        //Kyle Johnson
        if(pos >= 100) {
            if(active == true) {
                pos += 0.25;
                document.getElementById("bg2").style.left = pos + "vw";
            } else if(active == false) {
                pos -= 0.25;
            }
        } else {
            clearInterval(interval);
        }
    } else if(user == 2) {
        //Shawn Johnson
        if(pos >= 100) {
            if(active == true) {
                pos += 0.25;
                document.getElementById("bg2").style.left = pos + "vw";
            } else if(active == false) {
                pos -= 0.25;
            }
        } else {
            clearInterval(interval);
        }
    }
}*/

var slideVal = 1;
//var opacity = 100;

function slide(action) {
    if(action == "back") {
        if(slideVal == 1) {
            slideVal = 5;
            //animation(slideVal);
        } else {
            slideVal--;
            //animation(slideVal);
        }
    } else if(action == "next") {
        if(slideVal > 5) {
            slideVal = 1;
            //animation(slideVal);
        } else {
            slideVal++;
            //animation(slideVal);
        }
    }
    for(i = 0; i < 5; i++) {
        if(slideVal != i) {
            document.getElementById("container" + i).style.visibility = "hidden";
        } else if(slideVal == i) {
            document.getElementById("container" + i).style.visibility = "visible";
        }
    }
}

/*function animation(slide) {
    //clearInterval(interval);
    //clearInterval(interval2);
    interval = setInterval(function() {
        if(opacity <= 0) {
            clearInterval(interval);
            interval2 = setInterval(function() {
                if(opacity >= 100) {
                    clearInterval(interval2);
                } else {
                    opacity++;
                    document.getElementById("container" + slide).style.opacity = opacity + "%";
                }
            }, 7);
        } else {
            opacity--;
            document.getElementById("container" + slide).style.opacity = opacity + "%";
        }
    }, 7);
}*/
//I FUCKING HATE ANIMATIONS :((((((((((((