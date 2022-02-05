        const textos = document.querySelectorAll('h2');
        const linhas = new Array();
        textos.forEach(texto => {
            linhas.push(texto.textContent);
            texto.innerHTML = `${texto.textContent} <a href='#'>Voltar</a>`;
       
        });
        const lista = document.querySelector('ol');
        linhas.forEach(topico => {
            const item = document.createElement('li');
            item.innerHTML = '<a href="#' + topico + '">' + topico + '</a>';
            lista.append(item);
        });
