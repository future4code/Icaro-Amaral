const getNameAndAge = (name:string, date:string) => {
    return console.log(`Olá me chamo ${name}, nasci no dia ${date.split('/', 1)} do mês ${date.split('/',2).splice(1, 1)} do ano de ${date.split('/', 3).splice(2, 1)}`)
}

getNameAndAge('Ícaro', '18/03/1987')