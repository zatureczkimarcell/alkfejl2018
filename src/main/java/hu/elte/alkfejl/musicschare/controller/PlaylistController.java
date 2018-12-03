package hu.elte.alkfejl.musicschare.controller;

import hu.elte.alkfejl.musicschare.model.Playlist;
import hu.elte.alkfejl.musicschare.model.Song;
import hu.elte.alkfejl.musicschare.repository.PlaylistRepository;
import hu.elte.alkfejl.musicschare.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/playlists")
@Secured({ "ROLE_USER" })
public class PlaylistController {

    @Autowired
    private PlaylistRepository playlistRepository;
    @Autowired
    private SongRepository songRepository;

    @GetMapping("")
    public Iterable<Playlist> getAll() {
        return playlistRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Playlist> get(@PathVariable Integer id) {
        Optional<Playlist> playlist = playlistRepository.findById(id);
        if (playlist.isPresent()) {
            return ResponseEntity.ok(playlist.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/")
    public ResponseEntity<Playlist> create(@RequestBody Playlist playlist) {
        if (playlist.getId() != null && playlistRepository.existsById(playlist.getId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(playlistRepository.save(playlist));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Playlist> oPlaylist = playlistRepository.findById(id);
        if (oPlaylist.isPresent()) {
            playlistRepository.delete(oPlaylist.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/songs")
    public ResponseEntity<List<Song>> addSong(@PathVariable Integer id, @RequestBody Song song) {
        Optional<Playlist> oPlaylist = playlistRepository.findById(id);
        Optional<Song> oSong = songRepository.findById(song.getId());
        if (oPlaylist.isPresent() && oSong.isPresent()) {
            Playlist playlist = oPlaylist.get();
            playlist.getSongs().add(oSong.get());
            playlistRepository.save(playlist);
            return ResponseEntity.ok(playlist.getSongs());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{playlistId}/songs/{songId}")
    public ResponseEntity removeSong(@PathVariable Integer playlistId,
                                     @PathVariable Integer songId) {
        Optional<Playlist> oPlaylist = playlistRepository.findById(playlistId);
        if (oPlaylist.isPresent()) {
            Playlist playlist = oPlaylist.get();
            Optional<Song> oSong = playlist.getSongs().stream()
                    .filter(song -> song.getId() == songId)
                    .findFirst();
            if (oSong.isPresent()) {
                List<Song> filteredSongs = playlist.getSongs().stream()
                        .filter(song -> song.getId() != songId)
                        .collect(Collectors.toList());
                playlist.setSongs(filteredSongs);
                playlistRepository.save(playlist);
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
