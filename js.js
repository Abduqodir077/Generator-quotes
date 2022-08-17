function generate(){
    let quotes = {
        "- Наполеон Бонапарт" : '"Дай человеку власть, и ты узнаешь, кто он."',
        "- Марк Твен" : '"Никогда не спорьте с идиотами. Вы опуститесь до их уровня, где они задавять своим опытом"',
        "- ??? " : '"Если вы общаетесь с четыремя милионерами вы будете пятым, если вы общаетесь с тремя уверенными в себя людьми вы будете четвёртым, если вы общаетесь с двумя идиотами вы будете третим."'
    }

    // const data = [
    //     {
    //         id: 0,
    //         img: "./img/1519855918965.jfif"    
    //     },
    //     {
    //         id: 1,
    //         img: "./img/1575479070098.jfif"
    //     }
    // ]

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}