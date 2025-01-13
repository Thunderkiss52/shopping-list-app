# Shopping List App

This application is a simple and convenient tool for managing your shopping list, built with **PHP**, **Node.js**, and **SQLite**.

## Prerequisites

- **PHP 8.3**
- **Node.js 18+**
- **SQLite 3+**
- **Composer 2+**
- **Yarn 1.22+**

## How to Install

- **Clone the project**:
```bash
git clone git@github.com:Thunderkiss52/shopping-list-app.git
```

- **Install dependencies:**
```bash
composer install
```

- **Prepare .env file**:
```bash
cp .env.example .env
```

- **Generate app key**:
```bash
php artisan key:generate
```

- **Set up the database:**
```bash
php artisan migrate
```

- **Install front-end dependencies:**
```bash
yarn install
```

- **Start the local server:**
```bash
php artisan serve
```

- **Build the front-end:**
```bash
yarn watch
```

