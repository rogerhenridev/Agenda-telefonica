document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-contato');
    const table = document.querySelector('table tbody');
    const telefones = new Set();  

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = form.elements['nome'].value;
        const telefone = form.elements['telefone'].value;

        const telefoneRegex = /^\d{11}$/;
        if (!telefoneRegex.test(telefone)) {
            alert('O telefone deve conter exatamente 11 dígitos, incluindo o DDD.');
            return;
        }

        if (telefones.has(telefone)) {
            alert('Este número de telefone já foi adicionado.');
            return;
        }

        telefones.add(telefone);

        const newRow = table.insertRow();

        const nomeCell = newRow.insertCell(0);
        const telefoneCell = newRow.insertCell(1);

        nomeCell.textContent = nome;
        telefoneCell.textContent = telefone;

        form.reset();
    });
});
