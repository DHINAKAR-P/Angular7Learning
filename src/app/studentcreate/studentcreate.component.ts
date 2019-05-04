import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserServiceService } from "../user-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { User } from "../user.model"

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  addForm: FormGroup;

  user = {
    id: 0,
    name: "",
    age: 0,
    email: ""
  }

  ngOnInit() {



  }

  createStudent() {
    console.log("------------->",this.user)
    this.userService.createUser(this.user)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
  }

}