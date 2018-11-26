import { Component, OnInit } from '@angular/core';
import { Song } from '../model/Song';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {

  model: Song = new Song();

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  async save(form: NgForm) {
    if (form.valid) {
      const newSong: Song = form.value;
      const res = await this.httpClient
        .post('/api/songs', newSong)
        .toPromise();
      console.log(res);
    }
  }
  
}
