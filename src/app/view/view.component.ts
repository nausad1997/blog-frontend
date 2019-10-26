import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public currentBlog;

  constructor(private location: Location, private _route: ActivatedRoute, private router: Router, private blogService: BlogHttpService, public toast: ToastrManager) { }

  ngOnInit() {
    // getting blogId from this statement
    let myblogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myblogId);

    // calling getSingleBlogInformation method
    this.blogService.getSingleBlogInformation(myblogId).subscribe
      (
        //success callback
        (data) => {
          this.currentBlog = data['data'];
          console.log(this.currentBlog);

        },
        //error callback
        (error) => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
          this.currentBlog = error.errorMessage;
        }

      );
  }

  public deleteBlog() {

    this.blogService.delete(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toast.successToastr('Blog Deleted Successfully', 'YEAH!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        this.toast.errorToastr('Some Error Occured.', 'Oops!');
        console.log(error.message);
      }




    )
  }

  goBack() {
    this.location.back();
  }

}
