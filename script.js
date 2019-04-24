let resolver = document.querySelector("#resolver");
resolver.addEventListener("click", function(){
    console.log("Fui clicado!");
    let a = document.querySelector("#coeficiente-a").value;
    if(a == 0) {
        alert("A equação deve ser de segundo grau!");
        return;
    }
    let b = document.querySelector("#coeficiente-b").value;
    let c = document.querySelector("#coeficiente-c").value;
    let delta = (b**2) - 4*a*c;

    let resultadoDelta = document.querySelector("#resultado-delta");
    resultadoDelta.value = delta;

    let x1 = (-b + Math.sqrt(delta))/2;
    let x2 = (-b - Math.sqrt(delta))/2;
    let resultadoX1 = document.querySelector('#resultado-x1');
    let resultadoX2 = document.querySelector('#resultado-x2');
    resultadoX1.value = x1;
    resultadoX2.value = x2;

    let concavidade = document.querySelector('#concavidade');
    if(a > 0) {
        concavidade.value = 'cima';
    }
    else {
        concavidade.value = 'baixo'
    }

    let qtdeRaizes = document.querySelector('#qtde-raizes');
    if(delta > 0) {
        qtdeRaizes.value = 2;
    } else if (delta == 0) {
        qtdeRaizes.value = 1;
    } else {
        qtdeRaizes.value = 0;
    }

    let xVertice = document.querySelector('#x-vertice');
    let yVertice = document.querySelector('#y-vertice');

    xVertice.textContent = -b/(2*a);
    yVertice.textContent = -delta/(4*a);
});