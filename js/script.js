function ToggleColorMode(obj) {
    const body = document.body;
    body.classList.toggle('lightMode');
    body.classList.toggle('darkMode');

    obj.querySelector('i').classList.toggle('fa-moon');
    obj.querySelector('i').classList.toggle('fa-sun');
}

function BodyScrolled() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', BodyScrolled);