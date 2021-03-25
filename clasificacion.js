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

    let filainjection=document.getElementById("tablaclasificacion");
    
    for (let i = 0; i < tabladeposiciones.length; i++) {        
    
   

    let row=document.createElement("tr");


    //------posicion-----
    let posicion=document.createElement("td");

    posicion.innerHTML=`${tabladeposiciones[i].position}`;
   
    row.append(posicion);
    //------equipo------
    let nuevoequipo=document.createElement("td");
    let imagen=document.createElement("img");
    imagen.setAttribute("scr",tabladeposiciones[i].team.crestUrl);
    
    nuevoequipo.append(tabladeposiciones[i].team.name, imagen);
    imagen.classList.add("logoescudo");

    row.append(nuevoequipo);    
    //---puntos-----
    let nuevospuntos=document.createElement("td");

    nuevospuntos.innerHTML=`${tabladeposiciones[i].points}`;
    
    row.append(nuevospuntos);

    //---goles de diferencia
    let nuevosgolesdif=document.createElement("td");  

    nuevosgolesdif.innerHTML=`${tabladeposiciones[i].goalDifference}`;
    
    row.append(nuevosgolesdif);
    
    // row.append(posicion,nuevoequipo,nuevospuntos,nuevosgolesdif);

    filainjection.append(row);

    
        
    }

           
}


