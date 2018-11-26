import { Song } from "./Song";

export class Playlist {
    id: number;
    name: string;
    owner: any;
    songs: Song[];
}