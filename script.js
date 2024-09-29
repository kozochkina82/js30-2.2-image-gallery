document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Получаем ключевое слово из формы
  let query = document.querySelector('.search').value;

  // Формируем URL 
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=30&orientation=landscape&client_id=9VldmherwXTroIkkSXkUQg4cm8VOtcSAnD3nrvQ1Ga8`;

  // Вызываем функцию для получения данных
  getData(url);
});


async function getData(url) {
  try {
    // Выполняем запрос к API Unsplash
    const res = await fetch(url);
    const data = await res.json();

    // Очищаем предыдущие результаты
    let output = document.getElementById('output');
    output.innerHTML = '';

    // Проверяем, есть ли результаты
    if (data.results.length > 0) {
      // Обрабатываем каждый результат
      data.results.forEach(photo => {
        const img = document.createElement("img");
        img.classList.add("gallery-img");
        img.src = photo.urls.regular; // URL изображения
        img.alt = photo.alt_description || 'Изображение'; // Описание изображения
        img.style.maxWidth = '30%'; // Пример стиля для отображения
        img.style.margin = '10px';

        // Добавляем изображение в блок
        output.appendChild(img);
      });
    } else {
      output.innerHTML = 'Ничего не найдено.';
    }
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}
// Выполняем запрос на загрузку фотографий по умолчанию ("winter nature")
window.addEventListener('load', function() {
  const defaultQuery = 'winter nature';
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(defaultQuery)}&per_page=30&orientation=landscape&client_id=9VldmherwXTroIkkSXkUQg4cm8VOtcSAnD3nrvQ1Ga8`;
  getData(url);
  document.querySelector('.search').focus();
});