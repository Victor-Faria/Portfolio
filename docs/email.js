
 $('.emailtxt').mouseenter(function() {
    clearTimeout(debounceTimeout);
    clearInterval(interval);
    let emailElement = $(this);
    debounceTimeout = setTimeout(function() {
        let originalText = emailElement.text();
        applyMatrixEffect(emailElement, originalText);
    }, debounceTime);
});


$('[data-translate]').each(function() {
    let $element = $(this);
    let originalText = $element.text().trim();
    $element.data('original-text', originalText);
});