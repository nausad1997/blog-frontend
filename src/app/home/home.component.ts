//this is a by default statement
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allBlogs;


  constructor(public blogService: BlogHttpService) { }

  ngOnInit() {
     //calling getAllBlog method which is defined in blogHttpService
    this.allBlogs = this.blogService.getAllBlog().subscribe(
      //success callback
      data => {
        this.allBlogs = data['data']
        console.log(this.allBlogs)
      },
      //error callback
      (error) => {
        console.log("Some Error Occured");
        console.log(error.message);
        this.allBlogs = error.message;
      }


    );
   

  }
}