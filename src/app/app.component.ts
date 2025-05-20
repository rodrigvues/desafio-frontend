import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

//organizando imports de componentes do prime ng, botão inputs etc
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    NgIf
  ]
})

export class AppComponent {
  //variáveis das forms
  nome: string = '';
  sobrenome: string = '';
  generoSelecionado: string = '';
  UFSelecionado: string = '';
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  numero: string = '';
  complemento: string = '';
  
  //lista generos
  opcoesGeneros = [
    { label: 'Homem', value: 'Homem' },
    { label: 'Mulher', value: 'Mulher' },
    { label: 'Prefiro não responder', value: 'Prefiro não responder' }
  ];

  opcoesUF = [
    { label: 'SC', value: 'SC' },
    { label: 'SP', value: 'SP' },
    { label: 'RJ', value: 'RJ' }
  ];

  //função para mudar etapa do cadastro com
  parteCadastro = 1;

  onSubmit(form?: NgForm) {
    // função ngif que muda aba
    if (this.parteCadastro === 1) {
    this.parteCadastro = 2;
    } 
  }

  // função para mostrar pop up
  onSalvar(form?: NgForm) {
    console.log('funcionando')
  }
}