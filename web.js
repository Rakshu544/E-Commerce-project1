const links = document.querySelectorAll('.navbar li');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});