import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { r_Fields } from "./login";
import { UserDetService } from "../user-det.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  r_Fields;
  userDets;
  index = "new";
  logDetail = {
    mail: "",
    pass: ""
  };
  logForm;
  flag = true;
  vflag = true;
  alertText = "";
  constructor(
    private formBuilder: FormBuilder,
    private userDetService :UserDetService,
    private router: Router
  ) {
    this.userDets = this.userDetService.getUserDet();
    this.logForm = this.formBuilder.group(this.logDetail);
    this.r_Fields = r_Fields;
  }

  onSubmit(formData) {
    for (let i in formData) {
      if (formData[i] == "" || formData[i] == null) {
        this.flag = false;
      }
    }

    if (this.flag && this.vflag) {
      for(let i in this.userDets) {
        let mail = this.userDets[i].mail;
        let pass = this.userDets[i].pass;
        if (mail == formData.mail && pass == formData.pass ) {
          window.alert("Login Successfully");
          this.logForm.reset();
          this.router.navigate(["/cart"]);
        } else {
          window.alert("incorrect username and password");
        }
      }
    } else {
      this.alertText = "Please provide Valid Inputs";
    }
  }
  
  valid(e) {
  }

  ngOnInit() {}
}
