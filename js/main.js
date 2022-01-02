

// Header //

let iconToggel = document.querySelector('.icon'); 
let headerMenu = document.getElementById('my-links');

iconToggel.onclick = function () {
    toggelActiveUl();
}

function toggelActiveUl () {
    let btnExite = document.querySelector('.exit');
    
        if (window.innerWidth >= 768) {
            // Deisk Top Ul
            headerMenu.classList.toggle('ul-desk');
        } else {
            headerMenu.classList.toggle('ul-mobile');
            btnExite.addEventListener('click', () => headerMenu.classList.remove('ul-mobile'));
        }
    // Eficet Toggel Menu Icon
    document.querySelector('.icon span:nth-child(2)').classList.toggle('active-toggel');
}
