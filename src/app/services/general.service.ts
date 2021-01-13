import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseAPI="https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

  getPostsByUserId(id:any) : any{
    return this.http.get(this.baseAPI+"users/"+id+"/posts/");
  }

  getUsersList():any{
    return this.http.get(this.baseAPI+"/users");
  }

  getUserById(id:any):any{
    return this.http.get(this.baseAPI+"/users/"+id);
  }

  getAlbumsByUserId(id:any):any{
    return this.http.get(this.baseAPI+"/users/"+id+"/albums/")
  }

  getPhotosByAlbumId(id:any):any{
    return this.http.get(this.baseAPI+"/albums/"+id+"/photos")
  }

}
