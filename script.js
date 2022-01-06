'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('form'),
        textArea = document.getElementById('exampleFormControlTextarea1'),
        button = document.querySelector('button'),
        finalContent = document.querySelectorAll('.col')[1],
        select = document.getElementById('exampleFormControlSelect1');


    //Функции обработки формы

    function plusReplacer(txt) {
        txt = txt.replace('+', '');
        txt = txt.replace('+', '');
        txt = txt.replace('\t', '');
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


        return txt += '\n';
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



    //Обработка события формы

    button.onclick = function() {
        let textForm = textArea.value;
        let finalData = showContent(textForm, select.selectedIndex);

        if (finalData.length > 1) {
            finalContent.innerHTML = `<div id="copy-result"><strong>Скопируйте результат</strong></div><br>
            <div id="finalkeys">
            <textarea class="form-control" id="resultForm" rows="28">${finalData}</textarea>
            </div>
            `;


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