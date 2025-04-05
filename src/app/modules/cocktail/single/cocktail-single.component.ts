import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Drink } from '../../../interface/drinks.dto';
import { CocktailSingleCardComponent } from './cocktail-single-card/cocktail-single-card.component';
import { BarStore } from '../../../store/bar.store';
import { RANDOM_KEY } from '../../../const/random-key-state.const';

@Component({
  selector: 'app-cocktail-single',
  imports: [CocktailSingleCardComponent],
  templateUrl: './cocktail-single.component.html',
  styleUrl: './cocktail-single.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailSingleComponent implements OnInit, OnDestroy {
  private readonly activeRouter = inject(ActivatedRoute);

  public readonly store = inject(BarStore);

  public entity: Drink | null = this.activeRouter.snapshot.data['entity'];

  private readonly title = inject(Title);

  public readonly notFound = 'Коктейль не был найден';

  ngOnInit() {
    if (this.entity) {
      //Небольшой костыль что бы получать рандомный коктель
      const getRandomEntity = this.store.state().drinksMap[RANDOM_KEY];
      if (getRandomEntity?.drinks) {
        this.entity = getRandomEntity.drinks[0];
      }

      this.title.setTitle(`Коктель: ${this.entity.strDrink}`);
    } else {
      this.title.setTitle(this.notFound);
    }
  }

  ngOnDestroy() {
    this.store.cleaRandom();
  }
}
