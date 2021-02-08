import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { SongDetailsComponent } from './playlist-card/song-details/song-details.component';
import { NewPlaylistDialogComponent } from './new-playlist-dialog/new-playlist-dialog.component';
import { EditPlaylistDialogComponent } from './edit-playlist-dialog/edit-playlist-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistCardComponent,
    SongDetailsComponent,
    NewPlaylistDialogComponent,
    EditPlaylistDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
