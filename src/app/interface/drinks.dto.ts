export interface DrinksDto {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | undefined;
}
