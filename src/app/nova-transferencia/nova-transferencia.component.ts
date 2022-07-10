import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovatransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;
  router: any;

  constructor(private service: TransferenciaService, router: Router) {}

  transferir() {
    console.log('Solicitada nova transferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
