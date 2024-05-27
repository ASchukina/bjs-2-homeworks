// Задание №1
// создаём класс с конструктором, передаём другие свойства через this
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    // создаём метод улучшения состояния книги
    fix() {
        this.state *= 1.5;
    }

    // сеттер для state, где если меньше 0, то 0; если больше 100, то 100; иначе state
    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    // геттер для state, чтобы читать значение свойства state
    get state() {
        return this._state;
    }
}

// создали класс Журнал, с его типом
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// создали класс Книга, с его типом
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// романы наследуются от книг, забирая параметр "автор", принимая тип "романы"
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

// фантастика наследуется от книг, забирая параметр "автор", принимая тип "фантастика"
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

// детективы наследуются от книг, забирая параметр "автор", принимая тип "детективы"
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задание№2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // если состояние книги больше, чем 30, добавляем в хранилище
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // перебираем книги, если тип соответствует значению, то возвращаем книгу, иначе null (книга не найдена)
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        let currentBook = this.findBookBy('name', bookName);
        if (currentBook) {
            this.books.splice(currentBook);
        }
        return currentBook;
    }  
}

// Задание №3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    // оценка по предмету
    addMark(mark, subject) {
        // проверка на наличие объекта
        if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
            this.marks[subject] = []; // если предмета нет, возвращаем пустой массив
            this.marks[subject].push(mark);
          } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
            this.marks[subject].push(mark);
          }
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject) === false) {
          return 0;
        }
        const gradesAvg = this.marks[subject]
        .reduce((acc, mark, index, arr) => {
          acc += mark;
          if (index === arr.length - 1) {
            return acc / arr.length;
          }
          return acc;
        }, 0);

        return gradesAvg;
    }

    getAverage() {
        if (Object.keys(this.marks).length === 0) {
          return 0;
        }

        let subjects = Object.keys(this.marks);
        for (let subject of subjects) {
          subjects[subjects.indexOf(subject)] = this.getAverageBySubject(subject);
        }

        const gradesAvg = subjects
        .reduce((acc, mark, index, arr) => {
          acc += mark;
          if (index === arr.length - 1) {
              return acc / arr.length;
          }
          return acc;
          }, 0);
          return gradesAvg;
      }
} 