import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../assets/intermediate-data';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist: Playlist;
  @Output() deletePlaylist = new EventEmitter();
  @Output() editPlaylist = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
