import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  x: string = "hmm";

  constructor(service : ServService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
