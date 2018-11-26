import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playlist } from './model/Playlist';
import { Song } from './model/Song';

@Injectable()
export class PlaylistService {

  private playlistItems: Playlist[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlaylist(playlistId: number): Promise<Playlist> {
    const playlist = this.playlistItems.find(
      playlist => playlist.id === playlistId
    );
    if (playlist) {
      return Promise.resolve(playlist);
    } else {
      return this.httpClient
        .get<Playlist>(`/api/playlists/${playlistId}`)
        .toPromise()
        .then(playlist => { return playlist });
    }
  }

  filter(filterText: string): Playlist[] {
    const filteredPlaylistItems: Playlist[] = [];
    for (let playlistItem of this.playlistItems) {

      if (playlistItem.name.startsWith(filterText)) {

        filteredPlaylistItems.push(playlistItem);

      }

    }
    return filteredPlaylistItems;
  }

  requestPlaylists() {
    this.httpClient
      .get<Playlist[]>('/api/playlists')
      .toPromise()
      .then(playlists =>
          this.playlistItems = playlists);
  }
}
