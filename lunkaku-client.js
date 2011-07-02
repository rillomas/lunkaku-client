function getNearbyLunchRemarks() {
    console.log("getting nearby restaurants")
    navigator.geolocation.getCurrentPosition(
        function(pos){
            $.getJSON(
                "http://lunkaku.appspot.com/list",
                { lon: pos.coords.longitude, lat : pos.coords.latitude },
                function(data, status){
                    var items = [];
                    $.each(data, function(key, val) {
                        items.push(
                            '<li>' +
                                '<a href="' + "url/comes/here" + '">' +
                                    '<img src="' + val.image + '" />' +
                                    '<p>' + val.content + '</p>' +
                                '</a>' +
                            '</li>'
                        );
                    });
                    var joined = items.join('');
                    $('#result').html(joined)
                    console.log("created list")
                });
        },
        function(error){
            alert("Your geolocation was not able to be retrieved!")
        },
        {enableHighAccuracy:true,timeout:1000,maximumAge:0}
    );
}
