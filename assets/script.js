$(document).ready(function(){

    var API_key= "AIzaSyDWzCW85YAfq_1uvI8GAL-H33pqdshcytc" //API Youtube V3

    //Sub-routine program pencarian
    //Dengan parameter API, judul pencarian, dan maksimal video dikeluarkan
    function videoSearch(key,search,maxResults){
        //Fungsi get dari API youtube itu sendiri
        //refrensi link https://developers.google.com/youtube/v3/docs/search/list
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key 
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
        console.log(data)
        //Seluruh data yang sudah diprint melalui console, akan di tampilkan
        //Menggunakan tag iframe youtube

        //data.items ini adalah sebuah array json yang diambil melalui request get diatas
        //yang akan ditampilkan menggunakan forEach agar sesuai dengan maxResults yang diinginkan
        data.items.forEach(item => {
            video = `
            
            <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>

            `
            //Menggabungkan seluruh video lalu di 'refer' ke id videos
            $("#videos").append(video)
        });

        })
}

    $("#form").submit(function(event){
        event.preventDefault()
        alert("Melakukan pencarian!")
        var search = $("#search").val()

        videoSearch(API_key,search, 10)
    })

})