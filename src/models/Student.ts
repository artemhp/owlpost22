export type THouse = 'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw';

export default interface TStudent {
  id: number;
  house: THouse;
  name: string;
  distance: string;
}
