const cardTextList = [
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
const cardConfig = {
    tag: "div",
    className: "col-4 col-md-6 col-sm-12",
    children:[
        {
            tag: "div",
            className: "card",
            children:[
                {
                    tag: "div",
                    className: "card-top flex-hor justify-content-center",
                    children:[
                        {
                            tag: "img",
                            className: "card-img",
                            src:"./images/card-logo-mark.png"
                        }
                    ]
                },
                {
                    tag: "div",
                    className: "card-bottom",
                    children:[
                        {
                            tag: "div",
                            className: "card-header",
                            text:"header"
                        },
                        {
                            tag: "div",
                            className: "card-text text",
                            text:"text"
                        },
                    ]
                }
            ]
        }
    ]
}

window.addEventListener('load', () => {
    const cards = document.getElementById("cards");
    cardTextList.map((cardText)=>{
       generateCards(cardText, cardConfig, cards); 
    })
    
});
const generateCards = (content, config, parent)=>{
    const { children } = config;
    let element = document.createElement(config.tag);
    element.className = config.className;
    if(config.text) {
        element.innerText = content[config.text];
    }
    if(config.src) {
        element.src = config.src;
    }
    parent.appendChild(element);
    if(!children) {
        return;
    }
    for(let childIndex in children) {
        generateCards(content, children[childIndex], element);
    }
}