package hu.elte.alkfejl.musicschare.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String name;

    @ManyToMany
    private List<Song> songs;

    @ManyToOne
    private User owner;

}
