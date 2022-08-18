import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {



  constructor(private route : ActivatedRoute,private router: Router) { }

 post!: any;

  ngOnInit(): void {
  }

  savePost(data: any){
    let posts:any[];
    posts=JSON.parse(localStorage.getItem('posts')!);
    let template=this.route.snapshot.paramMap.get('templateName');
    let l=posts.length;
    this.post={"templateName" : template,"title":data.Title,"discount":data.Discount};
    console.log(data);
    console.log(posts);
    posts.splice(0,0,this.post);
    localStorage.setItem('posts',JSON.stringify(posts));
    this.router.navigate(['/post'],{
      queryParams : {
        "templateName" : template,
        "title":data.Title,
        "discount":data.Discount
      }
    });
  }
}
