function tabla(partidos){


    
    for (let i = 0; i < partidos.length; i++) {

        let filainjection = document.getElementById("tabla");
       
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

let nombre=document.querySelector("#Equipo").value;
    
console.log(nombre);


//.........primerintentodefiltro..........

function filtro() {

    let nombre=document.querySelector("#Equipo").value;
    
    console.log(nombre);

    // for (let i = 0; i < partidos.length; i++) {
       
    //     if (nombre!=partidos[i].homeTeam.name || partidos[i].awayTeam.name) {

    //         borrar=partidos.splice(i,1)

    //         i=i-1
            
    //     }
    // }
    
    // tabla(partidos)
}

//.........segundointentodeflitro.............

function filtronombre(nombre, partidos) {

    for (let i = 0; i < partidos.length; i++) {
    
        if (nombre==partidos[i].homeTeam.name || partidos[i].awayTeam.name) {

            
        }
    }
    
}