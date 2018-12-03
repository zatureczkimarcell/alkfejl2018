import { Component, OnInit } from '@angular/core';
import { Song } from '../model/Song';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {

  model: Song = new Song();
  private playlistId: number;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.playlistId = parseInt(this.route.snapshot.params.id as string);
  }

  async save(form: NgForm) {
    if (form.valid) {
      const newSong: Song = form.value;
      const createdSong = await this.httpClient
        .post('/api/songs', newSong)
        .toPromise();
      if (this.playlistId) {
        await this.httpClient
          .post(
            `/api/playlists/${this.playlistId}/songs`,
            createdSong
          )
          .toPromise();
        this.router.navigate(
          ['playlist', this.playlistId]);
      }
    }
  }
  
}
