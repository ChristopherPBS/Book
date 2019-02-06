import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/book/books.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.page.html',
  styleUrls: ['./livro.page.scss'],
  providers:[BooksService]

})
export class LivroPage implements OnInit {
  ngOnInit() {
  }
  public listalivro  = new Array<any>();
  constructor(public Book : BooksService) { 
    this.list();
    
  }
  list(){
    this.Book.list().subscribe(
    (list : any) => {
      let objRet = JSON.parse(list._body)
     
      this.listalivro = objRet.results.books;
      console.log(this.listalivro);
    }, error=>{
      console.log(error);
    }
    );
  }
  

  
  

 
}
