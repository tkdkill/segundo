import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.css']
})

export class StockComponent {
    total_ananases: number = 0;
    total_bananas: number = 0;
    total_laranjas: number = 0;
    // total_produtos: number = 0;

    // -----------------------
    adicionarAnanas() {
        this.total_ananases++;
        // this.total_produtos++;
    }
    // -----------------------
    removerAnanas(){
        this.total_ananases--;
        // this.total_produtos--;
    }

    // -----------------------
    adicionarBananas() {
        this.total_bananas++;
        // this.total_produtos++;
    }
    // -----------------------
    removerBananas() {
        this.total_bananas--;
        // this.total_produtos--;
    }

    // -----------------------
    adicionarLaranjas() {
        this.total_laranjas++;
        // this.total_produtos++;
    }
    // -----------------------
    removerLaranjas() {
        this.total_laranjas--;
        // this.total_produtos--;
    }

    calcularTotal() {
        return this.total_ananases + this.total_bananas + this.total_laranjas;
    }

    // estilos
    estiloAnanases() {
        let estilo = 'black';
        if (this.total_ananases <= 0) {
            estilo = 'red';
        }
        return estilo;
    }

    estiloBananas() {
        let estilo = 'black';
        if (this.total_bananas <= 0) {
            estilo = 'red';
        }
        return estilo;
    }

    estiloLaranjas() {
        let estilo = 'black';
        if (this.total_laranjas <= 0) {
            estilo = 'red';
        }
        return estilo;
    }

}