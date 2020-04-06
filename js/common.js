
function inputKeyupHandler(placeholder) {
    document
        .querySelector(`.form-input input[name=${placeholder}]`)
        .addEventListener('keyup', (e) => {
            const label = document.querySelector(`[for=${placeholder}]`);
            const isInputEmpty = e.target.value.trim().length < 1;
            if (!isInputEmpty && label) { 
                label.classList.remove('hide-label');
                label.classList.add('show-label'); 
            }
        });
}

function inputClickHandler(placeholder) {
    document
        .querySelector(`.form-input input[name=${placeholder}]`)
        .addEventListener('click', (e) => {
            const label = document.querySelector(`[for=${placeholder}]`);
            const isInputEmpty = e.target.value.trim().length < 1;
            if (isInputEmpty && label) {
                label.classList.remove('hide-label');
                label.classList.add('show-label');
                e.target.placeholder = '';
            }
        });
}

function inputBlurHandler(placeholder) {
    document
        .querySelector(`.form-input input[name=${placeholder}]`)
        .addEventListener('blur', (e) => {
            const label = document.querySelector(`[for=${placeholder}]`);
            const isInputEmpty = e.target.value.trim().length < 1;
            if (isInputEmpty && label) {
                label.classList.add('hide-label');
                label.classList.remove('show-label');

                e.target.classList.remove('trim-input');
                e.target.classList.add('input-spacing')
                e.target.value = '';
                e.target.placeholder = titleCase(placeholder);
            } 

            if (!isInputEmpty) {
                e.target.classList.add('trim-input');
                e.target.classList.remove('input-spacing')
            }
        })
}

function titleCase(word) { 
    let result = '';
    if (word) 
        result = word.charAt(0).toUpperCase() + word.slice(1);
    return result;
}