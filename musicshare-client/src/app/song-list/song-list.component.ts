import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent implements OnInit {

  songs: string[];
  playlistName: string;

  constructor(
    private playlistService: PlaylistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.playlistName = this.route.snapshot.params.id;
    this.songs = this.playlistService
      .getPlaylist(this.playlistName);
  }

}
