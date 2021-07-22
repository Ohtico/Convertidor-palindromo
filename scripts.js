function obtenerTexto(){
  return document.getElementById('cuadroText').value
}

function esPalindromo(str){
  // reemplaza el contenido de esta funcion por el que yo te pase
  let string = str.normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^\w\s]/gi, '')
    .replace(/\s/g, '')
    .toLowerCase()

  let strinReverse = string.split('')
                    .reverse('')
                    .join('');

  return string == strinReverse
}

function mostrarMensaje(value, palindromo){
  swal.fire({
    title: value ? `La palabra ${palindromo}. Si es un palindromo ` : `La palabra ${palindromo}. No es un palindromo `,
    icon: `info`,
    confirmButtonText: `Entendido`,
    
    
  })
}

function verificarPalindromo(){
  const texto = obtenerTexto()
  const palindromo = esPalindromo(texto)
  mostrarMensaje(palindromo, texto)
}