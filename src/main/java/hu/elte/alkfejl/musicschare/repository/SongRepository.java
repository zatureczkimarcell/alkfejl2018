package hu.elte.alkfejl.musicschare.repository;

import hu.elte.alkfejl.musicschare.model.Song;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends CrudRepository<Song, Integer> {
    // List<Song> findByTitleContains(String title);
}
