!['CRISPIE Logo'](./client/src/assets/images/logo.svg)

# Маркетплейс CRISPIE

Добро пожаловать в документацию проекта "CRISPIE Marketplace"! Это маркетплейс, который предназначен для объединения поставщиков с контрагентами (клиентами, дилерами, дистрибьюторами) в едином торговом пространстве. В этой документации вы найдете информацию о структуре проекта, его компонентах и основных функциях.

<div style="display: flex; align-items: center;">
    <img src="./public/images/index-page.png" width="45%" style="float: left" alt="">
    <hr style="color: white; height: 1px; flex-grow: 1; transform: rotate(-90deg);"/>
    <img src="./public/images/form-register.png" width="45%" style="float: right" alt="">
</div>



[Cтруктура проекта](#🏗️-структура-проекта) • 
[Клиентская часть](#🖥️-клиентская-часть) •
[Серверная часть](#🖥️-серверная-часть) •
[Функциональность проекта](#🚀-функциональность-проекта) •
[Вклад в проект](#💡-вклад-в-проект) •
[Заключение](#📝-заключение)

## Установка

1. Нужно клонировать репозиторий
```
git clone https://github.com/malcewdeveloper/crispie
```
2. [Запуск клиентской части](#🖥️-клиентская-часть)
3. [Запуск серверной части](#🖥️-серверная-часть)

## 🏗️ Структура проекта

Проект "СRISPIE Marketplace" состоит из двух основных частей: клиентской и серверной.

### 🖥️ Клиентская часть

![react](https://img.shields.io/badge/react-v18.2.0-blue?style=plastic&logo=react)
![axios](https://img.shields.io/badge/axios-v1.3.6-darkviolet?style=plastic&logo=axios)
![gsap](https://img.shields.io/badge/gsap-v3.11.5-green?style=plastic&logo=greensock)
![redux](https://img.shields.io/badge/redux-v4.2.1-violet?style=plastic&logo=redux)
![webpack](https://img.shields.io/badge/webpack-v5.76.2-lightblue?style=plastic&logo=webpack)
![node-sass](https://img.shields.io/badge/sass-v8.0.0-pink?style=plastic&logo=sass)
![typescript](https://img.shields.io/badge/typescript-v4.9.5-blue?style=plastic&logo=typescript)

#### ⚙️ Запуск

1. Перейдите в директорию `crispie/client`.

```
cd client
```

2. Установите необходимые зависимости.

```
npm install
```

3. Запустите клиентскую часть на `http://localhost:4000/`.

```
npm start
```

### 🖥️ Серверная часть

![node.js](https://img.shields.io/badge/node.js-v14.17.5-darkgreen?style=plastic&logo=node.js)
![express](https://img.shields.io/badge/express-v4.18.5-white?style=plastic&logo=express)

#### ⚙️ Запуск

1. Перейдите в директорию `crispie/server`.
   
```
cd server
```

2. Установите необходимые зависимости.
   
```
npm install
```

3. Запустите серверную часть.

```
npm run dev
```

## 🚀 Функциональность проекта

На данный момент проект находится на начальном этапе разработки, и реализованы следующие страницы:

* Главная страница: Основная страница маркетплейса, где пользователи могут получить общую информацию о проекте.

* Страница регистрации: Страница, на которой пользователи могут зарегистрироваться в системе.

* Страница авторизации: Страница, на которой пользователи могут войти в систему.
---
Ожидается, что в дальнейшем будут добавлены другие функциональности, такие как:

+ Поиск и фильтрация товаров.
+ Каталог продуктов.
+ Профили пользователей.
+ Оформление заказов и оплата.
+ Разделение ролей 
  + Продовец:
    + Свой личный кабинет 
    + Возможность создания товаров
    + Управление аккаунтом.
  + Покупатель 
    + Корзина покупок.
    + Список избранных товаров
    + Управление аккаунтом.

## 💡 Вклад в проект

Если вы хотите внести свой вклад в проект "Crispie Marketplace", мы рады вашей помощи! Вы можете создавать issues с предложениями или сообщать об обнаруженных проблемах. Кроме того, мы приветствуем ваши pull request'ы с исправлениями ошибок или новыми функциональностями, для этого:

1. Сделайте fork проекта
2. Создайте feature ветку (`git checkout -b feature/yourNameBranch`)
3. Сделайте commit ваших изменений (`git commit -m "Add some commit"`)
4. Сделайте push изменений (`git push origin feature/yourNameBranch`)

## 📝 Заключение

Это была краткая документация проекта "Crispie Marketplace". Надеемся, что эта информация поможет вам ориентироваться в структуре проекта и его основных функциях. Если у вас возникнут вопросы или потребуется дополнительная информация, не стесняйтесь обращаться!

![gmail](https://img.shields.io/badge/-Gmail-white?style=flat&logo=gmail&link=mailto:malcewdeveloper@gmail.com)
![gmail](https://img.shields.io/badge/-telegram-white?style=flat&logo=telegram&link=https://t.me/malcew)
