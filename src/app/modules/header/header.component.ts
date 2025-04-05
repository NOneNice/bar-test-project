import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { BarStore } from '../../store/bar.store';

@Component({
  selector: 'app-header',
  imports: [InputText, FormsModule, ReactiveFormsModule, Button],
  providers: [BarStore],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected formControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  private readonly store = inject(BarStore);

  protected submit() {
    this.store.findByDrinkName(this.formControl.value);
  }

  protected random() {
    this.store.randomCocktail();
  }
}
