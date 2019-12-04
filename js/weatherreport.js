TempOver20();
SunnyDays();

function TempOver20() {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=Sydney,AU&APPID=e83d851f07c3df2c1d17d3dd8589a73f&units=metric"
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(data1) {
        data1.list.forEach(element1 => {
          let output = "";
          output += "<tr>";
          data1.list.forEach(function(element1) {
            if (element1.main.temp > 20) {
              output += `
                            <td>
                                ${element1.dt_txt}</td>
                              <td>  ${element1.main.temp}&#8451</td>
                            </tr>
                        `;
            }

            document.getElementById("Temp20").innerHTML = output;
          });

          //console.log(element.main.temp);
        });
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

function SunnyDays() {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=Sydney,AU&APPID=e83d851f07c3df2c1d17d3dd8589a73f&units=metric"
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(data2) {
        data2.list.forEach(element2 => {
          let output2 = "";
          output2 += "<tr>";

          data2.list.forEach(function(element2) {
            if (element2.weather[0].id === 800) {
              output2 += `
                        <td>        
                        ${element2.dt_txt}</td>
                        <td>${element2.weather[0].description}</td>
                        </tr>    
                                     `;
            }

            document.getElementById("SunnyDay").innerHTML = output2;
          });
          //console.log(element.dt_txt);
          //console.log(element.weather[0].description);
        });
        //console.log(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}
