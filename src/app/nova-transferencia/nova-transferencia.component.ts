import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovatransferenciaComponent {
  transferir() {
    console.log('Solicitada nova transferencia');
  }
}
