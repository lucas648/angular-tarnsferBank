import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciasService } from 'src/app/services/transferencias.service';
import { Transferencia } from 'src/app/utils/enums';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number;
  destino: number;

  constructor(
    private transferenciaService: TransferenciasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.transferenciaService.adicionarTransferencia(valorEmitir).subscribe(()=>{
      this.router.navigateByUrl('extrato')
    });
  }

}
