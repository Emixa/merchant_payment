import { useState, useMemo } from 'react';

// URLs des logos des banques (favicons haute résolution ou logos officiels)
const bankLogos = {
  'BoursoBank': 'https://www.boursobank.com/favicon-192x192.png',
  'Fortuneo': 'https://www.fortuneo.fr/favicon-192x192.png',
  'N26': 'https://n26.com/favicon-192x192.png',
  'Revolut': 'https://www.revolut.com/favicon-192x192.png',
  'Hello bank!': 'https://www.hellobank.fr/content/dam/bnpparibas/hellobank/favicon/apple-touch-icon.png',
  'Monabanq': 'https://www.monabanq.com/favicon-192x192.png',
  'Nickel': 'https://www.nickel.eu/favicon-192x192.png',
  'Wise': 'https://wise.com/public-resources/assets/favicons/favicon-192x192.png',
  'Sumeria (ex-Lydia)': 'https://sumeria.eu/favicon-192x192.png',
  'Orange Bank': 'https://www.orangebank.fr/favicon-192x192.png',
  'Ma French Bank': 'https://www.mafrenchbank.fr/favicon-192x192.png',
  'Société Générale': 'https://particuliers.sg.fr/favicon-192x192.png',
  'BNP Paribas': 'https://mabanque.bnpparibas/favicon-192x192.png',
  'Crédit Agricole': 'https://www.credit-agricole.fr/favicon-192x192.png',
  'Crédit Mutuel': 'https://www.creditmutuel.fr/favicon-192x192.png',
  'LCL': 'https://www.lcl.fr/favicon-192x192.png',
  'La Banque Postale': 'https://www.labanquepostale.fr/favicon-192x192.png'
};

// Données des offres bancaires françaises - chaque offre est une entrée distincte
const bankOffers = [
  // ==================== BOURSOBANK ====================
  {
    id: 'bourso-welcome',
    bank: 'BoursoBank',
    bankType: 'online',
    bankColor: '#00a9ce',
    bankLogo: 'BB',
    offerName: 'Welcome',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: '5€/mois si aucun paiement',
    inactivityFee: 5,
    inactivityFeeCondition: 'Si aucun paiement dans le mois',
    cardType: 'Visa Classic',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 1,
    withdrawalsFreeAbroadUnit: '/mois',
    withdrawalsExtraFee: '1,69%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: false,
    insuranceTravelDetails: null,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    cashbackRate: null,
    maxPaymentMonth: 5000,
    maxWithdrawalWeek: 500,
    overdraftAvailable: false,
    overdraftMax: null,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Gratuite sans condition de revenus', 'Paiements à l\'étranger gratuits'],
    targetProfile: 'Débutants, étudiants',
    url: 'https://www.boursobank.com'
  },
  {
    id: 'bourso-ultim',
    bank: 'BoursoBank',
    bankType: 'online',
    bankColor: '#00a9ce',
    bankLogo: 'BB',
    offerName: 'Ultim',
    offerType: 'premium',
    monthlyFee: 0,
    monthlyFeeCondition: '9€/mois si aucun paiement',
    inactivityFee: 9,
    inactivityFeeCondition: 'Si aucun paiement dans le mois',
    cardType: 'Visa Premier',
    cardDebit: 'immediate',
    cardDebitDiffere: true,
    cardDebitDiffereCondition: '2 400€ revenus nets',
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 3,
    withdrawalsFreeAbroadUnit: '/mois',
    withdrawalsExtraFee: '1,69%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Visa Premier : frais médicaux, rapatriement, bagages',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    cashbackRate: null,
    maxPaymentMonth: 20000,
    maxWithdrawalWeek: 2000,
    overdraftAvailable: true,
    overdraftMax: 2500,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Carte gratuite équivalent Visa Premier', 'Assurances voyage incluses', 'Sans frais à l\'étranger'],
    targetProfile: 'Voyageurs occasionnels, actifs',
    url: 'https://www.boursobank.com'
  },
  {
    id: 'bourso-metal',
    bank: 'BoursoBank',
    bankType: 'online',
    bankColor: '#00a9ce',
    bankLogo: 'BB',
    offerName: 'Metal',
    offerType: 'black',
    monthlyFee: 9.90,
    monthlyFeeCondition: '5,90€/mois version dématérialisée',
    cardType: 'Visa Ultim Metal',
    cardDebit: 'immediate',
    cardDebitDiffere: true,
    cardDebitDiffereCondition: '6 250€ revenus nets',
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Couverture jusqu\'à 5M€, annulation voyage 10K€',
    insuranceMeansPayment: true,
    loungeAccess: true,
    loungeAccessDetails: 'Smart Delay en cas de retard',
    cashback: true,
    cashbackRate: '0,2% EUR / 2% devises',
    maxPaymentMonth: 50000,
    maxWithdrawalWeek: 3000,
    overdraftAvailable: true,
    overdraftMax: 10000,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Retraits illimités dans le monde', 'Cashback sur achats', 'Conciergerie et salons'],
    targetProfile: 'Grands voyageurs, clients premium',
    url: 'https://www.boursobank.com'
  },
  {
    id: 'bourso-freedom',
    bank: 'BoursoBank',
    bankType: 'online',
    bankColor: '#00a9ce',
    bankLogo: 'BB',
    offerName: 'Freedom',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: 'Gratuit',
    cardType: 'Visa (ados 12-17 ans)',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 1,
    withdrawalsFreeAbroadUnit: '/mois',
    withdrawalsExtraFee: '1,69%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 1500,
    maxWithdrawalWeek: 300,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Compte ado gratuit', 'Contrôle parental', 'App dédiée'],
    targetProfile: 'Adolescents 12-17 ans',
    url: 'https://www.boursobank.com'
  },

  // ==================== FORTUNEO ====================
  {
    id: 'fortuneo-fosfo',
    bank: 'Fortuneo',
    bankType: 'online',
    bankColor: '#d6007d',
    bankLogo: 'FO',
    offerName: 'Fosfo',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: '3€/mois si aucun paiement',
    inactivityFee: 3,
    inactivityFeeCondition: 'Si aucun paiement dans le mois',
    cardType: 'Mastercard Standard',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assistance médicale et rapatriement basique',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 8000,
    maxWithdrawalWeek: 500,
    overdraftAvailable: true,
    overdraftMax: 200,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Retraits gratuits partout dans le monde', 'Sans condition de revenus', 'La plus généreuse à l\'étranger'],
    targetProfile: 'Voyageurs, tous profils',
    url: 'https://www.fortuneo.fr'
  },
  {
    id: 'fortuneo-gold',
    bank: 'Fortuneo',
    bankType: 'online',
    bankColor: '#d6007d',
    bankLogo: 'FO',
    offerName: 'Gold CB Mastercard',
    offerType: 'premium',
    monthlyFee: 0,
    monthlyFeeCondition: '9€/mois si aucun paiement',
    inactivityFee: 9,
    inactivityFeeCondition: 'Si aucun paiement dans le mois',
    cardType: 'Gold Mastercard',
    cardDebit: 'both',
    cardDebitDiffere: true,
    cardDebitDiffereCondition: '1 800€ revenus nets',
    incomeRequired: 1800,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Annulation voyage, frais médicaux, bagages, location voiture',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 8000,
    maxWithdrawalWeek: 1000,
    overdraftAvailable: true,
    overdraftMax: 200,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Seule Gold gratuite du marché', 'Débit différé disponible', 'Retraits illimités monde entier'],
    targetProfile: 'Voyageurs réguliers, revenus 1800€+',
    url: 'https://www.fortuneo.fr'
  },
  {
    id: 'fortuneo-world-elite',
    bank: 'Fortuneo',
    bankType: 'online',
    bankColor: '#d6007d',
    bankLogo: 'FO',
    offerName: 'World Elite',
    offerType: 'black',
    monthlyFee: 0,
    monthlyFeeCondition: '50€/trim. si versement < 4000€/mois',
    inactivityFee: '50€/trim.',
    inactivityFeeCondition: 'Si versements < 4000€/mois',
    cardType: 'World Elite Mastercard',
    cardDebit: 'both',
    cardDebitDiffere: true,
    cardDebitDiffereCondition: '4 000€ revenus nets',
    incomeRequired: 4000,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'RC 5M€, frais médicaux 155K€, annulation 10K€',
    insuranceMeansPayment: true,
    loungeAccess: true,
    loungeAccessDetails: 'Accès salons Mastercard + conciergerie 24/7',
    cashback: false,
    maxPaymentMonth: 12000,
    maxWithdrawalWeek: 1600,
    overdraftAvailable: true,
    overdraftMax: 200,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Seule World Elite gratuite du marché', 'Conciergerie 24/7', 'Assurances ultra-complètes'],
    targetProfile: 'Cadres supérieurs, grands voyageurs',
    url: 'https://www.fortuneo.fr'
  },

  // ==================== N26 ====================
  {
    id: 'n26-standard',
    bank: 'N26',
    bankType: 'neo',
    bankColor: '#36a18b',
    bankLogo: 'N26',
    offerName: 'Standard',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: 'Carte physique 10€',
    cardType: 'Mastercard (virtuelle)',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1,7%',
    freeWithdrawalsEuro: '3/mois',
    freeWithdrawalsEuroExtra: '2€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 80000,
    maxWithdrawalWeek: 1050,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['100% gratuit', 'Paiements gratuits partout', 'Gestion budgétaire avancée'],
    targetProfile: 'Petits budgets, complémentaire',
    url: 'https://n26.com/fr-fr'
  },
  {
    id: 'n26-smart',
    bank: 'N26',
    bankType: 'neo',
    bankColor: '#36a18b',
    bankLogo: 'N26',
    offerName: 'Smart',
    offerType: 'basic',
    monthlyFee: 4.90,
    monthlyFeeCondition: null,
    cardType: 'Mastercard',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1,7%',
    freeWithdrawalsEuro: '5/mois',
    freeWithdrawalsEuroExtra: '2€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 80000,
    maxWithdrawalWeek: 1050,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Sous-comptes pour budgétiser', 'Carte physique incluse', 'Support téléphone'],
    targetProfile: 'Utilisateurs quotidiens',
    url: 'https://n26.com/fr-fr'
  },
  {
    id: 'n26-go',
    bank: 'N26',
    bankType: 'neo',
    bankColor: '#36a18b',
    bankLogo: 'N26',
    offerName: 'Go',
    offerType: 'premium',
    monthlyFee: 9.90,
    monthlyFeeCondition: null,
    cardType: 'Mastercard',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: '5/mois',
    freeWithdrawalsEuroExtra: '2€/retrait',
    insuranceTravel: true,
    insuranceTravelDetails: 'Allianz : frais médicaux, vols, bagages, sports d\'hiver',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 80000,
    maxWithdrawalWeek: 1050,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Retraits illimités hors zone euro', 'Assurance voyage Allianz', 'Épargne rémunérée 1,3%'],
    targetProfile: 'Voyageurs fréquents',
    url: 'https://n26.com/fr-fr'
  },
  {
    id: 'n26-metal',
    bank: 'N26',
    bankType: 'neo',
    bankColor: '#36a18b',
    bankLogo: 'N26',
    offerName: 'Metal',
    offerType: 'black',
    monthlyFee: 16.90,
    monthlyFeeCondition: null,
    cardType: 'Mastercard Metal',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: '8/mois',
    freeWithdrawalsEuroExtra: '2€/retrait',
    insuranceTravel: true,
    insuranceTravelDetails: 'Voyage complète + location voiture + smartphone',
    insuranceMeansPayment: true,
    loungeAccess: true,
    loungeAccessDetails: 'Accès salons achetable dans l\'app',
    cashback: false,
    maxPaymentMonth: 80000,
    maxWithdrawalWeek: 1050,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Carte métal premium', 'Assurance smartphone incluse', 'Service client prioritaire'],
    targetProfile: 'Clients premium, voyageurs',
    url: 'https://n26.com/fr-fr'
  },

  // ==================== REVOLUT ====================
  {
    id: 'revolut-standard',
    bank: 'Revolut',
    bankType: 'neo',
    bankColor: '#0066ff',
    bankLogo: 'RV',
    offerName: 'Standard',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: 'Livraison carte 5,99€',
    cardType: 'Mastercard/Visa',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 200,
    withdrawalsFreeAbroadUnit: '€/mois',
    withdrawalsExtraFee: '2% au-delà',
    freeWithdrawalsEuro: '200€/mois',
    freeWithdrawalsEuroExtra: '2% au-delà',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 'Personnalisable',
    maxWithdrawalWeek: 'Personnalisable',
    overdraftAvailable: false,
    virtualCard: true,
    virtualCardDisposable: true,
    iban: 'LT/FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Multi-devises', 'Change au taux interbancaire', 'Crypto et actions'],
    targetProfile: 'Usage international, fintech',
    url: 'https://www.revolut.com/fr-FR'
  },
  {
    id: 'revolut-plus',
    bank: 'Revolut',
    bankType: 'neo',
    bankColor: '#0066ff',
    bankLogo: 'RV',
    offerName: 'Plus',
    offerType: 'basic',
    monthlyFee: 3.99,
    monthlyFeeCondition: null,
    cardType: 'Mastercard/Visa',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 200,
    withdrawalsFreeAbroadUnit: '€/mois',
    withdrawalsExtraFee: '2% au-delà',
    freeWithdrawalsEuro: '200€/mois',
    freeWithdrawalsEuroExtra: '2% au-delà',
    insuranceTravel: false,
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 'Personnalisable',
    maxWithdrawalWeek: 'Personnalisable',
    overdraftAvailable: false,
    virtualCard: true,
    virtualCardDisposable: true,
    iban: 'LT/FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Protection achats', 'Support prioritaire', 'Carte personnalisable'],
    targetProfile: 'Usage quotidien sécurisé',
    url: 'https://www.revolut.com/fr-FR'
  },
  {
    id: 'revolut-premium',
    bank: 'Revolut',
    bankType: 'neo',
    bankColor: '#0066ff',
    bankLogo: 'RV',
    offerName: 'Premium',
    offerType: 'premium',
    monthlyFee: 9.99,
    monthlyFeeCondition: null,
    cardType: 'Mastercard/Visa Premium',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 400,
    withdrawalsFreeAbroadUnit: '€/mois',
    withdrawalsExtraFee: '2% au-delà',
    freeWithdrawalsEuro: '400€/mois',
    freeWithdrawalsEuroExtra: '2% au-delà',
    insuranceTravel: true,
    insuranceTravelDetails: 'Frais médicaux, retards, bagages, sports d\'hiver',
    insuranceMeansPayment: true,
    loungeAccess: false,
    loungeAccessDetails: 'Réductions sur salons',
    cashback: false,
    maxPaymentMonth: 'Personnalisable',
    maxWithdrawalWeek: 'Personnalisable',
    overdraftAvailable: false,
    virtualCard: true,
    virtualCardDisposable: true,
    iban: 'LT/FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Change illimité sans frais', 'Assurance voyage complète', 'Cartes virtuelles jetables'],
    targetProfile: 'Voyageurs, acheteurs en ligne',
    url: 'https://www.revolut.com/fr-FR'
  },
  {
    id: 'revolut-metal',
    bank: 'Revolut',
    bankType: 'neo',
    bankColor: '#0066ff',
    bankLogo: 'RV',
    offerName: 'Metal',
    offerType: 'black',
    monthlyFee: 16.99,
    monthlyFeeCondition: null,
    cardType: 'Mastercard/Visa Metal',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 800,
    withdrawalsFreeAbroadUnit: '€/mois',
    withdrawalsExtraFee: '2% au-delà',
    freeWithdrawalsEuro: '800€/mois',
    freeWithdrawalsEuroExtra: '2% au-delà',
    insuranceTravel: true,
    insuranceTravelDetails: 'Complète + location voiture + ski',
    insuranceMeansPayment: true,
    loungeAccess: true,
    loungeAccessDetails: '4 accès/an inclus',
    cashback: true,
    cashbackRate: 'Jusqu\'à 1% hors Europe',
    maxPaymentMonth: 'Personnalisable',
    maxWithdrawalWeek: 'Personnalisable',
    overdraftAvailable: false,
    virtualCard: true,
    virtualCardDisposable: true,
    iban: 'LT/FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Carte métal élégante', 'Cashback sur achats', 'Épargne rémunérée 2%'],
    targetProfile: 'Clients premium, investisseurs',
    url: 'https://www.revolut.com/fr-FR'
  },
  {
    id: 'revolut-ultra',
    bank: 'Revolut',
    bankType: 'neo',
    bankColor: '#0066ff',
    bankLogo: 'RV',
    offerName: 'Ultra',
    offerType: 'black',
    monthlyFee: 45,
    monthlyFeeCondition: null,
    cardType: 'Mastercard/Visa Ultra',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 2000,
    withdrawalsFreeAbroadUnit: '€/mois',
    withdrawalsExtraFee: '2% au-delà',
    freeWithdrawalsEuro: '2000€/mois',
    freeWithdrawalsEuroExtra: '2% au-delà',
    insuranceTravel: true,
    insuranceTravelDetails: 'Ultra-complète : médicale internationale, RC, tous risques',
    insuranceMeansPayment: true,
    loungeAccess: true,
    loungeAccessDetails: 'Accès illimité LoungeKey',
    cashback: true,
    cashbackRate: 'Premium sur tous achats',
    maxPaymentMonth: 'Personnalisable',
    maxWithdrawalWeek: 'Personnalisable',
    overdraftAvailable: false,
    virtualCard: true,
    virtualCardDisposable: true,
    iban: 'LT/FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Salons aéroport illimités', 'Abonnements inclus (2600€/an)', 'Service VIP'],
    targetProfile: 'Très grands voyageurs, VIP',
    url: 'https://www.revolut.com/fr-FR'
  },

  // ==================== HELLO BANK! ====================
  {
    id: 'hello-one',
    bank: 'Hello bank!',
    bankType: 'online',
    bankColor: '#ff6900',
    bankLogo: 'HB',
    offerName: 'Hello One',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: 'Gratuit',
    cardType: 'Visa Hello One',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1,50€ + 2%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 2500,
    maxWithdrawalWeek: 500,
    overdraftAvailable: true,
    overdraftMax: 250,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Gratuite sans condition', 'Filiale BNP Paribas', 'Services complets'],
    targetProfile: 'Tous profils, usage France',
    url: 'https://www.hellobank.fr'
  },
  {
    id: 'hello-prime',
    bank: 'Hello bank!',
    bankType: 'online',
    bankColor: '#ff6900',
    bankLogo: 'HB',
    offerName: 'Hello Prime',
    offerType: 'premium',
    monthlyFee: 5,
    monthlyFeeCondition: null,
    cardType: 'Visa Hello Prime',
    cardDebit: 'both',
    cardDebitDiffere: true,
    cardDebitDiffereCondition: '1 000€ revenus nets',
    incomeRequired: 1000,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Visa Premier équivalent',
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 6000,
    maxWithdrawalWeek: 1500,
    overdraftAvailable: true,
    overdraftMax: 2500,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Retraits gratuits monde entier', 'Assurances voyage', 'Très accessible (1000€)'],
    targetProfile: 'Voyageurs, petits revenus',
    url: 'https://www.hellobank.fr'
  },

  // ==================== MONABANQ ====================
  {
    id: 'monabanq-pratiq',
    bank: 'Monabanq',
    bankType: 'online',
    bankColor: '#6b2d5b',
    bankLogo: 'MQ',
    offerName: 'Pratiq',
    offerType: 'basic',
    monthlyFee: 3,
    monthlyFeeCondition: '1€ pour les moins de 26 ans',
    cardType: 'Visa Classic',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 3000,
    maxWithdrawalWeek: 500,
    overdraftAvailable: true,
    overdraftMax: 500,
    virtualCard: false,
    iban: 'FR',
    pea: false,
    chequier: true,
    mobilePayment: true,
    highlights: ['Sans condition de revenus', 'Service client primé 9 fois', 'Filiale Crédit Mutuel'],
    targetProfile: 'Tous profils, qualité service',
    url: 'https://www.monabanq.com'
  },
  {
    id: 'monabanq-pratiq-plus',
    bank: 'Monabanq',
    bankType: 'online',
    bankColor: '#6b2d5b',
    bankLogo: 'MQ',
    offerName: 'Pratiq+',
    offerType: 'premium',
    monthlyFee: 6,
    monthlyFeeCondition: null,
    cardType: 'Visa Premier',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurances Visa Premier complètes',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 8000,
    maxWithdrawalWeek: 1500,
    overdraftAvailable: true,
    overdraftMax: 1000,
    virtualCard: false,
    iban: 'FR',
    pea: false,
    chequier: true,
    mobilePayment: true,
    highlights: ['Visa Premier sans revenus minimum', 'Débit différé accessible', 'Service client top'],
    targetProfile: 'Voyageurs, tous revenus',
    url: 'https://www.monabanq.com'
  },
  {
    id: 'monabanq-uniq',
    bank: 'Monabanq',
    bankType: 'online',
    bankColor: '#6b2d5b',
    bankLogo: 'MQ',
    offerName: 'Uniq',
    offerType: 'black',
    monthlyFee: 12,
    monthlyFeeCondition: null,
    cardType: 'Visa Platinum',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 'Illimité',
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: null,
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Visa Platinum : garanties maximales',
    insuranceMeansPayment: true,
    loungeAccess: true,
    loungeAccessDetails: 'Conciergerie Visa',
    cashback: false,
    maxPaymentMonth: 15000,
    maxWithdrawalWeek: 2000,
    overdraftAvailable: true,
    overdraftMax: 2500,
    virtualCard: false,
    iban: 'FR',
    pea: false,
    chequier: true,
    mobilePayment: true,
    highlights: ['Visa Platinum sans revenus', 'Retraits illimités monde', 'Conciergerie incluse'],
    targetProfile: 'Clients exigeants, tous revenus',
    url: 'https://www.monabanq.com'
  },

  // ==================== NICKEL ====================
  {
    id: 'nickel-standard',
    bank: 'Nickel',
    bankType: 'neo',
    bankColor: '#ff6b35',
    bankLogo: 'NK',
    offerName: 'Nickel',
    offerType: 'basic',
    monthlyFee: 1.67,
    monthlyFeeCondition: '20€/an',
    cardType: 'Mastercard',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1€ + 2%',
    freeWithdrawalsEuro: '3/mois',
    freeWithdrawalsEuroExtra: '0,50€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 1500,
    maxWithdrawalWeek: 300,
    overdraftAvailable: false,
    virtualCard: false,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Ouverture en 5min chez buraliste', 'Sans justificatif', 'Interdit bancaire accepté'],
    targetProfile: 'Interdits bancaires, urgence',
    url: 'https://www.nickel.eu'
  },
  {
    id: 'nickel-chrome',
    bank: 'Nickel',
    bankType: 'neo',
    bankColor: '#ff6b35',
    bankLogo: 'NK',
    offerName: 'Nickel Chrome',
    offerType: 'premium',
    monthlyFee: 4.17,
    monthlyFeeCondition: '50€/an',
    cardType: 'Mastercard Chrome',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1€ + 1%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurance voyage basique',
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 3000,
    maxWithdrawalWeek: 800,
    overdraftAvailable: false,
    virtualCard: false,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Plafonds plus élevés', 'Assurance incluse', 'Frais réduits à l\'étranger'],
    targetProfile: 'Usage régulier, voyages occasionnels',
    url: 'https://www.nickel.eu'
  },

  // ==================== WISE ====================
  {
    id: 'wise-standard',
    bank: 'Wise',
    bankType: 'neo',
    bankColor: '#37517e',
    bankLogo: 'WS',
    offerName: 'Wise',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: 'Carte 7€ (unique)',
    cardType: 'Visa Debit',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 200,
    withdrawalsFreeAbroadUnit: '€/mois',
    withdrawalsExtraFee: '1,75% au-delà',
    freeWithdrawalsEuro: '200€/mois',
    freeWithdrawalsEuroExtra: '0,50€ + 1,75%',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 'Illimité',
    maxWithdrawalWeek: 'Variable',
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'Multi (BE/AU/US/SG...)',
    ibanDetails: 'IBAN dans 10+ pays',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Multi-devises (50+ monnaies)', 'Taux de change réel', 'IBAN dans 10+ pays'],
    targetProfile: 'Expatriés, freelances internationaux',
    url: 'https://wise.com/fr'
  },

  // ==================== LYDIA / SUMERIA ====================
  {
    id: 'sumeria-standard',
    bank: 'Sumeria (ex-Lydia)',
    bankType: 'neo',
    bankColor: '#00d4ff',
    bankLogo: 'SU',
    offerName: 'Sumeria',
    offerType: 'basic',
    monthlyFee: 0,
    monthlyFeeCondition: 'Gratuit',
    cardType: 'Visa',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1,5%',
    freeWithdrawalsEuro: '3/mois',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 3000,
    maxWithdrawalWeek: 500,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Paiement entre amis', 'Cagnottes', 'App très populaire'],
    targetProfile: 'Jeunes, paiements entre amis',
    url: 'https://www.sumeria.eu'
  },
  {
    id: 'sumeria-plus',
    bank: 'Sumeria (ex-Lydia)',
    bankType: 'neo',
    bankColor: '#00d4ff',
    bankLogo: 'SU',
    offerName: 'Sumeria+',
    offerType: 'premium',
    monthlyFee: 8.99,
    monthlyFeeCondition: null,
    cardType: 'Visa',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 3,
    withdrawalsFreeAbroadUnit: '/mois',
    withdrawalsExtraFee: '1,5%',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurance voyage basique',
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: true,
    cashbackRate: '0,5% sur achats',
    maxPaymentMonth: 15000,
    maxWithdrawalWeek: 2000,
    overdraftAvailable: false,
    virtualCard: true,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Cashback 0,5%', 'Retraits illimités en euros', 'Plafonds élevés'],
    targetProfile: 'Jeunes actifs',
    url: 'https://www.sumeria.eu'
  },

  // ==================== MA FRENCH BANK ====================
  {
    id: 'mafrenchbank',
    bank: 'Ma French Bank',
    bankType: 'neo',
    bankColor: '#e94d7f',
    bankLogo: 'MFB',
    offerName: 'Ma French Bank',
    offerType: 'basic',
    monthlyFee: 2,
    monthlyFeeCondition: '24€/an',
    cardType: 'Visa',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '1,90€',
    freeWithdrawalsEuro: 'Illimité',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 3000,
    maxWithdrawalWeek: 500,
    overdraftAvailable: false,
    virtualCard: false,
    iban: 'FR',
    pea: false,
    chequier: false,
    mobilePayment: true,
    highlights: ['Filiale Banque Postale', 'Ouverture en bureau de poste', 'Accessible à tous'],
    targetProfile: 'Tous publics, réseau postal',
    url: 'https://www.mafrenchbank.fr'
  },

  // ==================== BFORBANK ====================
  {
    id: 'bforbank',
    bank: 'BforBank',
    bankType: 'online',
    bankColor: '#009933',
    bankLogo: 'BFB',
    offerName: 'BforBank',
    offerType: 'premium',
    monthlyFee: 0,
    monthlyFeeCondition: 'Gratuit avec 1200€ revenus',
    cardType: 'Visa Premier',
    cardDebit: 'both',
    cardDebitDiffere: true,
    cardDebitDiffereCondition: '1 200€ revenus nets',
    incomeRequired: 1200,
    paymentsFreeAbroad: true,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2,90%',
    freeWithdrawalsEuro: '3/mois',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurances Visa Premier',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 6000,
    maxWithdrawalWeek: 1500,
    overdraftAvailable: true,
    overdraftMax: 1500,
    virtualCard: true,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    highlights: ['Visa Premier gratuite', 'Filiale Crédit Agricole', 'PEA performant'],
    targetProfile: 'Épargnants, investisseurs',
    url: 'https://www.bforbank.com'
  },

  // ==================== BANQUES TRADITIONNELLES - PACKS ====================
  {
    id: 'bnp-esprit-libre-essentiel',
    bank: 'BNP Paribas',
    bankType: 'traditional',
    bankColor: '#00965e',
    bankLogo: 'BNP',
    offerName: 'Esprit Libre Essentiel',
    offerType: 'basic',
    monthlyFee: 6.80,
    monthlyFeeCondition: null,
    cardType: 'Visa Classic',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2,90%',
    freeWithdrawalsEuro: '3/mois hors réseau',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 8000,
    maxWithdrawalWeek: 1500,
    overdraftAvailable: true,
    overdraftMax: 'Sur demande',
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['Réseau d\'agences dense', 'Services complets', 'Tous crédits'],
    targetProfile: 'Besoin d\'agence physique',
    url: 'https://www.bnpparibas.fr'
  },
  {
    id: 'bnp-esprit-libre-premium',
    bank: 'BNP Paribas',
    bankType: 'traditional',
    bankColor: '#00965e',
    bankLogo: 'BNP',
    offerName: 'Esprit Libre Visa Premier',
    offerType: 'premium',
    monthlyFee: 12.90,
    monthlyFeeCondition: null,
    cardType: 'Visa Premier',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2,90%',
    freeWithdrawalsEuro: '3/mois hors réseau',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurances Visa Premier',
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 15000,
    maxWithdrawalWeek: 3000,
    overdraftAvailable: true,
    overdraftMax: 'Sur demande',
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['Visa Premier avec assurances', 'Conseiller dédié', 'Cash Services gratuit'],
    targetProfile: 'Clients traditionnels, voyageurs',
    url: 'https://www.bnpparibas.fr'
  },
  {
    id: 'sg-sobrio-essentiel',
    bank: 'Société Générale',
    bankType: 'traditional',
    bankColor: '#e30613',
    bankLogo: 'SG',
    offerName: 'Sobrio Essentiel',
    offerType: 'basic',
    monthlyFee: 6.90,
    monthlyFeeCondition: null,
    cardType: 'Visa Classic',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2,90%',
    freeWithdrawalsEuro: '3/mois hors réseau',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 8000,
    maxWithdrawalWeek: 1500,
    overdraftAvailable: true,
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['Grand réseau national', 'Services complets', 'Application moderne'],
    targetProfile: 'Besoin d\'agence',
    url: 'https://www.societegenerale.fr'
  },
  {
    id: 'ca-essentiel',
    bank: 'Crédit Agricole',
    bankType: 'traditional',
    bankColor: '#009f4d',
    bankLogo: 'CA',
    offerName: 'Offre Essentielle',
    offerType: 'basic',
    monthlyFee: 2,
    monthlyFeeCondition: 'Variable selon caisse régionale',
    cardType: 'Carte à autorisation systématique',
    cardDebit: 'immediate',
    cardDebitDiffere: false,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '~2,90%',
    freeWithdrawalsEuro: '4/mois hors réseau',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 3000,
    maxWithdrawalWeek: 500,
    overdraftAvailable: false,
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['Tarifs parmi les plus bas', 'Premier réseau France', 'Mutualiste'],
    targetProfile: 'Tous profils, rural',
    url: 'https://www.credit-agricole.fr'
  },
  {
    id: 'ca-gold',
    bank: 'Crédit Agricole',
    bankType: 'traditional',
    bankColor: '#009f4d',
    bankLogo: 'CA',
    offerName: 'Carte Gold',
    offerType: 'premium',
    monthlyFee: 8,
    monthlyFeeCondition: '~95€/an selon caisse',
    cardType: 'Mastercard Gold',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '~2,90%',
    freeWithdrawalsEuro: '4/mois hors réseau',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurances Gold Mastercard',
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 10000,
    maxWithdrawalWeek: 2000,
    overdraftAvailable: true,
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['Tarifs compétitifs', 'Assurances incluses', 'Conseiller local'],
    targetProfile: 'Familles, voyageurs occasionnels',
    url: 'https://www.credit-agricole.fr'
  },
  {
    id: 'lcl-zen',
    bank: 'LCL',
    bankType: 'traditional',
    bankColor: '#0078be',
    bankLogo: 'LCL',
    offerName: 'LCL Zen',
    offerType: 'premium',
    monthlyFee: 8.50,
    monthlyFeeCondition: null,
    cardType: 'Visa Premier',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2,90%',
    freeWithdrawalsEuro: '3/mois hors réseau',
    freeWithdrawalsEuroExtra: '1€/retrait',
    insuranceTravel: true,
    insuranceTravelDetails: 'Assurances Visa Premier',
    insuranceMeansPayment: true,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 15000,
    maxWithdrawalWeek: 3000,
    overdraftAvailable: true,
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['Pack complet', 'Filiale Crédit Agricole', 'Présence urbaine'],
    targetProfile: 'Urbains, services complets',
    url: 'https://www.lcl.fr'
  },
  {
    id: 'banque-postale-formule',
    bank: 'La Banque Postale',
    bankType: 'traditional',
    bankColor: '#003399',
    bankLogo: 'LBP',
    offerName: 'Formule de Compte',
    offerType: 'basic',
    monthlyFee: 6.90,
    monthlyFeeCondition: null,
    cardType: 'Visa Classic',
    cardDebit: 'both',
    cardDebitDiffere: true,
    incomeRequired: null,
    paymentsFreeAbroad: false,
    withdrawalsFreeAbroad: 0,
    withdrawalsFreeAbroadUnit: '',
    withdrawalsExtraFee: '2,75%',
    freeWithdrawalsEuro: '3/mois hors réseau',
    freeWithdrawalsEuroExtra: '1,05€/retrait',
    insuranceTravel: false,
    insuranceMeansPayment: false,
    loungeAccess: false,
    cashback: false,
    maxPaymentMonth: 6000,
    maxWithdrawalWeek: 1000,
    overdraftAvailable: true,
    virtualCard: false,
    iban: 'FR',
    pea: true,
    chequier: true,
    mobilePayment: true,
    hasAgency: true,
    highlights: ['17 000 points de contact', 'Mission d\'accessibilité', 'Livret A inclus'],
    targetProfile: 'Rural, tous publics',
    url: 'https://www.labanquepostale.fr'
  }
];

// Composant principal
export default function BankOffersComparator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBankType, setFilterBankType] = useState('');
  const [filterOfferType, setFilterOfferType] = useState('');
  const [filterFreeAbroad, setFilterFreeAbroad] = useState('');
  const [filterInsurance, setFilterInsurance] = useState('');
  const [filterFreeCard, setFilterFreeCard] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [sortKey, setSortKey] = useState('monthlyFee');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [viewMode, setViewMode] = useState('table');

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const filteredOffers = useMemo(() => {
    let result = bankOffers.filter(offer => {
      const searchLower = searchQuery.toLowerCase();
      if (searchQuery && 
          !offer.bank.toLowerCase().includes(searchLower) && 
          !offer.offerName.toLowerCase().includes(searchLower)) return false;
      if (filterBankType && offer.bankType !== filterBankType) return false;
      if (filterOfferType && offer.offerType !== filterOfferType) return false;
      if (filterFreeAbroad === 'yes' && !offer.paymentsFreeAbroad) return false;
      if (filterFreeAbroad === 'no' && offer.paymentsFreeAbroad) return false;
      if (filterInsurance === 'yes' && !offer.insuranceTravel) return false;
      if (filterInsurance === 'no' && offer.insuranceTravel) return false;
      if (filterFreeCard === 'yes' && offer.monthlyFee !== 0) return false;
      if (filterFreeCard === 'no' && offer.monthlyFee === 0) return false;
      if (maxBudget && offer.monthlyFee > parseFloat(maxBudget)) return false;
      return true;
    });

    result.sort((a, b) => {
      let aVal = a[sortKey];
      let bVal = b[sortKey];
      if (aVal === null || aVal === 'Illimité' || aVal === 'Personnalisable') aVal = sortKey.includes('max') ? 999999 : -1;
      if (bVal === null || bVal === 'Illimité' || bVal === 'Personnalisable') bVal = sortKey.includes('max') ? 999999 : -1;
      if (typeof aVal === 'string') return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });

    return result;
  }, [searchQuery, filterBankType, filterOfferType, filterFreeAbroad, filterInsurance, filterFreeCard, maxBudget, sortKey, sortOrder]);

  const stats = useMemo(() => ({
    total: filteredOffers.length,
    free: filteredOffers.filter(o => o.monthlyFee === 0).length,
    withInsurance: filteredOffers.filter(o => o.insuranceTravel).length,
    freeAbroad: filteredOffers.filter(o => o.paymentsFreeAbroad).length
  }), [filteredOffers]);

  const formatPrice = (price) => {
    if (price === null || price === undefined) return 'N/A';
    if (price === 0) return 'Gratuit';
    return `${price.toFixed(2).replace('.', ',')}€`;
  };

  const getPriceColor = (price) => {
    if (price === null) return '#64748b';
    if (price === 0) return '#10b981';
    if (price <= 5) return '#22c55e';
    if (price <= 10) return '#eab308';
    if (price <= 20) return '#f97316';
    return '#ef4444';
  };

  const getOfferTypeLabel = (type) => ({
    basic: 'Essentiel',
    premium: 'Premium',
    black: 'Haut de gamme'
  }[type] || type);

  const getOfferTypeBg = (type) => ({
    basic: 'linear-gradient(135deg, #334155, #475569)',
    premium: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    black: 'linear-gradient(135deg, #1e1e1e, #3f3f3f)'
  }[type] || '#475569');

  const getBankTypeLabel = (type) => ({
    traditional: 'Banque traditionnelle',
    online: 'Banque en ligne',
    neo: 'Néobanque'
  }[type] || type);

  const getBankTypeColor = (type) => ({
    traditional: '#3b82f6',
    online: '#10b981',
    neo: '#f59e0b'
  }[type] || '#64748b');

  const resetFilters = () => {
    setSearchQuery('');
    setFilterBankType('');
    setFilterOfferType('');
    setFilterFreeAbroad('');
    setFilterInsurance('');
    setFilterFreeCard('');
    setMaxBudget('');
  };

  // Modal de détails
  const OfferModal = ({ offer, onClose }) => (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 20
    }} onClick={onClose}>
      <div style={{
        background: 'linear-gradient(180deg, #1e293b, #0f172a)',
        borderRadius: 24, maxWidth: 700, width: '100%', maxHeight: '90vh',
        overflow: 'auto', border: '1px solid rgba(255,255,255,0.1)'
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '24px 28px', borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', gap: 16
        }}>
          <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
            {bankLogos[offer.bank] ? (
              <img 
                src={bankLogos[offer.bank]} 
                alt={offer.bank}
                style={{
                  width: 56, height: 56, borderRadius: 14, objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div style={{
              width: 56, height: 56, borderRadius: 14, background: offer.bankColor,
              display: bankLogos[offer.bank] ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 800, fontSize: 16
            }}>{offer.bankLogo}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>
              {offer.offerName}
            </div>
            <div style={{ fontSize: 15, color: '#94a3b8' }}>{offer.bank}</div>
          </div>
          <div style={{
            fontSize: 28, fontWeight: 800, color: getPriceColor(offer.monthlyFee)
          }}>
            {offer.monthlyFee === 0 ? 'Gratuit' : `${offer.monthlyFee}€/mois`}
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)', border: 'none', width: 40, height: 40,
            borderRadius: 10, color: '#94a3b8', fontSize: 20, cursor: 'pointer'
          }}>×</button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px' }}>
          {/* Condition prix */}
          {offer.monthlyFeeCondition && (
            <div style={{
              background: 'rgba(234, 179, 8, 0.15)', borderRadius: 12,
              padding: '12px 16px', marginBottom: 20, color: '#fbbf24', fontSize: 14
            }}>
              ⚠️ {offer.monthlyFeeCondition}
            </div>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            <span style={{
              padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600,
              background: getOfferTypeBg(offer.offerType), color: 'white'
            }}>{getOfferTypeLabel(offer.offerType)}</span>
            <span style={{
              padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600,
              background: `${getBankTypeColor(offer.bankType)}22`, color: getBankTypeColor(offer.bankType)
            }}>{getBankTypeLabel(offer.bankType)}</span>
            <span style={{
              padding: '6px 14px', borderRadius: 20, fontSize: 13,
              background: 'rgba(148, 163, 184, 0.2)', color: '#94a3b8'
            }}>{offer.cardType}</span>
          </div>

          {/* Points forts */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
              Points forts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {offer.highlights.map((h, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  color: '#e2e8f0', fontSize: 15
                }}>
                  <span style={{ color: '#10b981' }}>✓</span> {h}
                </div>
              ))}
            </div>
          </div>

          {/* Grille détails */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16
          }}>
            {offer.inactivityFee && (
              <DetailBox label="Si carte non utilisée" 
                value={typeof offer.inactivityFee === 'number' ? `${offer.inactivityFee}€/mois` : offer.inactivityFee}
                good={false} />
            )}
            <DetailBox label="Paiements à l'étranger" value={offer.paymentsFreeAbroad ? 'Gratuits' : 'Avec frais'} 
              good={offer.paymentsFreeAbroad} />
            <DetailBox label="Retraits hors zone €" 
              value={offer.withdrawalsFreeAbroad === 'Illimité' ? 'Illimités gratuits' : 
                offer.withdrawalsFreeAbroad === 0 ? `Payants (${offer.withdrawalsExtraFee})` :
                `${offer.withdrawalsFreeAbroad}${offer.withdrawalsFreeAbroadUnit} gratuits`}
              good={offer.withdrawalsFreeAbroad === 'Illimité' || offer.withdrawalsFreeAbroad > 0} />
            <DetailBox label="Retraits zone euro" value={offer.freeWithdrawalsEuro} 
              good={offer.freeWithdrawalsEuro === 'Illimité'} />
            <DetailBox label="Assurance voyage" value={offer.insuranceTravel ? 'Incluse' : 'Non incluse'} 
              good={offer.insuranceTravel} />
            <DetailBox label="Débit différé" value={offer.cardDebitDiffere ? 'Disponible' : 'Non'} 
              good={offer.cardDebitDiffere} />
            <DetailBox label="Revenus requis" 
              value={offer.incomeRequired ? `${offer.incomeRequired}€/mois` : 'Aucun'} 
              good={!offer.incomeRequired} />
            <DetailBox label="Découvert" value={offer.overdraftAvailable ? 'Disponible' : 'Non'} 
              good={offer.overdraftAvailable} />
            <DetailBox label="IBAN" value={offer.iban} neutral />
            {offer.loungeAccess && (
              <DetailBox label="Salons aéroport" value={offer.loungeAccessDetails || 'Inclus'} good />
            )}
            {offer.cashback && (
              <DetailBox label="Cashback" value={offer.cashbackRate || 'Oui'} good />
            )}
          </div>

          {/* Assurances détail */}
          {offer.insuranceTravelDetails && (
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 13, color: '#64748b', marginBottom: 8, textTransform: 'uppercase' }}>
                Détail assurances
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)', borderRadius: 12,
                padding: '14px 16px', color: '#10b981', fontSize: 14
              }}>
                {offer.insuranceTravelDetails}
              </div>
            </div>
          )}

          {/* Cible */}
          <div style={{
            marginTop: 24, padding: '16px', background: 'rgba(99, 102, 241, 0.1)',
            borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12
          }}>
            <span style={{ fontSize: 24 }}>🎯</span>
            <div>
              <div style={{ fontSize: 12, color: '#818cf8', marginBottom: 2 }}>Profil cible</div>
              <div style={{ color: '#e2e8f0', fontSize: 15 }}>{offer.targetProfile}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DetailBox = ({ label, value, good, neutral }) => (
    <div style={{
      background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '14px 16px',
      border: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{ fontSize: 11, color: '#64748b', marginBottom: 6, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ 
        fontSize: 15, fontWeight: 600, 
        color: neutral ? '#e2e8f0' : (good ? '#10b981' : '#f87171') 
      }}>{value}</div>
    </div>
  );

  // Carte d'offre
  const OfferCard = ({ offer }) => (
    <div 
      onClick={() => setSelectedOffer(offer)}
      style={{
        background: 'linear-gradient(180deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))',
        borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 20px 40px -10px ${offer.bankColor}40`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Bandeau type offre */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        padding: '5px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700,
        background: getOfferTypeBg(offer.offerType), color: 'white',
        textTransform: 'uppercase', letterSpacing: 0.5
      }}>{getOfferTypeLabel(offer.offerType)}</div>

      {/* Header */}
      <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{ position: 'relative', width: 52, height: 52, flexShrink: 0 }}>
          {bankLogos[offer.bank] ? (
            <img 
              src={bankLogos[offer.bank]} 
              alt={offer.bank}
              style={{
                width: 52, height: 52, borderRadius: 14, objectFit: 'cover',
                boxShadow: `0 8px 20px -4px ${offer.bankColor}60`
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div style={{
            width: 52, height: 52, borderRadius: 14, background: offer.bankColor,
            display: bankLogos[offer.bank] ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: 14,
            boxShadow: `0 8px 20px -4px ${offer.bankColor}60`
          }}>{offer.bankLogo}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#f8fafc', marginBottom: 2 }}>
            {offer.offerName}
          </div>
          <div style={{ fontSize: 13, color: '#64748b' }}>{offer.bank}</div>
        </div>
      </div>

      {/* Prix */}
      <div style={{ padding: '0 24px 16px' }}>
        <div style={{
          fontSize: 32, fontWeight: 800, color: getPriceColor(offer.monthlyFee),
          lineHeight: 1
        }}>
          {offer.monthlyFee === 0 ? 'Gratuit' : `${offer.monthlyFee.toFixed(2).replace('.', ',')}€`}
          {offer.monthlyFee > 0 && <span style={{ fontSize: 14, fontWeight: 500, color: '#64748b' }}>/mois</span>}
        </div>
        {offer.monthlyFeeCondition && (
          <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 6, fontStyle: 'italic' }}>
            {offer.monthlyFeeCondition}
          </div>
        )}
      </div>

      {/* Features */}
      <div style={{ padding: '0 24px 20px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {offer.inactivityFee && (
          <FeatureBadge icon="⚠️" text={typeof offer.inactivityFee === 'number' ? `${offer.inactivityFee}€ si inactive` : offer.inactivityFee} />
        )}
        {offer.paymentsFreeAbroad && (
          <FeatureBadge icon="🌍" text="Paiements gratuits" good />
        )}
        {(offer.withdrawalsFreeAbroad === 'Illimité' || offer.withdrawalsFreeAbroad > 0) && (
          <FeatureBadge icon="💳" text={offer.withdrawalsFreeAbroad === 'Illimité' ? 'Retraits illimités' : `${offer.withdrawalsFreeAbroad} retraits`} good />
        )}
        {offer.insuranceTravel && (
          <FeatureBadge icon="✈️" text="Assurance voyage" good />
        )}
        {offer.cardDebitDiffere && (
          <FeatureBadge icon="📅" text="Débit différé" />
        )}
        {offer.loungeAccess && (
          <FeatureBadge icon="🛋️" text="Salons" good />
        )}
        {offer.cashback && (
          <FeatureBadge icon="💰" text="Cashback" good />
        )}
      </div>

      {/* Type banque */}
      <div style={{
        padding: '14px 24px', borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span style={{
          fontSize: 12, padding: '4px 10px', borderRadius: 6,
          background: `${getBankTypeColor(offer.bankType)}15`,
          color: getBankTypeColor(offer.bankType), fontWeight: 600
        }}>{getBankTypeLabel(offer.bankType)}</span>
        <span style={{ fontSize: 12, color: '#64748b' }}>{offer.cardType}</span>
      </div>
    </div>
  );

  const FeatureBadge = ({ icon, text, good }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 5,
      padding: '5px 10px', borderRadius: 8, fontSize: 12,
      background: good ? 'rgba(16, 185, 129, 0.12)' : 'rgba(148, 163, 184, 0.1)',
      color: good ? '#10b981' : '#94a3b8'
    }}>
      <span>{icon}</span> {text}
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#e2e8f0', padding: '24px 20px'
    }}>
      {/* Filtres */}
      <div style={{
        maxWidth: 1400, margin: '0 auto 24px',
        background: 'rgba(30, 41, 59, 0.5)', borderRadius: 16,
        padding: '20px', border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, marginBottom: 16
        }}>
          {/* Recherche */}
          <div style={{ gridColumn: 'span 2' }}>
            <input
              type="text"
              placeholder="🔍 Rechercher une banque ou offre..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 10,
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0', fontSize: 14, outline: 'none'
              }}
            />
          </div>

          {/* Type banque */}
          <select value={filterBankType} onChange={e => setFilterBankType(e.target.value)}
            style={selectStyle}>
            <option value="">Toutes les banques</option>
            <option value="traditional">Traditionnelles</option>
            <option value="online">En ligne</option>
            <option value="neo">Néobanques</option>
          </select>

          {/* Type offre */}
          <select value={filterOfferType} onChange={e => setFilterOfferType(e.target.value)}
            style={selectStyle}>
            <option value="">Toutes les gammes</option>
            <option value="basic">Essentiel</option>
            <option value="premium">Premium</option>
            <option value="black">Haut de gamme</option>
          </select>

          {/* Gratuite */}
          <select value={filterFreeCard} onChange={e => setFilterFreeCard(e.target.value)}
            style={selectStyle}>
            <option value="">Prix de l'offre</option>
            <option value="yes">Gratuites uniquement</option>
            <option value="no">Payantes uniquement</option>
          </select>

          {/* Étranger */}
          <select value={filterFreeAbroad} onChange={e => setFilterFreeAbroad(e.target.value)}
            style={selectStyle}>
            <option value="">Frais à l'étranger</option>
            <option value="yes">Sans frais de paiement</option>
            <option value="no">Avec frais</option>
          </select>

          {/* Assurance */}
          <select value={filterInsurance} onChange={e => setFilterInsurance(e.target.value)}
            style={selectStyle}>
            <option value="">Assurance voyage</option>
            <option value="yes">Avec assurance</option>
            <option value="no">Sans assurance</option>
          </select>

          {/* Budget max */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="number"
              placeholder="Budget max €/mois"
              value={maxBudget}
              onChange={e => setMaxBudget(e.target.value)}
              style={{
                ...selectStyle, width: '100%'
              }}
            />
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <button onClick={resetFilters} style={{
            padding: '10px 20px', borderRadius: 10, border: 'none',
            background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444',
            fontSize: 13, fontWeight: 600, cursor: 'pointer'
          }}>
            Réinitialiser les filtres
          </button>

          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setViewMode('table')} style={{
              padding: '10px 16px', borderRadius: 10, border: 'none',
              background: viewMode === 'table' ? '#6366f1' : 'rgba(255,255,255,0.05)',
              color: viewMode === 'table' ? 'white' : '#94a3b8',
              fontSize: 13, cursor: 'pointer'
            }}>📋 Tableau</button>
            <button onClick={() => setViewMode('cards')} style={{
              padding: '10px 16px', borderRadius: 10, border: 'none',
              background: viewMode === 'cards' ? '#6366f1' : 'rgba(255,255,255,0.05)',
              color: viewMode === 'cards' ? 'white' : '#94a3b8',
              fontSize: 13, cursor: 'pointer'
            }}>📦 Cartes</button>
          </div>

          {/* Tri */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13, color: '#64748b' }}>Trier par :</span>
            <select value={sortKey} onChange={e => setSortKey(e.target.value)} style={{
              ...selectStyle, minWidth: 120
            }}>
              <option value="monthlyFee">Prix</option>
              <option value="bank">Banque</option>
              <option value="offerType">Gamme</option>
            </select>
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} style={{
              padding: '10px 14px', borderRadius: 10, border: 'none',
              background: 'rgba(255,255,255,0.05)', color: '#94a3b8',
              fontSize: 14, cursor: 'pointer'
            }}>{sortOrder === 'asc' ? '↑' : '↓'}</button>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {viewMode === 'cards' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20
          }}>
            {filteredOffers.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        ) : (
          <div style={{
            background: 'rgba(30, 41, 59, 0.5)', borderRadius: 16,
            overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1050 }}>
                <thead>
                  <tr>
                    {[
                      { key: 'bank', label: 'Banque / Offre' },
                      { key: 'monthlyFee', label: 'Prix/mois' },
                      { key: 'inactivityFee', label: 'Si non utilisée' },
                      { key: 'cardType', label: 'Carte' },
                      { key: 'paymentsFreeAbroad', label: 'Paiements étr.' },
                      { key: 'withdrawalsFreeAbroad', label: 'Retraits étr.' },
                      { key: 'insuranceTravel', label: 'Assurance' },
                      { key: 'incomeRequired', label: 'Revenus requis' }
                    ].map(col => (
                      <th key={col.key} onClick={() => handleSort(col.key)} style={{
                        padding: '16px 12px', textAlign: 'left',
                        background: 'rgba(15, 23, 42, 0.8)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        fontSize: 12, fontWeight: 600, textTransform: 'uppercase',
                        color: sortKey === col.key ? '#6366f1' : '#64748b',
                        cursor: 'pointer', whiteSpace: 'nowrap'
                      }}>
                        {col.label} {sortKey === col.key && (sortOrder === 'asc' ? '↑' : '↓')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredOffers.map((offer, idx) => (
                    <tr key={offer.id} 
                      onClick={() => setSelectedOffer(offer)}
                      style={{ 
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'}
                    >
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          {bankLogos[offer.bank] ? (
                            <img 
                              src={bankLogos[offer.bank]} 
                              alt={offer.bank}
                              style={{
                                width: 36, height: 36, borderRadius: 8, objectFit: 'cover'
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div style={{
                            width: 36, height: 36, borderRadius: 8, background: offer.bankColor,
                            display: bankLogos[offer.bank] ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontWeight: 700, fontSize: 11
                          }}>{offer.bankLogo}</div>
                          <div>
                            <div style={{ fontWeight: 600, color: '#f8fafc' }}>{offer.offerName}</div>
                            <div style={{ fontSize: 12, color: '#64748b' }}>{offer.bank}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)', fontWeight: 700, color: getPriceColor(offer.monthlyFee) }}>
                        {formatPrice(offer.monthlyFee)}
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: 13 }}>
                        {offer.inactivityFee ? (
                          <div>
                            <span style={{ color: '#f59e0b', fontWeight: 600 }}>
                              {typeof offer.inactivityFee === 'number' ? `${offer.inactivityFee}€/mois` : offer.inactivityFee}
                            </span>
                            {offer.inactivityFeeCondition && (
                              <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{offer.inactivityFeeCondition}</div>
                            )}
                          </div>
                        ) : (
                          <span style={{ color: '#10b981' }}>Aucun</span>
                        )}
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: 13, color: '#94a3b8' }}>
                        {offer.cardType}
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        <span style={{
                          padding: '4px 8px', borderRadius: 6, fontSize: 12,
                          background: offer.paymentsFreeAbroad ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                          color: offer.paymentsFreeAbroad ? '#10b981' : '#ef4444'
                        }}>{offer.paymentsFreeAbroad ? 'Gratuits' : 'Payants'}</span>
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: 13 }}>
                        {offer.withdrawalsFreeAbroad === 'Illimité' ? 
                          <span style={{ color: '#10b981' }}>Illimités</span> :
                          offer.withdrawalsFreeAbroad === 0 ?
                          <span style={{ color: '#f87171' }}>Payants</span> :
                          <span style={{ color: '#fbbf24' }}>{offer.withdrawalsFreeAbroad}{offer.withdrawalsFreeAbroadUnit}</span>
                        }
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        <span style={{
                          padding: '4px 8px', borderRadius: 6, fontSize: 12,
                          background: offer.insuranceTravel ? 'rgba(16, 185, 129, 0.15)' : 'rgba(148, 163, 184, 0.1)',
                          color: offer.insuranceTravel ? '#10b981' : '#64748b'
                        }}>{offer.insuranceTravel ? 'Oui' : 'Non'}</span>
                      </td>
                      <td style={{ padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: 13, color: offer.incomeRequired ? '#fbbf24' : '#10b981' }}>
                        {offer.incomeRequired ? `${offer.incomeRequired}€` : 'Aucun'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredOffers.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '60px 20px',
            background: 'rgba(30, 41, 59, 0.5)', borderRadius: 16
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontSize: 18, color: '#94a3b8', marginBottom: 8 }}>Aucune offre ne correspond à vos critères</div>
            <button onClick={resetFilters} style={{
              padding: '12px 24px', borderRadius: 10, border: 'none',
              background: '#6366f1', color: 'white', fontSize: 14,
              fontWeight: 600, cursor: 'pointer'
            }}>Réinitialiser les filtres</button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 1400, margin: '40px auto 0', textAlign: 'center',
        fontSize: 12, color: '#475569', padding: '20px'
      }}>
        <p>Sources : Sites officiels des banques • tarifs-bancaires.gouv.fr • Rapport OTB Banque de France 2025</p>
        <p style={{ marginTop: 8 }}>Données mises à jour en janvier 2026. Vérifiez les conditions sur les sites officiels.</p>
      </div>

      {/* Modal */}
      {selectedOffer && <OfferModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />}
    </div>
  );
}

const selectStyle = {
  padding: '12px 14px',
  borderRadius: 10,
  background: 'rgba(15, 23, 42, 0.8)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#e2e8f0',
  fontSize: 13,
  outline: 'none',
  cursor: 'pointer',
  minWidth: 0
};
