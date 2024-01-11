const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

let d = new Date().getFullYear(); // data atual
document.getElementById('newDate').innerHTML = d;

findTransactions();

function findTransactions() {
    setTimeout(() => {
        addCelularesToScreen(celularesData);
    }, 1000)
}

function addCelularesToScreen(celulares) {
    const container = document.getElementById('celulares');

    celulares.forEach(celular => {
        const div = document.createElement('div');
        div.classList.add('cel');

        const title = document.createElement('h3');
        title.innerHTML = celular.title;
        div.appendChild(title);

        const image = document.createElement('img');
        image.src = celular.image;
        image.alt = celular.title;
        div.appendChild(image);

        const description = document.createElement('p');
        description.innerHTML = celular.description;
        div.appendChild(description);

        const price = document.createElement('span');
        price.classList.add('preco');
        price.innerHTML = celular.price;
        div.appendChild(price);

        const buyButton = document.createElement('button');
        buyButton.classList.add('btn', 'btn-outline-info');
        const buyLink = document.createElement('a');
        buyLink.href = celular.buyLink;
        buyLink.innerHTML = 'Compre Aqui';
        buyButton.appendChild(buyLink);
        addBreakLine(price);
        div.appendChild(buyButton);

        container.appendChild(div);
    });
}


function addBreakLine(parentElement) {
    const br = document.createElement('br');
    parentElement.appendChild(br);
}

const celularesData = [
    {
        title: 'Iphone',
        image: 'https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX522_.jpg',
        description: 'Apple iPhone 13 (128 GB) - Meia-noite',
        price: 'R$3.899',
        buyLink: 'https://www.amazon.com.br/Apple-iPhone-13-128-GB-Meia-noite/dp/B09T55NFSR/ref=sr_1_1?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=R1600T0A50RD&amp;keywords=Iphone+Apple&amp;qid=1704978400&amp;sprefix=iphone+apple%252Caps%252C279&amp;sr=8-1&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=jocimargalant-20&linkCode=ur2&linkId=5bdfdd4c27f3630d1b894eab32a73d60&camp=1789&creative=9325',
    },
    {
        title: 'Samsung',
        image: 'https://m.media-amazon.com/images/I/61Uw1mLItsL._AC_SL1500_.jpg',
        description: 'Samsung Galaxy A34 128GB 5G - Pretoe',
        price: 'R$1.537,00',
        buyLink: 'https://www.amazon.com.br/Samsung-Galaxy-C%25C3%25A2mera-Bateria-5000mAh/dp/B0BXB619GS/ref=sr_1_4?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=23FAC4W7LT6CN&amp;keywords=Smartphone+Samsung+Galaxy&amp;qid=1704978752&amp;sprefix=smartphone+samsung+galaxy%252Caps%252C222&amp;sr=8-4&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&_encoding=UTF8&tag=jocimargalant-20&linkCode=ur2&linkId=75d77404c414445ea4d278cb525fc787&camp=1789&creative=9325',
    },
    {
        title: 'Xiaomi',
        image: 'https://m.media-amazon.com/images/I/61MIJc9pRDL._AC_SY679_.jpg',
        description: 'Smartphone Xiaomi Note 12 Pro',
        price: 'R$1.555,00',
        buyLink: 'https://www.amazon.com.br/Smartphone-Xiaomi-Note-12-Pro/dp/B0BZT82RH1/ref=sr_1_4_sspa?__mk_pt_BR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;keywords=Smartphone%252BXiaomi&amp;qid=1704978983&amp;sr=8-4-spons&amp;ufe=app_do%253Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;th=1&_encoding=UTF8&tag=jocimargalant-20&linkCode=ur2&linkId=d867db7344bf87652ff56b81a8400255&camp=1789&creative=9325',
    },
    {
        title: 'Motorola',
        image: 'https://m.media-amazon.com/images/I/61KxpuJvk9L._AC_SX569_.jpg',
        description: 'Smartphone Moto G84 Azul - Vegan Leather',
        price: 'R$1.549,99',
        buyLink: 'https://www.amazon.com.br/Smartphone-Moto-G84-256GB-Azul/dp/B0CGVWXHXV/ref=sr_1_8?crid=3TT8MQKNXFDAE&amp;dib=eyJ2IjoiMSJ9.Ftrixz0Zun-V5g7-6HE3AXHono2DMd2pzd5uhh53aiRTCW5HNvoEfcmuoLQOcDZnVoL4VBklPoUNPw0cy87IKA.JsSXWVrfNTyM2VcLKeX32UipUmv6eXlbUl-gIHJbvmg&amp;dib_tag=se&amp;keywords=motorola&amp;qid=1704998858&amp;sprefix=motorola%252Caps%252C480&amp;sr=8-8&amp;ufe=app_do%253Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751&_encoding=UTF8&tag=julliamanhaes-20&linkCode=ur2&linkId=59a9ed1cb8c70552e8c500ac670b45ad&camp=1789&creative=9325',
    }
    // Adicione mais objetos para representar outros celulares
];