import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    onSubmit(f: NgForm) {
        // stop here if form is invalid
        if (f.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(f.value, null, 4));
    }
}
