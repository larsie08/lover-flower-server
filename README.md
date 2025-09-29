# Lover Flower Server 🌸

Backend-сервер для [Lover Flower](https://github.com/larsie08/react-lover-flower) — веб-приложения по продаже цветов.
Реализован на **NestJS**, предоставляет REST API для клиентского приложения.

---

## 🚀 Стек технологий

* [NestJS](https://nestjs.com/) — фреймворк для серверных приложений Node.js
* [TypeScript](https://www.typescriptlang.org/) — статическая типизация
* [PostgreSQL](https://www.postgresql.org/) — реляционная база данных
* [TypeORM](https://typeorm.io/) — ORM для работы с БД
* [JWT](https://jwt.io/) — аутентификация и авторизация
* [Docker](https://www.docker.com/) (опционально, для контейнеризации)

---

## ⚙️ Установка и запуск

### 1. Клонировать репозиторий

```bash
git clone https://github.com/larsie08/lover-flower-server.git
cd lover-flower-server
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Настроить переменные окружения

Создайте файл `.env` в корне проекта:

```env
# Сервер
PORT=3000
JWT_SECRET=your_jwt_secret

# База данных
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=loverflower
```

### 4. Запустить сервер (dev-режим)

```bash
npm run start:dev
```

Сервер будет доступен по адресу:
👉 `http://localhost:3000`

---

## 🛠️ Скрипты

* `npm run start:dev` — запуск в режиме разработки
* `npm run build` — сборка проекта
* `npm run start:prod` — запуск в production
* `npm run test` — запуск тестов

---

## 👤 Автор

* GitHub: [larsie08](https://github.com/larsie08)

