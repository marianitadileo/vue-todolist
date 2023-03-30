// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Comprare il cibo per il gatto",
                    done: true
                },
                {
                    text: "Andare in palestra",
                    done: false
                },
                {
                    text: "Comprare dei vestiti per la festa di compleanno",
                    done: true 
                }
            ],
            newToDo: "",
            showError: false
        }
    },
    methods: {
        addBtn() {
            if(this.newToDo.length > 0) {

                this.showError = false;
                this.newToDo = this.newToDo[0].toUpperCase() + this.newToDo.substring(1);
                this.list.unshift(this.newToDo);
                this.newToDo = "";
            
            } else {
                this.showError = true;

                setTimeout(() => {
                    this.showError = false;
                }, 3000)
            }
        
        },


        remove(indexToRemove) {
            this.list.splice(indexToRemove, 1);
        }
    }

}).mount("#app");