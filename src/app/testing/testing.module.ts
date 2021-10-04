import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing/testing.component';
import { SharableModule } from '../sharable/sharable.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestingRoutingModule,
    SharableModule
  ]
})
export class TestingModule { }
