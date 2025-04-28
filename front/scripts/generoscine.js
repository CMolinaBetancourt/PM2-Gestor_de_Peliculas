const lista = document.getElementById("bulletsgenero");

const generoscine = [
    {
        subtitulo: "Cine comercial:",
        descripcion: " Comprende las películas que tienen como objetivo fundamental generar beneficio económico. Busca alcanzar amplias audiencias y recaudar en taquilla la mayor cantidad de dinero posible. Suele valerse de grandes despliegues publicitarios y responde comúnmente a estándares artísticos poco innovadores."
    },
    {
        subtitulo: "Cine de autor:",
        descripcion: "Comprende las películas artísticas por excelencia. Es un título acuñado a mediados del siglo XX por los críticos de la revista francesa de cine Cahiers du Cinéma, para distinguir las producciones fílmicas en las que el director presenta un proyecto artístico, una noción del cine y una estética única y particular."
    },
    {
        subtitulo: "Cine independiente:",
        descripcion: " Comprende producciones generalmente modestas, llevadas adelante por pequeñas casas productoras, al margen de los consorcios fílmicos tradicionales y con menor presupuesto. En muchos casos, sirven a creadores e intérpretes para comenzar en la industria. "
    },
    {
        subtitulo: " Cine animado:",
        descripcion: "Comprende las producciones basadas en dibujos animados, realizados mediante la técnica cinematográfica. Pueden llevarse a cabo de forma analógica o ser asistidos por computadora. En estos filmes suelen intervenir actores que aportan sus voces a los personajes."
    },
    {
        subtitulo: " Cine documental:  ",
        descripcion: "Comprende las producciones fílmicas que procuran hacer un registro particular de la realidad, con una mirada periodística, más profunda y reflexiva que el reportaje."
    },
    {
        subtitulo: "Cine de docuficción:",
        descripcion: "Comprende las producciones que combinan elementos del documental y la ficción, a menudo con fines humorísticos o satíricos. Forman parte de este género los mockumentaries o falsos documentales y los documentales satíricos. "
    },
    {
        subtitulo: "Cine experimental:",
        descripcion: " Comprende las producciones que desafían las convenciones del género cinematográfico e intentan hallar nuevas formas de expresión artística."
    },
    {
        subtitulo: "Cine ambiental:",
        descripcion: "Comprende una forma de cine documental dedicada al registro de la naturaleza y la vida silvestre, a menudo con fines ecológicos o medioambientales, por lo que puede incluir denuncia social o política."
    },
]

generoscine.forEach((tipo) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");//bootstrap

    const subtitulo = document.createElement("span");
    subtitulo.textContent = tipo.subtitulo;
    subtitulo.classList.add("subtitulo");

    const descripcion = document.createElement("p");
    descripcion.textContent = tipo.descripcion;

    li.appendChild(subtitulo);
    li.appendChild(descripcion);

    li.addEventListener("mouseenter", (event) => {
        event.target.classList.add("active")
    });

    li.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("active")
    });

    lista.appendChild(li);
});

