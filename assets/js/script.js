// Patrón Módulo mediante IIFE
let sugerenciaVideos = (() => {
    let metodoPrivado = (id, url) => {
        id.setAttribute('src', url);
        console.log(`Se cambió el video del elemento con ID ${id.id}`);
    };
    return {
        metodoPublico: (id, url) => {
            metodoPrivado(id, url); 
        }
    };
})();

// Establecer la clase Multimedia
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    // Getter para obtener la URL actual
    get url() {
        return this._url;
    }

    // Método para cambiar la URL y retornar un mensaje
    setInicio(nuevaUrl) {
        this._url = nuevaUrl;
        return 'Este método es para realizar un cambio en la URL del video.';
    }
}

// Creación de una instancia de la clase Multimedia
let video = new Multimedia('https://www.youtube.com/embed/9KJowpaQ4LM?si=_r_8bGhhgQ1I2iWd');
console.log(video.url); 
console.log(video.setInicio('https://www.youtube.com/embed/8mZ95Qh8GvY')); 
console.log(video.url);

// Establecer la clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    constructor(id, url) {
        super(url);
        this._id = id;
    }

    // Método Play multimedia
    playMultimedia() {
        console.log(`play Multimedia ${this._url}`);
        sugerenciaVideos.metodoPublico(this._id, this._url); // Llamada al método público del módulo sugerenciaVideos
    }

    // Método para cambiar la URL de inicio
    setInicio(tiempo) {
        console.log('setInicio Reproductor');
        let nuevaUrl = `${this._url}?start=${tiempo}`;
        sugerenciaVideos.metodoPublico(this._id, nuevaUrl); // Llamada al método público del módulo sugerenciaVideos
    }
}

// Elementos HTML por su ID
let idMusica = document.querySelector('#musica');
let idPeliculas = document.querySelector('#peliculas');
let idSeries = document.querySelector('#series');

// URLs para videos
let urlMusica = 'https://www.youtube.com/embed/9KJowpaQ4LM?si=_r_8bGhhgQ1I2iWd';
let urlPeliculas = 'https://www.youtube.com/embed/8mZ95Qh8GvY';
let urlSeries = 'https://www.youtube.com/embed/Kijfn2bzNDE';

// Cambio de videos utilizando el método público
sugerenciaVideos.metodoPublico(idMusica, urlMusica);
sugerenciaVideos.metodoPublico(idPeliculas, urlPeliculas);
sugerenciaVideos.metodoPublico(idSeries, urlSeries);

// Creación de la clase Reproductor y uso de sus métodos
let reproductorMusica = new Reproductor(idMusica, urlMusica);
let reproductorPeliculas = new Reproductor(idPeliculas, urlPeliculas);
let reproductorSeries = new Reproductor(idSeries, urlSeries);

reproductorMusica.playMultimedia(); 
reproductorPeliculas.setInicio(30); 
reproductorSeries.setInicio(15); 
