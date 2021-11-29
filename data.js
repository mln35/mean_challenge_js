compteVentes = {
    code: 701,
    libelle: "Ventes Marchandises"

}
compteClients = {
    code: 411,
    libelle: "Clients"

}
compteCaisse = {
    code: 571,
    libelle: "Caisse"

}

planComptable = [
    compteClients,
    compteCaisse,
    compteVentes
]

journal = {
    "folio_1" :{
        "l1":{
            compteADebiter:compteClients,
            compteAcredite:'',
            MontantADebiter:1000,
            MontantACrediter:0,
            designation:'Vente'
        },
        "l2":{
            compteADebiter:'',
            compteAcredite:compteVentes,
            MontantADebiter:0,
            MontantADebiter:1000,
            designation:'Vente'
        }
    },
    "folio_2" :{
        "l1":{
            compteADebiter:compteCaisse,
            compteAcredite:'',
            MontantADebiter:700,
            MontantACrediter:0,
            designation:'Reglement'
        },
        "l2":{
            compteADebiter:compteClients,
            compteAcredite:'',
            MontantADebiter:0,
            MontantADebiter:700,
            designation:'Reglement'
        }
    }
}

console.dir(journal);