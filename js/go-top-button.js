var mybutton = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    mybutton = document.getElementById("back-to-top");
    document.body.scrollTop = 0;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    mybutton.style.backgroundColor = "#ffffff";
}