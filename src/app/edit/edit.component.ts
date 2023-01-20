import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router) {}
  student:any
  ngOnInit() {
    if (localStorage.getItem('logged') != 'neznama') {
    this.router.navigate(['./login']);
  }
  this.student = JSON.parse(localStorage.getItem("edit")||"{}")
  }
  submit(    name: string,
    lastname: string,
    classko: string,
    age: string,
    date: string,
    spec: string,
    gender: string,
    average: string,
    disabled: string,
    awards: string){

    }
    editStudent(
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
   
    localStorage.setItem(
      'students',
      JSON.stringify(
        JSON.parse(localStorage.getItem('students')||'{}').map(
          (studentt: any) =>
            studentt.lastedit == this.student.lastedit
              ? {
                  ...studentt,
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
              : studentt
        )
      )
    );
    this.router.navigate(['./vilko']);
  }

}
