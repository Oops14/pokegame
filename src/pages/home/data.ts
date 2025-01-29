import { v4 as uuid } from 'uuid'

export const accordions = [
  { id: 1, title: "My Pokemon's" },
  { id: 2, title: 'Garden' },
  { id: 3, title: 'Hunt' },
]

export const gardenOptions = [
  {
    id: uuid(),
    title: 'Увеличить площадь грядки',
    price: 1000,
  },
  {
    id: uuid(),
    title: 'Ускорить рост на 2%/час на 2 часа',
    price: 2000,
  },
  {
    id: uuid(),
    title: 'Ускорить рост на 5%/час на 2 часа',
    price: 5000,
  },
]
