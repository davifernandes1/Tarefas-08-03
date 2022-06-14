let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmar = document.getElementById('confirmar').value
    let divErro = document.querySelector('.div-erro')

    if (nome == "" || email == "" || senha == "" || confirmar == "") {
divErro.style.display = 'block'
    }else {
        divErro.style.display = 'none'


    }

    if (localStorage.getItem('usuarios') !=null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }
    function isBigEnough(value) {
        return value >= "";
      }
      
      var filtered = ['nome', 'email', 'senha','confirmar'].filter(isBigEnough);
    

    usuarios.push([nome, email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('confirmar').value = ""
    

}

const listUsuarios = () => {
    let tbody = document.getElementById('table-linha')
    if (localStorage.getItem('usuarios') != null) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach((usuario, index) => {
        tbody.innerHTML += "<tr> <td>" + usuario[0] + "</td> <td>"+ usuario[1] + "</td> " + 
        "<td> <button onclick= 'deleteUsuario("+ index +")'>🗿</button> </td> </tr>" 
 });


    } else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>" 
    }

}

const deleteUsuario = (index) => {

    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let auxUsuarios =  usuarios.filter((v, i)=> i != index )
    localStorage.setItem('usuarios', JSON.stringify(auxUsuarios))
    document.location.reload(true)
}


