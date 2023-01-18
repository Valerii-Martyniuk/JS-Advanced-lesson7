import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { IBlogs, IBlogsResponse } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public blogs: Array<IBlogsResponse> = [];

  public requestID: number = 0;

  public newTitle = '';
  public newText = '';
  public newAuthor = '';
  public newImage = '';

  constructor(private MainserviceService: MainserviceService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.MainserviceService.getAll().subscribe((data) => {
      this.blogs = data;
    });
  }

  addBlog(): void {
    if (this.newImage === '') {
      this.newImage = 'https://la.ua/wp-content/uploads/2021/08/4.jpg';
    }
    let newBlog = {
      user: this.newAuthor,
      title: this.newTitle,
      description: this.newText,
      imagePath: this.newImage,
    };
    this.MainserviceService.create(newBlog).subscribe(() => {
      this.getBlogs();
    });
  }

  deleteBlog(i: number): void {
    if (confirm('Are you sure')) {
      this.MainserviceService.delete(i).subscribe(() => {
        this.getBlogs();
      });
    }
  }
  editBlog(item: IBlogsResponse): void {
    this.newTitle = item.title;
    this.newText = item.description;
    this.newImage = item.imagePath;
    this.requestID = item.id;
  }
  editBlogNext(): void {
    let editBlog = {
      title: this.newTitle,
      description: this.newText,
      imagePath: this.newImage,
    };
    this.MainserviceService.update(editBlog, this.requestID).subscribe(() => {
      this.getBlogs();
    });
    this.requestID = 0;
  }
}
