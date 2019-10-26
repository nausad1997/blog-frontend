import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public currentBlog;
  public allBlogs = [];
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";
  public authToken = "ZmYyYmI5NTZkMzcxYzc4Y2ZjZmMxOTA3NzVjM2YyOGE1OGEyMjMxMTNhODg1YjU3NjEyNTI3Y2NhZmIzMTU1N2ZjYTg1ZjY1YTVkODRiOGRmMTZkNWZiMWU3N2Y4NDg5NGQ5MmI4NDBkNWYyZGQ4MmEzZTI2ODEwOTQxODQzMzU2NQ==";


  constructor(private _http: HttpClient) {
    console.log("Service constructor is called.")
  }
  //Exception handler
  public handleError(err: HttpErrorResponse): any {
    console.log("Handle Error http Call");
    console.log(`${err.message}, ${err.status}, ${err.statusText}`);
    return Observable.throw(err.message);

  }


  public getAllBlog(): any {

    let myResponse = this._http.get(this.baseUrl + "/all?authToken=" + this.authToken);
    console.log(myResponse);
    return myResponse;
    // myResponse.subscribe(data => {
    //   this.allBlogs = data['data']
    //   console.log(this.allBlogs);
    // })


  }

  public getSingleBlogInformation(myCurrentId): any {

    let myIdResponse = this._http.get(this.baseUrl + '/view/' + myCurrentId + '?authToken=' + this.authToken);
    console.log(myIdResponse);
    return myIdResponse;

    //  myIdResponse.subscribe(data => {
    //       this.currentBlog = data['data'];
    //       console.log(this.currentBlog);





    //return myIdResponse;


  }

  public createBlog(blogData): any {

    let myCreateResponse = this._http.post(this.baseUrl + "/create?authToken=" + this.authToken, blogData);
    console.log(myCreateResponse);
    return myCreateResponse;


  }

  public editedBlog(blogId, data): any {

    let myResponse = this._http.put(this.baseUrl + "/" + blogId + "/edit?authToken=" + this.authToken, data);
    console.log(myResponse);
    return myResponse


  }

  public delete(blogId): any {

    let myResponse = this._http.post(this.baseUrl + "/" + blogId + "/delete?authToken=" + this.authToken, blogId);
    return myResponse;


  }

}
