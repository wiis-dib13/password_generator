const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const bu = document.getElementById("bu")
const cc = document.getElementById("cc")
const cv = document.getElementById("cv")

bu.addEventListener("click",function(){

    random()
})

function boucle(){
 let j = Math.floor(Math.random()*characters.length)
 return characters[j]
}


function random(){
    let u=0
    let v=0
   let y=" "
   let w= " "
    for(let i=0;i<15;i++){
       u=boucle()
       v =boucle()
       y += u
       w += v    
    }
cc.textContent = y
cv.textContent = w
}

cc.addEventListener("click",function(){
     const textToCopy = this.textContent.trim();

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert("Texte copie : " + textToCopy);
        })
        .catch(err => {
          console.error("Erreur lors de la copie :", err);
        });
    } else {
      alert("Aucun texte a copier !");
    }
})



cv.addEventListener("click",function(){
     const textToCopy = this.textContent.trim();

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert("Texte copie : " + textToCopy);
        })
        .catch(err => {
          console.error("Erreur lors de la copie :", err);
        });
    } else {
      alert("Aucun texte a copier !");
    }
})