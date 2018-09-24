package hu.elte.alkfejl.musicschare.controller;

import hu.elte.alkfejl.musicschare.model.Song;
import hu.elte.alkfejl.musicschare.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/songs")
public class SongController {

    @Autowired
    private SongRepository songRepository;

    @GetMapping("")
    public Iterable<Song> getAll() {
        return songRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getById(@PathVariable Integer id) {
        Optional<Song> song = songRepository.findById(id);
        if (song.isPresent()) {
            return ResponseEntity.ok(song.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Song> create(@RequestBody Song song) {
        if (song.getId() != null && songRepository.existsById(song.getId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(songRepository.save(song));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Song> replace(@PathVariable Integer id, @RequestBody Song song) {
        Optional<Song> oSong = songRepository.findById(id);
        if (oSong.isPresent()) {
            Song modifiableSong = oSong.get();
            modifiableSong.setAuthor(modifiableSong.getAuthor());
            return ResponseEntity.ok(songRepository.save(modifiableSong));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
