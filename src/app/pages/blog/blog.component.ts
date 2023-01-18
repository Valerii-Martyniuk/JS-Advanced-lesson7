import { Component, OnInit } from '@angular/core';
import { IBlogs } from 'src/app/interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public blogs: Array<IBlogs> = [];

  constructor(private MainserviceService: MainserviceService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.MainserviceService.getAll().subscribe((data) => {
      this.blogs = data;
    });
  }
}
