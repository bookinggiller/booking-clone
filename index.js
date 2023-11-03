sliderNum1()

function sliderNum1() {



    const sliderBox = document.querySelector(".slider_elements");
    const buttonLeft = document.querySelector(".slider_left");
    const buttonRight = document.querySelector(".slider_right");
    let count = 0

    buttonRight.addEventListener('click', () => {

        if (count < 7) {
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

    buttonLeft.addEventListener('click', () => {

        if (count > 0) {
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


//  MERT

sliderNum3()

function sliderNum3() {

    const sliderBox3 = document.querySelector(".slider5_elements");
    const buttonLeft3 = document.querySelector(".slider_left_3");
    const buttonRight3 = document.querySelector(".slider_right_3");
    let count3 = 0

    buttonRight3.addEventListener('click', () => {

        if (count3 < 4) {
            buttonRight3.classList.remove('none');
            buttonLeft3.classList.remove('none');
            count3++
            if (count3 == 4) {
                buttonRight3.classList.add('none');
            }

        } else {
            buttonRight3.classList.remove('none');
            count3 = count3
        }

        sliderBox3.style.left = `${"-" + (count3 * 281.5)}px`;
    });

    buttonLeft3.addEventListener('click', () => {

        if (count3 > 0) {
            buttonLeft3.classList.remove('none');
            buttonRight3.classList.remove('none');
            count3--
            if (count3 == 0) {
                buttonLeft3.classList.add('none');
            }
        } else {
            buttonLeft3.classList.remove('none');
            count3 = count3
        }

        sliderBox3.style.left = `${"-" + (count3 * 281.5)}px`;

    });

}



let btns = document.querySelectorAll('#btn, #btn2, #btn3, #btn4, #btn5, #btn6');

btns.forEach(function (button) {
    let isButtonStyled = false; // Her düğme için ayrı bir stil durumu

    button.addEventListener('click', function onClick() {
        if (!isButtonStyled) {
            // Düğmenin yeni stilini ayarla
            button.style.backgroundColor = 'lightblue';
            button.style.color = 'blue';
            button.style.border = '1px solid blue';
            isButtonStyled = true; 
        } else {
            // Düğmenin stilini eski haline getir
            button.style.backgroundColor = '';
            button.style.color = '';
            button.style.border = '';
            isButtonStyled = false; 
        }
    });
});
