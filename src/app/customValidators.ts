import { FormControl } from "@angular/forms";

export class Customrjonesjalaidators{
    static invalidProjectName(control: FormControl): {[s: string] : boolean}   {
        if (control.value === "Test") {
            return {'invalidProjectName' : true}
        }
    }
}