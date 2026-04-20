import house1 from '../images/house-isolated-field.jpg';
import house2 from '../images/house2.jpg';
import house3 from '../images/house3.jpg';
import house4 from '../images/house4.jpg';

// Типизируем объект проекта (можно использовать тот же интерфейс, что и в Card)
export interface IProject {
  id: string | number;
  image: string;
  title: string;
  area: number;
  floors: number;
  rooms: number;
}

const projects: IProject[] = [
  {
    id: '1',
    image: house1,
    title: "Скандинавский уют",
    area: 120,
    floors: 1,
    rooms: 4
  },
  {
    id: '2',
    image: house2,
    title: "Современный хай-тек",
    area: 250,
    floors: 2,
    rooms: 6
  },
  {
    id: '3',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3
  },
  {
    id: '4',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11
  },
  {
    id: '5',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3
  },
  {
    id: '6',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11
  },
  {
    id: '7',
    image: house1,
    title: "Скандинавский уют",
    area: 120,
    floors: 1,
    rooms: 4
  },
  {
    id: '8',
    image: house2,
    title: "Современный хай-тек",
    area: 250,
    floors: 2,
    rooms: 6
  },
  {
    id: '9',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3
  },
  {
    id: '10',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11
  },
  {
    id: '11',
    image: house3,
    title: "Уютное шале",
    area: 90,
    floors: 1,
    rooms: 3
  },
  {
    id: '12',
    image: house4,
    title: "Дом-теплица",
    area: 156,
    floors: 2,
    rooms: 11
  },
];
export default projects;