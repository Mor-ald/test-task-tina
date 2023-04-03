# TinaCMS STO ARM

Тестовый проект по переходу с классической CMS на Headless CMS с целью изучения преимуществ и недостатков используемых технологий для построения статических сайтов.

Проверка производительности производилась с использованием lighthouse:

### До

<img width="450" alt="image" src="https://user-images.githubusercontent.com/72343402/229541218-7ae190d2-f70d-4826-a505-25a70a4a9ac0.png">

### После

<img width="492" alt="image" src="https://user-images.githubusercontent.com/72343402/229541738-3599e061-f30c-4ab6-b09a-819a5bc31c18.png">


## В данном проекте используется

- ```Tina CMS``` для редактирования контента в используемых компонентах приложения.
- Библиотека компонентов ```PrimeReact```.
- ```Next.js``` для генерации статических и динамических страниц.
- ```GraphQl``` для осуществления запросов к данным при работе ```Tina CMS```.
- ```Eslint``` для линтинга кода.
- ```Jest``` и ```Testing library React``` для написания тестов.

## Директории приложения

- [Компоненты приложения](https://github.com/Mor-ald/tina-sto-arm/tree/main/components) и использумые [блоки](https://github.com/Mor-ald/tina-sto-arm/tree/main/components/blocks) в TinaCMS.
- [Контент веб-страниц](https://github.com/Mor-ald/tina-sto-arm/tree/main/content).
- [Генерация страниц](https://github.com/Mor-ald/tina-sto-arm/tree/main/pages).
- [Медиафайлы](https://github.com/Mor-ald/tina-sto-arm/tree/main/public).
- [Тесты переиспользуемых компонентов](https://github.com/Mor-ald/tina-sto-arm/tree/main/__tests__).
- [Конфигурация CMS и GrapgQl запросов](https://github.com/Mor-ald/tina-sto-arm/tree/main/.tina).

## Развертывание приложения

Установка зависимостей:

```
yarn
```

Запуск приложения:

```
yarn dev
```

Приложение будет доступно по адресу ```http://localhost:3000/```,  для доступа к панели администратора нужно перейти по адресу ```http://localhost:3000/admin```.

Запуск линтинга:

```
yarn lint
```

Или (для автоматического исправления):

```
yarn lint:fix
```

Запуск тестов:

```
yarn test
```

## LICENSE

Licensed under the [Apache 2.0 license](./LICENSE).
