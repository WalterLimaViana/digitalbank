import { Component } from '@angular/core';
import { TrasnferenciaService } from './services/trasnferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digitalbank';

  constructor(private service: TrasnferenciaService) {}

  transferir($event: any) {
    this.service.adicionar($event);
  }
}
