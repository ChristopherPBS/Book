import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = "https://api.nytimes.com/svc/books/v3"
  constructor(public http: Http) { }
  review(){
    return this.http.get(this.url+"/reviews"+this.autor()+this.getApiKey())
  }
  getApiKey() {
    return "&api-key=tLVn7SpiVTi6Iy1sY4V2bcw6oExiZtzO"

  }
  key2(){
    return "?api-key=tLVn7SpiVTi6Iy1sY4V2bcw6oExiZtzO"
  }
  autor(){
    return "?author=j.+k.+rowling"
  }
  list(){
    return this.http.get(this.url+this.science()+this.key2())
  }
  science(){
    return "/lists/current/science"
  }
}
