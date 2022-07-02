//  >>>> forma não recomenda

const person = {
    name: 'Renata',
    age: 38,
    profession: 'Juíza'
}
person.age = 42;

const julio: {name: string, age: number, profession: string} = {
    name: 'Julio',
    age: 49,
    profession: 'Parasita'
}

const rita: {name: string, age: number, profession: string} = {
    name: 'Rita',
    age: 51,
    profession: 'Professora'
}

//  >>>> forma não recomenda

enum profession {
    professor,
    juíz,
    atleta,
    militar,
    estudante
}
interface person {
    name: string,
    age: number,
    profession: profession,
    hobby?: string      //  Hobby é opcional devido a "?"
}
interface student extends person {
    classes: string[]
}
const vanessa: person = {
    name: 'Vanessa',
    age: 42,
    profession: profession.professor,
    hobby: 'ler'
}
const claudia: person = {
    name: 'Cláudia',
    age: 55,
    profession: profession.militar,
    hobby: 'cozinhar'
}
const pedro: student = {
    name: 'Pedro',
    age: 12,
    profession: profession.estudante,
    classes: ['Matemática', 'Inglês', 'Literatura', 'História']
}
const monica: student = {
    name: 'Mônica',
    age: 29,
    profession: profession.estudante,
    classes: ['Arquitetura', 'Decoração', 'Cálculos'],
    hobby: 'viajar'
}
function list(list: string[]) {
    for (const item of list) {
        console.log('- ', item);
    }
}

list(monica.classes);