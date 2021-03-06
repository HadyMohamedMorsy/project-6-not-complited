document.querySelector('.humber-menu').addEventListener('click', () => {
    document.querySelector('.container-hady').classList.toggle('change');


})

document.querySelector('.scrol-btn').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = "smooth";

    setTimeout(() => {

        document.querySelector('html').style.scrollBehavior = "unset";

    }, 1000)

})

function multiply(a, b) {
    return console.log(a * b);
}
multiply(3, 3);