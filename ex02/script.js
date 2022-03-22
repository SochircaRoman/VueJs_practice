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
            this.notes.push(this.inputValue);
            this.inputValue = "";
        },
        inputKeyPress(event) {
            if (event.key === "Enter") {
                this.addNewNote();
            }
        }
    }
}

Vue.createApp(App).mount('#app');