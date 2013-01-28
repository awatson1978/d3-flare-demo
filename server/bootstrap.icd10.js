// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
//    if (Icd10.find().count() === 0) {
//        $.ajax({
//            type:   "get",
//            url:    '/datafile/ICD10_Disease_Sample.xml',
//            dataType: "xml",
//            complete: function(data){
//
//                //$('#xmlData').append("<b>icd10 codes</b><br>");
//
//                function findTerm(arg) {
//                    $(this).children('term').each(function () {
//                        var title = $(this).find('title').first().text();
//                        var code = $(this).find('code').first().text();
//                        //$('#xmlData').append(arg + " " + title + " " + code + "<br>");
//
//                        findTerm.call(this, arg + "-");
//                    });
//                }
//
//                $(data.responseXML).find('mainTerm').each(function(){
//                    Icd10.insert({
//                        title:   $(this).find('title').first().text(),
//                        code:  $(this).find('code').first().text(),
//                        seeAlso: $(this).find('seeAlso').first().text()
//                    });
//
//                    findTerm.call(this, "-");
//                });
//            }
//        });
//    }
});
