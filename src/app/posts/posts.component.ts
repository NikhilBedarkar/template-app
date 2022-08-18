import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!:any[];
  path!:string;
  constructor() { }

  ngOnInit(): void {

    this.posts=JSON.parse(localStorage.getItem('posts')!);
    
    
  }
  getPath(templateName:string){
    let path:string="";
    let templates=JSON.parse(localStorage.getItem('templates')!);
    for(let i=0;i<templates.length;i++){
      if(templates[i].name===templateName){
        path="../"+templates[i].path;
        break;
      }
  }
    return "../"+path;
  }

}
