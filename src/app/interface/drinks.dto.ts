export interface DrinksDto {
  drinks: Drink[] | null;
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | null;
}
