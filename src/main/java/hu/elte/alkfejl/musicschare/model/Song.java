package hu.elte.alkfejl.musicschare.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.annotation.Generated;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String title;

    private String author;

    private Integer length;

    private String genre;

}
