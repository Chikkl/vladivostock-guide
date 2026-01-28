# Инструкция по выкладке проекта на GitHub Pages

## Шаг 1: Создание репозитория на GitHub

1. Перейдите на [GitHub](https://github.com) и войдите в свой аккаунт
2. Нажмите на кнопку "New repository" (Новый репозиторий)
3. Заполните поля:
   - **Repository name**: `vladivostock-guide`
   - **Description**: `Анкета для подбора гида во Владивостоке`
   - **Visibility**: Public (публичный)
   - **Initialize this repository with a README**: ❌ (не отмечать, так как README уже есть)
   - **Add .gitignore**: None
   - **Choose a license**: None
4. Нажмите "Create repository"

## Шаг 2: Пуш файлов на GitHub

Откройте терминал в папке проекта и выполните следующие команды:

```bash
# Добавьте удаленный репозиторий (замените username на ваш GitHub username)
git remote add origin https://github.com/username/vladivostock-guide.git

# Запушите файлы на GitHub
git branch -M main
git push -u origin main
```

## Шаг 3: Настройка GitHub Pages

1. Перейдите в репозиторий на GitHub
2. Нажмите на вкладку "Settings" (Настройки)
3. В левом меню найдите раздел "Pages" (Страницы)
4. В разделе "Source" выберите:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Нажмите "Save"

## Шаг 4: Проверка

Через несколько минут ваш сайт будет доступен по адресу:
```
https://username.github.io/vladivostock-guide/
```

## Альтернативный способ (если возникнут проблемы)

Если возникнут проблемы с командной строкой, можно загрузить файлы вручную:

1. Перейдите в репозиторий на GitHub
2. Нажмите "Add file" → "Upload files"
3. Перетащите все файлы из папки проекта
4. Нажмите "Commit changes"

## Важные моменты

- Убедитесь, что в репозитории есть файл `index.html` в корне
- GitHub Pages может быть доступен не во всех регионах
- Изменения на GitHub Pages могут появляться с задержкой до 10 минут