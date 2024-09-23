import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() marcarHorario = new EventEmitter<void>(); // Emissor do evento

  constructor(private router: Router) { }

  irParaAgendamento() {
    this.marcarHorario.emit(); // Emite o evento para ocultar o ConteudoComponent
    this.router.navigate(['/agendamento']); // Navega para a página de agendamento
  }
}

