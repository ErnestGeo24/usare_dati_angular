// container.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  public constructionMachines: string[] = [
    'Escavatore',
    'Bulldozer',
    'Gru',
    'Rullo compressore',
    'Bettoniera',
    'Escavatrice',
    'Autogru',
    'Trattore cingolato',
    'Pale gommate',
    'Camion cantiere'
  ];
}

