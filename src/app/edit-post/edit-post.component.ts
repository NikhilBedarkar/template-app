import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  template=this.route.snapshot.queryParamMap.get("template")!;
  postIndex=this.route.snapshot.queryParamMap.get("index")!;
  posts=JSON.parse(localStorage.getItem('posts')!);
  oldTitle!: string;
  oldDiscount!:string;

  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    let post=this.posts[parseInt(this.postIndex)];
    this.oldDiscount=post.discount;
    this.oldTitle=post.title;
  }
  editPost(formData: any){
    let post={ "templateName":this.template,
    "title":formData.Title,
    "discount":formData.Discount };
    this.posts.splice(parseInt(this.postIndex),1,post);  
    localStorage.setItem('posts',JSON.stringify(this.posts));
    this.router.navigate(["/posts",{}]);
}  

}
