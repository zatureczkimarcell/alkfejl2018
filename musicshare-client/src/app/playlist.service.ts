import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistService {

  private playlistItems: string[] = [
    'Eurobeat',
    'Rock',
    'Vegyes',
  ];

  private playlistSongs: Map<string, string[]> = new Map();
  // private playlistSongs: { [key: string]: string[] };


  constructor() {
    this.playlistSongs.set('Rock', ['Bon Jovi', 'ACDC']);
    this.playlistSongs.set('Eurobeat', ['DJ Bobo']);
    this.playlistSongs.set('Vegyes', []);
  }

  getPlaylist(playlistName: string): string[] {
    return this.playlistSongs.get(playlistName);
  }

  filter(filterText: string): string[] {
    const filteredPlaylistItems = [];
    for (let playlistItem of this.playlistItems) {

      if (playlistItem.startsWith(filterText)) {

        filteredPlaylistItems.push(playlistItem);

      }

    }
    return filteredPlaylistItems;
  }
}
