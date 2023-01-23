// 1. Виведіть значення та текст вибраного пункту.
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

// 2. Додайте пункт: <option value="classic">Класика</option>.
let newOption = new Option("Класика", "clasic");
genres.append(newOption);

// 3. Зробіть його вибраним.
newOption.selected = true;