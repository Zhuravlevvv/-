let form_1 = document.getElementById('form');

form_1.addEventListener("submit", work);

function work() {
  event.preventDefault();
  var name = form_1.elements.name.value;
  var number = form_1.elements.number.value;
  var comment = form_1.elements.comment.value;
  if (name.length == 0 && number.length == 0 && comment.length == 0) {
    Swal.fire('Введите данные', 'Пусто :(', 'error');
    return;
  }
  if (name.length == 0) {
    Swal.fire('Введите ФИО', 'Проверьте введенные данные', 'error');
    return;
  }
  if (number.length = 0) {
    Swal.fire('Введите номер телефона', 'Проверьте введённые данные', 'error');
    return;
  }
  if (number.length < 7) {
    Swal.fire('Номер слишком короткий', 'Упс :(', 'warning');
    return;
  }
  if (comment.length < 1) {
    Swal.fire('Вы забыли оставить комментарий мастеру', 'Упс :(', 'warning');
    return;
  }
  Swal.fire('Ура :)', 'Вы успешно прошли записались на ремонт!', 'success');
}