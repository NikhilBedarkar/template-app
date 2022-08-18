import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!:any[];
  path!:string;
  postflag: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.posts=JSON.parse(localStorage.getItem('posts')!);
    this.postflag=this.posts.length===0?true:false;
    
    
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

  deletePost(indexOfpost:number){
    this.posts.splice(indexOfpost,1);
    this.postflag=this.posts.length===0?true:false;
    console.log(this.posts);
    
    localStorage.setItem('posts',JSON.stringify(this.posts));
  }

  editPost(indexOfpost: any,template:any){
    this.router.navigate(['/edit'],{
      queryParams : {
        "template" : template,
        "index":indexOfpost
      }
    });
  }


}
