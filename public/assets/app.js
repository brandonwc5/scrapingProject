function displayLinks(links){
    $(tablebody).empty();
    links.foreach(function(link){
        $(tablebody)append("<tr><td>" + link.url + "</td>" +
        "<td>" + link.whatIWouldReallyCallIt + "</td></tr>");
    });
}