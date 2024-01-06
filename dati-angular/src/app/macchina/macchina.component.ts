import  {component, input} from '@angular/core'

@component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent{
  @input() nome: string;
  @input() tipo: string;
  @input() annoproduzione: number;
  @input() pezzi: string[];
}