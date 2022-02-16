import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlateauxComponent } from './components/plateaux/plateaux.component';
import { HttpClientModule } from '@angular/common/http';
import { RgpdComponent } from './components/rgpd/rgpd.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriqueComponent } from './components/historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlateauxComponent,
    RgpdComponent,
    HomeComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
