
function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("result").innerHTML =
            "Please fill in all the fields!";
    } else {
        document.getElementById("result").innerHTML =
            "Thank you, " + name +
            "! Your message has been received. ❤️";

        document.getElementById("contactForm").reset();
    }
}


// Donate button
function donateNow() {
    alert("Thank you for supporting Annapurna! ❤️");
}


// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        let target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
