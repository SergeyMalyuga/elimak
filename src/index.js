import './blocks/fonts.css'
import './blocks/style.css'
import 'normalize.css'
import '../src/blocks/card/card'
import {createCard} from './blocks/card/card'
import {CARDS} from './const'
import {openModal} from './blocks/popup/popup';
import {closeModal} from './blocks/popup/popup';

const cardListContainer = document.querySelector('.content__list');
const popup = document.querySelector('.popup');
const popupButtonClose = popup.querySelector('.popup__close')
const popupImage = document.querySelector('.popup__image');

CARDS.forEach((card) => {
    const newCard = createCard(card, openPopupImage(card));
    cardListContainer.append(newCard);
})


function openPopupImage(card) {
    return function () {
        openModal(popup);
        popupImage.src = card.image;
        document.body.style.overflow = 'hidden';

    }
};

function closePopupImage() {
    document.body.style.overflow = '';
        closeModal(popup)

};


popupButtonClose.addEventListener('click', closePopupImage);
