import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { r_Fields } from "./register";
import { UserDetService } from "../user-det.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  r_Fields;
  index = "new";
  userDet;

  regDetail = {
    uname: "",
    mail: "",
    pass: ""
  };
  regForm;
  flag = true;
  vflag = true;
  alertText = "";
  constructor(
    private formBuilder: FormBuilder,
    private userDetailService: UserDetService
  ) {
    this.regForm = this.formBuilder.group(this.regDetail);
    this.r_Fields = r_Fields;
  }

  onSubmit(formData) {
    for (let i in formData) {
      if (formData[i] == "" || formData[i] == null) {
        this.flag = false;
      }
    }

    if (this.flag && this.vflag) {
      this.userDetailService.addUserDet(formData);
      window.alert("successlly registered");
      this.regForm.reset();
    } else {
      this.alertText = "Please provide Valid Inputs";
    }
  }

  valid(e) {
    console.log(e.target.value);
  }

  ngOnInit() {}
}
