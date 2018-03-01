const stala = 123; //const powoduje ze nie mozna drugi raz zadeklarowac, jesli pod spodem bedziemy probowac zmieniac wartosc const stala np na 234 to w konsoli wyswietli sie blad, czyli ze stala jest tylko ready-only to znaczy ze jak raz deklarowalismy stala zmienna do nie mozemy wiecej jej deklarowac

console.log(stala);


//jesli wpiszemy obiekt w stala:
/*const stala = {value:123};
console.log(stala);
to tez nie mozemy jej nadpisac poniewaz jest to obiekt ze zmienna


JESLI 

napiszemy pod spodem stala.value =234; to za zmienna value {value:123} juz nie jest stala, ona znajduje sie w obiekcie, ktory jest stala ale ten obiekt zawiera w srodku zmienna*/





/*for (let element of [1,2,3,4,5]){ //in oznacza ze pobieramy klucze(0,1,2,3,4), of oznacza, ze pobieramy poszczegolne wartosci(1,2,3,4,5)
    setTimeout(function(argument) {
        console.log(element);
    },16)
}*/

//let zabezpiecza kazdy blok for, kazde wywolanie for;
//elelemnt jest dostepny w srodku funkcji, nie jest dostepny poza funkcja
//let ogranicza zasieg zmiennych



/*for (var element of [1,2,3,4,5]){ //in oznacza ze pobieramy klucze(0,1,2,3,4), of oznacza, ze pobieramy poszczegolne wartosci(1,2,3,4,5)
    setTimeout(function(argument) {
        console.log(element);
    },16)
}

//zmiennej var uzywamy jesli chcemy miec dostep do zmiennej w glab np dane globalne,
//setTimeout to operacja opozniona, w konsoli 5 razy wyswietla sie wartosc 5
//kazde z wywolan setTimeout dostaje dokladnie ta sama zmienna i ta zmienna po wywolaniu 5 razy zawiera tylko 5 element*/


/*let zmienna = true;

if (true){
    
    console.log(zmienna)
}

(function(argument) {
    
  console.log(zmienna)  
})()*/
