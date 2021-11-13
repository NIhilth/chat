let chat = document.querySelector("#chat");
let input = document.querySelector("#mensagem");
let seuNome = document.querySelector('#nome');
let input2 = document.querySelector("#mensagem2");
let seuNome2 = document.querySelector('#nome2');

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
    const now = new Date();

    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

}, 1000);

const options = {
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric'
};
const date = new Intl.DateTimeFormat([], options)

function montarHorario(dataDeHoje){
    let horario = document.createElement('div');
    horario.innerText = dataDeHoje;
    horario.className = 'horarioVerde'
    return horario
}

function enviarMensagem(){
    let mensagem = input.value;
    let nomeSeu = seuNome.value;
    if(!mensagem || mensagem == ''){
        return;
    }
    let paragrafo = montarMensagem(nomeSeu, mensagem);
    chat.appendChild(paragrafo);
    input.value = '';
}

function montarMensagem(nomeSeu,mensagem){
    let paragrafo = document.createElement('p');
    let dataDeHoje = dataAtualFormatada() + " " + date.format(new Date());
    let horarioDeHoje = montarHorario(dataDeHoje);
    paragrafo.innerText = nomeSeu + " :" + mensagem ;
    paragrafo.appendChild(horarioDeHoje);
    paragrafo.className = "fundoVerde";
    return  paragrafo;
}   

function enviarMensagem2(){
    let mensagem2 = input2.value;
    let nomeSeu2 = seuNome2.value;
    if(!mensagem2 || mensagem2 == ''){
        return;
    }
    let paragrafo2 = montarMensagem2(nomeSeu2, mensagem2);
    chat.appendChild(paragrafo2);
    input2.value = '';
}

function montarMensagem2(nomeSeu2,mensagem2){
    let paragrafo2 = document.createElement('p');
    let dataDeHoje = dataAtualFormatada() + " " + date.format(new Date());
    let horarioDeHoje = montarHorario(dataDeHoje);
    paragrafo2.innerText = nomeSeu2 + " :" + mensagem2 ;
    paragrafo2.appendChild(horarioDeHoje);
    paragrafo2.className = 'fundoAzul';
    return  paragrafo2;
}