import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';


export const UsernameAvailabilityAsyncValidator = (authService: AuthService, time: number = 100) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => authService.isUsernameAvailable(input.value)),
      map(res => {
        return res ? null : { exist: true };
      })
    );
  };
};

export const dbUrlValidate = (dbControlName: string, groupIdControlName: string) => {
  return (formGroup: FormGroup) => {
    const dbControl = formGroup.controls[dbControlName];
    const groupIdControl = formGroup.controls[groupIdControlName];

    /*if (dbControl.hasError || groupIdControl.hasError) {
      return;
    }*/

    console.log('DB ', dbControl.value);
    console.log('G ID ', groupIdControl.value);

    if (dbControl.value !== '' && (!groupIdControl.value || groupIdControl.value === '' || groupIdControl.value === 'Select')) {
      console.log('Invalid');
      groupIdControl.setErrors({ req: true });
    } else {
      groupIdControl.setErrors(null);
    }
  };
};


export const dbUrlValidate2 = (form) => {

}

