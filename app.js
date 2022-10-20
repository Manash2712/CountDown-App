let monthDay = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let day = "0";
let hour = "0";
let minute = "0";
let date = `${month} ${monthDay}, ${year} ${hour}:${minute}:0`;
// const countDate = new Date("10 20, 2022 0:0:0").getTime();
let intervalId = null;

const countDown = (date) => {
    const now = new Date().getTime();
    const gap = date - now;
    if (gap <= 0) {
        clearInterval(intervalId);
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
};

// countDown();

// if (countDate - new Date().getTime() <= 0) {
//     clearInterval(intervalId);
// }

function fun() {
    // document.querySelector(".input").style.display = "none";
    document.querySelector(".counter").style.display = "block";
    let inp = document.querySelectorAll("input");
    for (let i of inp) {
        if (i.name === "month") {
            if (i.value) {
                month = i.value;
            }
        }
        if (i.name === "monthDay") {
            if (i.value) {
                monthDay = i.value;
            }
        }
        if (i.name === "year") {
            if (i.value) {
                year = i.value;
            }
        }
        if (i.name === "day") {
            if (i.value) {
                day = String(Number(new Date().getDate()) + Number(i.value));
                // console.log(day);
                monthDay = day % 31;
            }
        }
        if (i.name === "hour") {
            if (i.value) {
                hour = String(i.value);
            }
        }
        if (i.name === "minute") {
            if (i.value) {
                minute = String(i.value);
            }
        }
    }
    date = `${month} ${monthDay}, ${year} ${hour}:${minute}:0`;
    console.log(date);
    date = new Date(date).getTime();
    intervalId = setInterval(() => countDown(date), 1000);
}

document.getElementById("submit-btn").addEventListener("click", fun);
