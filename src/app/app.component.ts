import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-app';
  templates=[
  {name:"houseOffer",
  path: '../assets/houseOffer.png'},
  {name:"xmaxDesign",
  path: '../assets/xmaxDesign.png'},
  {name:"spiderDesign",
  path: '../assets/spiderDesign.png'},
  {name:"teal",
    path: '../assets/Teal.png'},
    {name:"YellowFruit",
  path: '../assets/YellowFruit.png'},
  ];
  posts = [{
    templateName:"houseOffer",
    title:"Exciting discounts on Houses!",
    discount:"5-10 % Discount(terms & conditions apply*)"
  }]


ngOnInit(): void {
  localStorage.setItem('templates',JSON.stringify(this.templates));
  localStorage.setItem('posts',JSON.stringify(this.posts));
}

}
