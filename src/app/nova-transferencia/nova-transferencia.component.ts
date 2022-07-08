import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovatransferenciaComponent {
  valor!: number;
  destino!: number;

  transferir() {
    console.log('Solicitada nova transferencia');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
