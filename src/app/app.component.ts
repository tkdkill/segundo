import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variáveis que controlam a visibilidade dos componentes
  loja_visivel: boolean = true;
  stock_visivel: boolean = false;

  mostrarLoja() {
    // apresenta loja e remove o stock
    this.loja_visivel = true;
    this.stock_visivel = false;

  }
  mostrarStock() {
    // apresenta stock e remove a loja
    this.loja_visivel = false;
    this.stock_visivel = true;
  }
}
