import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blig body",
      "description": "this is blog 1 description",
      "title": "this is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blig body",
      "description": "this is blog 2 description",
      "title": "this is blog 2"
    }, {
      "blogId": "3",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text</h1> <p> small text </p>",
      "description": "this is blog 3 description",
      "title": "this is blog 3"
    }, {
      "blogId": "4",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blig body",
      "description": "this is blog 4 description",
      "title": "this is blog 4"
    }, {
      "blogId": "5",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blig body",
      "description": "this is blog 5 description",
      "title": "this is blog 5"
    }, {
      "blogId": "6",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text</h1> <p> small text </p>",
      "description": "this is blog 6 description",
      "title": "this is blog 6"
    },
  ]


  constructor() { }

  public getAllBlog(): any {
    return this.allBlogs;
  }


  public getSingleBlogInformation(myCurrentId): any {

    for (let blog of this.allBlogs) {
      if (blog.blogId == myCurrentId) {
        return this.currentBlog = blog;
      }
    }
  }




}
