import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

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
    ButtonModule
  ]
})

export class AppComponent {
  //variáveis das forms
  nome: string = '';
  sobrenome: string = '';
  generoSelecionado: string = '';

  //lista generos
  opcoesGeneros = [
    { label: 'Homem', value: 'Homem' },
    { label: 'Mulher', value: 'Mulher' },
    { label: 'Prefiro não responder', value: 'Prefiro não responder' }
  ];

  onSubmit(form?: NgForm) {
    // teste pra ver se tá pegando info
    console.log('Formulário enviado:', {
      nome: this.nome,
      sobrenome: this.sobrenome,
      generoSelecionado: this.generoSelecionado
    });
  }
}