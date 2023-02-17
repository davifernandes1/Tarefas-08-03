document.getElementById('calculate').addEventListener('click', function(){
    const valorinicial = document.getElementById('valorinicial').value;
    const txjuros = (document.getElementById('txjuros').value) / 100;
    const temporend = document.getElementById('temporend').value;



    const total = valorinicial * (1 + txjuros)**temporend;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});

function limpar() {
    valorinicial = (" ") 
    txjuros = (" ")
    temporend = (" ")
    result = (" ")
    var limpvalorinicial = document.getElementById("valorinicial").value = limpvalorinicial
    var limptxjuros = document.getElementById("txjuros").value = limptxjuros
    var limptemporend = document.getElementById("temporend").value = limptemporend
    var limptotal = document.getElementById("result").value = limptotal


    document.getElementById("total").innerHTML = " "
    }