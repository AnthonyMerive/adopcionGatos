let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnPerro');
let muestraMascotas = document.querySelector('.grid-mascotas');

const getMascota = async(url) => {
    muestraMascotas.innerHTML = '';
    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data);
    data.forEach(mascota => {
        const {imagen, nombre, raza} = mascota;
        muestraMascotas.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
}

btnGato.addEventListener('click', (e) => {
    e.preventDefault();
    getMascota('http://localhost:4000/gatos');
})

btnPerro.addEventListener('click', (e) =>{
    e.preventDefault();
    getMascota('http://localhost:4001/perros');
})