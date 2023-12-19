import deckShuffle from "./deckShuffle";
const deck = {
    deck: [
        ...Array(10).fill('A'),
        ...Array(5).fill('B'),
        ...Array(2).fill('C'),
        ...Array(3).fill('D'),
        ...Array(2).fill('F'),
        ...Array(2).fill('G'),
        ...Array(3).fill('H'),
        ...Array(9).fill('I'),
        ...Array(1).fill('J'),
        ...Array(1).fill('K'),
        ...Array(5).fill('L'),
        ...Array(3).fill('M'),
        ...Array(5).fill('N'),
        ...Array(8).fill('O'),
        ...Array(2).fill('P'),
        ...Array(1).fill('Q'),
        ...Array(5).fill('R'),
        ...Array(5).fill('S'),
        ...Array(5).fill('T'),
        ...Array(4).fill('U'),
        ...Array(2).fill('V'),
        ...Array(2).fill('W'),
        ...Array(1).fill('X'),
        ...Array(2).fill('Y'),
        ...Array(1).fill('Z'),
    ],
    getPlayDeck: function (){
        return deckShuffle(this.deck);
    }
};

export default deck;