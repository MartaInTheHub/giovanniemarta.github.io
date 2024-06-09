import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { LocationComponent } from './components/location/location.component';
import { WeddingListComponent } from './components/wedding-list/wedding-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
import { QuestionAndAnswerComponent } from './components/question-and-answer/question-and-answer.component';
import { EveningComponent } from './components/evening/evening.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    LocationComponent,
    WeddingListComponent,
    HomePageComponent,
    CeremonyComponent,
    QuestionAndAnswerComponent,
    EveningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
