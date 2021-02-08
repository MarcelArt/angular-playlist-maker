import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Playlist,
  Song,
  PlaylistComponent,
} from '../../assets/intermediate-data';
import { PlaylistCardComponent } from '../playlist-card/playlist-card.component';

@Component({
  selector: 'app-new-playlist-dialog',
  templateUrl: './new-playlist-dialog.component.html',
  styleUrls: ['./new-playlist-dialog.component.css'],
})
export class NewPlaylistDialogComponent implements OnInit {
  name: string;
  description: string;
  songs: Song[];

  constructor(
    public dialogRef: MatDialogRef<NewPlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { playlists: Playlist[] }
  ) {
    let firstSong: Song = {
      title: '',
      artist: '',
      duration: 0,
    };
    this.songs = [firstSong];
  }

  ngOnInit(): void {
    console.log('data', this.data);
  }

  onSubmit(): void {
    let totalDuration = 0;
    for (let i = 0; i < this.songs.length; i++) {
      totalDuration += this.songs[i].duration;
    }

    let playlist: Playlist = {
      name: this.name,
      description: this.description,
      totalSongs: this.songs.length,
      totalDuration,
      songs: this.songs,
    };

    this.data.playlists.push(playlist);

    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  addSong(): void {
    let newSong: Song = {
      title: '',
      artist: '',
      duration: 0,
    };
    this.songs.push(newSong);
  }
}
