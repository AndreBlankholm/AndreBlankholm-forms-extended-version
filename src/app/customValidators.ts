import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomrValidators {


    
  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise
  }


}
