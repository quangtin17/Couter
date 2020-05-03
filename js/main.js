let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
btn.addEventListener('click', function(e) {
const styles = e.currentTarget.classList;
console.log(styles);
if (styles.contains('btn-decrease')) {
    count--;
} else if (styles.contains('btn-increase')) {
count++;
} else {
    count = 0;
}
if (count > 0) {
    value.style.color = "green";
} else if (count < 0) {
    value.style.color = "red";
} else {
    value.style.color = "#182C61";
}
value.textContent = count;
});
});