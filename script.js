document.getElementById("learnMore")
.addEventListener("click", () => {

    document.getElementById("services")
    .scrollIntoView({
        behavior:"smooth"
    });

});

function animateCounter(id,target){

    let count = 0;

    let speed = target / 100;

    let interval = setInterval(()=>{

        count += speed;

        document.getElementById(id).textContent =
        Math.floor(count);

        if(count >= target){

            document.getElementById(id).textContent =
            target;

            clearInterval(interval);
        }

    },20);
}

animateCounter("clients",500);
animateCounter("projects",1200);
animateCounter("uptime",99);

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Thank you for contacting Innovartus Technologies!"
    );
});
