import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {

  produtos = [];

  adicionarAnanas() {
    //adiciona um ananás ao componente
    this.produtos.push(
      {
        'icon': 'ico_ananas.png',
        'nome': 'Ananás'
      }
    );
  }

  adicionarBanana() {
    //adiciona uma banana ao componente
    this.produtos.push(
      {
        'icon': 'ico_banana.png',
        'nome': 'Banana'
      }
    );
  }

  adicionarLaranja() {
    //adiciona uma laranja ao componente
    this.produtos.push(
      {
        'icon': 'ico_laranja.png',
        'nome': 'Laranja'
      }
    );
  }
}
