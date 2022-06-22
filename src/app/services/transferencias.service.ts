import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private listaTransferencia: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(
    private http: HttpClient  
  ) {
    this.listaTransferencia = []
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  buscarTransferencias() : Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.url)
  }

  adicionarTransferencia(transferencia: Transferencia) : Observable<Transferencia>{
    this.hidratar(transferencia);
    
    return this.http.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: Transferencia){
    transferencia.data = new Date()
  }
}
