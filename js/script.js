var mailCopy = document.getElementById("mailY");

function welcomeF(){
    alert("Welcome! this is my portafolio!");
}

const CopyClip = async () => {
    await navigator.clipboard.writeText("justinearriagam@gmail.com");
    alert("Email has been copy on your clipboard!");

}

const ThnksForComing = () => {
    console.log("What do you think about my portafolio? Please fill this survey so that way I can improve in future proyects! ");
}


mailCopy.addEventListener('click', CopyClip);