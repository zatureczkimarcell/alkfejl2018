import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../model/Song';
import { HttpClient } from '@angular/common/http';

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
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getPlaylist();
  }

  public async deleteSong(songId: number) {
    const playlistId = parseInt(this.route.snapshot.params.id as string);
    await this.httpClient.delete<null>(
      `/api/playlists/${playlistId}/songs/${songId}`
    ).toPromise();
    await this.getPlaylist();
  }

  private async getPlaylist() {
    const playlistId = parseInt(this.route.snapshot.params.id as string);
    const playlist = await this.playlistService
      .getPlaylist(playlistId);
    this.playlistName = playlist.name;
    this.songs = playlist.songs;
  }

}
