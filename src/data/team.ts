import emp1 from '../images/emp1.jpg';
import emp2 from '../images/emp2.jpg';
//import emp3 from '../images/house3.jpg';
//import emp44 from '../images/house4.jpg';

export interface ITeamMember {
  id: string | number;
  name: string;
  position: string;
  image: string;
}

export const teamData: ITeamMember[] = [
  { id: 1, name: "ФИ сотрудника", position: "Должность", image: emp1 },
  { id: 2, name: "ФИ сотрудника", position: "Должность", image: emp2 },
  { id: 3, name: "ФИ сотрудника", position: "Должность", image: emp1 },
  { id: 4, name: "ФИ сотрудника", position: "Должность", image: emp2 },
];