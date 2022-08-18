import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  // discount!: string;
  // template!:string;
  // path!:string;
  // title: any;
  post!: { title: string | null; templateName: string | null; discount: string | null; path: string | null;};


  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  //   this.route.queryParamMap.subscribe((param : Params) => {
  //     this.template!=param['templateName'];
  //   this.title!=param['title'];
  //   this.discount!=param['discount'];
  // });
  let param=this.route.snapshot.queryParamMap;
  console.log(param.get("title"));
  console.log(this.route.snapshot.queryParamMap.get("discount"));
  let s=param.get("templateName");
  let template=this.route.snapshot.queryParamMap.get("templateName");
  let title=this.route.snapshot.queryParamMap.get("title");
  let discount=this.route.snapshot.queryParamMap.get("discount");
  
    
    let path:string="";
    let templates=JSON.parse(localStorage.getItem('templates')!);
    for(let i=0;i<templates.length;i++){
        if(templates[i].name===template){
          path="../"+templates[i].path;
          break;
        }
    }
    this.post={"title":title,"templateName":template,"discount":discount,"path":path}
    console.log(template,title,discount,path);
  }


}
