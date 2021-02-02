export enum Sex {
  Male = 'Masculino',
  Female = 'Feminino',
  Other = 'Outro',
}
export interface Child {
  name: string,
  birthDate: Date,
  sex: Sex,
  liveWithParents: Boolean,
}