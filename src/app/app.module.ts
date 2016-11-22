import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PresentationCompComponent } from './presentation-comp/presentation-comp.component';
import { VideoCompComponent } from './video-comp/video-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    PresentationCompComponent,
    VideoCompComponent,
    FooterCompComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//platformBrowserDynamic().bootstrapModule(AppModule);
