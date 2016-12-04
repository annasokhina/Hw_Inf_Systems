$.getJSON('file.json', function(data) {
        var content = "<ul>";
        for (var i in data.breeds) {
            content += "<li>" 
            + '<img src="img/' + data.breeds[i].photo + '"/>'
            + '<i>Порода: </i>' + data.breeds[i].name + '</br>' 
            + '<i>Страна происхождения: </i>' + data.breeds[i].origin + '</br>' 
            + '<i>Характер: </i>' + data.breeds[i].character + '</br>' 
            + '<i>Особенности ухода: </i>' + data.breeds[i].care + '</br>' 
            + '<i>Отношение к людям: </i>' + data.breeds[i].treat_people + '</br>'+ '</br>' 
            + "</li>";
        }

        content += "</ul>";
        document.getElementById("conteiner").innerHTML = content;
  });


