const app = {
    spinEarth: function (section) {
        section.animate([
            {
                backgroundPosition: "80em 0"
            }
        ], {
            duration: 10000,
            iterations: Infinity
        })
    },
    createStars: function (count, section) {
        var i = 0;

        while (i < count) {
            const star = document.createElement("i");
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);

            star.style.top = y + "px";
            star.style.left = x + "px";

            const size = Math.random() * 4;

            star.style.width = 1 + size + "px";
            star.style.height = 1 + size + "px";

            const duration = Math.random() * 2;

            star.style.animationDuration = 2 + duration + "s";
            star.style.animationDelay = duration;

            section.appendChild(star);
            i++;
        }
    },
    init: function () {
        const count = 500;
        const section = document.querySelector(".starlight");
        const container = document.querySelector(".container");
        this.createStars(count, section);
        this.spinEarth(container);
    }
}

app.init();

