export type house = 'gryffindor' | 'slytherin';

export default interface Student {
  id: number;
  house: house;
  name: string;
  distance: string;
}
