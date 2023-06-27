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
 - [ ] Creare il markup HTML.
 - [ ] Importare AXIOS.
 - [ ] Importare API di Boolean con nome `endpoint`.
 - [ ] Creare un array vuoto chiamato `emails`.
 - [ ] Creare una variabile `listItems`.
 
 <br>

 ## Fase svolgimento
 - [ ] Creare un method `createEmailList`.
 - [ ] **CICLO FOR** tante volte quante ne indica `listItems`.
    - [ ] Fare una chiamata API con AXIOS.
    - [ ] Pushare il risultato della chiamata in `emails`.
 - [ ] Rimuovere il markup HTML.
 - [ ] Display nel DOM con un V-FOR per ogni elemento di `emails`.