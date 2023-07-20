var urlcourante = document.location.href; 
var lang=navigator.language.substr(0,2)
var defaultLang = ''

if (!(lang == 'fr' || lang == 'en')) {
  	defaultLang = 'en'
}else{
  	defaultLang = lang
}

var url = new URL(urlcourante);

var search_params = new URLSearchParams(url.search); 

function defaultValue(a,b) {
	document.getElementById("select-app").value = a;
	document.getElementById("select-language").value = b;
}

var titlePrivacy = document.getElementById('title-privacy')

function updatePrivacyPolicy(){
	// Récupérer les valeurs sélectionnées par l'utilisateur
    var selectedApp = document.getElementById("select-app").value;
    var selectedLanguage = document.getElementById("select-language").value;

    // Charger le contenu de la politique de confidentialité en fonction des sélections de l'utilisateur
    var privacyPolicyUrl = "";
    //Si les params ne sont pas null
    if(search_params.has('app') || search_params.has('hl')) {
          
        var app = search_params.get('app');
        var hl = search_params.get('hl');
        
        //Script pour le choix des langues dans le form select
        document.getElementById("select-language").addEventListener('input',() => {
            var SL = "";
            if (document.getElementById("select-app").value == 'App1') {
                SL = "SelysNFC"
            }else {
                SL = "bea"
            }
            console.log(document.getElementById("select-language").value)
            window.location.href = "http://localhost/policies.selys.app/?app="+SL+"&hl="+document.getElementById("select-language").value
        })

        //Script pour le choix des produits dans le form select
        document.getElementById("select-app").addEventListener('input',() => {
            var SL = "";
            if (document.getElementById("select-app").value == 'App1') {
                SL = "SelysNFC"
            }else {
                SL = "bea"
            }
            console.log(document.getElementById("select-language").value)
            window.location.href = "http://localhost/policies.selys.app/?app="+SL+"&hl="+document.getElementById("select-language").value
        })

        // https://policies.selys.app?app=bea [0]
        if (app == 'bea' && hl == null) {
            hl = defaultLang
            app = "App2"
            selectedApp = app
            selectedLanguage = defaultLang
            if (defaultLang == 'fr') {
                // console.log(selectedLanguage)
	            titlePrivacy.textContent = 'Politique de confidentialité'
	            privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
            }else{
              	privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
            }
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?app=bea [0] et hl = fr
        }else if (app == 'bea' && hl == 'fr') {
            hl = 'fr'
            app = "App2"
            selectedLanguage = 'fr'
            selectedApp = app
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?app=bea [0] et hl = en
        }else if (app == 'bea' && hl == 'en') {
            hl = 'fr'
            app = "App2"
            selectedLanguage = 'en'
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl=fr [2]
        }else if (app == null && hl == 'fr') {
            hl = 'fr'
            app = "App1"
            selectedLanguage = 'fr'
            selectedApp = app
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl=en [2]
        }else if (app == null && hl == 'en') {
            hl = 'fr'
            app = "App1"
            selectedLanguage = 'en'
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl!=en&hl!=fr (app = null)
        }else if (app == null && hl != null && !(hl == 'fr' || hl == 'en')) {
            hl = defaultLang
            app = "App1"
            selectedLanguage = 'en'
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl!=en&hl!=fr (app = bea)
        }else if (app == "bea" && hl != null && !(hl == 'fr' || hl == 'en')) {
            hl = "en"
            app = "App2"
            selectedLanguage = hl
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl!=en&hl!=fr (app != bea)
        }else if (app != "bea" && hl != null && !(hl == 'fr' || hl == 'en')) {
            hl = "en"
            app = "App1"
            selectedLanguage = hl
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl=en (app != bea)
        }else if (app != "bea" && hl == 'en') {
            hl = "en"
            app = "App1"
            selectedLanguage = hl
            selectedApp = app
            console.log(selectedApp)
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
        // https://policies.selys.app?hl=fr (app != bea)
        }else if (app != "bea"  && hl == 'fr') {
            hl = "fr"
            app = "App1"
            selectedLanguage = hl
            selectedApp = app
            
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            defaultValue(app,selectedLanguage)
            
        }
    // si les params sont null
	}else{
        if (defaultLang == 'fr') {
                // console.log(selectedLanguage)
	            titlePrivacy.textContent = 'Politique de confidentialité'
	            privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
        }else{
              	privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
        }
        defaultValue("App1",defaultLang)
        
        //Script pour le choix des langues dans le form select
        document.getElementById("select-language").addEventListener('input',() => {
            var SL = "";
            if (document.getElementById("select-app").value == 'App1') {
                SL = "SelysNFC"
            }else {
                SL = "bea"
            }
            console.log(document.getElementById("select-language").value)
            window.location.href = "http://localhost/policies.selys.app/?app="+SL+"&hl="+document.getElementById("select-language").value
        })

        //Script pour le choix des produits dans le form select
        document.getElementById("select-app").addEventListener('input',() => {
            var SL = "";
            if (document.getElementById("select-app").value == 'App1') {
                SL = "SelysNFC"
            }else {
                SL = "bea"
            }
            console.log(document.getElementById("select-language").value)
            window.location.href = "http://localhost/policies.selys.app/?app="+SL+"&hl="+document.getElementById("select-language").value
        })
    }


    

    // Charger le contenu de la politique de confidentialité dans la page
    var privacyPolicyFrame = document.getElementById("privacy-policy-frame");
    privacyPolicyFrame.src = privacyPolicyUrl;
}

// Définir les valeurs sélectionnées par défaut
window.onload = function() {
    defaultValue("App1",defaultLang)
    titlePrivacy.textContent = 'Privacy Policy'
    updatePrivacyPolicy();
};