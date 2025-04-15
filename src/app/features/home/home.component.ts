import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    const searchTerm = form.value.searchTerm; // Get the input value using the name attribute
    this.router.navigate(['/details', searchTerm]);
    form.reset();
  }

}