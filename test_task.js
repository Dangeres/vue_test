// тестовое задание для https://hh.ru/vacancy/68422821?hhtmFrom=vacancy_response


let data = { from: 0, to: 10 };

// Symbol.iterator

data[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        // next() вызывается на каждой итерации цикла for..of
        next() {
            // должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of data) {
  console.log(num);
}


// Symbol.iterator END


// Anonymous and Basic Functions

function transformer(data) { 
    let r = [];

    for(let i=data.from; i<=data.to; i++) {
        r.push(i);
    }

    return r;
};


for (let num of (() => { let r = []; for(let i=data.from; i<=data.to; i++) {r.push(i)} return r; } )()) {
    console.log(num);
}

for (let num of transformer(data)) {
    console.log(num);
}

// Anonymous and Basic Functions END