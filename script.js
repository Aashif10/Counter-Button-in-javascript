let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let num = document.getElementById("num");



let a = 0;
plus.addEventListener("click", function () {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    // console.log(a)
});
minus.addEventListener("click", function() {
    if (a > 0) {
        --a;
            a = a < 10 ? "0" + a : a;
        num.innerText = a;
}
});