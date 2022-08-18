import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  img="../assets/Teal.png";
  templates!: [];
  constructor() { }

  ngOnInit(): void {
    this.templates=JSON.parse(localStorage.getItem('templates')!);
    
  }

}
