sliderNum1()

function sliderNum1() {

    

    const sliderBox = document.querySelector(".slider_elements");
    const buttonLeft = document.querySelector(".slider_left");
    const buttonRight = document.querySelector(".slider_right");
    let count = 0

    buttonRight.addEventListener('click', ()=> {

        if(count < 7) {
            buttonRight.classList.remove('none');
            buttonLeft.classList.remove('none');
            count++
            if (count == 7) {
                buttonRight.classList.add('none');
            }
            
        } else {
            buttonRight.classList.remove('none');
            count = count
        }
        sliderBox.style.left = `${"-" + (count * 225)}px`;

    });

    buttonLeft.addEventListener('click', ()=> {

        if(count > 0) {
            buttonLeft.classList.remove('none');
            buttonRight.classList.remove('none');
            count--
            if (count == 0) {
                buttonLeft.classList.add('none');
            } 
        } else {
            buttonLeft.classList.remove('none');
            count = count
        }
        sliderBox.style.left = `${"-" + (count * 225)}px`;

    });

}