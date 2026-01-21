# Guides Tarifaires Bancaires - Statut des Sources

> Derniere mise a jour : Janvier 2026

Ce fichier indique si les informations tarifaires d'une banque sont disponibles localement (PDF telecharge) ou s'il faut consulter la page web.

## Tableau de Reference

| Banque | Type | Guide Local | URL Source | Notes |
|--------|------|-------------|------------|-------|
| BoursoBank | En ligne | Non | https://www.boursobank.com/aide-en-ligne/mes-services/conditions-generales-et-tarifaires | Protection anti-bot |
| Fortuneo | En ligne | Non | https://www.fortuneo.fr/tarifs | Protection anti-bot |
| N26 | Neo | Non | https://n26.com/fr-fr/tarifs-var37 | Protection anti-bot |
| Revolut | Neo | Non | https://www.revolut.com/fr-FR/legal/fees/ | Protection anti-bot |
| Trade Republic | Neo | Non | https://traderepublic.com/fr-fr?openModal=pricing-scheme | Page dynamique |
| Hello bank! | En ligne | Non | https://www.hellobank.fr/fr/tarifs/ | Protection anti-bot |
| Monabanq | En ligne | Non | https://www.monabanq.com/tarifs | Protection anti-bot |
| Nickel | Neo | Non | https://nickel.eu/fr/tarifs | Protection anti-bot |
| Wise | Neo | Non | https://wise.com/fr/pricing | Protection anti-bot |
| Sumeria (ex-Lydia) | Neo | Non | https://sumeria.eu/fondamentaux/tarifs-limites/ | Protection anti-bot |
| BforBank | En ligne | Non | https://www.bforbank.com/tarifs | Protection anti-bot |
| BNP Paribas | Traditionnelle | Non | https://mabanque.bnpparibas/fr/notre-offre/tarifs-et-conditions-bnp-paribas/conditions-tarifaires | Protection anti-bot |
| Societe Generale | Traditionnelle | Non | https://particuliers.sg.fr/documentation-tarifs | Protection anti-bot |
| Credit Agricole | Traditionnelle | Non | https://www.credit-agricole.fr/particulier/informations/tarifs.html | Tarifs variables par caisse |
| La Banque Postale | Traditionnelle | Non | https://www.labanquepostale.fr/particulier/footer/tarifs.html | Protection anti-bot |
| Credit Mutuel | Traditionnelle | Non | https://www.creditmutuel.fr/fr/tarifs.html | Tarifs variables par federation |
| Credit Mutuel Arkea | Traditionnelle | Non | https://www.cmb.fr/reseau-bancaire-cooperatif/web/reglementaire/tarification-des-services | Regional (Bretagne/Sud-Ouest) |
| Caisse d'Epargne | Traditionnelle | Non | https://www.caisse-epargne.fr/votre-banque/reglementation/tarifs/ | Tarifs variables par caisse |
| CIC | Traditionnelle | Non | https://www.cic.fr/fr/particuliers/informations-legales/tarifs.html | Protection anti-bot |
| LCL | Traditionnelle | Non | https://www.lcl.fr/tarifs | Protection anti-bot |
| CCF (HSBC France) | Traditionnelle | Non | https://www.hsbc.fr/particuliers/tarifs/ | Protection anti-bot |
| Crypto.com | Crypto | Non | https://crypto.com/cards | Tarifs dynamiques |
| Binance | Crypto | Non | https://www.binance.com/fr/support/faq/binance-card | Tarifs dynamiques selon BNB |
| Nexo | Crypto | Non | https://nexo.io/nexo-card | Tarifs selon fidelite |

## Resume

- **Total banques** : 24
- **Guides locaux disponibles** : 0
- **Consultation web requise** : 24

## Notes d'utilisation

### Pour les futurs prompts

Avant de faire un appel web pour recuperer des informations tarifaires :

1. Verifier si la banque a un guide local disponible (colonne "Guide Local" = Oui)
2. Si oui, lire le fichier PDF correspondant dans ce dossier
3. Si non, utiliser l'URL source pour obtenir les informations a jour

### Ajout de guides locaux

Pour ajouter un guide local :

1. Telecharger manuellement le PDF depuis le site de la banque
2. Le nommer selon le format : `{banque_slug}_tarifs.pdf` (ex: `boursobank_tarifs.pdf`)
3. Mettre a jour ce fichier en changeant "Non" en "Oui" dans la colonne "Guide Local"
4. Ajouter la date de telechargement dans les Notes

### Limitations actuelles

Les sites bancaires francais utilisent des protections anti-bot (Cloudflare, Akamai, etc.) qui empechent le telechargement automatise des documents PDF. Les guides doivent etre telecharges manuellement ou via un navigateur avec session authentifiee.

## Source de donnees alternative

Le site gouvernemental **tarifs-bancaires.gouv.fr** centralise les donnees tarifaires reglementaires mais ne fournit pas les guides complets.

Les donnees du fichier `bank_offers.html` proviennent de :
- Sites officiels des banques
- tarifs-bancaires.gouv.fr
- Rapport OTB Banque de France 2025
