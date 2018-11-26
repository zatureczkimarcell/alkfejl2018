import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../model/Song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent implements OnInit {

  songs: Song[];
  playlistName: string;

  constructor(
    private playlistService: PlaylistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPlaylist();
  }

  private async getPlaylist() {
    const playlistId = parseInt(this.route.snapshot.params.id as string);
    const playlist = await this.playlistService
      .getPlaylist(playlistId);
    this.playlistName = playlist.name;
    this.songs = playlist.songs;
  }

}
