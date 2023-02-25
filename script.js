// button up //
const btnScrollToTop = document.querySelector("#btnScroll");
btnScrollToTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

window.onscroll = function() { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

// Mobile Navigation Menu //
function toggleMenu() {
    var x = document.getElementById("myMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
