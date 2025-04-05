import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { InputText } from 'primeng/inputtext';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { BarStore } from '../../store/bar.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [InputText, FormsModule, ReactiveFormsModule, Button, RouterLink],
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

  @HostListener('document:keydown.enter')
  protected submit() {
    this.store.findByDrinkName(this.formControl.value);
  }

  protected random() {
    this.store.randomCocktail();
  }
}
