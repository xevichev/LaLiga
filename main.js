function tabla(partidos){

    let filainjection = document.getElementById("tabla");
    filainjection.innerHTML="";
    
    for (let i = 0; i < partidos.length; i++) {             
      
        let nuevafila = document.createElement("tr");

        //-----jornada------

        let nuevajornada=document.createElement("td");
        nuevajornada.innerHTML=`${partidos[i].matchday}`

        nuevafila.append(nuevajornada);
        
        //------------------local---------------       
        
        let nuevolocal=document.createElement("td");
        nuevolocal.innerHTML=`${partidos[i].homeTeam.name}` ;
        // let escudolocal=document.createElement("img");
        // escudolocal.setAttribute("scr",partidos[i].team.crestUrl);
        // nuevolocal.append(escudolocal);
        
        nuevafila.append(nuevolocal);

        //----------------Resultado-------------------

        let nuevoresultado=document.createElement("td");
        
        if (partidos[i].status == "SCHEDULED") { 
            nuevoresultado.innerHTML= "- -";
            
        }

        else{
        nuevoresultado.innerHTML=`${partidos[i].score.fullTime.homeTeam} - ${partidos[i].score.fullTime.awayTeam}`;
        }

        nuevafila.append(nuevoresultado);       

        //------------visitante---------
      

        let nuevovisitante=document.createElement("td");
        nuevovisitante.innerHTML=`${partidos[i].awayTeam.name}`;

        nuevafila.append(nuevovisitante);

        filainjection.append(nuevafila);
                
    }
 
}

tabla(data.matches);






//-----Con--Enter------

// nombre.addEventListener('keypress', function (e) {
//     if (e.KeyCode=== 13) {

//         console.log(e.target.value);
        
//     }
// });

    




//.........primerintentodefiltro..........

function filtro(partidos) {

    let nombre=document.querySelector("#Equipo").value;

    nombre=nombre.toLowerCase();

    console.log(nombre);
  
    if (nombre==""){
        tabla(partidos);
    }

    else {

    let equipoSeleccionado=[];
    
    for (let i = 0; i < partidos.length; i++) {
              
        if (partidos[i].homeTeam.name.toLowerCase().indexOf(nombre) > -1 || partidos[i].awayTeam.name.toLowerCase().indexOf(nombre) > -1) {

            equipoSeleccionado.push(partidos[i]);
        }              

        
        
    }
    console.log(equipoSeleccionado)
    
    if (equipoSeleccionado.length == 0) {
        
        console.log("no hay coincidencias");
    }
    else {
    tabla(equipoSeleccionado);
    }
  
    }
}

