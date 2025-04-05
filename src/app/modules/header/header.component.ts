import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    InputText,
    FormsModule,
    ReactiveFormsModule,
    Button,
    NgOptimizedImage,
    MatIcon,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected formControl = new FormControl('');
}
