const datosEstudiantes = [{​​​​​​​​
    Titulo1: "Sergio Cano Colorado",
    github: "https://github.com/ChechoCC/Proyectos_Sergio",
    neocites: "https://chechocc.neocities.org/",
    email: "scanocolorado@outlook.com",
    wpp: "3002295052",
    foto1: "/ProyectoP-master/img/me2.jpg",
    actividades: [{​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​,
        {​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​,
        {​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​
    ],
    valoraciones: {​​​​​​​​
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }​​​​​​​​,
    calificacion: "54%"
}​​​​​​​​,
{​​​​​​​​
    nombre: "Fulanito de tal",
    github: "https://github.com/mirepositorio",
    neocites: "miportafolio.neocities.org",
    email: "estudiante@dominio.com",
    telefono: "3125678900",
    actividades: [{​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​,
        {​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​,
        {​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​
    ],
    valoraciones: {​​​​​​​​
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }​​​​​​​​,
    calificacion: "54%"
}​​​​​​​​,
{​​​​​​​​
    nombre: "Fulanito de tal",
    github: "https://github.com/mirepositorio",
    neocites: "miportafolio.neocities.org",
    email: "estudiante@dominio.com",
    telefono: "3125678900",
    actividades: [{​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​,
        {​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​,
        {​​​​​​​​
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }​​​​​​​​
    ],
    valoraciones: {​​​​​​​​
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }​​​​​​​​,
    calificacion: "54%"
}
];


const Encabezado = `
    <div class="container">     
        <div class="Name"><h1 class="nombre">SERGIO CANO COLORADO</h1></div>
        <div class="Foto1"><img src="" alt="SERGIO" class="fotoed"></div>
        <div class="Enlaces">
            <ul class="enlaces">
                <li><img src="/images/github-brands.svg" alt=""><a href="https://github.com/ChechoCC/Proyectos_Sergio">GitHub</a></li>
                <li><img src="/images/network-wired-solid.svg" alt=""><a href=""https://chechocc.neocities.org/">Neocites</a></li>
                <li><img src="/images/envelope-square-solid.svg" alt=""><a href="">Email</a></li>
                <li><img src="/images/whatsapp-brands.svg" alt=""><a href="">Whatsapp</a></li>
            </ul>
        </div>
    </div>
    `

const Actividades2 = `
    <div class="Actividades">
        <table class="tabla">
            <tr>
                <th>Actividades</th>
                <th>%UI/UX</th>
                <th>%dev</th>
            </tr>
            <tr>
                <td><a href="">Actividad1</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

            <tr>
                <td><a href="">Actividad2</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

            <tr>
                <td><a href="">Actividad3</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

        </table>
    </div> 
    `

const Estados1 = `
    <div class="Estados">
        <h2><a href="">Html</a></h2>
        <h2><a href="">CSS</a></h2>
        <h2><a href="">JS</a></h2>
        <h2><a href="">UI</a></h2>
        <h2><a href="">UX</a></h2>
        <h2><a href=""><img src="/images/user-solid.svg" alt=""></a></h2>
    </div>
`;


const p = document.getElementById("ficha").innerHTML =
(Encabezado + Actividades2 + Estados1);