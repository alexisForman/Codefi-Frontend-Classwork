export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name= name;
    this.amount=amount;
  }
}

//This is such a common and expected shortcut that TS offers a shorthand version:

// export class Ingredient {
//   constructor(public name: string, public amount: number) {}
// }
