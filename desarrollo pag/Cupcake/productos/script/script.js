const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Cierra el menú si haces clic fuera (solo en móvil)
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      if (window.innerWidth < 768) {
        menu.style.display = 'none';
      }
    }
  });

  // Al cambiar tamaño de ventana, ajusta el menú correctamente
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });

  // Inicializa el estado correcto al cargar
  window.addEventListener('load', () => {
    if (window.innerWidth >= 768) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });













//TODO ESTO SON LOS CUADROS JUNTO CON LAS IMAGENES Y LETRAS CON IMAGENES

const imagenes = [
  { img: 'img/1.jpg', texto: 'Cupcake de arandano', precio: '$180' },
  { img: 'img/p.jpg', texto: 'Pastel de flores', precio: '$150' },
  { img: 'img/ch.jpg', texto: 'Chocolate con Café', precio: '$160' },
  { img: 'img/c.jpg', texto: 'Café Americano', precio: '$170' },
  { img: 'img/5.jpg', texto: 'Cupcake de fambruesa', precio: '$180' },
  { img: 'img/ppa.jpg', texto: 'Pastel de flores vairadas', precio: '$190' },
  { img: 'img/7.jpg', texto: 'Cupcake de bayas silvestres', precio: '$200' },
  { img: 'img/pas.jpg', texto: 'Pastel de cumpleaños', precio: '$210' },
  { img: 'img/cho.jpg', texto: 'Chocolate con espuma', precio: '$220' },
  { img: 'img/past.jpg', texto: 'Pastel de rosales', precio: '$230' },
  { img: 'img/choc.jpg', texto: 'Chocolate con café puro', precio: '$240' },
  { img: 'img/8.jpg', texto: 'Cupcake con fondant', precio: '$250' },
  { img: 'img/10.jpg', texto: 'Cupcake con caramelo', precio: '$260' },
  { img: 'img/9.jpg', texto: 'Cupcake con cereza ', precio: '$270' },
  { img: 'img/pastt.jpg', texto: 'Pastel con crema', precio: '$280' },
  { img: 'img/ca.jpg', texto: 'Chocolate con malvaviscos', precio: '$290' },
  { img: 'img/pastele.jpg', texto: 'Pastel con bayas moradas espacial', precio: '$300' },
  { img: 'img/cafe.jpg', texto: 'Café especial', precio: '$310' },
  { img: 'img/paste.jpg', texto: 'Pastel cubierto de rosales', precio: '$320' },
  { img: 'img/caf.jpg', texto: 'Chocolate negro espeso', precio: '$330' },
  { img: 'img/caaf.jpg', texto: 'Café con crema', precio: '$340' },
  { img: 'img/2.jpg', texto: 'Cupcake con chispas', precio: '$350' },
  { img: 'img/3.jpg', texto: 'Cupcake con fambruesa', precio: '$360' },
  { img: 'img/pastel.jpg', texto: 'Pastel con Cupcakes', precio: '$370' },
  { img: 'img/cafee.jpg', texto: 'Café especial con chocolate', precio: '$380' },
  { img: 'img/6.jpg', texto: 'Cupcake bayado', precio: '$390' },
  { img: 'img/pasteles.jpg', texto: 'Pastel con bayas moradas', precio: '$400' },
];

const cuadrosPorPagina = 9;
let paginaActual = 1;

function renderizarCuadros() {
  const container = document.getElementById("cuadros-container");
  container.innerHTML = "";

  const filtro = document.getElementById("buscador").value.toLowerCase();

  const imagenesFiltradas = imagenes.filter(item =>
    item.texto.toLowerCase().includes(filtro)
  );

  const totalPaginas = Math.ceil(imagenesFiltradas.length / cuadrosPorPagina);
  if (paginaActual > totalPaginas) paginaActual = 1;

  const inicio = (paginaActual - 1) * cuadrosPorPagina;
  const fin = inicio + cuadrosPorPagina;
  const imagenesPagina = imagenesFiltradas.slice(inicio, fin);

  imagenesPagina.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cuadro";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.texto}">
      <p>${item.texto}</p>
      <p class="precio">${item.precio}</p>
      <button class="agregar-carrito">Agregar al carrito</button>
    `;

    div.querySelector(".agregar-carrito").addEventListener("click", (e) => {
      e.stopPropagation();
      agregarAlCarrito(item);
    });

    div.addEventListener("click", () => {
      mostrarModal(item);
    });

    container.appendChild(div);
  });

  document.querySelectorAll(".paginacion button").forEach((btn, i) => {
    btn.classList.toggle("active", i + 1 === paginaActual);
  });
}

function cambiarPagina(num) {
  paginaActual = num;
  renderizarCuadros();
}

document.getElementById("buscador").addEventListener("input", () => {
  paginaActual = 1;
  renderizarCuadros();
});

renderizarCuadros();

function mostrarModal(item) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <img src="${item.img}" alt="${item.texto}">
      <h2>${item.texto}</h2>
      <p class="precio">${item.precio}</p>
      <button id="agregar-desde-modal">Agregar al carrito</button>
      <button id="cerrar-modal">Cerrar</button>
    </div>
  `;
  modal.style.display = "block";

  document.getElementById("agregar-desde-modal").addEventListener("click", (e) => {
    e.stopPropagation();
    agregarAlCarrito(item);
    modal.style.display = "none";
  });

  document.getElementById("cerrar-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

let carrito = [];

function agregarAlCarrito(producto) {
  const index = carrito.findIndex(item => item.texto === producto.texto);
  if (index !== -1) {
    carrito[index].cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const contador = document.getElementById("contador-carrito");
  const total = document.getElementById("total-carrito");

  lista.innerHTML = "";
  let sumaTotal = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.texto} - ${item.precio} x ${item.cantidad}
      <button onclick="cambiarCantidad(${index}, 1)">+</button>
      <button onclick="cambiarCantidad(${index}, -1)">-</button>
      <button onclick="eliminarDelCarrito(${index})">x</button>
    `;
    lista.appendChild(li);
    sumaTotal += parseFloat(item.precio.replace('$', '')) * item.cantidad;
  });

  contador.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  total.textContent = `Total: $${sumaTotal.toFixed(2)}`;
}

function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  actualizarCarrito();
}

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
}

document.getElementById("ver-carrito").addEventListener("click", () => {
  document.getElementById("carrito").style.display = "block";
  agregarBotonPagar();
});

document.getElementById("cerrar-carrito").addEventListener("click", () => {
  document.getElementById("carrito").style.display = "none";
});

function agregarBotonPagar() {
  if (!document.getElementById("pagar-carrito")) {
    const boton = document.createElement("button");
    boton.id = "pagar-carrito";
    boton.textContent = "Pagar";
    boton.style.marginLeft = "10px";

  boton.addEventListener("click", () => {
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guarda el carrito
  window.location.href = "../pagar/index.html"; // Redirige a la nueva página
});

    document.getElementById("carrito").appendChild(boton);
  }
}

