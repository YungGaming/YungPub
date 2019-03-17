import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

import { AppComponent } from './component/app/app.component';
import { IndexComponent } from './window/index/index.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { GamesComponent } from './component/games/games.component';
import { ProfileComponent } from './component/profile/profile.component';
import { GameComponent } from './component/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SearchComponent,
    GamesComponent,
    ProfileComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartjsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
