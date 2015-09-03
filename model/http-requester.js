
    function getJSON(serviceUrl) {

        return $.ajax({
            url: serviceUrl
        });
    }


export default{getJSON}