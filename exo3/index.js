
var rep = new Array;

var faite = new Array;

var score = 0;
 
rep[1] = "africain";

rep[2] = "chanteur";

rep[3] = "lutteur";

rep[4] = "usa";

rep[5] = "chanteur";


function truc(){
alert("c'est un point de vue");
}

function Engine(question, reponse) {

        if (reponse != rep[question]) 
        {

            if (!faite[question])
            {
                    faite[question] = -1;
            }
        }
        else {

            if (!faite[question]) 
            {

                faite[question] = -1;

                score +=20;

            }
        }

}

//formulaire de validation

let btnClick = document.getElementById('btn')
document.getElementsByTagName('form')[0].addEventListener('submit',(e)=>{
    e.preventDefault()
})
function NextLevel () 
{
    document.getElementById('resultats').innerHTML = `votre score est ${score}`
 
    faite = new Array;

    score = 0;

    document.quest.reset();

}
btnClick.addEventListener('click',NextLevel)
