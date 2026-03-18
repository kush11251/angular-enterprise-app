// App module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './components/ui/buttons/primary-button/primary-button.component';
import { UserService } from './services/api/v1/users/user.service';

@NgModule({
  declarations: [AppComponent, PrimaryButtonComponent],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}