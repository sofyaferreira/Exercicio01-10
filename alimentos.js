var cafe = []
var c
var almoco = []
var a
var janta = []
var j

document.write("<h1>"+"Cardápio"+"</h1>")

document.write("<h2>"+"Café da Manhã"+"</h2>")
do{
    c = prompt("Insira alimentos para o café da manhã")
    
    if(c == ""){
        alert("Insira um alimento válido")
        continue
    }

    if(c == null && cafe.length < 2){
        alert("Insira pelo menos dois alimentos")
        continue
    }
       
    if(c != null){
        cafe.push(c)
    }

    
}while(c != null || cafe.length < 2)


for (var i=0; i < cafe.length; i++){
    document.write("<li>" + cafe[i] + "</li>")
}

document.write("<h2>"+"Almoço"+"</h2>")
do{
    a = prompt("Insira alimentos para o almoço")

     if(a == ""){
        alert("Insira um alimento válido")
        continue
    }

    if(a == null && almoco.length < 2){
        alert("Insira pelo menos dois alimentos")
        continue
    }
       
    if(a != null){
        almoco.push(a)
    }

}while(a != null || almoco.lenght < 2)

    
for (var i=0; i < almoco.length; i++){
    document.write("<li>" + almoco[i] + "</li>")
}

document.write("<h2>"+"Jantar"+"</h2>")
do{
    j = prompt("Insira alimentos para o jantar")

     if(j == ""){
        alert("Insira um alimento válido")
        continue
    }

    if(j == null && janta.length < 2){
        alert("Insira pelo menos dois alimentos")
        continue
    }
       
    if(j != null){
        janta.push(j)
    }

}while(j != null || janta.lenght < 2)

    
for (var i=0; i < janta.length; i++){
    document.write("<li>" + janta[i] + "</li>")
}