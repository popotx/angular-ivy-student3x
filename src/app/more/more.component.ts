import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
})
export class MoreComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  disabled:boolean

  ngOnInit() {
    
    if (localStorage.getItem('logged') != 'neznama') {
      this.router.navigate(['./']);
      }
  }
  submit(
    name: string,
    lastname: string,
    classko: string,
    age: string,
    date: string,
    spec: string,
    gender: string,
    average: string,
    disabled: string,
    awards: string
  
  ): void {
    let data: [{}] = JSON.parse(localStorage.getItem('students') || '[{}]');
    localStorage.setItem(
      'students',
      JSON.stringify([
        ...data,
      {
          name: name,
          lastname: lastname,
          classko: classko,
          age: age,
          date: date,
          spec: spec,
          gender: gender,
          average: average,
          disabled: disabled,
          awards: awards,
          lastedit: new Date()
      }
      ])
    );

    this.router.navigate(['vilko']);
  }
}
