import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../../assets/intermediate-data';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  @Input() songs: Song[];
  constructor() { }

  ngOnInit(): void {
  }

}
