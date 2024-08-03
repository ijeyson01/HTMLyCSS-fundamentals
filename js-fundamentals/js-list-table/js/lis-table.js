const usuarios = [
    {
        "usuario": "Juan1234",
        "email": "juan2024@mail.com",
        "password": "123456",
        "tipousuario": "ADMIN"
    },
    {
        "usuario": "Jesus001",
        "email": "elyisus@mail.com",
        "password": "123456",
        "tipousuario": "ADMIN"
    },
    {
        "usuario": "DavidDev",
        "email": "ddev@mail.com",
        "password": "123456",
        "tipousuario": "USER"
    }
];

var arregloJson = [
    {
        'nombre': 'VmtDev',
        'apellido': 'Bootcamp FullStack',
        'valoracion': 10,
        'infoAdicional': {
            'duracion': '360h',
            'nmaterias': 14
        },
        'docentes': [
            {
                'nombre': 'José Morán',
                'materia': 'c sharp',
            },
            {
                'nombre': 'Arturo Delgado',
                'materia': '.net core',
            },
            {
                'nombre': 'Maria Isabel Galarza',
                'materia': 'Base de datos'
            }
        ]
    },
    {
        'nombre': 'VmtDev',
        'apellido': 'Bootcamp DataScience',
        'valoracion': 10,
        'infoAdicional': {},
        'docente': []
    }
];

var nombreUsuario = document.getElementById('user_name');
// innerHTML reemplaza el contenido de un elemento html.
nombreUsuario.innerHTML = localStorage.getItem('usuario');

var rolUsuario = document.getElementById('user_rol');
rolUsuario.innerHTML = localStorage.getItem('tipousuario');

var tbodyDocentes = document.getElementById('tbody-docentes');

var enumeracionDocentes = 1;
arregloJson.forEach(data => {
    data.docentes.forEach(dataDocentes => {
        var tr = document.createElement('tr');
        var tdN = document.createElement('td');
        var tdBootcamp = document.createElement('td');
        var tdDocente = document.createElement('td');
        var tdMateriaDocente = document.createElement('td');
        tdN.innerHTML = enumeracionDocentes;
        tr.appendChild(tdN);
        tdBootcamp.innerHTML = data.nombre + ' '+ data.apellido;
        tr.appendChild(tdBootcamp);
        tdDocente.innerHTML = dataDocentes.nombre;
        tr.appendChild(tdDocente);
        tdMateriaDocente.innerHTML = dataDocentes.materia;
        tr.appendChild(tdMateriaDocente);
        enumeracionDocentes ++;
        tbodyDocentes.appendChild(tr);
    });
});