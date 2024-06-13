
function toggleLanguage() {
    $('[data-translate]').each(function() {
        let $element = $(this);
        let translatedText = $element.data('translate');
        let originalText = $element.data('original-text');

        // Verifica se o texto atual é o original ou traduzido
        if ($element.text().trim() === originalText) {
            if (!$element.is('[data-no-effect="true"]')) {
                applyMatrixEffect($element, translatedText);
            }
            $element.text(translatedText);
        } else {
            if (!$element.is('[data-no-effect="true"]')) {
                applyMatrixEffect($element, originalText);
            }
            $element.text(originalText);
        }
    });

    // Alterna entre os idiomas
    if (currentLanguage === 'english') {
        isTranslated = !isTranslated;
    } else {
        isTranslated = false;
    }
}


$('.translatebtn').click(function() {
    clearTimeout(debounceTimeout);
    clearInterval(interval);
    

    debounceTimeout = setTimeout(toggleLanguage, debounceTime);
});

// Armazena o texto original em cada elemento com atributo data-translate
$('[data-translate]').each(function() {
    let $element = $(this);
    let originalText = $element.text().trim();
    $element.data('original-text', originalText);
});


function startDelayedTextAnimation() {
    let phrase = "    <p> I am a passionate and dedicated Front-end Developer, specializing in creating engaging and functional user interfaces for small and medium-sized businesses. Currently, i am seeking to work on projects as a Freelancer, aiming to build my experience through direct contact with clients. My background in pedagogy from UNICAMP and experiences in the teaching field provides me with communication skills and empathy work with my clients while offering a great costumer service. I am committed to delivering high-quality work, whether developing new websites from scratch or improving existing platforms. Get in touch and lets build something great together! <p> ";
  
    function displayLetters() {
      const container = $("#abouttxt");
      container.html(''); 
      const words = phrase.split(' ');
      let index = 0;
  
      words.forEach((word, wordIndex) => {
        const wordSpan = $("<span></span>").addClass("word");
  
        word.split('').forEach((letter) => {
          const letterSpan = $("<span></span>").text(letter).addClass("letter");
          wordSpan.append(letterSpan);
  
          setTimeout(() => {
            letterSpan.css("opacity", 1);
          }, index * 25); 
  
          index++;
        });
  
        const spaceSpan = $("<span></span>").text('\u00A0'); 
        wordSpan.append(spaceSpan);
  
        container.append(wordSpan);
      });
  
     
      setTimeout(() => {
        const cursor = $("<span></span>").attr("id", "cursor").text('|');
        container.append(cursor);
      }, index * 26);
    }
  
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          displayLetters();
          observer.unobserve(entry.target);
        }
      });
    });
  
   
    observer.observe(document.getElementById("abouttxt"));
  }
  
 
  startDelayedTextAnimation();




  let velocity = 40;
  let debounceTime = 10;
  let charset = "abcdefghijklmnopqrstuvwxyz"; 
  let debounceTimeout;
  let interval;
  let isTranslated = false;
  let currentLanguage = 'english';
  
 
  function applyMatrixEffect(element, text) {
      function matrixEffect(element, text) {
          let iterations = text.length;
          let index = 0;
  
          function update() {
              if (index >= iterations) {
                  clearInterval(interval);
                  return;
              }
  
              let scrambledText = text.split('').map((char, i) => {
                  if (i <= index) {
                      return text[i];
                  } else if (char.match(/[a-z]/)) {
                      return charset.charAt(Math.floor(Math.random() * charset.length));
                  }
                  return char;
              }).join('');
  
              element.text(scrambledText);
              index++;
          }
  
          interval = setInterval(update, velocity);
      }
  
      matrixEffect(element, text);
  }
  








  
  