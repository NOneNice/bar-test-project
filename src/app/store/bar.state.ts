import { DrinksDto } from '../interface/drinks.dto';
import { DrinkName } from '../interface/drink-name';
import { loadingStatus } from '../interface/loading-status';

export type BarState = {
  drinksMap: Record<DrinkName, DrinksDto>;
  currentDrinkName: string;
  loadingStatus: loadingStatus;
};
