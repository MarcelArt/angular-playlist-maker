import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Playlist, Song } from 'src/assets/intermediate-data';

@Component({
  selector: 'app-edit-playlist-dialog',
  templateUrl: './edit-playlist-dialog.component.html',
  styleUrls: ['./edit-playlist-dialog.component.css'],
})
export class EditPlaylistDialogComponent implements OnInit {
  name: string;
  description: string;
  songs: Song[];
  currentPlaylist: Playlist;

  constructor(
    public dialogRef: MatDialogRef<EditPlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {playlists: Playlist[], playlist: Playlist}
  ) {}

  ngOnInit(): void {
    console.log('this.data', this.data.playlists); 
    this.songs = this.data.playlist.songs
    this.name = this.data.playlist.name;
    this.description = this.data.playlist.description;
    this.currentPlaylist = this.data.playlist;
  }

  addSong(): void {
    let newSong: Song = {
      title: '',
      artist: '',
      duration: 0,
    };
    this.songs.push(newSong);
  }

  onSubmit(): void {
    let i = this.data.playlists.indexOf(this.currentPlaylist);
    let totalDuration = 0;
    for (let i = 0; i < this.songs.length; i++) {
      totalDuration += this.songs[i].duration;
    }
    let updatedPlaylist: Playlist = {
      name: this.name,
      description: this.description,
      totalSongs: this.songs.length,
      totalDuration,
      songs: this.songs,
    }
    this.data.playlists[i] = updatedPlaylist;
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
