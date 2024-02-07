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
    'projectName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'projectStatus' : new FormControl('critical')
  });
}

submit(){
console.log("Submit has been clicked");
}

onSaveProject(){
  console.log(this.projectForm.value);
  console.log(this.projectForm);
}

}
