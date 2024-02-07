import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-extended-version';

  projectForm! : FormGroup

ngOnInit(): void {
  this.projectForm = new FormGroup({
    'projectName': new FormControl(null, Validators.required)
  });
}

submit(){
console.log("Submit has been clicked");
}

}
