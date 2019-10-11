const id_liga = 2002;
const base_url = "https://api.football-data.org/v2/";
const teams = `${base_url}competitions/${id_liga}/`
const player_url = `${base_url}players/`
const api_key = '01ded87c69f6403d8815918b63568991'

var fetchApiKey = url => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': api_key
    }
  });
}

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}