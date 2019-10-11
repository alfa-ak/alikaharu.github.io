var dbz = idb.open("alfa-football", 1, function(upgradeDb) {
    switch (upgradeDb.oldVersion) {
        case 0:
          upgradeDb.createObjectStore('teams', {
            'keyPath': 'id'
          })
          upgradeDb.createObjectStore('squads', {
              'keyPath': 'id'
            })
      }
  });

  // var dbz = idb.open("alfa-football", 1, function (upgradeDb) {
  //   var leagueSTORE = upgradeDb.createObjectStore("teams", {
  //     keyPath: "id"
  //   });
  
  //     leagueSTORE.createIndex("teams_name", "teams_name", {
  //     unique: false
  //   });
  
  //   var squadSTORE = upgradeDb.createObjectStore("squads", {
  //     keyPath: "id"
  //   });
  
  //   squadSTORE.createIndex("squads_name", "squads_name", {
  //     unique: false
  //   });
  // });