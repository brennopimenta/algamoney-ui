import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algamoney-ui';
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Comprade Pão', dataVencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'},
    {tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '10/06/2017', dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil'}
  ];

}
