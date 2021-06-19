//Global Variables
var guns = [
    {
        name: "Makarov",
        class: "Pistol",
    },
    {
        name: "M1911",
        class: "Pistol",
    },
    {
        name: "P99",
        class: "Pistol",
    },
    {
        name: "FN Five-Seven",
        class: "Pistol",
    },
    {
        name: "Mac-11",
        class: "Rifle",
    },
    {
        name: "MR96",
        class: "Pistol",
    },
    {
        name: "H&K MP5",
        class: "Rifle",
    },
    {
        name: "Machete",
        class: "Knife",
    },
    {
        name: "H&K UMP .45",
        class: "Rifle",
    },
    {
        name: "AK-74",
        class: "Rifle",
    },
    {
        name: "Glock 18",
        class: "Pistol",
    },
    {
        name: "AR-15",
        class: "Rifle",
    },
    {
        name: "Thompson",
        class: "Rifle",
    },
    {
        name: "Glock 17",
        class: "Pistol",
    },
    {
        name: "Kriss Vector",
        class: "Rifle",
    },
    {
        name: "Desert Eagle",
        class: "Pistol",
    },
    {
        name: "G36C",
        class: "Rifle",
    },
    {
        name: "LR-300",
        class: "Rifle",
    },
    {
        name: "DP-28",
        class: "Rifle",
    },
    {
        name: "Serbu Shorty",
        class: "Rifle",
    },
    {
        name: "G3A3",
        class: "Rifle",
    },
    {
        name: "Honey Badger",
        class: "Rifle",
    },
    {
        name: "SCAR-H",
        class: "Rifle",
    },
    {
        name: "M249",
        class: "Rifle",
    },
    {
        name: "BT MP9",
        class: "Rifle",
    },
    {
        name: "Mosin Nagant",
        class: "Rifle",
    },
    {
        name: "M14",
        class: "Rifle",
    },
    {
        name: "M3 Super 90",
        class: "Rifle",
    },
    {
        name: "M4 Carbine",
        class: "Rifle",
    },
    {
        name: "IMI Galil",
        class: "Rifle",
    },
    {
        name: "ACR-E",
        class: "Rifle",
    },
    {
        name: "KSG-12",
        class: "Rifle",
    },
    {
        name: "AUG A3",
        class: "Rifle",
    },
    {
        name: "XM8",
        class: "Rifle",
    },
    {
        name: "L115",
        class: "Exotic",
    },
    {
        name: "Silver Baller",
        class: "Exotic",
    },
    {
        name: "HK-416",
        class: "Exotic",
    }
];

var rowOneLeft = 0;

function loadRowOne() {
    for(i = 0; i < 18; i++) {
        var randomVal = Math.floor(Math.random() * 37);
        //console.log(randomVal);

        var itemImage = document.createElement("img");
        itemImage.id = "row1-item-image" + i;
        itemImage.setAttribute("src", "images/items/" + randomVal + ".png");
        itemImage.style.position = "absolute";
        itemImage.style.top = "0.5vw";
        itemImage.style.left = rowOneLeft + "vw";
        rowOneLeft += 6;
        itemImage.style.width = "5vw";
        itemImage.style.height = "5vw";
        itemImage.style.boxShadow = "0.1vw 0.1vw 0.5vw black";
        if(guns[randomVal].class == "Pistol") {
            itemImage.style.border = "2px solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(guns[randomVal].class == "Rifle") {
            itemImage.style.border = "2px solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(guns[randomVal].class == "Knife") {
            itemImage.style.border = "2px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(guns[randomVal].class == "Exotic") {
            itemImage.style.border = "2px solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        }

        var main = document.getElementById("weapons-container1");
        main.appendChild(itemImage);
    }

    setInterval(function() {
        for(i = 0; i < 18; i++) {
            var position = document.getElementById("row1-item-image" + i).style.left;
            var fixedPositionVal = position.substring(0, position.length - 2);
            //console.log(fixedPositionVal);
            var fixedPosition = 0;
            if(fixedPositionVal <= -6) {
                document.getElementById("row1-item-image" + i).style.left = "102vw";
            } else {
                fixedPosition = fixedPositionVal - 0.0125;
                document.getElementById("row1-item-image" + i).style.left = fixedPosition + "vw";
            }
            //console.log(i + ": " + position);
        }
    }, 5);
}

loadRowOne();

var rowTwoLeft = 0;

function loadRowTwo() {
    for(i = 0; i < 18; i++) {
        var randomVal = Math.floor(Math.random() * 37);

        var itemImage = document.createElement("img");
        itemImage.id = "row2-item-image" + i;
        itemImage.setAttribute("src", "images/items/" + randomVal + ".png");
        itemImage.style.position = "absolute";
        itemImage.style.top = "0.5vw";
        itemImage.style.left = rowTwoLeft + "vw";
        rowTwoLeft += 6;
        itemImage.style.width = "5vw";
        itemImage.style.height = "5vw";
        itemImage.style.boxShadow = "0.1vw 0.1vw 0.5vw black";
        if(guns[randomVal].class == "Pistol") {
            itemImage.style.border = "2px solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(guns[randomVal].class == "Rifle") {
            itemImage.style.border = "2px solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(guns[randomVal].class == "Knife") {
            itemImage.style.border = "2px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(guns[randomVal].class == "Exotic") {
            itemImage.style.border = "2px solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        }

        var main = document.getElementById("weapons-container2");
        main.appendChild(itemImage);
    }

    setInterval(function() {
        for(i = 0; i < 18; i++) {
            var position = document.getElementById("row2-item-image" + i).style.left;
            var fixedPositionVal = position.substring(0, position.length - 2);
            var fixedPosition = 0;
            if(fixedPositionVal <= -6) {
                document.getElementById("row2-item-image" + i).style.left = "102vw";
            } else {
                fixedPosition = fixedPositionVal - 0.0125;
                document.getElementById("row2-item-image" + i).style.left = fixedPosition + "vw";
            }
        }
    }, 5);
}

loadRowTwo();

var rowThreeLeft = 0;

function loadRowThree() {
    for(i = 0; i < 18; i++) {
        var randomVal = Math.floor(Math.random() * 37);

        var itemImage = document.createElement("img");
        itemImage.id = "row3-item-image" + i;
        itemImage.setAttribute("src", "images/items/" + randomVal + ".png");
        itemImage.style.position = "absolute";
        itemImage.style.top = "0.5vw";
        itemImage.style.left = rowThreeLeft + "vw";
        rowThreeLeft += 6;
        itemImage.style.width = "5vw";
        itemImage.style.height = "5vw";
        itemImage.style.boxShadow = "0.1vw 0.1vw 0.5vw black";
        if(guns[randomVal].class == "Pistol") {
            itemImage.style.border = "2px solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(guns[randomVal].class == "Rifle") {
            itemImage.style.border = "2px solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(guns[randomVal].class == "Knife") {
            itemImage.style.border = "2px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(guns[randomVal].class == "Exotic") {
            itemImage.style.border = "2px solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        }

        var main = document.getElementById("weapons-container3");
        main.appendChild(itemImage);
    }

    setInterval(function() {
        for(i = 0; i < 18; i++) {
            var position = document.getElementById("row3-item-image" + i).style.left;
            var fixedPositionVal = position.substring(0, position.length - 2);
            var fixedPosition = 0;
            if(fixedPositionVal <= -6) {
                document.getElementById("row3-item-image" + i).style.left = "102vw";
            } else {
                fixedPosition = fixedPositionVal - 0.0125;
                document.getElementById("row3-item-image" + i).style.left = fixedPosition + "vw";
            }
        }
    }, 5);
}

loadRowThree();

var money = 0;
var active = false;
var opacity = 0;

setInterval(function() {
    if(window.pageYOffset >= 700 && window.pageYOffset <= 1200) {
        changeMoney(1);
    } else {
        changeMoney(0);
    }
    if(window.pageYOffset >= 1700) {
        enableJoinToday();
    }
}, 1);

function changeMoney(param) {
    if(param == 1 && active == false) {
        if(money >= 9999999) {
            clearInterval(interval);
            document.getElementById("cash").innerHTML = "OVERLOADED!";
        } else {
            var interval = setInterval(function() {
                money += 51;
                document.getElementById("cash").innerHTML = "$" + money;
            }, 1);
            active = true;
        }
    } else if(param == 0) {
        clearInterval(interval);
        active = false;
    }
}

var ranNum = 0;

function enableJoinToday() {
    if(ranNum == 0) {
        document.getElementById("join-message").style.visibility = "visible";
        document.getElementById("click-here").style.visibility = "visible";
        var interval = setInterval(function(){
            opacity++;
            document.getElementById("join-message").style.opacity = opacity + "%";
            document.getElementById("click-here").style.opacity = opacity + "%";
        }, 5);
        ranNum = 1;
    }
}