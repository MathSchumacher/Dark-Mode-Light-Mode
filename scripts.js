// Seleciona os elementos necessários
const button = document.getElementById('mode-selector');
const body = document.body;
const footer = document.querySelector('footer');
const pageTitle = document.getElementById('page-title');

// Função para alternar entre os modos
function toggleMode() {
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        pageTitle.textContent = 'Dark Mode ON';
        button.textContent = 'Light Mode';
    } else {
        pageTitle.textContent = 'Light Mode ON';
        button.textContent = 'Dark Mode';
    }
}

// Adiciona o evento de clique ao botão
button.addEventListener('click', toggleMode);

// Adiciona o evento mouseover ao botão
button.addEventListener('mouseover', function() {
    if (body.classList.contains('dark-mode')) {
        button.style.backgroundColor = '#4e545c';
        button.style.color = '#e5e8e8';
    } else {
        button.style.backgroundColor = '#000401';
    }
});

// Adiciona o evento mouseout ao botão
button.addEventListener('mouseout', function() {
    if (body.classList.contains('dark-mode')) {
        button.style.backgroundColor = '#e5e8e8';
        button.style.color = '#4e545c';
    } else {
        button.style.backgroundColor = '#4e545c';
        button.style.color = '#e5e8e8';
    }
});
