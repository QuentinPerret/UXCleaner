//fonction RechercheMotif
function RechercherMotif(t1, t2){
    let t1Size = t1.Length;
    let t2Size = t2.Length;
    let count = 0;
    for(let i = 0; i<t2Size; i++){
        if(t2[i]==t1[0]){
            for(let j = 0 ; j<t2Size-i-1 ; j++){
                if(count!=t1Size){
                    if(t2[i+j]==t1[j]){
                        count+=1;
                    }
                    else{
                        count = 0;
                    }
                }
            }        
        }
    }
    if (count==t1Size){
        return true;
    }
    else{
        return false;
    }
}

//récupération

let content = document.body;

//Ici, il faut récupérer tous le body en enlevant les éléments de header et footer qui biaises la médiane

//Retirer classes en "nav" et "footer"
for (let k = 0; k<content.classList.length(); k++){
    // Si cette classe contient "nav" ou "footer", on enlève de content
    if (RechercherMotif("nav", content.classList[k])){
        content.classList.remove(content.classList[k]);
    }
    if (RechercherMotif("footer", content.classList[k])){
        content.classList.remove(content.classList[k]);
    }
}

//Retirer balises <header> et <footer>
content.getElementsByTagName("header").remove();
content.getElementsByTagName("footer").remove();

//initialisation tableau tailles
let totSize = [];
text.forEach(element => totSize.push(element.style.fontSize));

//Calculer médiane des taille
let mediane = -1;
totSize.sort();
size = totSize.length();
if (size%2 == 0){
    mediane = (totSize[length/2] + totSize[length/2 + 1])/2;
}
else{
    mediane = totSize[Math.abs(length/2) + 1];
}

// Mettre tous les caractères de taille < médiane à la médiane
content.forEach(element => {
    if (mediane > 0 && element.style.fontSize < mediane) {
        element.style.fontSize = mediane;
    }
});

console.log(content);




