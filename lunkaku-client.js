function getNearbyLunchRemarks() {
    console.log("getting nearby restaurants")
    $.getJSON(
        "http://lunkaku.appspot.com/list",
        { lon: 11.1, lat : 12.3 },
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
            alert(joined);
            $('#result').html(joined)
            console.log("created list")
        }
    );
}
