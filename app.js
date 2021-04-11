document.addEventListener("mousemove", parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        /* const y = (window.innerHeight - e.pageY*speed)/100 */

        layer.style.transform = `translateX(${x}px)`
    })
}

/* BETTER VERSION ON THE ANSWER: https://stackoverflow.com/questions/67038091/parallax-with-mouse */

