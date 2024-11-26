# Веб-сервис для продажи подарочных сертификатов

## Описание
Проект представляет собой веб-сервис для онлайн-продажи подарочных сертификатов. Основная цель — предоставить удобный интерфейс для выбора, оформления и оплаты сертификатов через REST API.

## Возможности
- **Просмотр списка сертификатов:** Получение данных через API и отображение доступных сертификатов с подробной информацией.
- **Оформление заказа:** Форма для ввода контактных данных клиента с валидацией.
- **Страница оплаты:** Завершающая страница-заглушка, подтверждающая успешность процесса оформления.

### Функциональность:
1. **Страница выбора сертификата:**
   - Отображается список сертификатов с ценой и скидкой.
   - При нажатии на кнопку "Оформить" пользователь переходит на страницу оформления.
2. **Страница оформления:**
   - Поля для ввода имени, телефона и электронной почты, а также возможность оплатить подарок другому человеку.
   - Кнопка "Назад" возвращает на страницу выбора сертификатов.
   - Кнопка "Оплатить" ведет на страницу-заглушку.
3. **Страница оплаты:**
   - Отображается сообщение "Оплата...".

## Методы API
- **Получение списка сертификатов:** Метод `OSGetGoodList` возвращает список доступных сертификатов.
- **Сохранение заказа:** Метод `OSSale` записывает данные клиента и заказанный сертификат.

## Требования
- Адаптивность интерфейса.
- Работа с API.
