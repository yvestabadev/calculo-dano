import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-ajuda',
  standalone: true,
  imports: [],
  templateUrl: './botao-ajuda.component.html',
  styleUrl: './botao-ajuda.component.css'
})
export class BotaoAjudaComponent {

  @Input()
  imgSrc!: string;
  @Input()
  textoModal!: string;
  @Input()
  idModal!: string;

  private getModal(){
    return document.getElementById(this.idModal) as HTMLDialogElement;
  }

  abrirModal() {
    this.getModal().showModal();
  }

  fecharModal() {
    this.getModal().close();
  }
    
}
