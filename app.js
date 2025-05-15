//Definicion y creacion de las variables globales
let personajesDC = []
let personajesMarvel = []
let modoJuego = ""
let universoSeleccionado = ""
let personajeSeleccionado1 = null
let personajeSeleccionado2 = null
let turnoJugador1 = true
let vidaInicial1 = 100
let vidaInicial2 = 100
const estadisticasCombate = {
    dañoRealizado: 0,
    dañoRecibido: 0,
    ataquesCriticos: 0,
    ataquesDebiles: 0,
}

//Cargar los datos cuando el DOM este ready
document.addEventListener("DOMContentLoaded", () => {
    //Funcion para cargar los datos desde el json-Server
    cargarDatos()

    //Funcion para configurar los eventos segun la pagina actual
    configurarEventosPagina()
})


function cargarDatos(){
    
    personajesDC = [
    {
      id: 1,
      nombre: "Batman",
      nombreClave: "Bruce Wayne",
      descripcion:
        "El Caballero Oscuro de Gotham City, un vigilante que lucha contra el crimen utilizando su intelecto, habilidades físicas y tecnología avanzada.",
      imagen: src="images/DC/batman/batman.jpg",
      fuerza: 7,
      ataque: 8,
      debilidad: "Psicológica",
      vida: 100,
      universo: "DC", // Añadido para identificar el universo
      trajes: ["Clásico", "Armadura", "Sigilo", "Knightmare", "Táctico"],
      poderes: ["Maestro detective", "Artes marciales", "Tecnología avanzada", "Estratega"],
      historia:
        "Tras presenciar el asesinato de sus padres cuando era niño, Bruce Wayne juró venganza contra los criminales, entrenando física y mentalmente para combatir el mal en Gotham City.",
      ataques: [
        { nombre: "Batarang", daño: 15, tipo: "Distancia", animacion: "images/DC/batman/batarang" },
        { nombre: "Puñetazo", daño: 20, tipo: "Físico", animacion: "puñetazo-batman.gif" },
        { nombre: "Bomba de humo", daño: 10, tipo: "Área", animacion: "bomba-humo.gif" },
        { nombre: "Ataque sorpresa", daño: 25, tipo: "Crítico", animacion: "ataque-sorpresa.gif" },
      ],
    },
    {
      id: 2,
      nombre: "Superman",
      nombreClave: "Clark Kent",
      descripcion:
        "El Hombre de Acero, un alienígena de Krypton con poderes sobrehumanos que protege la Tierra como su mayor héroe.",
      imagen: "images/DC/superman/superman.jpg",
      fuerza: 10,
      ataque: 9,
      debilidad: "Kryptonita",
      vida: 100,
      universo: "DC", // Añadido para identificar el universo
      trajes: ["Clásico", "Negro", "Recuperación", "Kryptoniano", "Elite"],
      poderes: ["Super fuerza", "Vuelo", "Visión de calor", "Aliento helado", "Invulnerabilidad"],
      historia:
        "Nacido en el planeta Krypton como Kal-El, fue enviado a la Tierra por sus padres antes de la destrucción de su mundo. Criado como Clark Kent, usa sus poderes para proteger a la humanidad.",
      ataques: [
        { nombre: "Visión de calor", daño: 25, tipo: "Energía", animacion: "calor" },
        { nombre: "Super fuerza", daño: 30, tipo: "Físico", animacion: "fuerza" },
        { nombre: "Aliento helado", daño: 20, tipo: "Hielo", animacion: "hielo" },
        { nombre: "Vuelo supersónico", daño: 35, tipo: "Crítico", animacion: "vuelo" },
      ],
    },
    {
      id: 3,
      nombre: "Wonder Woman",
      nombreClave: "Diana Prince",
      descripcion:
        "Princesa Amazona y guerrera, bendecida por los dioses con habilidades sobrehumanas y destreza en combate.",
      imagen: "images/DC/mujer-maravilla/wonder_woman.jpg",
      fuerza: 9,
      ataque: 8,
      debilidad: "Ataduras",
      vida: 100,
      universo: "DC", // Añadido para identificar el universo
      trajes: ["Clásico", "Armadura", "Amazona", "Dorado", "Casual"],
      poderes: ["Fuerza sobrehumana", "Velocidad", "Vuelo", "Brazaletes deflectores", "Lazo de la verdad"],
      historia:
        "Diana es hija de Hipólita, reina de las Amazonas, y Zeus. Creció en Themyscira antes de partir al mundo de los hombres para combatir el mal y promover la paz.",
      ataques: [
        { nombre: "Lazo de la verdad", daño: 20, tipo: "Mágico", animacion: "lazo" },
        { nombre: "Brazaletes", daño: 15, tipo: "Defensa", animacion: "brazaletes" },
        { nombre: "Espada divina", daño: 25, tipo: "Físico", animacion: "espada" },
        { nombre: "Furia amazona", daño: 30, tipo: "Crítico", animacion: "furia" },
      ],
    },
    {
      id: 4,
      nombre: "Flash",
      nombreClave: "Barry Allen",
      descripcion:
        "El hombre más rápido del mundo, capaz de moverse a velocidades sobrehumanas y manipular la Speed Force.",
      imagen: "images/DC/flash/flash.jpg",
      fuerza: 6,
      ataque: 7,
      debilidad: "Frío",
      vida: 100,
      universo: "DC", // Añadido para identificar el universo
      trajes: ["Clásico", "Futuro", "Velocidad", "Experimental", "Oscuro"],
      poderes: ["Super velocidad", "Viaje en el tiempo", "Faseado molecular", "Lanzamiento de rayos"],
      historia:
        "Barry Allen era un científico forense que adquirió super velocidad tras ser alcanzado por un rayo y bañado en productos químicos. Usa sus poderes para proteger Central City.",
      ataques: [
        { nombre: "Puño supersónico", daño: 20, tipo: "Físico", animacion: "puño" },
        { nombre: "Tornado", daño: 15, tipo: "Área", animacion: "tornado" },
        { nombre: "Viaje en el tiempo", daño: 10, tipo: "Especial", animacion: "tiempo" },
        { nombre: "Velocidad máxima", daño: 30, tipo: "Crítico", animacion: "velocidad" },
      ],
    },
    {
      id: 5,
      nombre: "Aquaman",
      nombreClave: "Arthur Curry",
      descripcion: "Rey de la Atlántida, con fuerza sobrehumana y la capacidad de comunicarse con la vida marina.",
      imagen: "images/DC/aquaman/aquaman.jpg",
      fuerza: 8,
      ataque: 7,
      debilidad: "Deshidratación",
      vida: 100,
      universo: "DC", // Añadido para identificar el universo
      trajes: ["Clásico", "Rey", "Gladiador", "Atlante", "Casual"],
      poderes: ["Respiración acuática", "Comunicación con vida marina", "Fuerza sobrehumana", "Control del agua"],
      historia:
        "Hijo de un farero humano y una reina atlante, Arthur Curry descubrió sus orígenes y poderes, eventualmente reclamando su lugar como rey de la Atlántida y protector de los océanos.",
      ataques: [
        { nombre: "Tridente", daño: 25, tipo: "Físico", animacion: "tridente" },
        { nombre: "Control marino", daño: 20, tipo: "Agua", animacion: "agua" },
        { nombre: "Llamada a criaturas", daño: 15, tipo: "Invocación", animacion: "criaturas" },
        { nombre: "Furia de los mares", daño: 35, tipo: "Crítico", animacion: "marea" },
      ],
    },
    {
      id: 6,
      nombre: "Green Lantern",
      nombreClave: "Hal Jordan",
      descripcion:
        "Miembro del Cuerpo de Linternas Verdes, utiliza un anillo de poder alimentado por la fuerza de voluntad.",
      imagen: "images/DC/linterna-verde/linterna_verde2.jpg",
      fuerza: 7,
      ataque: 8,
      debilidad: "Miedo",
      vida: 100,
      universo: "DC", // Añadido para identificar el universo
      trajes: ["Clásico", "Espectro", "Parallax", "Rebirth", "Piloto"],
      poderes: ["Anillo de poder", "Vuelo", "Creación de constructos", "Escudo de energía"],
      historia:
        "Hal Jordan era un piloto de pruebas que recibió un anillo de poder de un Linterna Verde moribundo. Se convirtió en el protector del Sector 2814 como miembro del Cuerpo de Linternas Verdes.",
      ataques: [
        { nombre: "Puño de energía", daño: 20, tipo: "Energía", animacion: "puño-energia" },
        { nombre: "Ametralladora", daño: 15, tipo: "Distancia", animacion: "ametralladora" },
        { nombre: "Escudo", daño: 10, tipo: "Defensa", animacion: "escudo" },
        { nombre: "Voluntad absoluta", daño: 30, tipo: "Crítico", animacion: "voluntad" },
      ],
    },
  ]

  personajesMarvel = [
    {
      id: 1,
      nombre: "Iron Man",
      nombreClave: "Tony Stark",
      descripcion:
        "Genio inventor y multimillonario que creó una armadura de alta tecnología para salvar su vida y combatir el mal.",
      imagen: "images/MARVEL/iron-man/ironman.jpg",
      fuerza: 8,
      ataque: 9,
      debilidad: "Energía",
      vida: 100,
      universo: "MARVEL", // Añadido para identificar el universo
      trajes: ["Mark III", "Hulkbuster", "Nanotecnología", "Bleeding Edge", "Extremis"],
      poderes: ["Inteligencia superior", "Armadura tecnológica", "Vuelo", "Armas de energía"],
      historia:
        "Tony Stark, un genio inventor y CEO de Stark Industries, fue secuestrado y obligado a construir un arma. En su lugar, creó una armadura para escapar y se convirtió en Iron Man para proteger al mundo.",
      ataques: [
        { nombre: "Repulsor", daño: 20, tipo: "Energía", animacion: "repulsor.gif" },
        { nombre: "Misiles", daño: 25, tipo: "Explosivo", animacion: "misil.gif" },
        { nombre: "Láser", daño: 15, tipo: "Precisión", animacion: "laser.gif" },
        { nombre: "Unibeam", daño: 35, tipo: "Crítico", animacion: "unibeam.gif" },
      ],
    },
    {
      id: 2,
      nombre: "Thor",
      nombreClave: "Thor Odinson",
      descripcion: "Dios del Trueno asgardiano que empuña el martillo encantado Mjolnir y controla el poder del rayo.",
      imagen: "images/MARVEL/thor/thor.jpg",
      fuerza: 10,
      ataque: 9,
      debilidad: "Magia",
      vida: 100,
      universo: "MARVEL", // Añadido para identificar el universo
      trajes: ["Asgardiano", "Gladiador", "Rey", "Unworthy", "Ultimate"],
      poderes: ["Fuerza sobrehumana", "Control del rayo", "Vuelo", "Longevidad", "Resistencia"],
      historia:
        "Thor es el hijo de Odín y príncipe de Asgard. Fue enviado a la Tierra para aprender humildad y se convirtió en uno de sus mayores defensores, usando su martillo Mjolnir para controlar el trueno.",
      ataques: [
        { nombre: "Mjolnir", daño: 25, tipo: "Contundente", animacion: "martillo" },
        { nombre: "Relámpago", daño: 30, tipo: "Eléctrico", animacion: "rayo" },
        { nombre: "Stormbreaker", daño: 28, tipo: "Cortante", animacion: "hacha" },
        { nombre: "Furia de Asgard", daño: 40, tipo: "Crítico", animacion: "tormenta" },
      ],
    },
    {
      id: 3,
      nombre: "Spider-Man",
      nombreClave: "Peter Parker",
      descripcion:
        "Joven héroe con habilidades arácnidas que equilibra su vida de superhéroe con sus responsabilidades personales.",
      imagen: "images/MARVEL/spiderman/spiderman.jpg",
      fuerza: 7,
      ataque: 8,
      debilidad: "Responsabilidad",
      vida: 100,
      universo: "MARVEL", // Añadido para identificar el universo
      trajes: ["Clásico", "Simbionte", "Iron Spider", "Stealth", "Future Foundation"],
      poderes: ["Fuerza proporcional", "Agilidad sobrehumana", "Sentido arácnido", "Trepamuros", "Lanzatelarañas"],
      historia:
        "Peter Parker adquirió poderes arácnidos tras ser mordido por una araña radiactiva. Después de la muerte de su tío Ben, aprendió que un gran poder conlleva una gran responsabilidad.",
      ataques: [
        { nombre: "Telaraña", daño: 15, tipo: "Restricción", animacion: "telaraña" },
        { nombre: "Patada", daño: 20, tipo: "Físico", animacion: "patada" },
        { nombre: "Sentido arácnido", daño: 10, tipo: "Evasión", animacion: "sentido" },
        { nombre: "Combo arácnido", daño: 30, tipo: "Crítico", animacion: "combo" },
      ],
    },
    {
      id: 4,
      nombre: "Hulk",
      nombreClave: "Bruce Banner",
      descripcion: "El gigante esmeralda, una entidad de fuerza ilimitada que surge cuando Bruce Banner se enfurece.",
      imagen: "images/MARVEL/hulk/hulk.jpg",
      fuerza: 10,
      ataque: 10,
      debilidad: "Control mental",
      vida: 100,
      universo: "MARVEL", // Añadido para identificar el universo
      trajes: ["Clásico", "Gladiador", "Profesor", "Joe Fixit", "Worldbreaker"],
      poderes: ["Fuerza ilimitada", "Regeneración", "Resistencia", "Saltos enormes", "Inmunidad a toxinas"],
      historia:
        "El Dr. Bruce Banner fue expuesto a radiación gamma durante un experimento fallido, lo que le dio la capacidad de transformarse en Hulk cuando se enfada o está en peligro.",
      ataques: [
        { nombre: "Aplastamiento", daño: 35, tipo: "Físico", animacion: "aplastamiento" },
        { nombre: "Salto sísmico", daño: 25, tipo: "Área", animacion: "salto" },
        { nombre: "Rugido", daño: 15, tipo: "Intimidación", animacion: "rugido" },
        { nombre: "Furia incontrolable", daño: 45, tipo: "Crítico", animacion: "furia-hulk" },
      ],
    },
    {
      id: 5,
      nombre: "Captain America",
      nombreClave: "Steve Rogers",
      descripcion:
        "El primer vengador, un super soldado con fuerza, agilidad y resistencia mejoradas que porta un escudo de vibranium.",
      imagen: "images/MARVEL/capitan-america/capitan_america.jpg",
      fuerza: 7,
      ataque: 8,
      debilidad: "Lealtad",
      vida: 100,
      universo: "MARVEL", // Añadido para identificar el universo
      trajes: ["Clásico", "Stealth", "Vengador", "Nómada", "Comandante"],
      poderes: ["Fuerza mejorada", "Agilidad sobrehumana", "Resistencia", "Curación acelerada", "Maestro táctico"],
      historia:
        "Steve Rogers era un joven débil que se ofreció para un experimento gubernamental durante la Segunda Guerra Mundial. El suero del super soldado lo transformó en Captain America.",
      ataques: [
        { nombre: "Escudo", daño: 20, tipo: "Físico", animacion: "escudo" },
        { nombre: "Combate cuerpo a cuerpo", daño: 25, tipo: "Físico", animacion: "combate" },
        { nombre: "Lanzamiento de escudo", daño: 15, tipo: "Distancia", animacion: "lanzamiento" },
        { nombre: "Espíritu americano", daño: 30, tipo: "Crítico", animacion: "espiritu" },
      ],
    },
    {
      id: 6,
      nombre: "Black Widow",
      nombreClave: "Natasha Romanoff",
      descripcion: "Espía maestra y asesina entrenada, experta en combate y espionaje.",
      imagen: "images/MARVEL/viuda-negra/viuda_negra.jpg",
      fuerza: 6,
      ataque: 8,
      debilidad: "Pasado",
      vida: 100,
      universo: "MARVEL", // Añadido para identificar el universo
      trajes: ["Clásico", "Stealth", "Blanco", "Táctico", "Vengador"],
      poderes: [
        "Maestría en artes marciales",
        "Experta en armas",
        "Espionaje",
        "Agilidad mejorada",
        "Resistencia a toxinas",
      ],
      historia:
        "Entrenada desde joven en la Habitación Roja, Natasha Romanoff fue una de las mejores espías soviéticas antes de desertar y unirse a S.H.I.E.L.D. y posteriormente a los Vengadores.",
      ataques: [
        { nombre: "Mordida de viuda", daño: 20, tipo: "Eléctrico", animacion: "mordida" },
        { nombre: "Patada giratoria", daño: 15, tipo: "Físico", animacion: "patada-giratoria" },
        { nombre: "Pistolas", daño: 18, tipo: "Distancia", animacion: "pistolas" },
        { nombre: "Técnica letal", daño: 30, tipo: "Crítico", animacion: "tecnica" },
      ],
    },
  ]

//Si el usuario esta en la pagina DcMv.html carga las tarjetas de DC y Marvel
  if (window.location.pathname.includes("DcMv.html")) {
    //Funciones para cargar las secciones de los personajes
    cargarTarjetasPersonajes("dc-heroes", personajesDC)
    cargarTarjetasPersonajes("marvel-heroes", personajesMarvel)
  }
}