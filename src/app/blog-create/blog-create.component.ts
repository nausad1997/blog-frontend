import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogDescription: string;
  public blogBody: string;
  public blogCategory;
  public blogCategories = ["Comedy", "Educational", "Technical", "Cinema", "Cooking"];

  constructor(public _blogHttp: BlogHttpService, public _routes: ActivatedRoute, public route: Router, public toastr: ToastrManager, vcr: ViewContainerRef) { }



  ngOnInit() {

  }


  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBody,
      category: this.blogCategory,
    }

    this._blogHttp.createBlog(blogData).subscribe(

      data => {
        console.log(data);
        this.toastr.successToastr('Blog Posted Successfully', 'YEAH!')
        setTimeout(() => {
          this.route.navigate(['/blog', data.data.blogId]);
        }, 1000)
      },
      error => {
        console.log(`${error.message}, ${error.status}`);
        this.toastr.errorToastr('Some Error Occured', 'Oops!');
      }
    )
  }

}
