export class DataProvider{
    templates=[{name:"teal",
    path: '../assets/Teal.png'},
    {name:"YellowFruit",
  path: '../assets/YellowFruit.png'},
  
  ];
  posts = [{
    templateName:"teal",
    title:"discount offer",
    discount:"20% Discount"
  }];

  get getTemplates(){
    return this.templates;
  }

  intializeLocalStorage (){
    localStorage.setItem('templates',JSON.stringify(this.templates));
  localStorage.setItem('posts',JSON.stringify(this.posts));
  } 

}