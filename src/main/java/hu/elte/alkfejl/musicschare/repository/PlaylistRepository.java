package hu.elte.alkfejl.musicschare.repository;

import hu.elte.alkfejl.musicschare.model.Playlist;
import org.springframework.data.repository.CrudRepository;

public interface PlaylistRepository extends CrudRepository<Playlist, Integer> {
}
