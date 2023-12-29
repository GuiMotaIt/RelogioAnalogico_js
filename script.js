//Selecionando os elementos e salvando em variáveis
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//Criando a função de atualização do relógio
function updateClock (){
    let now = new Date(); //Pegando a data atual
    let hour = now.getHours(); //Salvando as info em variaveis
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

     //Inserindo a hora no relógio digital
     digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;

     //Fazendo a conta dos angulos dos ponteiros
     let sDeg = ((360 / 60) * seconds) - 90;
     let mDeg = ((360 / 60) * minutes) - 90;
     let hDeg = ((360 / 12) * hour) - 90;
     
     //Aplicando CSS inline para modificar a posição dos ponteiros
     sElement.style.transform = `rotate(${(sDeg)}deg)`;
     mElement.style.transform = `rotate(${(mDeg)}deg)`;
     hElement.style.transform = `rotate(${(hDeg)}deg)`;
}

//Função para adicionar os zeros corretamente
function fixZero (time){
    return time < 10 ? `0${time}` : time;   
}

//Definindo o loop infinito de atualização
setInterval(updateClock, 1000);

//Tirando o delay de 1s para atualização de pagina
updateClock();