const toggleSwitch = document.querySelector('.input');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.remove("dark-theme")
});


window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
    
        loader.classList.add("loader--hidden");
    
        loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
        });
    });
    