document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Получаем ключевое слово из формы
  let query = document.querySelector('.search').value;

  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=30&orientation=landscape&client_id=9VldmherwXTroIkkSXkUQg4cm8VOtcSAnD3nrvQ1Ga8`;

   getData(url);
});


async function getData(url) {
  try {
    // запрос к API Unsplash
    const res = await fetch(url);
    const data = await res.json();

    // Очистка предыдущего результата
    let output = document.getElementById('output');
    output.innerHTML = '';
//Проверка результата
    if (data.results.length > 0) {
      // Обрабатываем каждый результат
      data.results.forEach(photo => {
        const img = document.createElement("img");
        img.classList.add("gallery-img");
        img.src = photo.urls.regular; // URL картинки
        img.alt = photo.alt_description || 'Изображение'; 
        img.style.maxWidth = '30%'; // стили
        img.style.margin = '10px';

        // Добавление изображения в блок
        output.appendChild(img);
      });
    } else {
      output.innerHTML = 'Ничего не найдено.';
    }
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}
//загрузка фото при загрузке страницы
window.addEventListener('load', function() {
  const defaultQuery = 'winter nature';
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(defaultQuery)}&per_page=30&orientation=landscape&client_id=9VldmherwXTroIkkSXkUQg4cm8VOtcSAnD3nrvQ1Ga8`;
  getData(url);
  document.querySelector('.search').focus();
});