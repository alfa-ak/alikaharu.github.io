var DataTeam;

//menampilkan data league
function ambilLeague() {
  if ("caches" in window) {
    caches.match(teams + "teams").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          var LEAGUEhtml = "";
          data.teams.forEach(function (teams) {
            LEAGUEhtml += `
                <div class="card">
                <div class="card-content">
                    <div class="center"><img width="64" height="64" src="${teams.crestUrl || 'img/empty.svg'}"></div>
                    <div class="center flow-text">${teams.name}</div>
                    </div>             
                  <div class="card-action center-align">
                      <a class="waves-effect waves-light btn-small" href="./pages/detail/savedleague.html?id=${teams.id}">Detail</a>
                      <a class="waves-effect waves-light btn-small" href="./pages/detail/savedsquad.html?id=${teams.id}">Player</a>
                  </div>
                    `;
          });
          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("league-content").innerHTML = LEAGUEhtml;
        });
      }
    });
  }

  fetchApiKey(teams + "teams")
    .then(status)
    .then(json)
    .then(function (data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.

      // Menyusun komponen card artikel secara dinamis
      var LEAGUEhtml = "";
      data.teams.forEach(function (teams) {
        LEAGUEhtml += `               
                <div class="card">
                <div class="card-content">
                    <div class="center"><img width="64" height="64" src="${teams.crestUrl || 'img/empty.svg'}"></div>
                    <div class="center flow-text">${teams.name}</div>
                    </div>             
                <div class="card-action center-align">
                    <a class="waves-effect waves-light btn-small" href="./pages/detail/savedleague.html?id=${teams.id}">Detail</a>
                    <a class="waves-effect waves-light btn-small" href="./pages/detail/savedsquad.html?id=${teams.id}">Player</a>
                </div>                 
                `;
      });
      // Sisipkan komponen card ke dalam elemen dengan id #content
      document.getElementById("league-content").innerHTML = LEAGUEhtml;
    })
    .catch(error);
}


//membaca data dari ID
function ambilLeagueId() {
  return new Promise(function(resolve, reject) {
  // Ambil nilai query parameter (?id=)
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");
  let intId = parseInt(idParam);

  if ("caches" in window) {
    caches.match(base_url + "teams/" + idParam).then(function (response) {
      if (response) {
        response.json().then(function (teams) {
          DataTeam = teams;
          var LEAGUEhtml = `
            <div class="card">
              <div class="center-align">
                <span class="card-title"><b>${teams.name}</b></span>
              </div>
                <table class="responsive-table striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Venue</th>
              <th>Club Colors</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>${(teams.name)}</td>
              <td>${(teams.address)}</td>
              <td>${(teams.email)}</td>
              <td>${(teams.phone)}</td>
              <td>${(teams.website)}</td>
              <td>${(teams.venue)}</td>
              <td>${(teams.clubColors)}</td>
            </tr>
            </tbody>
          </table>
              </div>
              <div class="card-action right-align">
                  <a class="waves-effect waves-light btn-small" onclick="saveLEAGUE(${(teams.id)})">Save to Data Tim</a>
              </div>              
            </div>
            `;
          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("league-content").innerHTML = LEAGUEhtml;

          // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
          resolve(teams);
        });
      }
    });
  }

  fetchApiKey(base_url + "teams/" + intId)
    .then(status)
    .then(json)
    .then(function (teams) {
      DataTeam = teams;
      // Objek JavaScript dari response.json() masuk lewat variabel data.

      // Menyusun komponen card artikel secara dinamis
      var LEAGUEhtml = `
            <div class="card">
              <div class="center-align">
                <span class="card-title"><b>${teams.name}</b></span>
              </div>
                <table class="responsive-table striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Venue</th>
              <th>Club Colors</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>${(teams.name)}</td>
              <td>${(teams.address)}</td>
              <td>${(teams.email)}</td>
              <td>${(teams.phone)}</td>
              <td>${(teams.website)}</td>
              <td>${(teams.venue)}</td>
              <td>${(teams.clubColors)}</td>
            </tr>
            </tbody>
          </table>
              </div>
              <div class="card-action right-align">
                  <a class="waves-effect waves-light btn-small" onclick="saveLEAGUE(${(teams.id)})">Save to Data Tim</a>
              </div>              
            </div>
          `;
      // Sisipkan komponen card ke dalam elemen dengan id #content
      document.getElementById("league-content").innerHTML = LEAGUEhtml;

      // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
      resolve(teams);
    });
});
}

//simpan data
function getSavedLEAGUE() {
  getLEAGUEALL().then(function (leagues) {
    console.log(leagues);
    // Menyusun komponen card
    var LEAGUEhtml = "";
    leagues.forEach(function (teams) {
      LEAGUEhtml += `
                    <div class="card">
                    <div class="center-align">
                      <span class="card-title"><b>${teams.DataTeam.name}</b></span>
                    </div>
                      <table class="responsive-table striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Venue</th>
                    <th>Club Colors</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>${(teams.DataTeam.name)}</td>
                    <td>${(teams.DataTeam.address)}</td>
                    <td>${(teams.DataTeam.email)}</td>
                    <td>${(teams.DataTeam.phone)}</td>
                    <td>${(teams.DataTeam.website)}</td>
                    <td>${(teams.DataTeam.venue)}</td>
                    <td>${(teams.DataTeam.clubColors)}</td>
                  </tr>
                  </tbody>
                </table>
                    </div>
                    <div class="card-action right-align">
                  <a class="waves-effect waves-light btn-small red" onclick="getDeleteLEAGUE(${(teams.DataTeam.id)})">Delete Data Tim</a>
              </div>                        
                  </div>
                `;
    });
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("league-content").innerHTML = LEAGUEhtml;
  });
}

function getSavedLEAGUEById() {
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");

  getLEAGUEbyid(idParam).then(function (teams) {
    LEAGUEhtml = '';
    var LEAGUEhtml = `
    <div class="card">
                    <div class="center-align">
                      <span class="card-title"><b>${teams.name}</b></span>
                    </div>
                      <table class="responsive-table striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Venue</th>
                    <th>Club Colors</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>${(teams.name)}</td>
                    <td>${(teams.address)}</td>
                    <td>${(teams.email)}</td>
                    <td>${(teams.phone)}</td>
                    <td>${(teams.website)}</td>
                    <td>${(teams.venue)}</td>
                    <td>${(teams.clubColors)}</td>
                  </tr>
                  </tbody>
                </table>
                    </div>
                    
                  </div>
  `;
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("league-content").innerHTML = LEAGUEhtml;
  });
}

