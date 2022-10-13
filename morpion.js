var plateau = [];
plateau.push([0,0,0]);
plateau.push([0,0,0]);
plateau.push([0,0,0]);
var joueur = 1

var cases_visu = document.getElementsByClassName("case");




function jouer_un_tour(x,y) {
	if(plateau[y][x] != 0) {
		alert("impossible de jouer ici"); 
	} else {
		plateau[y][x] = joueur ;
 	}
 	raffraichir_jeu(x,y,joueur) ;

 	if( win_condition()) {
 		alert("le joueur numero" + joueur + "a gagné")	
 	}

 	joueur = joueur%2+1 ;
 }


 function raffraichir_jeu(x,y,joueur) {
	let img = document.createElement("img");
 	if(joueur==1) {
 		img.setAttribute('src',"cross.png");
 		img.setAttribute('class',"cross");
 	} else {
 		img.setAttribute('src',"circle.png");
 		img.setAttribute('class',"circle");
 		
 	}	
 	cases_visu[y+x*3].appendChild(img);
 	

 }

 function click_case(x,y) {
 	jouer_un_tour(x,y)

 }

function win_condition() {
	return(
		plateau[0][0] == plateau[0][1] && plateau[0][0] == plateau[0][2] && plateau[0][0] != 0 || 
		plateau[1][0] == plateau[1][1] && plateau[1][0] == plateau[1][2] && plateau[1][0] != 0 || 
		plateau[2][0] == plateau[2][1] && plateau[2][0] == plateau[2][2] && plateau[2][0] != 0 || 

		plateau[0][0] == plateau[1][0] && plateau[0][0] == plateau[2][0] && plateau[0][0] != 0 || 
		plateau[0][1] == plateau[1][1] && plateau[0][1] == plateau[2][1] && plateau[0][1] != 0 || 
		plateau[0][2] == plateau[1][2] && plateau[0][2] == plateau[2][2] && plateau[0][2] != 0 || 

		plateau[0][0] == plateau[1][1] && plateau[0][0] == plateau[2][2] && plateau[0][0] != 0 || 
		plateau[0][2] == plateau[1][1] && plateau[0][2] == plateau[2][0] && plateau[0][2] != 0 
	)
		


		
}






