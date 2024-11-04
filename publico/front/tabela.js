window.onload = exibirTabela;

function exibirTabela() {
    const divTabela = document.getElementById('tabela');
    divTabela.innerHTML = '';
    
   
    /*if (listaProdutos.length > 0) {*/
        const tabela = document.createElement('table');
        tabela.className = 'tabela';

        const cabecalho = document.createElement('thead');
        cabecalho.innerHTML = `
        <tr>
            <th>PH</th>
            <th>TEMPERATURA</th>
            <th>TURBIDEZ</th>
        </tr>`;

        const corpo = document.createElement('tbody');
        /*for (let i = 0; i < listaProdutos.length; i++) {*/
            const linha = document.createElement('tr');
            //string literals
            linha.innerHTML = `
                <td>8</td>
                <td>25º</td>
                <td>5 NTU</td>
            `;
            corpo.appendChild(linha);
            let linha1 = document.createElement('tr');
            linha1.innerHTML = `
                <td>6.5</td>
                <td>22º</td>
                <td>4 NTU</td>
            `;
            corpo.appendChild(linha1);
            linha1 = document.createElement('tr');
            linha1.innerHTML = `
                <td>10</td>
                <td>15º</td>
                <td>7 NTU</td>
            `;
            corpo.appendChild(linha1);
        /*}*/
        tabela.appendChild(cabecalho);
        tabela.appendChild(corpo);
        divTabela.appendChild(tabela);

    /*}
    else {
        const paragrafo = document.createElement('p');
        paragrafo.innerText = "Não há produtos a serem exibidos!";
        divTabela.appendChild(paragrafo);
    }*/
}