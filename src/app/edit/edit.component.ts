import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public currentBlog;
  public blogCategories = ["Comedy", "Educational", "Technical", "Cinema", "Cooking"];

  constructor(public http: BlogHttpService, public router: ActivatedRoute, public route: Router, public toastr: ToastrManager) { }



  ngOnInit() {

    let blogId = this.router.snapshot.paramMap.get('blogId');
    console.log(blogId);

    this.http.getSingleBlogInformation(blogId).subscribe(

      data => {
        this.currentBlog = data['data'];
        console.log(this.currentBlog);

      }

    )
  }

  public editedBlog() {
    this.http.editedBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);

        this.toastr.successToastr('Blog Edited Successfully', 'YEAH!');
        setTimeout(() => {
          this.route.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      }
    )
  }


}
