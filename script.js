function PracticeSentenceViewModel(words, solution) {
    var self = this;

    self.words = ko.observable(words);
    self.solution = ko.observable(solution);

    self.remainingWords = ko.observableArray(words.slice(0));
    self.chosenWords = ko.observableArray([]);

    self.place = function(word) {
        self.remainingWords.remove(word);
        self.chosenWords.push(word);
    };

    self.reset = function() {
        self.remainingWords(self.words());
        self.chosenWords([]);
    };

    self.correct = function() {
        return self.chosenWords().join(' ') === self.solution();
    };
}

function PracticeViewModel() {
    var self = this;

    self.sentences = [
        new PracticeSentenceViewModel(
            ["singing", "a", "is", "song", "now", "new", "he"],
            "he is singing a new song now"),
        new PracticeSentenceViewModel(
            ["not", "like", "do", "Mondays", "I"],
            "I do not like Mondays"),
        new PracticeSentenceViewModel(
            ["sleep", "do", "not", "usually", "cats", "at", "night"],
            "cats do not usually sleep at night"),
        new PracticeSentenceViewModel(
            ["Tuesday", "computer", "afternoons", "lab", "goes", "the", "she", "seldom", "to", "on"],
            "she seldom goes to the computer lab on Tuesday afternoons"),
        new PracticeSentenceViewModel(
            ["stay", "up", "mum", "and", "dad", "late", "on", "weekdays", "not", "do"],
            "mum and dad do not stay up late on weekdays"),
        new PracticeSentenceViewModel(
            ["reporter", "to", "the", "car", "his", "running", "is"],
            "the reporter is running to his car"),
        new PracticeSentenceViewModel(
            ["play", "friend", "tennis", "does", "not", "my"],
            "my friend does not play tennis"),
        new PracticeSentenceViewModel(
            ["goes", "skating", "never", "grandmother", "his"],
            "his grandmother never goes skating"),
        new PracticeSentenceViewModel(
            ["I", "cannot", "two", "hamsters", "see"],
            "I cannot see two hamsters"),
        new PracticeSentenceViewModel(
            ["in", "the", "breakfast", "kitchen", "Jack", "always", "has"],
            "Jack always has breakfast in the kitchen")
    ];
}

function TestViewModel() {
    var self = this;

    self.header = "Test";
    self.text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
                "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    self.answer = ko.observable('wrong');

    self.validate = function() {
        return self.answer() === 'right';
    };
}

function CongratsViewModel() {
    var self = this;

    self.header = "Congratulations!";
    self.text = "You've learned something!";
}

function AppViewModel() {
    var self = this;

    self.pages = [
        { name: "intro",
          displayName: "Introduction",
          content: null
        },
        { name: "lesson",
          displayName: "Theory",
          content: null
        },
        { name: "practice",
          displayName: "Practice",
          content: new PracticeViewModel()
        },
        { name: "test",
          displayName: "Test",
          content: new TestViewModel()
        },
        { name: "congrats",
          displayName: "Congratulations",
          content: new CongratsViewModel()
        }
    ];
    self.currentPage = ko.observable(self.pages[0]);

    self.navigate = function(to)  {
        self.currentPage(_.find(self.pages, function(page) { return page.name === to; }));
    };
}

$(function() {
    ko.applyBindings(new AppViewModel());
});