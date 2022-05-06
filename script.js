
let cont = document.querySelector(".container");
let dclock = document.querySelector("#dclock");
let aclock = document.querySelector("#aclock");
let swatch = document.querySelector(".swatch");

let a = 10;
let interval;

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");


let wtc = document.querySelector("#wtc");
let sc = hr = mn = ms = "0" + 0;

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

start.addEventListener("click", () => {
    start.style.display = "none";
    stop.style.display = "block";
   interval = setInterval(newstart , a)
});
function newstart(){
    ms++;
    if (ms / 100 == 1) {
        ms = 0;
        sc++;
        if (sc / 60 == 1) {
            sc = 0;
            mn++;
            if (mn / 60 == 1) {
                mn = 0;
                hr++;
                if (hr < 10) {
                    hr = "0" + hr;
                }
            }
            if (mn < 10) {
                mn = "0" + mn;
            }
        }
        if (sc < 10) {
            sc = "0" + sc;
        }
    }
    if (ms < 10) {
        ms = "0" + ms;
    }
    wtc.innerHTML = hr + " : " + mn + " : " + sc + " : " + ms;
}
stop.addEventListener("click",newstop)
reset.addEventListener("click", () => { hr=mn=ms=sc="0"+0;clearInterval(interval);wtc.innerHTML = "00 : 00 : 00 : 00";newstop();});

function newstop(){
    stop.style.display = "none"; start.style.display = "block";
    clearInterval(interval);
}


btn4.addEventListener("click", function () { cont.style.display = "flex";btn1.style.display = "block";btn2.style.display = "block";btn3.style.display = "block";dclock.style.display = "none";aclock.style.display = "none";swatch.style.display = "none";cont.style.boxShadow = "0 0 100px 40px rgb(47, 46, 66),0 0 200px 0px rgb(73, 215, 255),inset 0 0 20px 10px rgb(38, 38, 38)";btn4.style.display="none"; });
btn1.addEventListener("click", function () { dclock.style.display = "block"; aclock.style.display = "none"; swatch.style.display = "none"; btn1.style.display = "none";btn2.style.display = "none";btn3.style.display = "none"; cont.style.boxShadow = "none";btn4.style.display="block"; });
btn2.addEventListener("click", function () { aclock.style.display = "flex"; dclock.style.display = "none"; btn2.style.display = "none";btn3.style.display = "none"; swatch.style.display = "none"; btn1.style.display = "none"; cont.style.boxShadow = "none";btn4.style.display="block"; });
btn3.addEventListener("click", function () { swatch.style.display = "block"; aclock.style.display = "none"; dclock.style.display = "none"; btn3.style.display = "none";btn2.style.display = "none";btn1.style.display = "none"; cont.style.boxShadow = "none";btn4.style.display="block"; });

setInterval(() => {
    let hh = document.querySelector("#hour");
    let mm = document.querySelector("#minute");
    let ss = document.querySelector("#second");
    let dd = document.querySelector("#date");
    let tt = document.querySelector("#time");
    let ap = document.querySelector(".apm");
    let sec = document.querySelector(".sec");
    let da = document.querySelector("#day");


    let apm = "AM";
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let month = new Date().getMonth();
    let second = new Date().getSeconds();
    let day = new Date().getDay();
    if (hour > 12) {
        apm = "PM";
        hour -= 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    switch (day) {
        case 0: day = "SUNDAY"; break;
        case 1: day = "MONDAY"; break;
        case 2: day = "TUESDAY"; break;
        case 3: day = "WEDNESDAY"; break;
        case 4: day = "THURSDAY"; break;
        case 5: day = "FRIDAY"; break;
        case 6: day = "SATURDAY"; break;
    }
    switch (month) {
        case 0: month = "JANUARY"; break;
        case 1: month = "FEBRUARY"; break;
        case 2: month = "MARCH"; break;
        case 3: month = "APRIL"; break;
        case 4: month = "MAY"; break;
        case 5: month = "JUNE"; break;
        case 6: month = "JULY"; break;
        case 7: month = "AUGUST"; break;
        case 8: month = "SEPTEMBER"; break;
        case 9: month = "OCTOBER"; break;
        case 10: month = "NOVEMBER"; break;
        case 11: month = "DECEMBER"; break;
    }

    let date = new Date().getDate() + " " + month + " " + new Date().getFullYear();

    ss.style.transform = `rotate(${second * 6}deg)`;//fdsafdsafdsa 
    mm.style.transform = `rotate(${minute * 6}deg)`;//fdsafdsafdsa
    hh.style.transform = `rotate(${(hour * 30) + minute/2}deg)`; //kjfkdls;afjd;sa

    dd.innerHTML = date;
    tt.innerHTML = hour + " : " + minute;
    ap.innerHTML = apm;
    sec.innerHTML = second;
    da.innerHTML = day;
})