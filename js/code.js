let home = document.getElementById('inici');
let changeTheme = document.getElementById('changeTheme');
let skills = document.getElementById('skills');
let projects = document.getElementById('projects');
let marker = document.getElementById('marker');

let modulo = document.getElementById('modulo');
let ufSelect = document.getElementById('uf');

let actualTheme = 'bg-dark';

let modulos = ['M06', 'M09'];
let ufs = {
    'M06': ['UF1- Javascript', 'UF2- JQuery', 'UF3- DOM + Eventos', 'UF4- Comunicación Asíncrona'],
    'M09': ['UF1- HTML + CSS', 'UF2- Multimedia + Canvas']
}

let practicasM06 = {
    'UF1': [
        {
            name: 'PR1',
            link: '../Proyectos/Modulo06/UF1/PR1/index.html',
            img: '../img/Modulo06/UF1/PR1/Captura.PNG',
            description: 'Alert con Hola Mundo'
        },
        {
            name: 'PR2',
            link: '../Proyectos/Modulo06/UF1/PR2/index.html',
            img: '../img/Modulo06/UF1/PR2/Captura.PNG',
            description: 'Alert con Hola Mundo usando variable'
        },
        {
            name: 'PR3',
            link: '../Proyectos/Modulo06/UF1/PR3/index.html',
            img: '../img/Modulo06/UF1/PR3/Captura.PNG',
            description: 'Alert con meses del año'
        },
        {
            name: 'PR4',
            link: '../Proyectos/Modulo06/UF1/PR4/index.html',
            img: '../img/Modulo06/UF1/PR4/Captura.PNG',
            description: 'Alert con comprobaciones'
        },
        {
            name: 'PR5',
            link: '../Proyectos/Modulo06/UF1/PR5/index.html',
            img: '../img/Modulo06/UF1/PR5/Captura.PNG',
            description: 'Alert con comprobaciones'
        },
        {
            name: 'PR6',
            link: '../Proyectos/Modulo06/UF1/PR6/index.html',
            img: '../img/Modulo06/UF1/PR6/Captura.PNG',
            description: 'Prompt comprobacion DNI'
        },
        {
            name: 'PR7',
            link: '../Proyectos/Modulo06/UF1/PR7/index.html',
            img: '../img/Modulo06/UF1/PR7/Captura.PNG',
            description: 'Operaciones con prompt'
        },
        {
            name: 'PR8',
            link: '../Proyectos/Modulo06/UF1/PR8/index.html',
            img: '../img/Modulo06/UF1/PR8/Captura.PNG',
            description: 'Operaciones con prompt'
        }
    ],
    'UF2': [
        {
            name: 'PR1',
            link: '../Proyectos/Modulo06/UF2/PR1/sites/index.html',
            img: '../img/Modulo06/UF2/PR1/Captura.PNG',
            description: 'Botones con textos ocultos, se muestran al hacer hover con Jquery'
        },
        {
            name: 'PR2',
            link: '../Proyectos/Modulo06/UF2/PR2/pages/index.html',
            img: '../img/Modulo06/UF2/PR2/Captura.PNG',
            description: 'Cv trabajadores con informacion oculta, se muestra al hacer hover/ click con Jquery'
        },
        {
            name: 'PR3',
            link: '../Proyectos/Modulo06/UF2/PR3/sites/index.html',
            img: '../img/Modulo06/UF2/PR3/Captura.PNG',
            description: 'Input para remarcar los elementos del dom segun clase o id con Jquery'
        },
        {
            name: 'PR4',
            link: '../Proyectos/Modulo06/UF2/PR4/pages/index.html',
            img: '../img/Modulo06/UF2/PR4/Captura.PNG',
            description: 'Textareas con contador de caracteres con Jquery'
        },
        {
            name: 'PR5',
            link: '../Proyectos/Modulo06/UF2/PR5/pages/index.html',
            img: '../img/Modulo06/UF2/PR5/Captura.PNG',
            description: 'Modal formulario con Jquery'
        }
    ],
    'UF3': [
        {
            name: 'PR1',
            link: '../Proyectos/Modulo06/UF3/PR1/ejercicio11.html',
            img: '../img/Modulo06/UF3/PR1/Captura.PNG',
            description: 'Recorrido de DOM y consolelog con los el resultado de la busqueda'
        },
        {
            name: 'PR2',
            link: '../Proyectos/Modulo06/UF3/PR2/ejercicio12.html',
            img: '../img/Modulo06/UF3/PR2/Captura.PNG',
            description: 'Mostrar y ocultar elementos del DOM con click'
        },
        {
            name: 'PR3',
            link: '../Proyectos/Modulo06/UF3/PR3/ejercicio13.html',
            img: '../img/Modulo06/UF3/PR3/Captura.PNG',
            description: 'Añadir nuevos elementos a la lista al hacer click en añadir'
        },
        {
            name: 'PR4',
            link: '../Proyectos/Modulo06/UF3/PR4/ejercicio14.html',
            img: '../img/Modulo06/UF3/PR4/Captura.PNG',
            description: 'Mostrar y ocultar elementos del DOM con click'
        },
        {
            name: 'PR5',
            link: '../Proyectos/Modulo06/UF3/PR5/ejercicio15.html',
            img: '../img/Modulo06/UF3/PR5/Captura.PNG',
            description: 'Muestra de posiciones (X,Y) del raton con evento mousemove'
        },
        {
            name: 'PR6',
            link: '../Proyectos/Modulo06/UF3/PR6/ejercicio16.html',
            img: '../img/Modulo06/UF3/PR6/Captura.PNG',
            description: 'Muestra de posiciones (Arriba,Abajo,Derecha,Izquierda) del raton con evento mousemove'
        },
        {
            name: 'PR7',
            link: '../Proyectos/Modulo06/UF3/PR7/index.html',
            img: '../img/Modulo06/UF3/PR7/Captura.PNG',
            description: 'Juego de la vida'
        },
        {
            name: 'PR8',
            link: '../Proyectos/Modulo06/UF3/PR8/sites/index.html',
            img: '../img/Modulo06/UF3/PR8/Captura.PNG',
            description: 'Juego del amazonas'
        },
    ],
    'UF4': [
        {
            name: 'PR1',
            video: '../Proyectos/Modulo06/UF4/Video.mp4',
            img: '../img/Modulo06/UF4/PR1/Captura.PNG',
            description: 'Web hecha con nodejs y express, con llamadas asíncronas a la bbdd'
        }
    ]
}

let practicasM09 = {
    'UF1': [
        {
            name: 'PR1',
            link: '../Proyectos/Modulo09/UF1/PR1/index.html',
            img: '../img/Modulo09/UF1/PR1/Captura.PNG',
            description: 'Primer ejercicio con HTML y CSS, links, divs, tables etc...'
        },
        {
            name: 'PR2',
            link: '../Proyectos/Modulo09/UF1/PR2/index.html',
            img: '../img/Modulo09/UF1/PR2/Captura.PNG',
            description: 'Formulario con HTML y CSS'
        },
        {
            name: 'PR3',
            link: '../Proyectos/Modulo09/UF1/PR3/index.html',
            img: '../img/Modulo09/UF1/PR3/Captura.PNG',
            description: 'Pagina de blog con HTML y CSS'
        },
        {
            name: 'PR4',
            link: '../Proyectos/Modulo09/UF1/PR4/index.html',
            img: '../img/Modulo09/UF1/PR4/Captura.PNG',
            description: 'Curriculum con HTML y CSS'
        },
        {
            name: 'PR5',
            link: '../Proyectos/Modulo09/UF1/PR5/index.html',
            img: '../img/Modulo09/UF1/PR5/Captura.PNG',
            description: 'Galeria de imagenes con HTML y CSS'
        },
        {
            name: 'PR6',
            link: '../Proyectos/Modulo09/UF1/PR6/index.html',
            img: '../img/Modulo09/UF1/PR6/Captura.PNG',
            description: 'Página con navegación de menu circular con HTML y CSS'
        },
        {
            name: 'PR7',
            link: '../Proyectos/Modulo09/UF1/PR7/index.html',
            img: '../img/Modulo09/UF1/PR7/Captura.PNG',
            description: 'Página con columnas e información con HTML y CSS'
        },
        {
            name: 'PR8',
            link: '../Proyectos/Modulo09/UF1/PR8/index.html',
            img: '../img/Modulo09/UF1/PR8/Captura.PNG',
            description: 'Página de noticias con HTML y CSS'
        }
    ],

    'UF2': [
        {
            name: 'PR1',
            link: '../Proyectos/Modulo09/UF2/PR1/index.html',
            img: '../img/Modulo09/UF2/PR1/Captura.PNG',
            description: 'Canvas con rectangulos '
        },
        {
            name: 'PR2',
            link: '../Proyectos/Modulo09/UF2/PR2/index.html',
            img: '../img/Modulo09/UF2/PR2/Captura.PNG',
            description: 'Canvas con figuras a base de rectangulos'
        },
        {
            name: 'PR3',
            link: '../Proyectos/Modulo09/UF2/PR3/index.html',
            img: '../img/Modulo09/UF2/PR3/Captura.PNG',
            description: 'Canvas con figuras a partir de lineas'
        },
        {
            name: 'PR4',
            link: '../Proyectos/Modulo09/UF2/PR4/index.html',
            img: '../img/Modulo09/UF2/PR4/Captura.PNG',
            description: 'Canvas con figuras a partir de lineas'
        },
        {
            name: 'PR5',
            link: '../Proyectos/Modulo09/UF2/PR5/index.html',
            img: '../img/Modulo09/UF2/PR5/Captura.PNG',
            description: 'Canvas con figuras circulares'
        },
        {
            name: 'PR6',
            link: '../Proyectos/Modulo09/UF2/PR6/views/index.html',
            img: '../img/Modulo09/UF2/PR6/Captura.PNG',
            description: 'Página con contenidos multimedia'
        },
        {
            name: 'PR7',
            link: '../Proyectos/Modulo09/UF2/PR7/index.html',
            img: '../img/Modulo09/UF2/PR7/Captura.PNG',
            description: 'Canvas con creación de imagenes'
        }
    ]
}

let currentPage = home;
const moveMarker = (link) => {
    // let x = link.getBoundingClientRect().left + link.getBoundingClientRect().width;;
    // let y = link.getBoundingClientRect().top;

    // let coords = link.getBoundingClientRect();
    // marker.style.transform = `translate(${coords.left - 40}px, ${coords.top}px)`;


}


changeTheme.addEventListener('click', (e) => {
    let listClass = e.currentTarget.classList;

    actualTheme = actualTheme == "bg-dark" ? "bg-light" : "bg-dark";
    let backgroundLightElements = Array.from(document.querySelectorAll('.bg-light'));
    let textLightElements = Array.from(document.querySelectorAll('.text-bg-light'));
    let bordersLightElements = Array.from(document.querySelectorAll('.border-light'));


    let backgroundDarkElements = Array.from(document.querySelectorAll('.bg-dark'));
    let textDarkElements = Array.from(document.querySelectorAll('.text-bg-dark'));
    let bordersDarkElements = Array.from(document.querySelectorAll('.border-dark'));

    backgroundLightElements.forEach((element) => {
        element.classList.remove('bg-light');
        element.classList.add('bg-dark');
    });

    textLightElements.forEach((element) => {
        element.classList.remove('text-bg-light');
        element.classList.add('text-bg-dark');
    });

    backgroundDarkElements.forEach((element) => {
        element.classList.remove('bg-dark');
        element.classList.add('bg-light');
    });

    textDarkElements.forEach((element) => {
        element.classList.remove('text-bg-dark');
        element.classList.add('text-bg-light');
    });

    bordersLightElements.forEach((element) => {
        element.classList.remove('border-light');
        element.classList.add('border-dark');
    });

    bordersDarkElements.forEach((element) => {
        element.classList.remove('border-dark');
        element.classList.add('border-light');
    });


    if (e.currentTarget.classList.contains('fa-sun')) {
        e.currentTarget.style.opacity = '0';
        e.currentTarget.classList.remove('fa-sun');
        e.currentTarget.classList.add('fa-moon');
        e.currentTarget.style.opacity = '1';
    } else {
        e.currentTarget.style.opacity = '0';
        e.currentTarget.classList.remove('fa-moon');
        e.currentTarget.classList.add('fa-sun');
        e.currentTarget.style.opacity = '1';
    }
});

// home.addEventListener('click', (e) => {
//     currentPage = home;
//     moveMarker(currentPage);
// });

// skills.addEventListener('click', (e) => {
//     currentPage = skills;
//     moveMarker(currentPage);
// });

// projects.addEventListener('click', (e) => {
//     currentPage = projects;
//     moveMarker(currentPage);
// });

$(function () {
    var texto = "Hi! There is a new web developer in the cloud.";
    maquina("typer", texto, 80, 0);
});

window.addEventListener('resize', () => {
    moveMarker(currentPage);
});


function maquina(contenedor, texto, intervalo, n) {


    var i = 0,
        timer = setInterval(function () {
            if (i < texto.length) {
                $("#" + contenedor).html(texto.substr(0, i++) + "|");
            } else {
                clearInterval(timer);
                $("#" + contenedor).html(texto);
                if (--n != 0) {
                    setTimeout(function () {
                        maquina(contenedor, texto, intervalo, n);
                    }, 2000);
                }
            }
        }, intervalo);
};

moveMarker(currentPage);
// marker.style.display = 'block';


modulo.addEventListener('change', (e) => {
    let ufsModulo = ufs[e.currentTarget.value];
    ufSelect.innerHTML = '';
    ufsModulo.forEach(uf => {
        ufSelect.innerHTML += `<option value="${uf.split('-')[0]}">${uf}</option>`;
    });
    generate();
});


ufSelect.addEventListener('change', (e) => {
    generate();
});

const generateCard = (newPR, container, lg, md, sm) => {


    let card = document.createElement('div');

    card.classList.add('card');
    card.classList.add('col-12');
    card.classList.add('col-lg-' + lg);
    card.classList.add('col-md-' + md);
    card.classList.add('col-sm-' + sm);
    card.classList.add('mx-auto');
    card.classList.add('mb-4');
    card.classList.add('text-' + actualTheme);
    card.classList.add('border');
    card.classList.add('border-2');
    card.classList.add('border-light');
    if (newPR.video) {
        card.innerHTML = `
        <div class="card-header text-"${actualTheme} ${actualTheme}>
            <h5 class="card-title">${newPR.name}</h5>
        </div>
        <div class="card-body">
          <video controls poster="${newPR.img}" class="card-img-top">
                <source src="${newPR.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        </div>
        <div class="card-footer text-"${actualTheme} ${actualTheme}">
        <p class="text-"${actualTheme} " >${newPR.description}</p>
        </div>
    `;
    } else {
        card.innerHTML = `
        <div class="card-header text-"${actualTheme} ${actualTheme}">
            <h5 class="card-title">${newPR.name}</h5>
        </div>
        <div class="card-body">
        <img src="${newPR.img}" class="card-img-top" alt="...">
        </div>

        <div class="card-footer text-"${actualTheme} ${actualTheme}">
        <p class="text-"${actualTheme} " >${newPR.description}</p>
        <a type="button" href="${newPR.link}" target="_blank" class="btn rounded-pill ${actualTheme} text-${actualTheme} border border-1 border-light">Visualize</a>

        </div>
        

    `;
    }


    container.appendChild(card);
}

const generateRows = (values, container, divisiones) => {
    let rows = Math.ceil(values.length / divisiones);

    let colLg = 12 / divisiones;
    let colMd = 12 / Number(divisiones - 1);
    let colSm = 12 / Number(divisiones - 2);

    for (let index = 0; index < rows; index++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('mb-4');
        row.classList.add('text-center');
        row.classList.add('text-' + actualTheme);
        row.classList.add('shadow');
        row.classList.add('p-4');
        row.classList.add('rounded');
        row.classList.add('mx-auto');
        row.classList.add('w-100');

        let eliminados = 0;
        for (let index = 0; index < divisiones; index++) {
            if (values[index]) {
                generateCard(values[index], row, colLg, colMd, colSm);
                eliminados++;
            }
        }
        values.splice(0, eliminados);

        container.appendChild(row);
    }

    $('video').on('play', function () {
        this.requestFullscreen();
    })
};

const generate = () => {
    let cards = document.getElementById('cards');
    cards.innerHTML = '';
    let modulo = document.getElementById('modulo').value;
    let uf = document.getElementById('uf').value;
    let values = modulo == 'M06' ? practicasM06[uf] : practicasM09[uf];

    generateRows([...values], cards, 4);
}

let links = document.querySelectorAll('.uf');

Array.from(links).forEach(link => {
    link.addEventListener('click', (e) => {
        let modul = e.currentTarget.dataset.modulo;
        let ufE = e.currentTarget.innerHTML;
        document.getElementById('modulo').value = modul;
        document.getElementById('uf').value = ufE;

        let ufsModulo = ufs[modul];
        ufSelect.innerHTML = '';
        ufsModulo.forEach(uf => {
            if (uf.split('-')[0] == ufE) {
                ufSelect.innerHTML += `<option selected value="${uf.split('-')[0]}">${uf}</option>`;
            } else {
                ufSelect.innerHTML += `<option value="${uf.split('-')[0]}">${uf}</option>`;
            }
        });

        generate();
    });
});

generate();
