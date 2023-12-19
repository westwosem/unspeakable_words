function getRundomCardPosition(deck){
    const position = Math.ceil( Math.random() * (deck.length - 1) );
    return position;
}

export default function deckShuffle(sortedDeck){
    let shufledDeck = [...sortedDeck];
    let count = 0;
    while (count < shufledDeck.length) {
        let to             = getRundomCardPosition(shufledDeck);
        let toElement      = shufledDeck[to];
        let fromElement    = shufledDeck[count];
        shufledDeck[to]    = fromElement;
        shufledDeck[count] = toElement;
        count++;
    }
    return shufledDeck;
}