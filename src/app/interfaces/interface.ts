export interface IBlogs {
  user: string;
  title: string;
  description: string;
  imagePath: string;
}
export interface IBlogsResponse {
  id: number;
  user: string;
  title: string;
  description: string;
  imagePath: string;
}
export interface IBlogsEdit {
  title: string;
  description: string;
  imagePath: string;
}
