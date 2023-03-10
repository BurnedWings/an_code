import { Component, Input } from '@angular/core';
import { Tudo } from 'src/tudo';
export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}
@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.component.html',
  styleUrls: ['./tudo.component.less']
})
export class TudoComponent {

  @Input() tudos !: Tudo[]

  onItemChecked = () => {

  }
  onAllChecked = () => { }

  onCurrentPageDataChange = () => {

  }

  ngOnInit(): void {

  }
}
