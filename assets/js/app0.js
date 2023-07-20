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

function updatePrivacyPolicy() {
        // Récupérer les valeurs sélectionnées par l'utilisateur
        var selectedApp = document.getElementById("select-app").value;
        var selectedLanguage = document.getElementById("select-language").value;

        // Charger le contenu de la politique de confidentialité en fonction des sélections de l'utilisateur
        var privacyPolicyUrl = "";

        if(search_params.has('app') || search_params.has('hl')) {

          var app = search_params.get('app');
          var hl = search_params.get('hl');
          console.log(app,hl,lang,defaultLang)
          if (app == 'bea' && hl == null) {
            hl = defaultLang
            app = "App2"
            selectedLanguage = defaultLang
            selectedApp = app
            if (selectedLanguage == 'fr') {
              titlePrivacy.textContent = 'Politique de confidentialité'
              privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
            }else{
              privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
            }
            defaultValue(app,selectedLanguage)
        // updatePrivacyPolicy();
          }else if (app == 'bea' && hl == 'fr') {
            hl = 'fr'
            app = "App2"
            selectedLanguage = 'fr'
            selectedApp = app
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
            defaultValue(app,selectedLanguage)
          }else if (app == 'bea' && hl == 'en') {
            hl = 'fr'
            app = "App2"
            selectedLanguage = 'en'
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
          }else if (app == null && hl == 'fr') {
            hl = 'fr'
            app = "App1"
            selectedLanguage = 'fr'
            selectedApp = app
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            defaultValue(app,selectedLanguage)
          }else if (app == null && hl == 'en') {
            hl = 'fr'
            app = "App1"
            selectedLanguage = 'en'
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            defaultValue(app,selectedLanguage)
          }else if (app == null && hl != null && !(hl == 'fr' || hl == 'en')) {
            hl = defaultLang
            app = "App1"
            selectedLanguage = 'en'
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // if (selectedLanguage == 'fr') {
            //   privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            // }else{
            //   privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // }
            defaultValue(app,selectedLanguage)
          }else if (app == "bea" && hl != null && !(hl == 'fr' || hl == 'en')) {
            hl = "en"
            app = "App2"
            selectedLanguage = hl
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
            // if (selectedLanguage == 'fr') {
            //   privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            // }else{
            //   privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // }
            defaultValue(app,selectedLanguage)
          }else if (app != "bea" && hl != null && !(hl == 'fr' || hl == 'en')) {
            hl = "en"
            app = "App1"
            selectedLanguage = hl
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // if (selectedLanguage == 'fr') {
            //   privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            // }else{
            //   privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // }
            defaultValue(app,selectedLanguage)
          }else if (app != "bea" && hl == 'en') {
            hl = "en"
            app = "App1"
            selectedLanguage = hl
            selectedApp = app
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // if (selectedLanguage == 'fr') {
            //   privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
            // }else{
            //   privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
            // }
            defaultValue(app,selectedLanguage)
          }


        }
          console.log(7777)
          // hl = defaultLang
          //   app = "App1"
          //   selectedLanguage = defaultLang
          //   selectedApp = app
          //   if (selectedLanguage == 'fr') {
          //     privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
          //   }else{
          //     privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
          //   }
          if (selectedApp === "App1") {
                if (selectedLanguage === "fr") {
                  titlePrivacy.textContent = 'Politique de confidentialité'
                  privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
                } else {
                  titlePrivacy.textContent = 'Privacy Policy'
                  privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
                }
          } else if (selectedApp === "App2") {
                if (selectedLanguage === "fr") {
                  titlePrivacy.textContent = 'Politique de confidentialité'
                  privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
                } else {
                  titlePrivacy.textContent = 'Privacy Policy'
                  privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
                }
          } else if (selectedApp === "App3") {
                if (selectedLanguage === "fr") {
                  titlePrivacy.textContent = 'Politique de confidentialité'
                  privacyPolicyUrl = "pages-policies/fr/app3-politique-confidentialite-fr.html";
                } else {
                  titlePrivacy.textContent = 'Privacy Policy'
                  privacyPolicyUrl = "pages-policies/en/app3-privacy-policy-en.html";
                }
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


      function choice() {
  if (selectedApp === "App1") {
        if (selectedLanguage === "fr") {
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app1-politique-confidentialite-fr.html";
        }else {
            titlePrivacy.textContent = 'Privacy Policy'
            privacyPolicyUrl = "pages-policies/en/app1-privacy-policy-en.html";
        }
    }else if (selectedApp === "App2") {
        if (selectedLanguage === "fr") {
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app2-politique-confidentialite-fr.html";
        }else {
            titlePrivacy.textContent = 'Privacy Policy'
            privacyPolicyUrl = "pages-policies/en/app2-privacy-policy-en.html";
        }
    }else if (selectedApp === "App3") {
        if (selectedLanguage === "fr") {
            titlePrivacy.textContent = 'Politique de confidentialité'
            privacyPolicyUrl = "pages-policies/fr/app3-politique-confidentialite-fr.html";
        } else {
            titlePrivacy.textContent = 'Privacy Policy'
            privacyPolicyUrl = "pages-policies/en/app3-privacy-policy-en.html";
        }    
    }
}