<h1 align="center">Juego del Amigo Secreto</h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-Completado-brightgreen" alt="Estado del Proyecto">
  <img src="https://img.shields.io/badge/Licencia-MIT-blue" alt="Licencia MIT">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow" alt="JavaScript ES6">
</p>

---

## Índice
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Lógica de Implementación](#lógica-de-implementación)
- [Acceso al Proyecto](#acceso-al-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Descripción del Proyecto

Este proyecto es parte del **Programa ONE - Oracle Next Education** en colaboración con **Alura**, desarrollado como un *challenge* para aplicar lo aprendido en los cursos de **Lógica de Programación: JavaScript**

El objetivo es implementar el clásico **Juego del Amigo Secreto**, donde los usuarios ingresan nombres y el sistema selecciona aleatoriamente uno de ellos como “amigo secreto”.

---

## Funcionalidades

- **Ingreso de nombres** a través de un campo de texto y botón "Añadir".
- **Visualización en lista** de todos los nombres ingresados.
- **Validaciones:**
  - No se permite ingresar texto vacío o solo espacios en blanco.
  - Detección de nombres repetidos con confirmación opcional para agregarlos.
- **Sorteo aleatorio** de un amigo secreto.
- **Mensaje de resultado** mostrando el nombre sorteado.

---

## Lógica de Implementación

### 1. Arreglo de amigos
```javascript
let amigos = [];
```

### 2. Función `agregarAmigo()`
- Obtiene el valor del input.
- Valida que no esté vacío o solo con espacios.
- Verifica si es repetido (`amigoRepetido()`).
- Si es válido, lo añade al arreglo, limpia el input y lo muestra en pantalla (`mostrarAmigos()`).

### 3. Función `amigoRepetido(amigo)`
- Comprueba si el nombre ya existe en el arreglo.
- Si existe, muestra un `confirm()` preguntando si se desea agregar igualmente.

### 4. Función `mostrarAmigos()`
- Recorre el arreglo `amigos` y construye dinámicamente la lista HTML.
- Inserta el contenido en el elemento `#listaAmigos`.

### 5. Función `sortearAmigo()`
- Comprueba si el arreglo no está vacío.
- Usa `Math.random()` y `Math.floor()` para obtener un índice aleatorio.
- Muestra el nombre seleccionado en el elemento `#resultado`.

---
## Acceso al Proyecto

Puedes descargar o clonar este repositorio con:
```bash
git clone https://github.com/iesvs-campi/oracle-one-challenge-amigo-secreto.git
```

También puedes abrirlo directamente en tu navegador abriendo el archivo `index.html` después de descargar el proyecto.

---

## Tecnologías Utilizadas

- **HTML5** – estructura de la aplicación.
- **CSS3** – estilos básicos y presentación.
- **JavaScript (ES6)** – lógica principal del juego.
- **DOM API** – manipulación de elementos y eventos en la página.

---

## Autor

Proyecto desarrollado por **Jesús Campos** como parte del programa **ONE - Oracle Next Education** en colaboración con **Alura**.

---

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**.  
Puedes usar, modificar y distribuir este código libremente, siempre y cuando incluyas la licencia original.

---