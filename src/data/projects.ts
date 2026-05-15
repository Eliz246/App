import house1 from '../images/house-isolated-field.jpg';
import house2 from '../images/house2.jpg';
import house3 from '../images/house3.jpg';
import house4 from '../images/house4.jpg';
import arcIm from '../images/floor-plan-with-furniture-blueprint-illustration.jpg';
export interface IRoom {
  name: string;
  area: number;
}

export interface IProject {
  id: string | number;
  image: string;
  title: string;
  area: number;
  floors: number;
  rooms: number;
  features: string[];
  layoutImage: string;
  roomsList: IRoom[];
}

const projects: IProject[] = [
  {
    id: '1',
    image: house1,
    title: "Скандинавский уют",
    area: 120,
    floors: 1,
    rooms: 4,
    features:['гараж', 'сауна'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Гостиная-кухня", area: 50 },
      { name: "Мастер-спальня", area: 25 },
      { name: "Детская комната", area: 25 },
      { name: "Кабинет", area: 20 }
    ]
  },
  {
    id: '2',
    image: house2,
    title: "Современный хай-тек",
    area: 250,
    floors: 2,
    rooms: 6,
    features:['гараж', 'бассейн'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Просторная гостиная", area: 70 },
      { name: "Кухня-столовая", area: 40 },
      { name: "Главная спальня", area: 40 },
      { name: "Детская комната", area: 35 },
      { name: "Гостевая спальня", area: 35 },
      { name: "Домашний офис", area: 30 }
    ]
  },
  {
    id: '3',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3,
    features:[''],
    layoutImage: arcIm,
    roomsList: [
      { name: "Кухня-гостиная", area: 45 },
      { name: "Спальня", area: 25 },
      { name: "Детская", area: 20 }
    ]
  },
  {
    id: '4',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11,
    features:['гараж','кладовая', 'гардеробная'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Гостиная", area: 30 },
      { name: "Кухня", area: 15 },
      { name: "Зимний сад", area: 20 },
      { name: "Главная спальня", area: 15 },
      { name: "Спальня 2", area: 12 },
      { name: "Спальня 3", area: 12 },
      { name: "Кабинет", area: 12 },
      { name: "Игровая", area: 12 },
      { name: "Творческая мастерская", area: 10 },
      { name: "Гардеробная", area: 10 },
      { name: "Кладовая", area: 8 }
    ]
  },
  {
    id: '5',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3,
    features:[''],
    layoutImage: arcIm,
    roomsList: [
      { name: "Кухня-гостиная", area: 45 },
      { name: "Спальня", area: 25 },
      { name: "Детская", area: 20 }
    ]
  },
  {
    id: '6',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11,
    features:['гараж','кладовая', 'гардеробная'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Гостиная", area: 30 },
      { name: "Кухня", area: 15 },
      { name: "Зимний сад", area: 20 },
      { name: "Главная спальня", area: 15 },
      { name: "Спальня 2", area: 12 },
      { name: "Спальня 3", area: 12 },
      { name: "Кабинет", area: 12 },
      { name: "Игровая", area: 12 },
      { name: "Творческая мастерская", area: 10 },
      { name: "Гардеробная", area: 10 },
      { name: "Кладовая", area: 8 }
    ]
  },
  {
    id: '7',
    image: house1,
    title: "Скандинавский уют",
    area: 120,
    floors: 1,
    rooms: 4,
    features:['гараж', 'сауна'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Гостиная-кухня", area: 50 },
      { name: "Мастер-спальня", area: 25 },
      { name: "Детская комната", area: 25 },
      { name: "Кабинет", area: 20 }
    ]
  },
  {
    id: '8',
    image: house2,
    title: "Современный хай-тек",
    area: 250,
    floors: 2,
    rooms: 6,
    features:['гараж', 'бассейн'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Просторная гостиная", area: 70 },
      { name: "Кухня-столовая", area: 40 },
      { name: "Главная спальня", area: 40 },
      { name: "Детская комната", area: 35 },
      { name: "Гостевая спальня", area: 35 },
      { name: "Домашний офис", area: 30 }
    ]
  },
  {
    id: '9',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3,
    features:[''],
    layoutImage: arcIm,
    roomsList: [
      { name: "Кухня-гостиная", area: 45 },
      { name: "Спальня", area: 25 },
      { name: "Детская", area: 20 }
    ]
  },
  {
    id: '10',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11,
    features:['гараж','кладовая', 'гардеробная'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Гостиная", area: 30 },
      { name: "Кухня", area: 15 },
      { name: "Зимний сад", area: 20 },
      { name: "Главная спальня", area: 15 },
      { name: "Спальня 2", area: 12 },
      { name: "Спальня 3", area: 12 },
      { name: "Кабинет", area: 12 },
      { name: "Игровая", area: 12 },
      { name: "Творческая мастерская", area: 10 },
      { name: "Гардеробная", area: 10 },
      { name: "Кладовая", area: 8 }
    ]
  },
  {
    id: '11',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3,
    features:[''],
    layoutImage: arcIm,
    roomsList: [
      { name: "Кухня-гостиная", area: 45 },
      { name: "Спальня", area: 25 },
      { name: "Детская", area: 20 }
    ]
  },
  {
    id: '12',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11,
    features:['гараж','кладовая', 'гардеробная'],
    layoutImage: arcIm,
    roomsList: [
      { name: "Гостиная", area: 30 },
      { name: "Кухня", area: 15 },
      { name: "Зимний сад", area: 20 },
      { name: "Главная спальня", area: 15 },
      { name: "Спальня 2", area: 12 },
      { name: "Спальня 3", area: 12 },
      { name: "Кабинет", area: 12 },
      { name: "Игровая", area: 12 },
      { name: "Творческая мастерская", area: 10 },
      { name: "Гардеробная", area: 10 },
      { name: "Кладовая", area: 8 }
    ]
  },
];
export default projects;