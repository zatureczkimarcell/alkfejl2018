INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME, ROLE) values (1, 'Móger Tibor', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'tibor', 'ROLE_USER');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME, ROLE) values (2, 'Gipsz Jakab', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'jakab', 'ROLE_USER');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME, ROLE) values (3, 'Gipsz Jakabné', '$2a$10$LplxaCfU8JFYxu9k2kRhWuAoc8Q.viSlUtxsZBs8gIfoSDqwbUZq2', 'jakabne', 'ROLE_ADMIN');

INSERT INTO SONG (ID, AUTHOR, GENRE, LENGTH, TITLE) values (1, 'Rednex', 'eurodance', 194, 'Cotton Eye Joe');
INSERT INTO SONG (ID, AUTHOR, GENRE, LENGTH, TITLE) values (2, 'Eiffel 65', 'eurodance', 286, 'Blue');
INSERT INTO SONG (ID, AUTHOR, GENRE, LENGTH, TITLE) values (3, 'Boney M', 'eurodance', 209, 'Daddy Cool');
INSERT INTO SONG (ID, AUTHOR, GENRE, LENGTH, TITLE) values (4, 'Boney M', 'eurodance', 283, 'Rasputin');
INSERT INTO SONG (ID, AUTHOR, GENRE, LENGTH, TITLE) values (5, 'AC/DC', 'rock', 208, 'Highway To Hell');

INSERT INTO PLAYLIST (ID, NAME, OWNER_ID) values (1, 'eurodance', 1);
INSERT INTO PLAYLIST (ID, NAME, OWNER_ID) values (2, 'rock', 1);
INSERT INTO PLAYLIST (ID, NAME, OWNER_ID) values (3, 'mixed', 2);

INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (1, 1);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (1, 2);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (1, 3);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (1, 4);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (2, 5);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (3, 1);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (3, 2);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (3, 3);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (3, 4);
INSERT INTO  PLAYLIST_SONGS (PLAYLISTS_ID, SONGS_ID) values (3, 5);