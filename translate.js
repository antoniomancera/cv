function getLangResources(){
    
    // Define arrays how many language you want to translate
    var tr = new Array();
    var en = new Array();
    var fr=new Array();

    tr['hello_world'] = "Merhaba Dünya"; 
    en['hello_world'] = "Hello World";
    fr['hello_world']='bonjour';
    
    tr['h1'] = "Merhaba H1 tag"; 
    en['h1'] = "Hi H1 tag";

    tr['h2'] = "Merhaba H2 tag"; 
    en['h2'] = "Hi H2 tag";

    tr['h3'] = "Merhaba H3 tag"; 
    en['h3'] = "Hi H3 tag";

    tr['my_button'] = "Ara"; 
    en['my_button'] = "Search";


    tr['hello_world1'] = "Merhaba Dünyaasdasd"; 
    en['hello_world1'] = "Hello Worldasdasd";

    tr['prueba']="dfjasdfkljdfkldj";
    en['prueba']="237847234872894723894723897";

    
    // Added new array defined arrays.
    var resources = new Array();
    resources['tr'] = tr;
    resources['en'] = en;
    resources['fr']=fr;
    
    return resources;
}

function changeLanguage(lng){
var resources = getLangResources()[lng];

$("h1[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h2[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h3[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("span[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("p[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("button[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("div[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
}


$(function() { 
    // Default Language
    changeLanguage("en");
 
    $("#tr_button").click(function(){
        changeLanguage("tr");
    });

    $("#eng_button").click(function(){
        changeLanguage("en");
    });
    $("#fr_button").click(function(){
        changeLanguage("fr");
    });
});

