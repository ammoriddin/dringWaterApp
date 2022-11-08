const smallCups = document.querySelectorAll(".cup-small"),
      liters = document.querySelector("#liters"),
      percentage = document.querySelector("#percentage"),
      remeined = document.querySelector("#remained");

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click',() => highlightedCups(idx))
})

function highlightedCups(idx){
    if(idx === 7 && smallCups[idx].classList.contains("full")){
        idx--;
    }else if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add("full")
        }else{
            cup.classList.remove("full")
        };
    });
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`
    }

    if(fullCups === totalCups){
        remeined.style.visibility = 'hidden';
        remeined.style.height = 0;
    }else{
        remeined.style.visibility = 'visible';
        liters.innerText = `${ 2 - (250 * fullCups) / 1000}L`
    }
}

updateBigCup();