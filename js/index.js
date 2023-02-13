let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
i = 0
next.addEventListener('click', ()=> {
    i+=410;
    document.querySelector('.slider-wrapper').style.right = i + 'px';
    if (i > 1640) {
       document.querySelector('.slider-wrapper').style.right = 0; 
       i = 0;
    }; 
});
previous.addEventListener('click', ()=> {
    i-= 410;
    if (i < 0) {
        i = 1640;
    };
    document.querySelector('.slider-wrapper').style.right = i + 'px';
});
let more = document.querySelectorAll('.more');
let popup = document.querySelector('.popup');
more.forEach((el) => {
    el.addEventListener('click', (e)=> {
        let datamore = e.currentTarget.getAttribute('data-more');
        popup.classList.add('popup-initial');
        document.querySelector('body').classList.add('hidden');
    });
    
});
popup.addEventListener('click', (e)=> {
    if (e.target == popup) {
        popup.classList.remove('popup-initial')
        document.querySelector('body').classList.remove('hidden')
    };
});
document.querySelector('.more-1').addEventListener('click', ()=> {
    document.querySelector('.popup-desc').innerHTML = desc1;
    document.querySelector('.popup-title').innerHTML = 'Вредоносные программы';
});
document.querySelector('.more-2').addEventListener('click', ()=> {
    document.querySelector('.popup-desc').innerHTML = desc2;
    document.querySelector('.popup-title').innerHTML = 'Программы шантажисты';
});
document.querySelector('.more-3').addEventListener('click', ()=> {
    document.querySelector('.popup-desc').innerHTML = desc3;
    document.querySelector('.popup-title').innerHTML = 'Фишинг';
});
document.querySelector('.more-4').addEventListener('click', ()=> {
    document.querySelector('.popup-desc').innerHTML = desc4;
    document.querySelector('.popup-title').innerHTML = 'Атака типа «отказ в обслуживании» (DDoS)';
});
document.querySelector('.more-5').addEventListener('click', ()=> {
    document.querySelector('.popup-desc').innerHTML = desc5;
    document.querySelector('.popup-title').innerHTML = 'Атака посредника';
});
let desc1 = 'Такие программы часто проникают в компьютеры под видом безобидных вложений электронной почты или при нажатии фальшивой кнопки на веб-сайтах, что позволяет им обходить системы сетевой безопасности. Вредоносная программа может передавать ваши персональные данные (если это программа-шпион), устанавливать другие вредоносные программы на ваше устройство или просто вывести из строя вашу операционную систему. Чтобы защитить свой компьютер, вам следует загружать только те файлы, в безопасности которых вы уверены.'
let desc2 = 'программу-шантажиста. Часто она попадает в ваш почтовый ящик в виде безобидного файла от, казалось бы, не представляющего опасности отправителя. Как только вы откроете программу, ваши файлы станут недоступны, и, чтобы вернуть контроль над ними, вам придется заплатить выкуп. Скорее всего, после оплаты вы только потеряете свои деньги, и у вас возникнет единственное желание — повернуть время вспять'
let desc3 = 'сообщение в социальных сетях или даже телефонный звонок. Вы получаете сообщение, часто якобы от сотрудника вашего банка, с просьбой подтвердить ваши данные, сообщить номер кредитной карты или сделать денежный перевод. Затем преступники будут использовать эти данные для получения несанкционированного доступа к вашим счетам. Иногда фишинговые сообщения пытаются ввести вас в заблуждение, предлагая для защиты вашего счета от мошенников нажать определенную ссылку или предоставить реквизиты вашего банковского счета. Никогда не отвечайте на подобные запросы. Информационная безопасность является главным приоритетом для банков, поэтому они точно не станут запрашивать информацию по электронной почте. Если вас обеспокоило подобное сообщение, проигнорируйте его, но позвоните в банк, чтобы выяснить, является ли оно подлинным.'
let desc4 = 'вашей сети, и вы не можете использовать ее по прямому назначению. Этот тип атак чаще всего нацелен на веб-сайты предприятий и организаций. Конечная цель таких атак — не всегда ваши деньги (по крайней мере, для мошенников); это может быть желание лишить вас клиентов и посетителей. По сути, это то же самое, что и онлайн-пикет. Справедливости ради отметим, что DDoS-атаки использовались и во благо, например, чтобы блокировать доступ к сайтам групп, пропагандирующих ненависть, и помешать им набрать популярность в сети.'
let desc5 = 'с другом и хотите возвратить свои деньги, вы отправляете ему номер вашего счета. Ваш друг видит сообщение и переводит деньги на счет. Вы видите сообщение о том, что ваш друг провел оплату. Ни у вас, ни у вашего друга нет никаких доказательств того, что между вами действует мошенник, поскольку он выдает себя за вас обоих. Однако вы никогда не получите деньги, так как мошенник заменил ваше сообщение и номер счета своими данными. Кража личных данных может продолжаться в течение нескольких дней или даже недель, прежде чем вы поймете, что дело нечисто.'

let closebutton = document.querySelector('.popup-close');
closebutton.addEventListener('click', ()=> {
    popup.classList.remove('popup-initial')
    document.querySelector('body').classList.remove('hidden')
});
document.addEventListener('keydown', (e)=>{
    if (e.key = 'Escape') {
        popup.classList.remove('popup-initial')
        document.querySelector('body').classList.remove('hidden')
    }
});
let elsebutton = document.querySelector('.else-button');
let = descProtect2 = document.querySelector('.desc-protection-2')
elsebutton.addEventListener('click', ()=> {
    document.querySelector('.desc-protection-1').classList.toggle('none-protect');
    descProtect2.classList.toggle('initial-2');
    document.querySelector('.else-button-index').classList.toggle('none-protect');
    document.querySelector('.else-button-2').classList.toggle('else-button-22');
});
document.querySelector('.else-button-2').addEventListener('click', ()=> {
    document.querySelector('.desc-protection-1').classList.toggle('none-protect');
    descProtect2.classList.toggle('initial-2');
    document.querySelector('.else-button-index').classList.toggle('none-protect');
    document.querySelector('.else-button-2').classList.toggle('else-button-22');
});
let menu = document.querySelector('.burger-menu-block');
let burger = document.querySelector('.burger-menu');
burger.addEventListener('click', ()=> {
    menu.classList.toggle('initial-menu');
    document.querySelector('body').classList.toggle('body-hidden')
});

let statisticSt = document.querySelector('.num-statisctic-1')
let statisticNd = document.querySelector('.num-statisctic-2')
let statisticRd = document.querySelector('.num-statisctic-3')
let statisticTh = document.querySelector('.num-statisctic-4')
const time = 4000 //ms
const step = 1

function OutNum(num, elem) {
    n = 0
    let t = Math.round(time/(num/step))
    let interval = setInterval(()=> {
        n = n + step
        if (n == num) {
            clearInterval(interval)
        }
        statisticSt.innerHTML = n + '%'

    },
    t);
}
function OutNum1(num, elem) {
    n1 = 0
    let t = Math.round(time/(num/step))
    let interval = setInterval(()=> {
        n1 = n1 + step
        if (n1 == num) {
            clearInterval(interval)
        }
        statisticNd.innerHTML = n1 + '%'

    },
    t);
}
function OutNum2(num, elem) {
    n2 = 0
    let t = Math.round(time/(num/step))
    let interval = setInterval(()=> {
        n2 = n2 + step
        if (n2 == num) {
            clearInterval(interval)
        }
        statisticRd.innerHTML = n2 + '%'

    },
    t);
}
function OutNum3(num, elem) {
    n3 = 0
    let t = Math.round(time/(num/step))
    let interval = setInterval(()=> {
        n3 = n3 + step
        if (n3 == num) {
            clearInterval(interval)
        }
        statisticTh.innerHTML = n3 + '%'
    },
    t);
}
p = 10
let infocyber = document.querySelector('.statistics');
window.addEventListener('scroll', ()=> {
    ScrollDistance = window.scrollY 
    if (ScrollDistance > document.querySelector('.img-cyberthreat').offsetTop + 360 && p == 10 || window.offsetTop == document.querySelector('.info-cyberthreat').offsetTop){
        OutNum(73, statisticSt)
        OutNum1(44, statisticNd)
        OutNum2(40, statisticRd)
        OutNum3(37, statisticTh)
        p = 6
    }
});
