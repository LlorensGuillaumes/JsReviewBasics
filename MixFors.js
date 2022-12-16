const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

//Primero listado sonidos sin repetir

// 1 parte [sonidos sin repetir]

let sonidos = []
let general = []

for (const usuario of users) {

    for (const sonido in usuario.favoritesSounds) {
        let vol = usuario.favoritesSounds[sonido].volume

        let item = {sonido, vol}
        // console.log (item)
        // console.log(sonido + ": " + vol)
        general.push(item)

        if (!sonidos.includes(sonido)) {
            sonidos.push(sonido)
        }
    }
}

sonidos.forEach(elemento => {
    general.forEach( obj => {
        if (elemento === obj.sonido ) {

        }
    })
})

console.log(general)
console.log(sonidos)


let volumenTotal = 0
let allSounds = {}
let contador = 0

for(i in sonidos){
    console.log(sonidos[i])
    for(a in general){
       // general[a].sonido
        if (!allSounds[general[a].sonido]){
            allSounds[general[a].sonido]=general[a].vol
        }else{
            allSounds[general[a].sonido]+=general[a].vol
            
        }

        // console.log(general[a].sonido)
        // console.log(general[a].vol)
    }
}
//ESTE FUNCIONA
for (const i in medias) {
    let count = 0 //cada vez que salga el mis
    for (const j in general){
        if (medias[i].sonido === general[j].sonido){
            count++
            medias[i].mediaVol += general[j].vol
        }
    }

    console.log(count)
    console.log(medias[i].mediaVol)
    medias[i].mediaVol = medias[i].mediaVol / count
}

console.log(medias)
console.log(allSounds)
console.log(contador)