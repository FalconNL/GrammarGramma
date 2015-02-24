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
        self.remainingWords(self.words().slice(0));
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

function RewriteViewModel(hint, postfix, answers, newWords) {
    var self = this;

    self.hint = ko.observable(hint);
    self.answers = ko.observable(answers);
    self.postfix = ko.observable(postfix);
    self.newWords = ko.observable(newWords);
    self.guess = ko.observable("");

    self.isCorrect = function() {
        return self.answers().indexOf(self.guess().toLowerCase().replace(/[\.\?]/g, '')) > -1;
    };
}

function MultipleChoiceViewModel(id, hint, choices, answer) {
    var self = this;

    self.id = ko.observable(id);
    self.hint = ko.observable(hint);
    self.choices = ko.observable(choices);
    self.answer = ko.observable(answer);
    self.guess = ko.observable('');

    self.isCorrect = function() {
        return self.guess() === self.answer();
    };
}

function TestViewModel() {
    var self = this;

    self.allRewriteQuestions = [
        new RewriteViewModel("Did you see Mr Fisher", "?", ["did you see mr fisher yesterday morning"], "yesterday morning"),
        new RewriteViewModel("We watched the film", ".", ["last weekend we watched the film", "we watched the film last weekend"], "last weekend"),
        new RewriteViewModel("He is late", ".", ["he is never late"], "never"),
        new RewriteViewModel("The boy ran out of the room", ".", ["the boy quickly ran out of the room", "the boy ran out of the room quickly"], "quickly"),
        new RewriteViewModel("Rita speaks English", ".", ["rita speaks english fluently"], "fluently"),
        new RewriteViewModel("Have you been to Canada", "?", ["have you ever been to canada"], "ever"),
        new RewriteViewModel("We have met him", ".", ["we have met him before"], "before"),
        new RewriteViewModel("They are flying", ".", ["on tuesday they are flying to rome", "they are flying to rome on tuesday"], "on Tuesday / to Rome"),
        new RewriteViewModel("She goes to school by bus", ".", ["she always goes to school by bus"], "always"),
        new RewriteViewModel("The cat is playing", ".", ["the cat is playing in the garden"], "in the garden")
    ];

    self.allDefineQuestions = [
        new MultipleChoiceViewModel("define0", 'Jack flew to Detroit <span class="testDefineHighlight">in 2012</span>.', ["place", "subject", "time", "verb"], "time"),
        new MultipleChoiceViewModel("define1", 'Why <span class="testDefineHighlight">do</span> you buy comics?', ["auxiliary", "object", "question word", "subject", "verb"], "auxiliary"),
        new MultipleChoiceViewModel("define2", '<span class="testDefineHighlight">Who</span> was in the cinema?', ["place", "question word", "verb"], "question word"),
        new MultipleChoiceViewModel("define3", 'Do you like <span class="testDefineHighlight">cornflakes</span>?', ["auxiliary", "object", "subject", "verb"], "object"),
        new MultipleChoiceViewModel("define4", 'I can&#39;t go <span class="testDefineHighlight">to the party</span>.', ["auxiliary", "place", "subject", "verb"], "place"),
        new MultipleChoiceViewModel("define5", 'We <span class="testDefineHighlight">often</span> play in the gym.', ["adverb of frequency", "place", "subject", "verb"], "adverb of frequency"),
        new MultipleChoiceViewModel("define6", 'Every Friday <span class="testDefineHighlight">he</span> goes to the club.', ["place", "subject", "time", "verb"], "subject"),
        new MultipleChoiceViewModel("define7", 'Emma often arrives late <span class="testDefineHighlight">at school</span>.', ["adverb of frequency", "place", "subject", "time", "verb"], "place"),
        new MultipleChoiceViewModel("define8", 'James <span class="testDefineHighlight">is telling</span> jokes.', ["subject", "object", "verb"], "verb"),
        new MultipleChoiceViewModel("define9", 'I <span class="testDefineHighlight">can</span> sing well.', ["adverb", "auxiliary", "subject", "verb"], "auxiliary")
    ]

    self.allFormSentenceQuestions = [
        // new RewriteViewModel("Victoria Station / leaves / the bus / at 7", ".", ["the bus leaves victoria station at 7"]),
        // new RewriteViewModel("he / speaks / well / French", ".", ["he speaks french well"]),
        // new RewriteViewModel("she / writes / a letter / often", ".", ["she often writes a letter", "she writes a letter often"]),
        // new RewriteViewModel("Alex / under the shower / the song / sang / loudly", ".", ["alex loudly sang the song under the shower", "alex sang the song loudly under the shower", "alex sang the song under the shower loudly"]),
        // new RewriteViewModel("did / I / my homework / do / in my room / not", ".", ["i did not do my homework in my room", "in my room i did not do my homework"]),
        // new RewriteViewModel("play / they / handball / in the evening / always", ".", ["they always play handball in the evening", "in the evening they always play handball"]),
        // new RewriteViewModel("lunch / did / we / not / yesterday / have / at school", ".", ["yesterday we did not have lunch at school", "we did not have lunch at school yesterday"]),
        // new RewriteViewModel("in Berlin / can / his uncle / he / visit", ".", ["he can visit his uncle in berlin", "in berlin he can visit his uncle"]),
        new RewriteViewModel("to music / Marlen / is listening / now", ".", ["marlen is listening to music now"]),
        new RewriteViewModel("often / it / in Scotland / rains", ".", ["it often rains in scotland", "in scotland it often rains", "in scotland it rains often"])
    ];

    self.allCorrectQuestions = [
        new MultipleChoiceViewModel("correct0", "Which is correct?", ["She always arrives late in the morning.", "She arrives always late in the morning.", "Both sentences are correct."], "She always arrives late in the morning."),
        new MultipleChoiceViewModel("correct1", "Which is correct?", ["From where are you?", "Where are you from?", "Both sentences are correct."], "Where are you from?"),
        new MultipleChoiceViewModel("correct2", "Which is correct?", ["He's going to buy a present to give to his sister.", "He's going to buy his sister a present.", "Both sentences are correct."], "Both sentences are correct."),
        new MultipleChoiceViewModel("correct3", "Which is correct?", ["Where are you?", "Who are you?", "Both sentences are correct."], "Both sentences are correct."),
        new MultipleChoiceViewModel("correct4", "Which is correct?", ["Judy often reads magazines.", "Judy reads often magazines.", "Both sentences are correct."], "Judy often reads magazines."),
        new MultipleChoiceViewModel("correct5", "Which is correct?", ["For who are you waiting?", "Who are you waiting for?", "Both sentences are correct."], "Who are you waiting for?"),
        new MultipleChoiceViewModel("correct6", "Which is correct?", ["Last Wednesday we saw a film.", "We saw last Wednesday a film.", "Both sentences are correct."], "Last Wednesday we saw a film."),
        new MultipleChoiceViewModel("correct7", "Which is correct?", ["Every Friday they play hockey in the stadium.", "They play hockey in the stadium every Friday.", "Both sentences are correct."], "Both sentences are correct."),
        new MultipleChoiceViewModel("correct8", "Which is correct?", ["My friend gave a book to me.", "My friend gave me a book.", "Both sentences are correct."], "Both sentences are correct."),
        new MultipleChoiceViewModel("correct9", "Which is correct?", ["I watched TV yesterday evening.", "Yesterday evening I watched TV.", "Both sentences are correct."], "Both sentences are correct.")
    ]

    self.allFormQuestionQuestions = [
        new RewriteViewModel("where / has / bought / John / his car", "?", ["where has john bought his car"]),
        new RewriteViewModel("Kaito and Sakura / from Tokyo / are", "?", ["are kaito and sakura from tokyo"]),
        new RewriteViewModel("when / do / get up / you / in the morning", "?", ["when do you get up in the morning"]),
        new RewriteViewModel("who / the window / broke", "?", ["who broke the window"]),
        new RewriteViewModel("why / James / so tired / is", "?", ["why is james so tired"]),
        new RewriteViewModel("the girls / text messages / are / writing", "?", ["are the girls writing text messages"]),
        new RewriteViewModel("How / your grandmother / is", "?", ["how is your grandmother"]),
        new RewriteViewModel("what / Angela / like / for breakfast / does", "?", ["what does angela like for breakfast"]),
        new RewriteViewModel("you / your homework / have / done / yet", "?", ["have you done your homework yet"]),
        new RewriteViewModel("like / do / they / cola", "?", ["do they like cola"])
    ];

    self.questionsPerSection = 1;
    self.guessesChanged = ko.observable(false);

    self.rewriteQuestions = [];
    self.defineQuestions = [];
    self.formSentenceQuestions = [];
    self.correctQuestions = [];
    self.formQuestionQuestions = [];
    self.allQuestions = ko.observable([]);

    self.reset = function() {
        _.forEach(self.allQuestions(), function(question) {
            question.guess('');
        });

        self.rewriteQuestions = _(self.allRewriteQuestions).shuffle().take(self.questionsPerSection).value();
        self.defineQuestions = _(self.allDefineQuestions).shuffle().take(self.questionsPerSection).value();
        self.formSentenceQuestions = _(self.allFormSentenceQuestions).shuffle().take(self.questionsPerSection).value();
        self.correctQuestions = _(self.allCorrectQuestions).shuffle().take(self.questionsPerSection).value();
        self.formQuestionQuestions = _(self.allFormQuestionQuestions).shuffle().take(self.questionsPerSection).value();
        self.allQuestions(self.rewriteQuestions.concat(self.defineQuestions).concat(self.formSentenceQuestions).concat(self.correctQuestions).concat(self.formQuestionQuestions));

        _.forEach(self.allQuestions(), function(question) {
            question.guess.subscribe(function() {
                self.guessesChanged(true);
            });
        });
    };

    self.testCompleted = ko.computed(function() {
        this.guessesChanged(false);
        var result = _.all(this.allQuestions(), function(question) {
            return question.guess();
        });
        return result;
    }, self);
}

function ResultsViewModel(testViewModel) {
    var self = this;

    self.testViewModel = ko.observable(testViewModel);

    self.correct = function(questions) {
        return _.filter(questions, function(question) { return question.isCorrect(); }).length;
    };

    self.score = function() {
        return Math.round(self.correct(self.testViewModel().allQuestions()) / self.testViewModel().allQuestions().length * 100).toString();
    };

    self.opinion = function() {
        var score = self.score();

        if (score > 99) {
            return "Oh my! You've answered every question correctly! Clearly you know all about word order in English sentences. Good job!";
        }
        else if (score >= 90) {
            return "Congratulations! You've answered almost all of the questions correctly! Here are the answers to the ones you missed:";
        }
        else if (score >= 80) {
            return "Well done, you've answered most of the questions correctly. Here are the answers to the ones you missed:";
        }
        else if (score >= 70) {
            return "Not bad, but there's certainly room for improvement. You might want to go over the theory again. Here are the answers to the ones you got wrong:";
        }
        else if (score >= 60) {
            return "Well, it's a passing mark, but you still have a lot to learn. Try going through the theory once more. Here are the answers to the ones you got wrong:";
        }
        else if (score >= 50) {
            return "Oh dear, I'm afraid that just wasn't good enough. Try taking the test again once you've studied a bit harder. Here are the answers to the ones you got wrong:";
        }
        else if (score >= 20) {
            return "Oh dearie me, that wasn't very good at all! Study harder and take the test again! Here are the answers to the ones you got wrong:";
        }
        else {
            return "Good heavens! Did you study at all? Or did you try to get every question wrong on purpose? I expected better from you! " +
                   "Here are the answers to the ones you got wrong, though it would be quicker to list the ones you got right:";
        }
    };
}

function AppViewModel() {
    var self = this;

    var testViewModel = new TestViewModel();

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
          content: testViewModel
        },
        { name: "results",
          displayName: "Congratulations",
          content: new ResultsViewModel(testViewModel)
        }
    ];
    self.currentPage = ko.observable(self.pages[0]);

    self.navigate = function(to)  {
        var target = _.find(self.pages, function(page) { return page.name === to; });
        if (to === "test") {
            target.content.reset();
        }
        self.currentPage(target);
        window.scrollTo(0, 0);
    };
}

$(function() {
    ko.applyBindings(new AppViewModel());
});