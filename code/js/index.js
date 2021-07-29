const cards = [
    {
        header:"Header1",
        text:"Maecenas eu mollis odio. Maecenas consequat tincidunt"
    },
    {
        header:"Header2",
        text:"Vestibulum sagittis massa non mi commodo tempor non convallis."
    },
    {
        header:"Header3",
        text:"Donec scelerisque arcu a porta mollis. Nulla a massa sem."
    },
    {
        header:"Header4",
        text:"Maecenas eu mollis odio. Maecenas consequat tincidunt arcu in venenatis."
    },
    {
        header:"Header5",
        text:"Vestibulum sagittis massa non mi commodo tempor non convallis."
    },
    {
        header:"Header6",
        text:"Donec scelerisque arcu a porta mollis. Nulla a massa sem."
    }
];

window.addEventListener('load', (event) => {
    const cardsContainer = document.getElementById("cards");
    cards.map((cardContent)=>{
        let container = document.createElement('div');
        container.className = 'col-4 col-md-6 col-sm-12';
        cardsContainer.appendChild(container);

        let card = document.createElement('div');
        card.className = 'card';
        container.appendChild(card);

        let cardTop = document.createElement('div');
        cardTop.className = 'card-top flex-hor justify-content-center';
        card.appendChild(cardTop);

        let cardImg = document.createElement('img');
        cardImg.className = 'card-img';
        cardImg.src = './images/card-logo-mark.png';
        cardTop.appendChild(cardImg);

        let cardBottom = document.createElement('div');
        cardBottom.className = 'card-bottom';
        card.appendChild(cardBottom);

        let cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.innerText = cardContent.header;
        cardBottom.appendChild(cardHeader);

        let cardText = document.createElement('div');
        cardText.className = 'card-text text';
        cardText.innerText = cardContent.text;
        cardBottom.appendChild(cardText);
    })
    
});