function AppViewModel() {
    var self = this;

    self.pages = [
        { name: "intro",
          displayName: "Introduction",
          content: new IntroViewModel()
        },
        { name: "lesson",
          displayName: "Course material",
          content: new LessonViewModel()
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
        },
    ];
    self.currentPage = ko.observable(self.pages[0]);

    self.navigate = function(to)  {
        self.currentPage(_.find(self.pages, function(page) { return page.name == to }));
    }
}

function IntroViewModel() {
    var self = this;

    self.header = "Introduction";
    self.text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
                "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function LessonViewModel() {
    var self = this;

    self.header = "Course material";
    self.text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
                "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

function PracticeViewModel() {
    var self = this;

    self.header = "Practice";
    self.text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo " +
                "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse " +
                "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non " +
                "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
        return self.answer() == 'right';
    }
}

function CongratsViewModel() {
    var self = this;

    self.header = "Congratulations!";
    self.text = "You've learned something!";
}

$(function() {
    ko.applyBindings(new AppViewModel());
});