const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/* Ricreiamo un feed social aggiungendo al layout dello starter kit di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// esecuzione milestone 1

/* 
- iniziamo mettendo su js le cose scritte in html
*/


/**
 * 
 * @param {Integer} id 
 * @returns string generated post HTML
 */
function codiceHtml(id , immagineProfilo , nomeAutore , dataPost , testoPost , immaginePubblicata , numeroLikes ) {
    let post_html = `<div class="post" id="post_${id}">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src=${immagineProfilo} alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${nomeAutore}</div>
            <div class="post-meta__time">${dataPost}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${testoPost}</div>
<div class="post__image">
    <img src="${immaginePubblicata}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="javascript:;" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${id}" class="js-likes-counter">${numeroLikes}</b> persone
        </div>
    </div> 
</div>            
</div>`;

return post_html;
}

// ciclo dell array
for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    if (post.author.image === null) {
        post.author.image = 'https://unsplash.it/300/300?image=28'
    } else {
        post.author.image = post.author.image
    }

    document.getElementById('container').innerHTML += codiceHtml(
        post.id, 
        post.author.image, //  "https://unsplash.it/300/300?image=29"
        post.author.name, 
        post.created, 
        post.content, 
        post.media, 
        post.likes);   
}

let postsId = [];
for (let post of posts) {
    let likeBtn = document.querySelector("#post_"+post.id+" .like-button");
    console.log(likeBtn);
    likeBtn.addEventListener('click', function(){


        if (! postsId.includes(post.id)) {
            // bottone gia' cliccato, incremento
            likeBtn.classList.add('like-button--liked')
            console.log('ho cliccato');

            let counterHtml = document.querySelector("#post_"+post.id+" .js-likes-counter");
            let likesCounter = Number(counterHtml.innerText);
            likesCounter++;
            counterHtml.innerText = likesCounter;

            postsId.push(post.id);
        } else {
            // decremento
            likeBtn.classList.remove('like-button--liked')
            console.log('decremento');

            let counterHtml = document.querySelector("#post_"+post.id+" .js-likes-counter");
            let likesCounter = Number(counterHtml.innerText);
            likesCounter--;
            counterHtml.innerText = likesCounter;

            // rimuovere un elemento da array
            postsId = postsId.filter(function(value) {
                return value !== post.id
            })
        }
console.log(postsId)
        // seleziono anche il numerino e lo aggiorno
    });

}



/* let infoId = []
let info = []
let 3 = []
let 4 = []
let 5 = []
let 5 = []
let card5 = []
 */


/**
 * 
 *
 */
/* 
function cicloPosts(array) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        array.push(post.id)
    }
    return array.push
} */

/* function cicloOggetti(nomeVariabile , oggetto) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        nomeVariabile.push(post[oggetto])
        
    }
    return nomeVariabile.push(post[oggetto])
}
 */




/* for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    infoId.push(post.id)
    
}
 */
/* cicloPosts(2 , card2)
cicloPosts(3 , card3)
cicloPosts(4 , card4)
cicloPosts(5 , card5) */












 

































/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3




Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


Consigli del giorno:
Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Nota (bonus extra) - super opzionale:
Poiché é la parte logica ad interessarci in questa fase del corso, nello starter kit c'é il marup che potete usare per volgere l'esercizio.
Se finite la parte logica ed i vari bonus e vi avanza tempo per giocare un pó, pensate pure ad un layout differente e lavorateci su come bonus extra. 
 */