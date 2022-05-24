let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    usuarios.push([nome, email, senha])
    console.log('users', usuarios)
}