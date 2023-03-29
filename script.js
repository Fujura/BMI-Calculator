const input1 = document.querySelector('.firstInput');
const input2 = document.querySelector('.secondInput');
const button = document.querySelector('.calculate');

function CalcIMT(){
    let value1 = parseFloat(input1.value);
    let value2 = parseFloat(input2.value);
    let imt = value1/Math.pow(value2, 2);
    let p = document.createElement('p');
    p.setAttribute('id', 'resultP')

    if(parseFloat(imt) <=16){
        p.textContent = Math.ceil(imt) + "- Выраженный дефицит массы тела"
        document.body.appendChild(p)
    }
    
    else if(parseFloat(imt) < 18.5){
        p.textContent = Math.ceil(imt) + "- Недостаточная (дефицит) масса тела"
        document.body.appendChild(p)
    }

    else if(parseFloat(imt) < 25){
        p.textContent = Math.ceil(imt) + "- Норма"
        document.body.appendChild(p)
    }

    else if(parseFloat(imt) < 30){
        p.textContent = Math.ceil(imt) + "- Избыточная масса тела (предожирение)"
        document.body.appendChild(p)
    }

    else if(parseFloat(imt) <= 35){
        p.textContent = Math.ceil(imt) + "- Ожирение первой степени"
        document.body.appendChild(p)
    }

    else if(parseFloat(imt) <= 40){
        p.textContent = Math.ceil(imt) + "- Ожирение второй степени"
        document.body.appendChild(p)
    }

    else if(parseFloat(imt) > 40 ){
        p.textContent = Math.ceil(imt) + "- Ожирение третьей степени (морбидное)"
        document.body.appendChild(p)
    }
}

button.addEventListener('click', CalcIMT);
