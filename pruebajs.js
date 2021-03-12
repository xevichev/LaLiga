function tabla(partidos){


    
    for (let i = 0; i < partidos.length; i++) {

        let filainjection = document.getElementById("tabla");

        
        

        
        let nuevafila = document.createElement("tr");

        //-----jornada------

        // let nuevajornada=document.createElement("td");
        // nuevajornada.innerHTML=`${data.matches[i].matchday}`

        // filainjection.append(nuevajornada);
        
        //------------------local---------------
       
        
        let nuevolocal=document.createElement("td");
        //nuevolocal.innerHTML=`${data.matches[i].homeTeam.name}`;
        nuevolocal.append(matches[i].homeTeam.name)
        
        filainjection.append(nuevolocal);

    //     //----------------goles local-------------------
        
        
    //     let nuevogoleslocal=document.createElement("td");

    //     if (data.matches[i].status == "SCHEDULED") { 
    //         nuevogoleslocal.innerHTML= "-";
            
    //     }

    //     else{

    //     nuevogoleslocal.innerHTML=`${data.matches[i].score.fullTime.homeTeam}`;

    //     }

    //     filainjection.append(nuevogoleslocal);

    //     //----------------goles visitante----------------
        

    //     let nuevogolesvisitante=document.createElement("td");

    //     if (data.matches[i].status == "SCHEDULED") {
    //         nuevogolesvisitante.innerHTML="-";            
    //     } 
    //     else {
            
        
    //     nuevogolesvisitante.innerHTML=`${data.matches[i].score.fullTime.awayTeam}`;
    //     }

    //     filainjection.append(nuevogolesvisitante);


    //     //------------visitante---------
      

    //     let nuevovisitante=document.createElement("td");
    //     nuevovisitante.innerHTML=`${data.matches[i].awayTeam.name}`;

    //     filainjection.append(nuevovisitante);






    //     filainjection.append(nuevafila);

        
        
    // }

 
}


tabla(data.matches);


















// function tabla(){


    
//     for (let i = 0; i < data.matches.length; i++) {

//         let filainjection = document.getElementById("tabla");

//         let jornadaactual=1 
        
//         if (jornadaactual!=data.matches[i].matchday) {

//             let nuevafilajornada=document.createElement("tr");
//             let nuevajornada=document.createElement("td");
//             nuevajornada.innerHTML= "Jornada "+`${data.matches[i].matchday}`;

//             filainjection.append(nuevajornada)
            

//             jornadaactual=data.matches[i].matchday;
            
//         }
        
//         else{     
        

        
//         let nuevafila = document.createElement("tr");
//         //------------------local---------------
       
        
//         let nuevolocal=document.createElement("td");
//         nuevolocal.innerHTML=`${data.matches[i].homeTeam.name}`;
        
//         filainjection.append(nuevolocal);

//         //----------------goles local-------------------
        
        
//         let nuevogoleslocal=document.createElement("td");

//         if (data.matches[i].status == "SCHEDULED") { 
//             nuevogoleslocal.innerHTML= "-";
            
//         }

//         else{

//         nuevogoleslocal.innerHTML=`${data.matches[i].score.fullTime.homeTeam}`;

//         }

//         filainjection.append(nuevogoleslocal);

//         //----------------goles visitante----------------
        

//         let nuevogolesvisitante=document.createElement("td");

//         if (data.matches[i].status == "SCHEDULED") {
//             nuevogolesvisitante.innerHTML="-";            
//         } 
//         else {
            
        
//         nuevogolesvisitante.innerHTML=`${data.matches[i].score.fullTime.awayTeam}`;
//         }

//         filainjection.append(nuevogolesvisitante);


//         //------------visitante---------
      

//         let nuevovisitante=document.createElement("td");
//         nuevovisitante.innerHTML=`${data.matches[i].awayTeam.name}`;

//         filainjection.append(nuevovisitante);






        
//         }  
        
//         filainjection.append(nuevafila);

        
        
//     }

 
// }

}
// tabla();