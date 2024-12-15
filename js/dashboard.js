window.setTimeout("getip()", 1000);
    function getip() {
        var xhr = new XMLHttpRequest();
        var url = "https://api.ipify.org?format=json";
        xhr.onloadend = function () {
            data = JSON.parse(this.responseText);
            document.getElementById("ip").textContent = data.ip;
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

// Mendapatkan user agent dari browser
const userAgent = navigator.userAgent;
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
const platform = navigator.platform;
const vendor = navigator.vendor;
const onlineStatus = navigator.onLine ? "Online" : "Offline";

// Membuat informasi dalam bentuk string
txt = `
<p><b>Nama Browser:</b> ${browserName}</p>
<p><b>Versi Browser:</b> ${browserVersion}</p>
<p><b>Sistem Operasi:</b> ${platform}</p>
<p><b>Vendor:</b> ${vendor}</p>
<p><b>Status Koneksi:</b> ${onlineStatus}</p>
<p><b>User Agent:</b> ${userAgent}</p>
`;
document.getElementById("statistics").innerHTML = txt;

myMonths = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum at", "Sabtu"];
var tgl = new Date();
var day = tgl.getDate();
bulan = tgl.getMonth();
var thisDay = tgl.getDay(),
ThisDay = myDays[thisDay];
var yy = tgl.getYear();
var year = yy < 1000 ? yy + 1900 : yy;

const tanggal = `${ThisDay}, ${day} - ${myMonths[bulan]} - ${year}`;

document.getElementById("tahun").innerHTML = year;
document.getElementById("tanggal").innerHTML = tanggal;

//ucapan Tiap Hari
ucapanWaktu = "";
var now = new Date();
var hours = now.getHours();
if (hours >= 17 || hours <= 2) {
    ucapanWaktu += "<span class='text-light'>Selamat Malam 🌚</span>";
} else if (hours >= 3 && hours <= 10) {
    ucapanWaktu += "<span class='text-info'>Selamat Pagi 🌝</span>";
} else if (hours >= 11 && hours <= 14) {
    ucapanWaktu += "<span class='text-warning'>Selamat Siang 🌞</span>";
} else if (hours >= 13 && hours <= 16) {
    ucapanWaktu += "<span class='text-success'>Selamat Sore 🌜</span>";
}
document.getElementById("ucapanWaktu").innerHTML = ucapanWaktu;

// Jam Sekarang
window.setTimeout("waktu()", 1000);
function waktu() {
    var d = new Date();
    const jam = d.getHours();
    const menit = d.getMinutes();
    const detik = d.getSeconds();
    setTimeout("waktu()", 1000);
    document.getElementById("Clock").innerHTML =
    jam + " : " + menit + " : " + detik + " WIB";
}

// Count Down Idul Adha
var countDownDate = new Date("Jan 01, 2025 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("mundur").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("mundur").innerHTML = "Selamat Hari Raya Idul Adha ";
    }
}, 1000);

var batteryLevel = document.getElementById("batteryLevel");
var styleBatteryLevel = batteryLevel.style;
var percentageLevel = document.getElementById("percentageLevel");
navigator.getBattery().then(function (battery) {
    function updateAllBatteryInfo() {
        updateLevelInfo();
    }
    updateAllBatteryInfo();
    battery.addEventListener("levelchange", function () {
    setInterval(function () {
        updateLevelInfo();
    }, 1000);
});
function updateLevelInfo() {
    var numBattery = battery.level * 100;
    percentageLevel.textContent = Math.round(numBattery) + "%";
    styleBatteryLevel.height = numBattery + "%";
    if (numBattery <= 15) {
        styleBatteryLevel.background = "red";
    }
}
});
