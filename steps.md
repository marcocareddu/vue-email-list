<!-- Esercizio di oggi: Vue Email List
nome repo: vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean :puntare_in_basso::carnagione-2:
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 -->

 # VUE EMAIL LIST
 ## Fase preliminiare
 - [x] Creare il markup HTML.
 - [x] Importare AXIOS.
 - [x] Importare API di Boolean con nome `endpoint`.
 - [x] Creare un array vuoto chiamato `emails`.
 - [x] Creare una variabile `listItems`.
 
 <br>

 ## Fase svolgimento
 - [x] Creare un method `createEmailsList`.
 - [x] **CICLO FOR** tante volte quante ne indica `listItems`.
    - [x] Fare una chiamata API con AXIOS.
    - [x] Pushare il risultato della chiamata in `emails`.
 - [ ] Rimuovere il markup HTML.
 - [ ] Display nel DOM con un V-FOR per ogni elemento di `emails`.