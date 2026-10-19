# Деплой

Прод: https://alexfialko.vercel.app (Vercel, проект `merseis-projects/portfolio`).

- Пуш в `master` автоматически создаёт production-деплой.
- Пуш в любую другую ветку создаёт preview-деплой; ссылка появляется в `vercel list` / дашборде.
- Проверять внешний URL нужно `curl` без кук: алиас вида `<проект>-<team>.vercel.app` закрыт SSO команды.

## Где что править

| Что | Файл |
| --- | --- |
| Кейсы (тексты RU/EN, стек, ссылки) | `lib/cases.ts` |
| Категория, featured, метрики кейса | `lib/case-meta.ts` |
| Тексты интерфейса и главной | `lib/dictionaries/{ru,en}.ts` (структура `en` обязана совпадать с `ru`) |
| Контакты и домен | `lib/site.ts` |
| Палитра и анимации | `app/globals.css` |

Новый кейс: добавить объект в `lib/cases.ts`, затем запись в `lib/case-meta.ts`. Страница `/work/<slug>` и sitemap появятся сами.
