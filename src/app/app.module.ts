import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KnjigeComponent } from './knjige/knjige.component';
import { KnjigaComponent } from './knjige/knjiga/knjiga.component';
import { ClanoviComponent } from './clanovi/clanovi.component';
import { ClanComponent } from './clanovi/clan/clan.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    KnjigeComponent,
    KnjigaComponent,
    ClanoviComponent,
    ClanComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
