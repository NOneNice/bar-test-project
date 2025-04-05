import { DrinksDto } from '../interface/drinks.dto';
import { DrinkName } from '../interface/drink-name';

export type BarState = {
  drinksMap: Record<DrinkName, DrinksDto>;
  currentDrinkName: string;
};
