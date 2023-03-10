import { Component, OnInit } from '@angular/core';
import { Tudo } from 'src/tudo';
import { TudoService } from '../tudo.service';

@Component({
  selector: 'app-my-tudos',
  templateUrl: './my-tudos.component.html',
  styleUrls: ['./my-tudos.component.less']
})
export class MyTudosComponent implements OnInit {
  constructor(private tudoService: TudoService) { }
  tudos: Tudo[] = []
  ngOnInit(): void {
    this.tudoService.myTodu.subscribe(value=>{
      this.tudos = [...value]
    })
  }
}
