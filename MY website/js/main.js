const toggleSwitch = document.querySelector('.input');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.remove("dark-theme")
});

