class Song {
    
    constructor(public title: string, public artist: string, public duration: number) {}
    }
    
    class Playlist {
        song: Song[] = [];
    
        add_song(song: Song) {
        this.song.push(song);
        }
    
        list_song() {
        return this.song.map((song, index) => `${index + 1}. ${song.title} - ${song.artist}`);
        }
    
        play_song(indice: number) {
        if (indice >= 0 && indice < this.song.length) {
            const song = this.song[indice];
            console.log(`Tocando: ${song.title} - ${song.artist}`);
        } else {
            console.log("Música inválida");
        }
        }
    
        calc_total_duration() {
        const total_duration = this.song.reduce((total, song) => total + song.duration, 0);
        console.log(`O tempo total de duração das músicas é ${total_duration} segundos`);
        }
    }
    
    class User {
        constructor(public name: string, public music_library: Playlist) {}
    
        add_song(song: Song) {
        this.music_library.add_song(song);
        }
    
        list_song() {
        console.log(`Músicas de ${this.name}:`);
        console.log(this.music_library.list_song().join('\n'));
        }
    
        play_song(indice: number) {
        this.music_library.play_song(indice);
        }
    }
    
    //Escolhendo minhas músicas favoritas :)
    const song1 = new Song("Sweet Child O'Mine", "Bon Jovi", 356);  
    const song2 = new Song("Xote da Alegria", "Falamansa", 254);
    const song3 = new Song("Viva La Vida", "Coldplay", 242);
    const song4 = new Song("Vou Deixar", "Skank", 274);

    const spotify = new Playlist();
    
    // Add musicas
    spotify.add_song(song1);
    spotify.add_song(song2);
    spotify.add_song(song3);
    
    const user = new User("Roronoa Zoro ロロノア・ゾロ", spotify);
    
    // Usando o sistema
    user.list_song();
    user.play_song(2);
    spotify.calc_total_duration();