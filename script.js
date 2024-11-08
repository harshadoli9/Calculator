var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (let item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext === '×') {
            btntext = '*';
        }
        if (btntext === '÷') {
            btntext = '/';
        }

        screen.value += btntext;
    });
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        alert("Invalid calculation");
        screen.value = '';
    }
}

function sin() {
    screen.value = Math.sin(toRadians(screen.value));
}

function cos() {
    screen.value = Math.cos(toRadians(screen.value));
}

function tan() {
    screen.value = Math.tan(toRadians(screen.value));
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    const number = parseFloat(screen.value);
    screen.value = isNaN(number) ? Math.PI : number * Math.PI;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var num = parseInt(screen.value);
    if (isNaN(num) || num < 0) {
        alert("Please enter a non-negative integer.");
        return;
    }
    var f = 1;
    for (var i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}