package hu.elte.alkfejl.musicschare.model;

import lombok.Data;

import javax.annotation.Generated;
import javax.persistence.*;

@Data
@Entity
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    @Version
    private Integer version;


    private String title;

    private String author;

    private int length;

    private String genre;
}
