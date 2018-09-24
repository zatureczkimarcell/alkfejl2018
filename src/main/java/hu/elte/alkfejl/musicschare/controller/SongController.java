package hu.elte.alkfejl.musicschare.controller;

import hu.elte.alkfejl.musicschare.model.Song;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SongController {

    @GetMapping
    public List<Object> getAll() {
        return new ArrayList<>();
    }

}
