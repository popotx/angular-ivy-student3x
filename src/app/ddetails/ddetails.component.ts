import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ddetails',
  templateUrl: './ddetails.component.html',
  styleUrls: ['./ddetails.component.css'],
})
export class DdetailsComponent implements OnInit {
  constructor(private router: Router) {}
  student: any;
  ngOnInit() {
    if (localStorage.getItem('logged') != 'neznama') {
      this.router.navigate(['./login']);
    }

    this.student = JSON.parse(localStorage.getItem('edit') || '{}');
  }
  back() {
    this.router.navigate(['./vilko']);
  }
}
