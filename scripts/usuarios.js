let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo')
formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    
    let resp = await fetch('http://localhost:4002/usuarios',{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email
        }),
        headers: {
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
})

btnCorreo.addEventListener('click', async() =>{
    let email = document.getElementById('email').value;

    let resp = await fetch('http://localhost:4002/usuarios')
    let data = await resp.json();
    let modificar = data.find(user => user.correo === email);
    console.log(modificar);
    const {nombre,apellido,correo,id} = modificar;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;
})