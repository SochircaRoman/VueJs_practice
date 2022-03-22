const App = {
    data() {
        return {
            counter: 0,
            title: "List of notes",
            placeholderText: "Write the name of note",
            inputValue: "",
            notes: ["note 1", "note 2"]
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue);
                this.inputValue = "";
            }
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        }
    }
}

Vue.createApp(App).mount('#app');