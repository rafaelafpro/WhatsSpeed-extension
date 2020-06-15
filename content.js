const interval = setInterval(()=>{
    const header = document.querySelector("._1QUKR");
    if(header){
        console.log(header);
        clearInterval(interval);
    


    const button = document.createElement("button");
    button.innerHTML = " 2x";
    button.classList.add("twoTimesButtonOff");


    button.addEventListener("click", ()=> {
        const audios = document.querySelectorAll("audio");
        console.log(audios);

        audios.forEach((audio) => {
            if (audio.playbackRate == 2){
                audio.playbackRate = 1;
                console.log(audio.playbackRate);
                button.classList.remove("twoTimesButtonOn")
                button.classList.add("twoTimesButtonOff");

            } else {
                button.classList.remove("twoTimesButtonOff")
                button.classList.add("twoTimesButtonOn");
                audio.playbackRate = 2;
                console.log(audio.playbackRate);
            }
        })
    })

    header.appendChild(button);

    }
}, 1000)




