function calcularTotal() {

    // Seleciona todos os checkboxes e quantidades
    const checkboxes = document.querySelectorAll('.item-produto');
    const quantidades = document.querySelectorAll('.qtd-produto');

    let total = 0;

    // Percorre todos os produtos
    checkboxes.forEach((checkbox, index) => {

        if (checkbox.checked) {

            const preco = parseFloat(checkbox.value);
            const qtd = parseInt(quantidades[index].value);

            total += preco * qtd;
        }

    });

    // Atualiza o valor total na tela
    const campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}