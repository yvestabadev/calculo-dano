import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectReacaoComponent } from './select-reacao/select-reacao.component';
import { FormDanoComponent } from './form-dano/form-dano.component';
import { Reacao } from './tipos/reacao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectReacaoComponent, FormDanoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  reacao?: Reacao;
  public defineReacao(reacao: Reacao) {
    this.reacao = reacao;
  }
  title = 'genshin';
}
