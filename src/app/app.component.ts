import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste';
  products = [];
  textInput = '';


  handleClick(event) {
    event.preventDefault();
    this.products.push({
      title:this.textInput,
    })
  }
}
