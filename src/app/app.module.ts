import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoFormComponent } from './new-todo-form/new-todo-form.component';
import { FormChangeComponent } from './form-change/form-change.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NewTodoFormComponent,
    FormChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
