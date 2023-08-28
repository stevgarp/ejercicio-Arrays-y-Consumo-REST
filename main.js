const displayUsuarios = document.querySelector('.usuarios');
const btnUsuarios = document.querySelector('#Cusuarios');

btnUsuarios.addEventListener('click', getUsuarios);

function getUsuarios () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        const insertuser = data.map(user => 
            `<li>
            id: ${user.id} 
            <br> nombre: ${user.name} 
            <br> username: ${user.username} 
            <br> email" ${user.email} 
            <br> direccion: ${user.address.street},
            ${user.address.suite}, ${user.address.city},
            ${user.address.zipcode}
            </li>`);
        displayUsuarios.innerHTML = `<ul>  ${insertuser} </ul>`;
    })
    .catch((error) => console.log(error));
}