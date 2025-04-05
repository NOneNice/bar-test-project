import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderComponent } from './modules/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ProgressSpinner } from 'primeng/progressspinner';
import { BarStore } from './store/bar.store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, ProgressSpinner, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly store = inject(BarStore);

  protected readonly isLoading$ = this.store.isLoading$;
}
