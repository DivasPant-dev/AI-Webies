const body = document.querySelector("body");
const upgrade1 = document.querySelector(".upgrade1");
const upgrade2 = document.querySelector(".upgrade2");
const upgrade3 = document.querySelector(".upgrade3");
const upgrade4 = document.querySelector(".upgrade4");
const upgrade5 = document.querySelector(".upgrade5");
const upgrade6 = document.querySelector(".upgrade6");
const upgrade7 = document.querySelector(".upgrade7");
const upgrade8 = document.querySelector(".upgrade8");
const clicks = document.querySelector(".clicks");
const CPT = document.querySelector(".CPT");
const CU = document.querySelector(".CU");

const upgrades = {
    None: 1,
    "5 CTP": 5,
    "20 CTP": 20,
    "75 CTP": 75,
    "150 CTP": 150,
    "500 CTP": 500,
    "800 CTP": 800,
    "2000 CTP": 2000,
    "10000 CTP": 10000
}

CPT.textContent = upgrades[CU.textContent];

const popSound = function() {
    const audio = new Audio("pop.mp3#t=0.11");
    audio.volume = 0.5
    audio.play();
}

const oopsSound = function() {
    const audio = new Audio("oops.mp3#t=1");
    audio.play();
}

const upgradeSound = function() {
    setTimeout(() => popSound(), 200);
    setTimeout(() => popSound(), 500);
    setTimeout(() => popSound(), 600);
    setTimeout(() => popSound(), 700);
    setTimeout(() => popSound(), 800);
}

body.addEventListener("click", function() {
    clicks.textContent = Number(clicks.textContent) + Number(CPT.textContent);
    popSound();
});

document.addEventListener("keyup", function() {
    if (event.key === "e" || event.key === "E") {
        clicks.textContent = Number(clicks.textContent) + Number(CPT.textContent);
        popSound();
    };
});

let u1 = 0;

upgrade1.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 100;
    
    if (calc < 0 || upgrades[CU.textContent] >= 5) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 5;
        CPT.textContent = 5;
        CU.textContent = "5 CTP";
    }
});

upgrade2.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 200;
    
    if (calc < 0 || upgrades[CU.textContent] >= 20) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 20;
        CPT.textContent = 20;
        CU.textContent = "20 CTP";
    }
});

upgrade3.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 760;
    
    if (calc < 0 || upgrades[CU.textContent] >= 75) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 75;
        CPT.textContent = 75;
        CU.textContent = "75 CTP";
    }
});

upgrade4.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 2000;
    
    if (calc < 0 || upgrades[CU.textContent] >= 150) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 150;
        CPT.textContent = 150;
        CU.textContent = "150 CTP";
    }
});

upgrade5.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 10000;
    
    if (calc < 0 || upgrades[CU.textContent] >= 500) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 500;
        CPT.textContent = 500;
        CU.textContent = "500 CTP";
    }
});

upgrade6.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 20000;
    
    if (calc < 0 || upgrades[CU.textContent] >= 800) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 800;
        CPT.textContent = 800;
        CU.textContent = "800 CTP";
    }
});

upgrade7.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 100000;
    
    if (calc < 0 || upgrades[CU.textContent] >= 2000) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 2000;
        CPT.textContent = 2000;
        CU.textContent = "2000 CTP";
    }
});

upgrade8.addEventListener("click", function() {
    const calc = Number(clicks.textContent) - 1000000;
    
    if (calc < 0 || upgrades[CU.textContent] >= 10000) {
        oopsSound();
    } else {
        upgradeSound();
        clicks.textContent = calc - 10000;
        CPT.textContent = 10000;
        CU.textContent = "10000 CTP";
    }
});