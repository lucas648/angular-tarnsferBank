import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferencias.service';
import { Transferencia } from 'src/app/utils/enums';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias : Transferencia[];

  constructor(
    private transferenciaService: TransferenciasService
  ) { }

  ngOnInit(): void {
    this.transferenciaService.buscarTransferencias().subscribe(
     ( transferencias : Transferencia[])=>{
      console.log(transferencias)
      this.transferencias = transferencias;
     }
    )
    this.transferencias = this.transferenciaService.transferencias;
  }

}
