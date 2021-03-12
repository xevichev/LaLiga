
// function mejordiferenciagoles(equipos) {

//     let comparargoles=[];

//     for (let i = 0; i < dataclas.standings[0].table.length; i++) {
        
//         let diferenciagoles=dataclas.standings[0].table[i].goalDifference;

//         comparargoles.push(diferenciagoles)

        

                
//     }

//     console.log(comparargoles)
//     console.log(comparargoles.sort(((a,b) => a-b)));

        
// }



// mejordiferenciagoles(dataclas.standings[0].table)



console.log(dataclas.standings[0].table)

function mejorgoles(equipos) {

    let equiposcomparar= equipos;

    equiposcomparar=equiposcomparar.sort((a,b) => {
        if (a.goalDifference < b.goalDifference){
            return -1;
        }
        else if (a.goalDifference > b.goalDifference){
            return 1;
        }
        else {
            return 0;
        }   
    
    })

    
}

console.log(mejorgoles([dataclas.standings[0].table]));





//----% de partidos empatados sobre total.


function porcentajeempates(partidos) {

    let partidosjugados=[];

    let partidosempatados=[];

    for (let i = 0; i < partidos.length; i++) {
        
        if (partidos[i].status == "FINISHED") {
            
            partidosjugados.push(partidos[i]);
        }

        if (partidos[i].score.winner == "DRAW") {

            partidosempatados.push(partidos[i]);
            
        }
    }

       
    let resultado= (partidosempatados.length / partidosjugados.length)*100;

    resultado= resultado.toFixed(2);
    
    let estadisticainjection=document.getElementById("estadisticas");

    let stat1=document.createElement("li");


    stat1.innerHTML="Porcentaje de partidos empatados: "+ resultado + "%";

    estadisticainjection.append(stat1);

}

porcentajeempates(data.matches);




//----% totalpartidos ganados en casa.

function porcentajeGanadosCasa(partidos) {
    

    let partidosjugados=[];
    
    let partidosGanadosCasa=[];
    
    for (let i = 0; i < partidos.length; i++) {
            
        if (data.matches[i].status == "FINISHED") {
                
         partidosjugados.push(data.matches[i]);
        }
    
        if (data.matches[i].score.winner == "HOME_TEAM") {
    
           partidosGanadosCasa.push(data.matches[i]);
                
        }
    }
    
    let resultado= (partidosGanadosCasa.length / partidosjugados.length)*100;
    
      
    resultado= resultado.toFixed(2);
    
    let estadisticainjection=document.getElementById("estadisticas");
    
    let stat3=document.createElement("li");
    
    
    stat3.innerHTML="Porcentaje de partidos ganados por el equipo de casa: "+ resultado + "%";
    
    estadisticainjection.append(stat3);
       
    
    
}



//-----% total partidos ganados fuera de casa.

function porcentajeGanadosFuera(partidos) {

    let partidosjugados=[];

    let partidosGanadosFuera=[];

    for (let i = 0; i < partidos.length; i++) {
        
        if (data.matches[i].status == "FINISHED") {
            
            partidosjugados.push(data.matches[i]);
        }

        if (data.matches[i].score.winner == "AWAY_TEAM") {

            partidosGanadosFuera.push(data.matches[i]);
            
        }
    }

    let resultado= (partidosGanadosFuera.length / partidosjugados.length)*100;

    console.log(resultado);

    resultado= resultado.toFixed(2);

    let estadisticainjection=document.getElementById("estadisticas");

    let stat2=document.createElement("li");


    stat2.innerHTML="Porcentaje de partidos ganados por el equipo visitante: "+ resultado + "%";

    estadisticainjection.append(stat2);
   
}

//-------decididos en la segunda parte-------


function decididosSegundaParte(partidos) {

    let partidosEmpatadosPT=[]

    let partidosNoEmpatadosFinal=[]

    for (let i = 0; i < partidos.length; i++) {
       
        if (partidos[i].score.halfTime.homeTeam === partidos[i].score.halfTime.awayTeam) {

            partidosEmpatadosPT.push(partidos[i]);            
        }
        
        if (partidos[i].score.halfTime.homeTeam === partidos[i].score.halfTime.awayTeam  && partidos[i].score.fullTime.homeTeam != partidos[i].score.fullTime.awayTeam  ) {

            partidosNoEmpatadosFinal.push(partidos[i]);
            
        }
    }
    
    let resultado= (partidosNoEmpatadosFinal.length / partidosEmpatadosPT.length)*100;

    resultado= resultado.toFixed(2);

    let estadisticainjection=document.getElementById("estadisticas");

    let stat4=document.createElement("li");


    stat4.innerHTML="Porcentaje de partidos decididos en la segunda mitad: "+ resultado + "%";

    estadisticainjection.append(stat4);
}



// -------------Llamadas a las funciones----------


porcentajeGanadosCasa(data.matches);

porcentajeGanadosFuera(data.matches);



decididosSegundaParte(data.matches);

li.classList.add('list-group-item');

