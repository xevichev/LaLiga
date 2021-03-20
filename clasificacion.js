function getData() {
    const url = "https://api.football-data.org/v2/competitions/2014/standings";
    fetch(url, {
        method: "GET",
        headers:{
            "X-Auth-Token":"fbe655ab381042ac8db7deb5af649ec9"
        }

    }).then(respone => {
        if(respone.ok) return respone.json();
    }).then(data=>{
        console.log(data);

        clasficacion(data.standings[0].table);
    })
    
};


getData();





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
    // let escudo=document.createElement("td");
    
    // let imagen=document.createElement("img");

    // escudo.append(imagen);
    // imagen.setAttribute("scr",tabladeposiciones[i].team.crestUrl)

    // row.append(escudo);
    
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


