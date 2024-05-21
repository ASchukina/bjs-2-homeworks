function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    // Создаём свойство marks со значением пустого массива
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks') === true) {
      this.marks.push(...marks);
    }
  }

  // Возвращаем среднее арифметическое оценок студента
Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') === false) {
        return 0; // если не существует свойство, возвращаем ноль
    } else if (this.marks.length === 0) {
        return 0; // если нет оценок, возвращаем ноль
    }
    
    // константа для вычисления среднего значения (с помощью reduce)
    const gradesAvg = this.marks
    .reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    }, 0);

    return gradesAvg;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
