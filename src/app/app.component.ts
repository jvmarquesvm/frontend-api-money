import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LancamentosPesquisaComponent } from "./lancamentos-pesquisa/lancamentos-pesquisa.component"
import { NavbarComponent } from "./navbar/navbar.component";
import { PessoasPesquisaComponent } from "./pessoas-pesquisa/pessoas-pesquisa.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
  //LancamentosPesquisaComponent, 
  NavbarComponent, PessoasPesquisaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
