import { Component, OnInit } from '@angular/core';
import { Song } from '../model/Song';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {

  model: Song = new Song();

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
  
}
