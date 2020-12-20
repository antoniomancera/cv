function getLangResources(){
    
    // Define arrays how many language you want to translate
    var es = new Array();
    var en = new Array();
    var fr=new Array();

    es['yo']="SOBRE MÍ";
    en['yo']="ABOUT ME";
    fr['yo']="SUR MOI";

    es['exp']="EXPERIENCIA";
    en['exp']="sadfasd";
    fr['exp']="asdasasdfsdfsd";

    es['mat']="Matemático y programador";
    en['mat']="Mathematician and programmer";
    fr['mat']="Mathématicien et programmeur";

    es['perso']= "Soy una persona tranquila, pero de mente inquieta. Tengo auténtica pasión por aprender,soy autodidacta y un lector empedernido, nunca dejo de buscar nueva información para aumentar mis conocimientossobre todo tipo de temas. Algunos de mis temas favoritos son las matemáticas, la historia,  la ciencia ficción y la programación.";
    en['perso']="I am a calm person, but with a restless mind. I have a real passion for learning, I am self-taught and an inveterate reader, I never stop looking for new information to increase my knowledge on all kinds of topics. Some of my favorite subjects are math, history, science fiction, and programming.";
    fr['perso']="Je suis une personne calme, mais avec un esprit agité. J'ai une vraie passion pour l'apprentissage, je suis autodidacte et lecteur invétéré, je ne cesse de chercher de nouvelles informations pour approfondir mes connaissances sur toutes sortes de sujets. Certaines de mes matières préférées sont les mathématiques, l'histoire, la science-fiction et la programmation.    ";    
   

    /*
    es['']=
    en['']=
    fr['']=

    */

    /*tr['hello_world'] = "Merhaba Dünya"; 
    en['hello_world'] = "Hello World";
    
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
    en['prueba']="237847234872894723894723897";*/

    
    // Added new array defined arrays.
    var resources = new Array();
    resources['es'] = es;
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
$("ng-container[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$(".active[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("a[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
}

$(function() { 
    // Default Language
    changeLanguage("es");
 
    $("#fr_button").click(function(){
        changeLanguage("fr");
    });

    $("#eng_button").click(function(){
        changeLanguage("en");
    });
    $("#es_button").click(function(){
        changeLanguage("es");
    });
});
