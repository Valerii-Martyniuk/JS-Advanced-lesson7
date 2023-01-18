import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

import { IBlogs, IBlogsResponse, IBlogsEdit } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}/blogs` };

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBlogsResponse[]> {
    return this.http.get<IBlogsResponse[]>(this.api.blogs);
  }

  create(blog: IBlogs): Observable<IBlogs> {
    return this.http.post<IBlogs>(this.api.blogs, blog);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blogs}/${id}`);
  }

  update(blog: IBlogsEdit, id: number): Observable<IBlogsResponse> {
    return this.http.patch<IBlogsResponse>(`${this.api.blogs}/${id}`, blog);
  }
}
