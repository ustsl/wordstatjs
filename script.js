'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('form'),
        textArea = document.getElementById('exampleFormControlTextarea1'),
        button = document.querySelector('button'),
        finalContent = document.querySelectorAll('.col')[1],
        select = document.getElementById('exampleFormControlSelect1');


    function plusReplacer(txt) {
        txt = txt.replace('+', '');
        txt = txt.replace('+', '');
        return txt;
    }


    function processngRules(txt, selected) {

        switch (selected) {

            case 1:
                txt = plusReplacer(txt);
                break;
            case 2:
                txt = plusReplacer(txt);
                txt = txt.split(' ').map(s => '+' + s).join(' ');
                break;
            case 3:
                txt = plusReplacer(txt);
                txt = `"${txt}"`;
                break;
            case 4:
                txt = plusReplacer(txt);
                txt = `[${txt}]`;
                break;
        }


        return txt += '<br>';
    }


    function showContent(textForm, selected) {

        let timer = 0;
        const list = textForm.split('\n');
        let result = '';
        list.forEach(txt => {

            timer += 1;
            if (timer > 2 && txt.length > 2) {
                let readyString = txt.split('\t')[0];
                result += processngRules(readyString, selected);
            }
        });

        return result;

    }


    button.onclick = function() {
        let textForm = textArea.value;
        console.log(select.selectedIndex);
        console.log(finalContent);
        let finalData = showContent(textForm, select.selectedIndex);
        if (finalData.length > 1) {
            finalContent.innerHTML = `<strong>Скопируйте результат</strong><br><br>
            ${finalData}`;
        } else {
            finalContent.innerHTML = `
            <div class="alert alert-danger" role="alert">
                    Произошла ошибка. Вероятно, контент из вордстат не был скопирован согласно инструкции.
            </div>
            <img class="img-fluid" src="ill.png">

            <div class="alert alert-success" role="alert">
                Скопируйте контент из Яндекс.Вордстат как указано на скриншоте, вставьте в форму слева, 
                выберите вариант обработки, нажмите кнопку и скопируйте результат. Все просто :)
            </div>
            `;
        }
    };

});