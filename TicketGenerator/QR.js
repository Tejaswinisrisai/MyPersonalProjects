
window.onload = function () {
    start()
document.getElementById('ticket').style.display="none";
document.getElementById("TType").selectedIndex = -1;
document.getElementById("Time").selectedIndex = -1;
document.getElementById("Movies").selectedIndex = -1;
document.getElementById("Date").selectedIndex = -1;
 }
function start() {
    Swal.fire({
        title: 'Hi, User',
        text: "Currently, we are accepting only UPI Payments. Click 'ok' to continue",
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('ok')
        }
        else {
            window.location.replace('Development.html')
        }
    })
}

function generate() {
    let temp = document.getElementById('Firstname').value
    var qrcode = new QRCode(document.querySelector('#sec3'), {
        text: temp,
        width: 128, //default 128
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    console.log(qrcode)
}
function generatepayQr() {
    let temp = 'upi://pay?pa=9493725484343@paytm&pn=PaytmUser&mc=0000&mode=02&purpose=00&orgid=159761'
    var qrcode = new QRCode(document.querySelector('#payQr'), {
        text: temp,
        width: 180, //default 128
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    console.log(qrcode)
}

function generatePayment() {
    var name=document.getElementById('Firstname').value
    var noOfT=document.getElementById('NoOfTickets').value
    if(name!='' && noOfT!='')
    {
    Swal.fire({
        title: 'Scan and Pay using QR',
         html: '<div id="payQr"v style="display:flex;justify-content:center;"></div>',
        timer: 10000,
        showCancelButton: false,
        showConfirmButton: false
    })
    generatepayQr();
    generateTicket();
}
}

function generateTicket(){
    var name=document.getElementById('Firstname').value
    var noOfT=document.getElementById('NoOfTickets').value
    document.getElementById('ticket').style.display="flex";
    var type=document.getElementById('TType').value;
    
    var ticketSec1=document.getElementById('sec1')
    var ticketSec2=document.getElementById('sec2')
    // var ticketSec2=document.getElementById('back')
    
    var date=document.getElementById('Date').value
    var time=document.getElementById('Time').value
    
    var movieName=document.getElementById('Movies').value;
    
    if(type=='Gen')
    {
        ticketSec1.style.background='blue'
        ticketSec1.innerText='General'.toUpperCase()
    }
    else if(type=='VIP')
    {
        ticketSec1.style.background='red'
        ticketSec1.innerText='VIP'.toUpperCase()
    }
    else
    {
        ticketSec1.style.background='purple'
        ticketSec1.innerText='Premium'.toUpperCase()
    }

    
    if(movieName=='Mukunda')
    {
        ticketSec2.style.backgroundImage='url("./assets/Mukunda.jpg")';
    }
    else if(movieName=='Chirutha')
    {
        ticketSec2.style.backgroundImage='url("./assets/Chirutha.jpg")';
    }
    else if(movieName=='RadheyShyam')
    {
        ticketSec2.style.backgroundImage='url("./assets/RadheShyam.jpg")';
    }
    else
    {
        ticketSec2.style.backgroundImage='url("./assets/Krack.jpg")';
    }

    document.getElementById('orderId').innerHTML=123456
    document.getElementById('userName').innerHTML=name
    document.getElementById('dAndT').innerHTML=date+' @ '+time
    document.getElementById('moviesName').innerHTML=movieName
    document.getElementById('noOfTi').innerHTML=noOfT
    generate();

}
