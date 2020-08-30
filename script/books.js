'use strict';

// maak een constante die gedeeld wordt over alle functies
let htmlPlaceholderBooks;
let jsonGlobaleVariabele;

//2
const laadData = function() {
    fetch('https://freyadm2301.github.io/library/data/books.json')
        .then(function(response){
            //er is een response (goed of slecht)
            if(!response.ok){
                //antwoord van de server is geen 200 range
                throw Error(`fout van server ${response.status}`);
            }else{
                //antwoord van de server is wel 200 range
                return response.json();
            }
        })
        .then(function(jsonObject){
            //hier is alles omgezet naar een JSONobject en kan ik alles tonen op het scherm
            console.log("Omzetten naar json is gelukt");
            verwerkData(jsonObject);
        })
        /*.catch(function(error){
            console.error(`eigen fout: ${error}`)
            
        })*/;
};


//3
const verwerkData = function(jsonObject){
    console.log(jsonObject);
    //bewaar de binnenkomende jsondata in een globale variabele
    jsonGlobaleVariabele = jsonObject;

    //overloop de json en vul de innerhtml op met een <option> tag
    htmlPlaceholderBooks.innerHTML = '';
    for (let book of jsonObject){
        let tempTitle = book.title;
        let tempId = book.idbook;
        let tempHTML = `<option value="${tempId}"> ${tempTitle} </option>`;
        htmlPlaceholderBooks.innerHTML += tempHTML;
    };
};


//1
document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM Loaded");
    //voordat ik verder ga, vul de html constantes op
    htmlPlaceholderBooks = document.querySelector('.js-book-placeholder');
    laadData();
});