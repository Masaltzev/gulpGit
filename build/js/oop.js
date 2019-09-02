class rama {
    constructor(title = '') {
        this.title = title;
        console.log('Создание задачи');
    }
}

let task = new rama('807');

console.log(task.title);