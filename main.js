function getDataMatches() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches";
    fetch(url, {
        method: "GET",
        headers:{
            "X-Auth-Token":"fbe655ab381042ac8db7deb5af649ec9"
        }

    }).then(respone => {
        if(respone.ok) return respone.json();
    }).then(data=>{
        console.log(data);

        filtro(data.matches);
    })
    
};


getDataMatches();






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
        let imagen=document.createElement("img");
        imagen.setAttribute("src", `https://crests.football-data.org/${partidos[i].homeTeam.id}.svg`);
        nuevolocal.append(partidos[i].homeTeam.name,imagen)                  
    
        imagen.classList.add("logoescudo");
        
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
        let imagen2=document.createElement("img");
        imagen2.setAttribute("src", `https://crests.football-data.org/${partidos[i].awayTeam.id}.svg`);
        nuevovisitante.append(partidos[i].awayTeam.name,imagen2)                  
    
        imagen2.classList.add("logoescudo");


        nuevafila.append(nuevovisitante);

        filainjection.append(nuevafila);

       
                
    }

    
 
}








//-----Con--Enter------

// nombre.addEventListener('keypress', function (e) {
//     if (e.KeyCode=== 13) {

//         console.log(e.target.value);
        
//     }
// });

    

//.........primerintentodefiltro..........

let filtrarporequipo= document.querySelector("#Equipo");

filtrarporequipo.addEventListener("keydown",function(e){
    if (e.keyCode==13) {filtro(data.matches)}
        
    });


function filtro(partidos) {

    

    let nombre=document.querySelector("#Equipo").value;

    nombre=nombre.toLowerCase();
    
    nombre.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    console.log(nombre);

    if (nombre=="barça" || nombre=="barç"){

        nombre="barcelona";
    }

  
    if (nombre==""){
        tabla(partidos);
        let ocultarradios=document.getElementById("radios");
    
        ocultarradios.classList.add("nomostrar");
    }

    else {

        let equipoSeleccionado=[];
    
        for (let i = 0; i < partidos.length; i++) {
              
        if (partidos[i].homeTeam.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").indexOf(nombre) > -1 || partidos[i].awayTeam.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").indexOf(nombre) > -1) {

            equipoSeleccionado.push(partidos[i]);
        }              

        
        
        }
        console.log(equipoSeleccionado)          
        
        

        if (equipoSeleccionado.length == 0) {   
            
          
                        
            console.log("No hay coincidencias");
        }
    
        else {
                         
            let valorradio=document.form.filtropartidos.value;
            console.log(valorradio);
        
            if (valorradio=="todos"){
                
            tabla(equipoSeleccionado);}

            else if (valorradio=="Ganados") {

            let esGanados=[];
            for (let j = 0; j < equipoSeleccionado.length; j++) {
        
            if (equipoSeleccionado[j].score.winner=="HOME_TEAM" && equipoSeleccionado[j].homeTeam.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").indexOf(nombre) > -1 || equipoSeleccionado[j].score.winner=="AWAY_TEAM" && equipoSeleccionado[j].awayTeam.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").indexOf(nombre) > -1) 
        
            esGanados.push(equipoSeleccionado[j]);}

            tabla(esGanados);
            
            }
       
            else if (valorradio=="empate"){
            let esEmpate=[];
            for (let k = 0; k < equipoSeleccionado.length; k++) {
            
            if (equipoSeleccionado[k].score.winner=="DRAW"){

            esEmpate.push(equipoSeleccionado[k]);}
            }
            
            console.log(esEmpate);
            

            tabla(esEmpate);
                
            
            }

            else if(valorradio=="perdido"){
            let esPerdido=[];

                for (let g = 0; g < equipoSeleccionado.length; g++) {
                
                if (equipoSeleccionado[g].score.winner=="AWAY_TEAM" && equipoSeleccionado[g].homeTeam.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").indexOf(nombre) > -1 || equipoSeleccionado[g].score.winner=="HOME_TEAM" && equipoSeleccionado[g].awayTeam.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").indexOf(nombre) > -1){ 

                esPerdido.push(equipoSeleccionado[g]);}
            }

                tabla(esPerdido);
            }
    }
   
    }

    
    
}

// function nomatch() {

    
//     let nhc=document.getElementById("encabezado");
//     nhc.classList.add("nomostrar");

//     let tablatotal=document.getElementById("tabla");
//     tablatotal.innerHTML="";
//     let mnhc=document.createElement("tr");
//     mnhc.innerHTML="No hay coincidencias";

//     tablatotal.append(mnhc);
    
// }

// function match() {
//     let resetencabezado=document.getElementById("encabezado");
//     resetencabezado.classList.replace("mostrar");

    
    
    
//}

function ocultarradios() {

    let ocultarradios=document.getElementById("radios");
    
    ocultarradios.classList.add("nomostrar");
}
