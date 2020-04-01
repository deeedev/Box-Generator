let button = document.getElementById('theboxes');
button.addEventListener("click", myfunction);

function myfunction() {
    let n = document.getElementById('number').value;

    for (var i = 1; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML += i;
    }
}