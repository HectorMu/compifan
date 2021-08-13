export default class ExpressionFinder{
    constructor(){

    }
    FindExpresion(token){
        let response = "No identificado"
        if(this.isReserved(token)){
            response = "Palabra reservada"
        }
        if(this.isAssign(token)){
            response = "Expresion de asignacion"
        }
        if(this.isBlankSpace(token)){
            response ="Espaciado"
        }
        if(this.isDirection(token)){
            response ="Parametros direccion de giro"
        }
        if(this.isVelocity(token)){
            response ="Parametros direccion de Velocidad"
        }
        if(this.isDelimiterOpen(token)){
            response = "Delimitador de apertura"
        }
        if(this.isDelimiterClose(token)){
            response = "Delimitador de cierre"
        }
        if(this.isCondition(token)){
            response = "Expresion de condicion"
        }
        if(this.isPlusOperator(token)){
            response ="Operador de suma"
        }
        if(this.isMinusOperator(token)){
            response ="Operador de resta"
        }
        return  response
    }
    
    //all match methods
    isReserved(token){
        let matchStatus = false
        let reservedWords = ['Encender','int','si','Proceso',
        'Retardo','Giro.Derecha','Giro.Izquierda','Velocidad']
        reservedWords.forEach(word => {
                if(token.includes(word)){
                    matchStatus = true
                }
         });
        return matchStatus
    }
    isAssign(token){
        let matchStatus = false
        const asign = /\w\=\d+;$/
        if(asign.test(token)){
            matchStatus = true
        }
        return matchStatus
    }
    isBlankSpace(token){
        let matchStatus = false
        if(token==null || token.match(/^ *$/) !== null){
            matchStatus = true
        }
        return matchStatus
    }
    isDirection(token){
        let matchStatus = false
        const direction = /\(\w\d*,\w\d*\)/
        if(direction.test(token)){
            matchStatus = true
        }
        return matchStatus
    }
    isVelocity(token){
        let matchStatus = false
        const velocity = /\(\w\d*:\w\d*\)/
        if(velocity.test(token)){
            matchStatus = true
        }
        return matchStatus
    }
    isDelimiterOpen(token){
        let matchStatus = false
        const delimiterOpen = "<"
        if(token==delimiterOpen){
            matchStatus = true
        }
        return matchStatus  
    }
    isDelimiterClose(token){
        let matchStatus = false
        const delimiterClose = ">"
        if(token==delimiterClose){
            matchStatus = true
        }
        return matchStatus  
    }
    isCondition(token){
        let matchStatus = false
        const conditions = /\(\w\>\w*\d*\)|\(\w\<\w*\d*\)|\(\w\<=\w*\d*\)|\(\w\>=\w*\d*\)|\(\w==\w*\d*\)/ 
        if(conditions.test(token)){
            matchStatus = true
        }
        return matchStatus
    }
    isPlusOperator(token){
        let matchStatus = false
        const plus = /\w\+\+/
        if(plus.test(token)){
            matchStatus = true
        }
        return matchStatus  
    }
    isMinusOperator(token){
        let matchStatus = false
        const minus = /\w\-\-/
        if(minus.test(token)){
            matchStatus = true
        }
        return matchStatus  
    }
}
