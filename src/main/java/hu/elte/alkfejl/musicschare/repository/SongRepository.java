package hu.elte.alkfejl.musicschare.repository;

import hu.elte.alkfejl.musicschare.model.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends CrudRepository<Song, Integer> {
}
