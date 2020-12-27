function getLangResources(){
    
    // Define arrays how many language you want to translate
    var es = new Array();
    var en = new Array();
    var fr=new Array();

    es['yo']="SOBRE MÍ";
    en['yo']="ABOUT ME";
    fr['yo']="SUR MOI";

    es['exp']="EXPERIENCIA";
    en['exp']="EXPERIENCE";
    fr['exp']="EXPÉRIENCE";


    es['formacion']="FORMACIÓN";
    en['formacion']="FORMACIÓN";
    fr['formacion']="EXPÉRIENCE";

    es['habil']="HABILIDADES";
    en['habil']="SKILLS";
    fr['habil']="COMPÉTENCES"

    es['mat']="Matemático y programador";
    en['mat']="Mathematician and programmer";
    fr['mat']="Mathématicien et programmeur";

    es['perso']= "Soy una persona tranquila, pero de mente inquieta. Tengo auténtica pasión por aprender,soy autodidacta y un lector empedernido, nunca dejo de buscar nueva información para aumentar mis conocimientossobre todo tipo de temas. Algunos de mis temas favoritos son las matemáticas, la historia,  la ciencia ficción y la programación.";
    en['perso']="I am a calm person, but with a restless mind. I have a real passion for learning, I am self-taught and an inveterate reader, I never stop looking for new information to increase my knowledge on all kinds of topics. Some of my favorite subjects are math, history, science fiction, and programming.";
    fr['perso']="Je suis une personne calme, mais avec un esprit agité. J'ai une vraie passion pour l'apprentissage, je suis autodidacte et lecteur invétéré, je ne cesse de chercher de nouvelles informations pour approfondir mes connaissances sur toutes sortes de sujets. Certaines de mes matières préférées sont les mathématiques, l'histoire, la science-fiction et la programmation.    ";    
   

    es['perfil']=" Gracias a mi Grado en Matemáticas y mi Máster en Big Data y Business Intelligence, estoy orientando mi perfil profesional al área de la programación y las matemáticas. Si bien poseo poca experiencia profesional, lo estoy tratando de compensar aquiriendo conocimientos mediante cursos en diversas áreas. ";
    en['perfil']="Thanks to my Degree in Mathematics and my Master's Degree in Big Data and Business Intelligence, I am directing my professional profile to the area of programming and mathematics. Although I have little professional experience, I am trying to compensate with knowledge in various areas thanks to different courses.";
    fr['perfil']="Grâce à mon diplôme en mathématiques et mon Master en Big Data et Business Intelligence, je guide mon profil professionnel dans le domaine de la programmation et des mathématiques. Bien que j'aie peu d'expérience professionnelle, J'essaie de compenser par des connaissances dans divers domaines grâce à différents cours.";

    es['expe']="EXPERIENCIA LABORAL"
    en['expe']="WORK EXPERIENCE";
    fr['expe']="EXPERIÉNCE PROFESSIONNELLE";


    es['avanombre']="3/19-09/19 Prácticas con tecnologías Microsoft en Avanade";
    en['avanombre']="3/19-09/19 Internship using Microsoft technologies at Avanade";
    fr['avanombre']="3/19-09/19 Pratiques avec les technologies Microsoft chez Avanade";

    es['avaexpl']="Programación bajo tecnología Microsoft en entornos .Net, C#, SQL, bajo metodologías Agile. La primera parte estuvo principalmente orientada al aprendizaje de C#, y SQL,para usar los conocimientos aprendidos con Microsoft Azure.";
    en['avaexpl']="Programmation sous technologie Microsoft dans des environnements .Net, C #, SQL, sous methods Agile. The premiere part is mainly oriented towards the application of C #, and SQL, to use the knowledge acquired with Microsoft Azure.";
    fr['avaexpl']="Programmation sous technologie Microsoft dans des environnements .Net, C #, SQL, sous méthodologies Agile. La première partie était principalement orientée vers l'apprentissage de C #, et SQL, pour utiliser les connaissances acquises avec Microsoft Azure.";

   
    es['formacade']="FORMACIÓN UNIVERSITARIA";
    en['formacade']="EDUCATION";
    fr['formacade']="FORMATION UNIVERSITAIRE";
    
    es['mastertitulo']="2020 Máster en Big Data y Business Intelligence";
    en['mastertitulo']="2020 Masters degree in Big Data and Business Intelligence"
    fr['mastertitulo']="2020 Master dans Big Data et Business Intelligence";

    es['masteriseb']="Universidad Isabel I y ISEB, España";
    en['masteriseb']="Isabel I University and ISEB, Spain";
    fr['masteriseb']="Université Isabel I et ISEB, Espagne";
    
    es['masterexpl']="Me permitió obtener conocimientos exhaustivos sobre las tecnologías Big Data y su aplicación en el mundo empresarial, abordando con especial énfasis las herramientas analíticas del campo del Business Analytics.";
    en['masterexpl']="It allowed me to obtain exhaustive knowledge about Big Data technologies and their application in the business world, addressing with special emphasis the analytical tools of the field of Business Analytics.";
    fr['masterexpl']="Cela m'a permis d'acquérir des connaissances exhaustives sur les technologies Big Data et leur application dans le monde des affaires, en abordant avec un accent particulier les outils analytiques du domaine du Business Analytics.";
    
      
       
    es['matesgrado']="2018  Grado en Matemáticas";
    en['matesgrado']="2018       Degree in Mathematics";
    fr['matesgrado']="2018 Diplôme en Mathématique";

    es['matesuma']="Universidad de Malaga, España";
    en['matesuma']="University of Málaga, Spain";
    fr['matesuma']="Université de Malaga, Espagne"

    es['matesdenjoy']="Mi trabajo consistió en estudiar el comportamiento de las iteradas de funciones holomorfas. Llegando a probar el conocido como Teorema de Denjoy-Wolff.";
    en['matesdenjoy']="My work consisted of studying the behavior of the iterates of holomorphic functions. Getting to prove the known as Denjoy-Wolff theorem.";
    fr['matesdenjoy']="Mon travail a consisté à étudier le comportement des itérations de fonctions holomorphes. Apprendre à prouver le théorème de Denjoy-Wolff.";

    es['matesjulia']="También consideré las iteradas de funciones polinómicas (de la esfera de Riemann en sı́ misma), e introduje los conceptos básicos asociados con esta teorı́a, como son conjuntos de Julia y de Fatou.";
    en['matesjulia']="I also considered iterated polynomial functions (of the Riemann sphere itself), and introduced the basic concepts associated with this theory, such as Julia and Fatou sets. ";
    fr['matesjulia']="J'ai également considéré les fonctions polynomiales itérées (de la sphère de Riemann elle-même) et j'ai introduit les concepts de base associés à cette théorie, comme les ensembles de Julia et Fatou. ";

    es['bachillertitulo']="2009 Título de Bachillerato";
    en['bachillertitulo']="2009 High school degree";
    fr['bachillertitulo']="2009 Diplôme d'études secondaires";

    es['bachillercampa']="I.E.S. Campanillas, España";
    en['bachillercampa']="I.E.S. Campanillas, Spain";
    fr['bachillercampa']="I.E.S. Campanillas, Espagne";

    es['bachillermodalidad']="Modalidad en Ciencias de la Naturaleza y la Salud";
    en['bachillermodalidad']="Modality in Natural Sciences and Health";
    fr['bachillermodalidad']="Modalité dans sciences de la nature";
    
    

    es['formacompl']="FORMACIÓN COMPLEMENTARIA";
    en['formacompl']="SUPPLEMENTARY TRAINING";
    fr['formacompl']="FORMATION COMPLÉMENTAIRE";
    

    es['eoititulo']="Técnico en desarrollo de Aplicaciones Web con Angular (350h)";
    en['eoititulo']="Technician in development of Web Applications with Angular (350h)";
    fr['eoititulo']="Technicien en développement d'applications Web avec Angular (350h)";

    es['movtitulo']="Desarrollo de Aplicaciones Móviles (150h)";
    en['movtitulo']="Mobile Application Development (150h)";
    fr['movtitulo']="Développement d'applications mobiles (150h)";

    es['videtitulo']="Programa de Videojuegos y Emprendimiento (50h)";
    en['videtitulo']="Video Games and Entrepreneurship Program (50h)";
    fr['videtitulo']="Programme jeux vidéo et entrepreneuriat (50h)";

    es['busitulo']="Introducción a Business Intelligence (30h)";
    en['busitulo']="Business Intelligence introduction (30h)";
    fr['busitulo']="Initiation à Business Intelligence (30h)";

    es['rtitulo']="R para Ciencia de Datos (25h)";
    en['rtitulo']="Data Science with R";
    fr['rtitulo']="Science des Données avec R";


    es['juvtitulo']="Inglés nivel B1-2 (68h)";
    en['juvtitulo']="English level B1-2 (68h)";
    fr['juvtitulo']="Anglaise à niveau B1-2 (68h)";

    
    
     /*
    es['']=
    en['']=
    fr['']=

    */


    
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
$("li[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("h4[name='translate']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
$("active[name='translate']").each(function(i, elt){
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
