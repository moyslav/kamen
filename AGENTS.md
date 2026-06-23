<!-- BEGIN:installed-skills -->
# Установленные скилы и правила

## nextlevelbuilder/ui-ux-pro-max-skill
- Путь: `.claude/skills/ui-ux-pro-max/SKILL.md`
- Назначение: Дизайн-система Liquid Glass для премиум-сегмента. 161 правило UI/UX, 67 стилей, цветовые палитры, типографика.
- Активация: автоматически при UI/UX-запросах
- Использовать для: генерации дизайн-систем, подбора цветов, шрифтов, стилей.

## vercel-labs/agent-skills (7 skills)
- Путь: `~/.agents/skills/`
- Установлены:
  1. **vercel-composition-patterns** — композиция React-компонентов, паттерны SSR/SSG/ISR
  2. **deploy-to-vercel** — деплой на Vercel, настройки CI/CD
  3. **vercel-react-best-practices** — React best practices, производительность, рендеринг
  4. **vercel-react-native-skills** — React Native (опционально)
  5. **vercel-cli-with-tokens** — работа с Vercel CLI, токены, environment variables
  6. **vercel-optimize** — оптимизация производительности: bundle, images, fonts, caching
  7. **writing-guidelines** — общие правила написания кода и документации

## PatrickJS/awesome-cursorrules
- Путь: `.cursor/rules/`
- Установлены:
  1. **nextjs-tailwind-typescript.mdc** — правила для Next.js + Tailwind + TypeScript
  2. **clean-code.mdc** — чистый код, код-ревью, антипаттерны
  3. **security.mdc** — безопасность: DevSecOps, SSDL, AppSec
  4. **code-guidelines.mdc** — общие гайдлайны по коду

## upstash/context7
- Не установлен — требуется OAuth-авторизация через `npx ctx7 setup --cli -p`
- Назначение: актуальная документация библиотек, предотвращение API-галлюцинаций
- Инструкция: запустить `npx ctx7 setup --cli -p` и пройти OAuth

## Security-First Rules
- Отдельного репозитория не найдено
- Альтернатива: используется `security.mdc` из PatrickJS/awesome-cursorrules (DevSecOps, AppSec)

## Performance Optimization Skill
- Отдельного репозитория не найдено
- Альтернатива: используется `vercel-optimize` из vercel-labs/agent-skills + `vercel-react-best-practices`

<!-- END:installed-skills -->
