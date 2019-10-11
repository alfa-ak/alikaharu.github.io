var DataTeam;

//membaca data dari ID
function ambilSquadId() {
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
              var SQUADhtml="";           
            teams.squad.forEach(function (squad) { 
                console.log(teams);            
            SQUADhtml += `
            <div class="card">
              <div class="center-align">
                <span class="card-title"><b>${teams.name}</b></span>
              </div>
                <table class="responsive-table striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country Of Birth</th>
              <th>Nationality</th>
              <th>Position</th>
              <th>Shirt Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>${(squad.name)}</td>
              <td>${(squad.countryOfBirth)}</td>
              <td>${(squad.nationality)}</td>
              <td>${(squad.position)}</td>
              <td>${(squad.shirtNumber)}</td>
            </tr>
            </tbody>
          </table>              
              <div class="card-action right-align">
                    <a class="waves-effect waves-light btn-small" href="./savedplayer.html?id=${squad.id}">Detail Player</a>
                </div>
            </div>
            </div>
            `;
        });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("squad-content").innerHTML = SQUADhtml;

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
        // Objek JavaScript dari response.json() masuk lewat variabel data.

        // Menyusun komponen card artikel secara dinamis
        var SQUADhtml="";           
            teams.squad.forEach(function (squad) { 
              DataTeam = teams;
                console.log(teams);            
            SQUADhtml += `
            <div class="card">
              <div class="center-align">
                <span class="card-title"><b>${teams.name}</b></span>
              </div>
                <table class="responsive-table striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country Of Birth</th>
              <th>Nationality</th>
              <th>Position</th>
              <th>Shirt Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>${(squad.name)}</td>
              <td>${(squad.countryOfBirth)}</td>
              <td>${(squad.nationality)}</td>
              <td>${(squad.position)}</td>
              <td>${(squad.shirtNumber)}</td>
            </tr>
            </tbody>
          </table>              
              <div class="card-action right-align">
                    <a class="waves-effect waves-light btn-small" href="./savedplayer.html?id=${squad.id}">Detail Player</a>
                </div>
            </div>
            </div>
            `;
        });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("squad-content").innerHTML = SQUADhtml;

            // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
            resolve(teams);
          });
        });
  }


  function ambilPlayerId() {
    return new Promise(function(resolve, reject) {
      // Ambil nilai query parameter (?id=)
      var urlParams = new URLSearchParams(window.location.search);
      var idParam = urlParams.get("id");
      let intId = parseInt(idParam);
    
      if ("caches" in window) {
        caches.match(player_url + intId).then(function (response) {
          if (response) {
            response.json().then(function (teams) {
              DataTeam = teams;
              console.log(teams);      
              var SQUADhtml = `
              <div class="card">
                <div class="center-align">
                  <span class="card-title"><b>Player Data</b></span>
                </div>
                  <table class="responsive-table striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Country Of Birth</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Shirt Number</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>${(teams.name)}</td>
                <td>${(teams.countryOfBirth)}</td>
                <td>${(teams.nationality)}</td>
                <td>${(teams.position)}</td>
                <td>${(teams.shirtNumber)}</td>
              </tr>
              </tbody>
            </table>              
                <div class="card-action right-align">
                      <a class="waves-effect waves-light btn-small" onclick="saveSQUAD(${(teams.id)})">Save to Data Player</a>
                  </div>
              </div>
              </div>
              `;
              // Sisipkan komponen card ke dalam elemen dengan id #content
              document.getElementById("player-content").innerHTML = SQUADhtml;
  
               // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
               resolve(teams);
            });
          }
        });
      }
    
      fetchApiKey(player_url + intId)
        .then(status)
        .then(json)
        .then(function (teams) {
          // Objek JavaScript dari response.json() masuk lewat variabel data.
  
          // Menyusun komponen card artikel secara dinamis            
              var SQUADhtml = `
              <div class="card">
                <div class="center-align">
                  <span class="card-title"><b>Player Data</b></span>
                </div>
                  <table class="responsive-table striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Country Of Birth</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Shirt Number</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>${(teams.name)}</td>
                <td>${(teams.countryOfBirth)}</td>
                <td>${(teams.nationality)}</td>
                <td>${(teams.position)}</td>
                <td>${(teams.shirtNumber)}</td>
              </tr>
              </tbody>
            </table>              
                <div class="card-action right-align">
                      <a class="waves-effect waves-light btn-small" onclick="saveSQUAD(${(teams.id)})">Save to Data Player</a>
                  </div>
              </div>
              </div>
              `;
              // Sisipkan komponen card ke dalam elemen dengan id #content
              document.getElementById("player-content").innerHTML = SQUADhtml;
  
              // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
              resolve(teams);
            });
          });
    }


  //simpan data
function getSavedSQUAD() {  
  getSQUADALL().then(function (squads) {
      // Menyusun komponen card
    var SQUADhtml = "";
    squads.forEach(function (squad) {
      console.log(squad);      
      SQUADhtml += `
            <div class="card">
              <div class="center-align">
                <span class="card-title"><b>Player Data</b></span>
              </div>
                <table class="responsive-table striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country Of Birth</th>
              <th>Nationality</th>
              <th>Position</th>
              <th>Shirt Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>${(squad.DataTeam.name)}</td>
              <td>${(squad.DataTeam.countryOfBirth)}</td>
              <td>${(squad.DataTeam.nationality)}</td>
              <td>${(squad.DataTeam.position)}</td>
              <td>${(squad.DataTeam.shirtNumber)}</td>
            </tr>
            </tbody>
          </table>              
              <div class="card-action right-align">
                    <a class="waves-effect waves-light btn-small red" onclick="getDeleteSQUAD(${(squad.id)})">Delete Data Player</a>
                </div>
            </div>
            </div>
            `;
        });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("squad-content").innerHTML = SQUADhtml;
  });
}

function getSavedSQUADById() {
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");

  getSQUADbyid(idParam).then(function (teams) {
    SQUADhtml = '';
    var SQUADhtml = `
          <div class="card">
          <div class="center-align">
            <span class="card-title"><b>${teams.name}</b></span>
          </div>
            <table class="responsive-table striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country Of Birth</th>
          <th>Nationality</th>
          <th>Position</th>
          <th>Shirt Number</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>${(squad.name)}</td>
          <td>${(squad.countryOfBirth)}</td>
          <td>${(squad.nationality)}</td>
          <td>${(squad.position)}</td>
          <td>${(squad.shirtNumber)}</td>
        </tr>
        </tbody>
      </table>              
        
        </div>
        </div>
  `;
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("squad-content").innerHTML = SQUADhtml;
  });
}