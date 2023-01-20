import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vilko',
  templateUrl: './vilko.component.html',
  styleUrls: ['./vilko.component.css'],
})
export class VilkoComponent {
  constructor(private router: Router) {}
  students: any;
  ngOnInit() {
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
    if (localStorage.getItem('logged') != 'neznama') {
      this.router.navigate(['./login']);
    }
  }
  delete(student: any) {
    localStorage.setItem(
      'students',
      JSON.stringify(
        this.students.filter(function (nieco) {
          return nieco !== student;
        })
      )
    );
    this.router.navigate(['./']);
  }
  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['./login']);
  }
  edit(student: any) {
    localStorage.setItem('edit', JSON.stringify(student));
    this.router.navigate(['./edit']);
  }

  details(student: any) {
    localStorage.setItem('edit', JSON.stringify(student));
    this.router.navigate(['./details']);
  }
}
