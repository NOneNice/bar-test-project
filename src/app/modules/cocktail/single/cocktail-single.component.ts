import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Drink } from '../../../interface/drinks.dto';
import { CocktailSingleCardComponent } from './cocktail-single-card/cocktail-single-card.component';

@Component({
  selector: 'app-cocktail-single',
  imports: [CocktailSingleCardComponent],
  templateUrl: './cocktail-single.component.html',
  styleUrl: './cocktail-single.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailSingleComponent implements OnInit {
  private readonly activeRouter = inject(ActivatedRoute);

  public entity: Drink | null = this.activeRouter.snapshot.data['entity'];

  private readonly title = inject(Title);

  public readonly notFound = 'Коктейль не был найден';

  ngOnInit() {
    if (this.entity) {
      this.title.setTitle(`Коктель: ${this.entity.strDrink}`);
    } else {
      this.title.setTitle(this.notFound);
    }
  }
}
