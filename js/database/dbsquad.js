function saveSQUAD(squad) {
    dbz.then(function (db) {
        var tx = db.transaction("squads", "readwrite");
        var store = tx.objectStore("squads");
        if (DataTeam == undefined){
            M.toast({
                html: `Player gagal disimpan, Silahkan direfresh halaman`
            })
        }else{
            store.put({
                DataTeam, id: squad
            });
            return tx.complete;
        }        
    }).then(function () {
        if (DataTeam == undefined){ 
            console.error("Player Gagal Disimpan ", err);
        }else{
                console.log("Player Berhasil Disimpan " + DataTeam );
            M.toast({
                html: `${DataTeam.name} berhasil disimpan!`
            })
        }       
    });
}

function getSQUADALL() {
    return new Promise(function (resolve, reject) {
        dbz.then(function (db) {
            var tx = db.transaction("squads", "readonly");
            var store = tx.objectStore("squads");
            return store.getAll();
        }).then(function (squads) {
            resolve(squads);
        });
    });
}

function getSQUADbyid(id) {
    return new Promise(function (resolve, reject) {
        dbz.then(function (db) {
            var tx = db.transaction("squads", "readonly");
            var store = tx.objectStore("squads");
            return store.getSQUADALL(id);
        }).then(function (squads) {
            resolve(squads);
        });
    });
}


//menghapus data
function getDeleteSQUAD(squad) {
    dbz.then(function (db) {
        var tx = db.transaction("squads", "readwrite");
        var store = tx.objectStore("squads");
        store.delete(squad);
        return tx.complete;
    }).then(function () {
        console.log('Player deleted');
        M.toast({
            html: 'Player Favorit berhasil dihapus'
        });
        getSavedSQUAD();
    }).catch(function () {
        M.toast({
            html: 'Oupss Ada yang keliru'
        });
    });
}