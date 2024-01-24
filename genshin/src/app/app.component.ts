import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectReacaoComponent } from './select-reacao/select-reacao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectReacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'genshin';
}
