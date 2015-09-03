
        var loadedTemplates = {};

        function get(templateName) {
            var promise = new Parse.Promise();
                if (loadedTemplates[templateName]) {
                    promise.resolve(loadedTemplates[templateName]);
                    return promise;
                }
                var url = 'view/' + templateName + '.handlebars';
                
                $.ajax({
                    url: url,
                    success: function(html) {
                        loadedTemplates[templateName] = html;
                        promise.resolve(html);
                    },
                    error: function(err) {

                        console.log(err.statusText);
                    }
                });


            return promise;
        }

export default {get}


