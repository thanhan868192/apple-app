import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MenubarModule
    ],
    exports: [
        MenubarModule,
        CommonModule // nếu bạn muốn các module khác cũng có sẵn *ngIf, *ngFor...
    ]
})
export class SharedModule { }
