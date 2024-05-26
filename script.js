ScrollReveal({ reset: true });
ScrollReveal().reveal('.row', { delay:100 });

document.addEventListener("DOMContentLoaded", function() {
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data;
        });
    fetch('nav-comps.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav-comps').innerHTML = data;
        });

    fetch('../footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});