# Bot Chat
Этот проект представляет собой чат с ботом, разработанный с использованием React и TypeScript.   ответы бота отображаются посимвольно, так как ответы возвращаются в формате чанков.

##Дизайн
Дизайн компонента можно найти [по ссылке](https://www.figma.com/file/ajCiNj9kSJHxEQkGlfxBqv/BIT-%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0%3A1&mode=dev)

##Эндпоинт
URL эндпоинта для отправки сообщений боту:
```
http://185.46.8.130/api/v1/chat/send-message.
```
Метод запроса: POST.
Тело запроса должно быть в формате JSON и содержать поле message со значением типа string, которое представляет собой сообщение, отправляемое боту.

##Технологии
 - React с TypeScript
 - SCSS/SASS modules
 - JS Streams
 - Vite