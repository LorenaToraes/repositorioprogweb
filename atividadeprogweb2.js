document.addEventListener("DOMContentLoaded", colocar)
let tam = 2;

        function colocar(){
			div = document.createElement("div");
			div.style.fontSize = `${tam}em`;
			div.innerHTML = `<button onclick="maior()">+</button>
            <button onclick="menor()">-</button>
			`;
			document.body.prepend(div)
		}

        function mudar() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${tam}em`;
        }
        function maior() {
			if (tam < 6) {
				tam += 0.5;
				mudar();
			}
        }
        function menor() {
            if (tam > 1) {
                tam -= 0.5;
                mudar();
            }
        }
