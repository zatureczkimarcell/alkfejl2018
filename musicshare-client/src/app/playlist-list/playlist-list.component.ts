import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent
  implements OnInit, OnDestroy {

  submitted: boolean = false;
  playlistItems: string[];

  constructor(
    public playlistService: PlaylistService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {
    this.playlistItems = this.playlistService
      .filter(filterText);
    this.submitted = true;
  }

}
