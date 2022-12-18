import { Component } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    model: any = {};

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    }
}
