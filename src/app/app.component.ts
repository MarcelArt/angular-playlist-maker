import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PlaylistComponent, Playlist } from '../assets/intermediate-data';
import { EditPlaylistDialogComponent } from './edit-playlist-dialog/edit-playlist-dialog.component';
import { NewPlaylistDialogComponent } from './new-playlist-dialog/new-playlist-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge2';
  playlists: Playlist[];

  constructor(public dialog: MatDialog) {
    this.playlists = new PlaylistComponent().playlists;
  }
  
  ngOnInit(): void {
    // console.log(PlaylistComponent.prototype.playlists);
  }

  onAdd(): void {
    let dialogRef = this.dialog.open(NewPlaylistDialogComponent, {
      data: {
        playlists: this.playlists
      }
    });
    // dialogRef.afterClosed().subscribe(res => {
    //   console.log('res.data', res.data);
    // })

  }

  onDelete(playlist: Playlist): void {
    let i = this.playlists.indexOf(playlist);
    this.playlists.splice(i, 1);
  }

  onEdit(playlist: Playlist): void {
    this.dialog.open(EditPlaylistDialogComponent, {
      data: {
        playlists: this.playlists,
        playlist
      }
    });
  }
}
