import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { AsyncPipe } from '@angular/common';
import { BarStore } from '../../../store/bar.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  imports: [Card, AsyncPipe, RouterLink],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailListComponent {
  public drinks$ = inject(BarStore).drinks$;
}
