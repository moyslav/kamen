import type { Product, Category, Service, Advantage, Review } from '@/types'

export const categories: Category[] = [
  { slug: 'mramor', name: 'Мрамор', description: 'Классический натуральный камень для интерьеров', image: '/images/categories/marble.svg' },
  { slug: 'granit', name: 'Гранит', description: 'Прочный камень для фасадов и полов', image: '/images/categories/granite.svg' },
  { slug: 'kvarcit', name: 'Кварцит', description: 'Твёрдый камень с уникальным рисунком', image: '/images/categories/quartzite.svg' },
  { slug: 'oniks', name: 'Оникс', description: 'Полупрозрачный камень с подсветкой', image: '/images/categories/onyx.svg' },
  { slug: 'travertin', name: 'Травертин', description: 'По́ристый камень для тёплых тонов', image: '/images/categories/travertine.svg' },
  { slug: 'iskusstvennyy-kamen', name: 'Искусственный камень', description: 'Кварцевый агломерат и керамогранит', image: '/images/categories/artificial.svg' },
]

const productImages = (base: string) => [
  `/images/products/${base}-1.svg`,
  `/images/products/${base}-2.svg`,
  `/images/products/${base}-3.svg`,
  `/images/products/${base}-4.svg`,
  `/images/products/${base}-5.svg`,
]

export const products: Product[] = [
  {
    id: '1', slug: 'calacatta-mramor',
    name: 'Мрамор Calacatta Gold', category: 'Мрамор', categorySlug: 'mramor',
    images: productImages('calacatta'), price: 'от 12 000 ₽/м²',
    description: 'Итальянский мрамор премиум-класса с золотистыми прожилками на белом фоне.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Белый', 'Золотой'],
    country: 'Италия', finish: ['Полированная', 'Матовая'],
    specifications: { Прочность: '140 МПа', Водопоглощение: '0.2%', Морозостойкость: 'F150' },
  },
  {
    id: '2', slug: 'nero-marquina',
    name: 'Мрамор Nero Marquina', category: 'Мрамор', categorySlug: 'mramor',
    images: productImages('nero'), price: 'от 9 500 ₽/м²',
    description: 'Чёрный испанский мрамор с белыми прожилками. Эффектный и контрастный.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Чёрный', 'Белый'],
    country: 'Испания', finish: ['Полированная'], specifications: { Прочность: '120 МПа', Водопоглощение: '0.3%', Морозостойкость: 'F100' },
  },
  {
    id: '3', slug: 'emerald-pearl',
    name: 'Гранит Emerald Pearl', category: 'Гранит', categorySlug: 'granit',
    images: productImages('emerald'), price: 'от 6 500 ₽/м²',
    description: 'Норвежский гранит с зелёно-чёрной текстурой. Идеален для фасадов.',
    inStock: true, thickness: ['20 мм', '30 мм', '50 мм'], colors: ['Зелёный', 'Чёрный'],
    country: 'Норвегия', finish: ['Полированная', 'Термо'], specifications: { Прочность: '220 МПа', Водопоглощение: '0.1%', Морозостойкость: 'F300' },
  },
  {
    id: '4', slug: 'bianco-carrara',
    name: 'Мрамор Bianco Carrara', category: 'Мрамор', categorySlug: 'mramor',
    images: productImages('carrara'), price: 'от 7 500 ₽/м²',
    description: 'Классический белый мрамор из Каррары. Серые прожилки, тёплый оттенок.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Белый', 'Серый'],
    country: 'Италия', finish: ['Полированная', 'Лощёная'], specifications: { Прочность: '130 МПа', Водопоглощение: '0.2%', Морозостойкость: 'F100' },
  },
  {
    id: '5', slug: 'taj-mahal',
    name: 'Кварцит Taj Mahal', category: 'Кварцит', categorySlug: 'kvarcit',
    images: productImages('taj-mahal'), price: 'от 18 000 ₽/м²',
    description: 'Бразильский кварцит с кремово-серым рисунком. Очень твёрдый.',
    inStock: false, thickness: ['20 мм', '30 мм'], colors: ['Кремовый', 'Серый'],
    country: 'Бразилия', finish: ['Полированная'], specifications: { Прочность: '380 МПа', Водопоглощение: '0.05%', Морозостойкость: 'F200' },
  },
  {
    id: '6', slug: 'verde-guatemala',
    name: 'Мрамор Verde Guatemala', category: 'Мрамор', categorySlug: 'mramor',
    images: productImages('verde'), price: 'от 11 000 ₽/м²',
    description: 'Гватемальский зелёный мрамор с белыми прожилками. Редкий цвет.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Зелёный', 'Белый'],
    country: 'Гватемала', finish: ['Полированная', 'Матовая'], specifications: { Прочность: '135 МПа', Водопоглощение: '0.25%', Морозостойкость: 'F150' },
  },
  {
    id: '7', slug: 'blue-pearl',
    name: 'Гранит Blue Pearl', category: 'Гранит', categorySlug: 'granit',
    images: productImages('blue-pearl'), price: 'от 8 500 ₽/м²',
    description: 'Норвежский гранит с голубым мерцанием. Уникальная текстура.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Синий', 'Серый'],
    country: 'Норвегия', finish: ['Полированная', 'Термо'], specifications: { Прочность: '240 МПа', Водопоглощение: '0.1%', Морозостойкость: 'F300' },
  },
  {
    id: '8', slug: 'crema-marfil',
    name: 'Мрамор Crema Marfil', category: 'Мрамор', categorySlug: 'mramor',
    images: productImages('crema'), price: 'от 6 500 ₽/м²',
    description: 'Испанский кремовый мрамор. Тёплый оттенок, однородная структура.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Бежевый', 'Кремовый'],
    country: 'Испания', finish: ['Полированная', 'Лощёная'], specifications: { Прочность: '110 МПа', Водопоглощение: '0.3%', Морозостойкость: 'F100' },
  },
  {
    id: '9', slug: 'oniks-avokado',
    name: 'Оникс Avocado', category: 'Оникс', categorySlug: 'oniks',
    images: productImages('oniks-avokado'), price: 'от 25 000 ₽/м²',
    description: 'Зелёный оникс с эффектом просвечивания. Для подсветки.',
    inStock: false, thickness: ['20 мм'], colors: ['Зелёный', 'Золотой'],
    country: 'Иран', finish: ['Полированная'], specifications: { Прочность: '80 МПа', Водопоглощение: '0.4%', Морозостойкость: 'F50' },
  },
  {
    id: '10', slug: 'giallo-orio',
    name: 'Гранит Giallo Oriо', category: 'Гранит', categorySlug: 'granit',
    images: productImages('giallo'), price: 'от 7 000 ₽/м²',
    description: 'Бразильский жёлто-золотистый гранит с тёмными вкраплениями.',
    inStock: true, thickness: ['20 мм', '30 мм'], colors: ['Жёлтый', 'Золотой'],
    country: 'Бразилия', finish: ['Полированная'], specifications: { Прочность: '200 МПа', Водопоглощение: '0.15%', Морозостойкость: 'F200' },
  },
]

export const services: Service[] = [
  { slug: 'rezka', title: 'Резка камня', description: 'Гидроабразивная резка любой сложности. Точность до ±1 мм.', priceFrom: '1 500', image: '/images/services/cutting.svg' },
  { slug: 'polirovka', title: 'Полировка камня', description: 'Восстановление блеска и обработка кромки любой сложности.', priceFrom: '1 200', image: '/images/services/polishing.svg' },
  { slug: 'montazh', title: 'Монтаж камня', description: 'Профессиональная укладка с гарантией до 3 лет.', priceFrom: '3 500', image: '/images/services/installation.svg' },
  { slug: 'izgotovlenie-izdeliy', title: 'Изготовление изделий', description: 'Столешницы, подоконники, барные стойки, ступени — под заказ.', priceFrom: '5 000', image: '/images/services/fabrication.svg' },
  { slug: 'dostavka', title: 'Доставка камня', description: 'По Москве и всей России. Собственный транспорт до 300 км от МКАД.', priceFrom: '2 000', image: '/images/services/delivery.svg' },
]

export const advantages: Advantage[] = [
  { icon: 'Warehouse', title: 'Собственный склад', text: 'Более 5 000 м² камня в наличии. Любая позиция доступна для осмотра.' },
  { icon: 'Ruler', title: 'Резка под размер', text: 'Гидроабразивная резка с точностью до ±1 мм. Любая форма и сложность.' },
  { icon: 'Truck', title: 'Доставка по РФ', text: 'СДЭК, ПЭК, Деловые Линии или собственным транспортом. Страховка груза.' },
  { icon: 'HardHat', title: 'Монтаж под ключ', text: 'Бригады с 10+ лет опыта. Гарантия на монтажные работы до 3 лет.' },
  { icon: 'FileCheck', title: 'Сертификаты', text: 'Вся продукция имеет декларации соответствия РФ. Контроль качества.' },
  { icon: 'ClipboardCheck', title: 'Бесплатный выезд замерщика', text: 'Приедем, сделаем замеры и привезём образцы камня — 0 ₽.' },
]

export const reviews: Review[] = [
  { name: 'Анна К., дизайнер интерьеров', text: 'Работаем с этой компанией более 5 лет. Всегда широкий выбор мрамора, отличная резка, сроки соблюдают. Клиенты довольны.', project: 'Квартира в ЖК «Дом на Мосфильмовской»', rating: 5 },
  { name: 'Иван П., архитектор', text: 'Заказывали гранит для фасада бизнес-центра. Подобрали идеальный оттенок, смонтировали за 2 недели. Качество на высоте.', project: 'БЦ «Невский 152»', rating: 5 },
  { name: 'Елена В., частный заказчик', text: 'Заказала столешницу из мрамора для кухни. Помогли с выбором, сделали замеры бесплатно. Результат превзошёл ожидания!', project: 'Частный дом в КП «Миллениум»', rating: 5 },
  { name: 'Сергей М., строительная компания', text: 'Постоянно берём камень для отделки коттеджей. Цены адекватные, доставка всегда вовремя. Рекомендуем.', project: 'Коттеджный посёлок «Резиденция»', rating: 4 },
]
