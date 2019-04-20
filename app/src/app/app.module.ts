// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

// Services
import { StateService } from './service/state.service';
import { PlayerService } from './service/player.service';

// Window related components
import { AppComponent } from './window/app/app.component';
import { IndexComponent } from './window/index/index.component';
import { IntroComponent } from './window/intro/intro.component';
import { BookmarksComponent } from './window/bookmarks/bookmarks.component';
import { ProfileComponent } from './window/profile/profile.component';

// Reusable components
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { GamesComponent } from './component/games/games.component';
import { GameComponent } from './component/game/game.component';
import { ProfileHeaderComponent } from './component/profile-header/profile-header.component';
import { ProfileTabsComponent } from './component/profile-tabs/profile-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SearchComponent,
    GamesComponent,
    ProfileComponent,
    GameComponent,
    IntroComponent,
    BookmarksComponent,
    ProfileHeaderComponent,
    ProfileTabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartjsModule,
  ],
  providers: [
    StateService,
    PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
