import Photos from './photos';
import './index.css';

const photos = new Photos();

console.log( "prueba" );

async function main() {
    console.log( await photos.getPhotos() );
}

function isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
}

console.log( isValidJSON('prueba') );

main();
