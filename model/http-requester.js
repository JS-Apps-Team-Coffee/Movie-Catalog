define(function() { 
    function getJSON(serviceUrl) {

        return $.ajax({
            url: serviceUrl
        });
    }

    return {
        getJSON: getJSON
    };
});
