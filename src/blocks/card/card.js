const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, onButtonClick) {
    const newCard =  cardTemplate.querySelector('.content__list-item').cloneNode(true);
    newCard.querySelector('.card__image').src = card.image;
    newCard.querySelector('.card__title').textContent = card.title;
    newCard.querySelector('.card__text').textContent = card.text;
    newCard.querySelector('.card__button').addEventListener('click', onButtonClick);
    return newCard;
}

export {createCard};
