import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [
    {nome: 'Fulando de Tal 1', cidade: 'Goiânia', estado: 'GO', status: true},
    {nome: 'Fulando de Tal 2', cidade: 'Goiânia', estado: 'GO', status: true},
    {nome: 'Fulando de Tal 3', cidade: 'Goiânia', estado: 'GO', status: false},
    {nome: 'Fulando de Tal 4', cidade: 'Goiânia', estado: 'GO', status: true},
    {nome: 'Fulando de Tal 5', cidade: 'Goiânia', estado: 'GO', status: false}
  ];

}
