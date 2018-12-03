import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { SongFormComponent } from './song-form/song-form.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaylistFilterComponent } from './playlist-filter/playlist-filter.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlaylistService } from './playlist.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistListComponent,
    SongFormComponent,
    PlaylistFilterComponent,
    SongListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
