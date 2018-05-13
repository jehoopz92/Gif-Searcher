var submit = document.getElementById('formSubmit');

submit.addEventListener('submit', getGif);

function getGif(e) {
    var input = document.getElementById('searchText').value;

    axios.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=zlXUpQr2rseiTwzZn6h2EfER7jReX77I")

        .then((response) => {
            let output = '';
            //console.log(response);
            //console.log(response.data.data[0].images.original.url);

            var images = response.data.data;

            for (var i = 0; i < images.length; i++) {
                var gif = response.data.data[i].images.fixed_height.url;

                output += `
                    <div class="col s4 img"><img class="hoverable" src="${gif}"></div>
                `

                document.getElementById('output').innerHTML = output;

            }
        })
        .catch((err) => {
            console.log(err);
        })

    e.preventDefault();
}


//zlXUpQr2rseiTwzZn6h2EfER7jReX77I