let isTranslatedFinal = false; 


let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];


let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$('.translatebtn').click(function() {
 
    isTranslatedFinal = !isTranslatedFinal;

   
    let today = new Date().getDay();
    let dayName = isTranslatedFinal ? diasDaSemana[today] : daysOfTheWeek[today];

 
    if (dayName === 'Sábado' || dayName === 'Domingo') {
        $('.today').text(isTranslatedFinal ? `Aproveite o resto do seu ${dayName}!` : `Enjoy the rest of your ${dayName}!`);
    } else {
        
        $('.today').text(isTranslatedFinal ? `Aproveite o resto da sua ${dayName}!` : `Enjoy the rest of your ${dayName}!`);
    }
});



    let today = new Date().getDay();
    let dayName = daysOfTheWeek[today]; 

    $('.today').text(`Enjoy the rest of your ${dayName}!`); 


    let browserLanguage = navigator.language || navigator.userLanguage;
    let isLanguagePortuguese = browserLanguage.toLowerCase().includes('pt'); 

    if (!isLanguagePortuguese) {

        dayName = daysOfTheWeek[today];
        $('.today').text(`Enjoy the rest of your ${dayName}!`);
    }

