//all files imports 
import AnalizadorLexico from './js/AnalizadorLexico.js'
import AnalizadorSintactico from './js/AnalizadorSintactico/AnalizadorSintactico.js'
import UI from './js/UserInterface.js'
//all object instances for each file class
const ui = new UI()
const analizadorlexico = new AnalizadorLexico(ui)
const analizadorsintactico = new AnalizadorSintactico(ui)


const BtnCompilar = document.getElementById('BtnCompilar')
const codigo = document.getElementById('TxtCodigo')
let tokenTable = []
//saving token array from lexical analizer intoToken table global array


const compilar = ()=>{
    analizadorlexico.Compile()
    analizadorsintactico.ErrorFinder(analizadorlexico.GetTokenArray())
}
//compile from clicking a button
BtnCompilar.onclick = compilar

//autocompilation
codigo.onkeyup = compilar





