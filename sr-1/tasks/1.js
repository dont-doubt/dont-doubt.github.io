
const main = $('#main');

main.on('click', 'li', function() {
  const element = $(this)
  const innerText = element.clone().children().remove().end().text().trim()
  const innerElements = element.find('li').length
  console.log(`ul: "${innerText}"; count(li): ${innerElements}`)
});

$('#toggleTree').click(function() {
  // noinspection JSValidateTypes
  main.slideToggle('slow');
});