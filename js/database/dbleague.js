function saveLEAGUE(league) {
    dbz.then(function (db) {
        var tx = db.transaction("teams", "readwrite");
        var store = tx.objectStore("teams");
        store.put({
            DataTeam,
            id: league
        });
        return tx.complete;
    }).then(function () {
        console.log("Team Berhasil Disimpan");
        M.toast({
            html: `${DataTeam.name} Detail Team berhasil disimpan!`
        })
    }).catch(err => {
        console.error('Detail Team gagal disimpan', err);
    });
}

function getLEAGUEALL() {
    return new Promise(function (resolve, reject) {
        dbz.then(function (db) {
            var tx = db.transaction("teams", "readonly");
            var store = tx.objectStore("teams");
            return store.getAll();
        }).then(function (leagues) {
            resolve(leagues);
        });
    });
}

function getLEAGUEbyid(id) {
    return new Promise(function (resolve, reject) {
        dbz.then(function (db) {
            var tx = db.transaction("teams", "readonly");
            var store = tx.objectStore("teams");
            return store.getLEAGUEALL(id);
        }).then(function (leagues) {
            resolve(leagues);
        });
    });
}


//menghapus data
function getDeleteLEAGUE(league) {
    dbz.then(function (db) {
        var tx = db.transaction("teams", "readwrite");
        var store = tx.objectStore("teams");
        store.delete(league);
        return tx.complete;
    }).then(function () {
        console.log('Team deleted');
        M.toast({
            html: 'Team Favorit berhasil dihapus'
        });
        getSavedLEAGUE();
    }).catch(function () {
        M.toast({
            html: 'Oupss Ada yang keliru'
        });
    });
}