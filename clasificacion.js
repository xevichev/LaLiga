console.log(dataclas.standings[0])


function clasficacion(tabladeposiciones) {
    
    for (let i = 0; i < tabladeposiciones.length; i++) {        
    
    let filainjection=document.getElementById("tablaclasificacion");

    let row=document.createElement("tr");


    //------posicion-----
    let posicion=document.createElement("td");

    posicion.innerHTML=`${tabladeposiciones[i].position}`;
    row.append(posicion);

    //------equipo------
    let nuevoequipo=document.createElement("td");

    nuevoequipo.innerHTML=`${tabladeposiciones[i].team.name}`;

    row.append(nuevoequipo);
    //-----escudo----
    let escudo=document.createElement("td");
    
    let imagen=document.createElement("img");

    escudo.append(imagen);
    imagen.setAttribute("scr",tabladeposiciones[i].team.crestUrl)

    row.append(escudo);
    
    //---puntos-----
    let nuevospuntos=document.createElement("td");

    nuevospuntos.innerHTML=`${tabladeposiciones[i].points}`;
    row.append(nuevospuntos);

    //---goles de diferencia
    let nuevosgolesdif=document.createElement("td");  

    nuevosgolesdif.innerHTML=`${tabladeposiciones[i].goalDifference}`;
    row.append(nuevosgolesdif);


    filainjection.append(row);
        
    }
           
}
clasficacion(dataclas.standings[0].table);

