type question = {
    id: number;
    question: string;
    answers: string[];
    correct: string;
    explanation: string; 
};

const Questions: question[] = [
    {
        id: 1,
        question: "Par quel moyen un logiciel est-il protégé en premier lieu ?",
        answers: ["Le brevet", "Le droit d'auteur", "La marque"],
        correct: "Le droit d'auteur",
        explanation:
            "Le logiciel est traité comme une œuvre littéraire : le code source, le code objet et la documentation sont protégés par le droit d'auteur. La licence précise ensuite ce que l'utilisateur a le droit de faire.",
    },
    {
        id: 2,
        question:
            "Pourquoi les programmes d'ordinateur « en tant que tels » sont-ils difficilement brevetables ?",
        answers: [
            "Ils sont exclus du brevet dans de nombreux systèmes, dont l'accord de Bangui (OAPI)",
            "Ils coûtent trop cher à breveter",
            "Ils sont toujours gratuits",
        ],
        correct:
            "Ils sont exclus du brevet dans de nombreux systèmes, dont l'accord de Bangui (OAPI)",
        explanation:
            "Le brevet protège une invention technique nouvelle. Un logiciel seul est exclu, mais une invention technique dont le logiciel n'est qu'un élément peut, elle, être brevetée.",
    },
    {
        id: 3,
        question:
            "Quel est le risque d'intégrer une bibliothèque GPL dans un logiciel commercial fermé que l'on distribue ?",
        answers: [
            "Le logiciel devient plus lent",
            "Le client doit payer deux fois",
            "Tout le produit peut devoir être publié sous GPL",
        ],
        correct: "Tout le produit peut devoir être publié sous GPL",
        explanation:
            "La GPL est une licence à copyleft : les travaux dérivés distribués doivent rester sous la même licence, avec leur code source. C'est la « contamination » du code propriétaire.",
    },
    {
        id: 4,
        question: "Laquelle de ces licences est une licence libre permissive ?",
        answers: ["GPL", "AGPL", "MIT"],
        correct: "MIT",
        explanation:
            "Les licences permissives (MIT, BSD, Apache 2.0) permettent d'utiliser, modifier et redistribuer, même dans un produit fermé. Il suffit en général de conserver les mentions de copyright. GPL et AGPL sont à copyleft.",
    },
    {
        id: 5,
        question:
            "Un développeur livre un logiciel sur commande sans aucune clause de cession de droits. Que obtient souvent le client ?",
        answers: [
            "La propriété totale du code",
            "Seulement un droit d'usage",
            "Aucun droit, même d'usage",
        ],
        correct: "Seulement un droit d'usage",
        explanation:
            "Les droits d'auteur restent à l'auteur tant qu'ils ne sont pas cédés par contrat. Le client doit donc négocier une cession de droits (étendue, durée, territoire) s'il veut le code.",
    },
    {
        id: 6,
        question:
            "Un client demande d'installer sur 20 PC un logiciel dont la licence couvre 5 postes. De quelle forme de piratage s'agit-il ?",
        answers: [
            "Contrefaçon commerciale",
            "Copie par l'utilisateur final au-delà des postes licenciés",
            "Préinstallation frauduleuse",
        ],
        correct: "Copie par l'utilisateur final au-delà des postes licenciés",
        explanation:
            "Le logiciel est acquis légitimement, mais installé sur plus de postes que la licence ne l'autorise. Risques : poursuites, audit, absence de support et de correctifs. La bonne attitude est de refuser et de proposer une licence multi-postes ou une alternative libre.",
    },
    {
        id: 7,
        question: "Que signifie ESN ?",
        answers: [
            "Entreprise de services du numérique",
            "Équipement des systèmes numériques",
            "Éditeur de solutions normalisées",
        ],
        correct: "Entreprise de services du numérique",
        explanation:
            "Une ESN (ex-SSII) fait du conseil, du développement sur mesure, de l'intégration et de l'infogérance. Connaître la position de son interlocuteur aide à comprendre ses intérêts avant de négocier.",
    },
    {
        id: 8,
        question:
            "Un ERP cloud face à un tableur partagé : de quel type de concurrence s'agit-il ?",
        answers: ["Directe", "Indirecte", "Générique"],
        correct: "Indirecte",
        explanation:
            "Les deux remplissent la même fonction avec des produits différents : c'est la concurrence indirecte. La directe oppose des produits aux mêmes principes (deux ERP), la générique vise un même besoin large avec des offres très différentes.",
    },
    {
        id: 9,
        question:
            "Un éditeur annonce la fin de support d'une version. Dans quelle phase du cycle de vie est-elle ?",
        answers: ["Lancement", "Maturité", "Déclin"],
        correct: "Déclin",
        explanation:
            "Sans support, plus de correctifs de sécurité : le produit est en déclin. Pour le client, c'est un argument de négociation (remise de migration, assistance gratuite, formation incluse).",
    },
    {
        id: 10,
        question: "Quelle est la différence entre une position et un intérêt ?",
        answers: [
            "La position est ce qu'on demande, l'intérêt est ce qui motive la demande",
            "La position est secrète, l'intérêt est public",
            "Il n'y a aucune différence",
        ],
        correct:
            "La position est ce qu'on demande, l'intérêt est ce qui motive la demande",
        explanation:
            "« Je veux 8 000 000 FCFA » est une position ; couvrir l'équipe ou garder une marge est l'intérêt derrière. En découvrant les intérêts, on trouve plus de solutions que le seul prix.",
    },
    {
        id: 11,
        question: "Quels sont les trois niveaux d'objectifs à fixer avant de négocier ?",
        answers: [
            "Minimum, moyen, maximum",
            "Idéal, acceptable, limite",
            "Prix, délai, qualité",
        ],
        correct: "Idéal, acceptable, limite",
        explanation:
            "L'idéal est ce qu'on vise, l'acceptable ce qu'on peut signer, la limite le point au-delà duquel on arrête. Sans limite fixée à l'avance, on risque d'accepter un mauvais accord sous la pression.",
    },
    {
        id: 12,
        question: "Qu'est-ce que la solution de repli ?",
        answers: [
            "La dernière concession faite à l'autre partie",
            "Ce que l'on fait si la négociation échoue",
            "Le premier prix annoncé",
        ],
        correct: "Ce que l'on fait si la négociation échoue",
        explanation:
            "C'est votre alternative (retenir l'offre concurrente, développer en interne). Plus elle est bonne, plus vous avez le pouvoir de dire non, d'où l'intérêt de la préparer avant la rencontre.",
    },
    {
        id: 13,
        question:
            "Quelles sont les trois variables liées du triangle d'un projet logiciel ?",
        answers: [
            "Périmètre, coût, délai",
            "Code, tests, documentation",
            "Client, fournisseur, contrat",
        ],
        correct: "Périmètre, coût, délai",
        explanation:
            "Changer l'une oblige à ajuster au moins une autre. La qualité est au centre et ne doit pas servir de variable d'ajustement silencieuse : réduire les tests pour tenir le prix crée de la dette technique.",
    },
    {
        id: 14,
        question: "Comment faut-il faire une concession pendant une négociation ?",
        answers: [
            "Toujours contre une contrepartie",
            "Dès le début pour faire plaisir",
            "Jamais",
        ],
        correct: "Toujours contre une contrepartie",
        explanation:
            "Céder sans rien obtenir affaiblit votre position. On échange plutôt : par exemple, une baisse de 5 % contre un paiement de 40 % à la commande. Plus on a de variables à échanger, plus l'accord est facile.",
    },
    {
        id: 15,
        question: "Que veut dire facturer « en régie » ?",
        answers: [
            "Un prix fixe pour un périmètre défini",
            "Une facturation au temps passé (jour-homme)",
            "Un abonnement mensuel par utilisateur",
        ],
        correct: "Une facturation au temps passé (jour-homme)",
        explanation:
            "La régie est souple et adaptée aux besoins qui évoluent, mais elle risque une dérive budgétaire sans suivi. Le forfait, lui, fixe le prix pour un périmètre figé : tout changement passe par un avenant.",
    },
    {
        id: 16,
        question:
            "Un projet demande 60 jours-homme à 100 000 FCFA par jour avec 15 % d'aléas. Quel est le prix HT ?",
        answers: ["6 000 000 FCFA", "6 900 000 FCFA", "8 228 250 FCFA"],
        correct: "6 900 000 FCFA",
        explanation:
            "Prix HT = charge × TJM × (1 + taux d'aléas) = 60 × 100 000 × 1,15 = 6 900 000. Les 6 000 000 oublient les aléas ; les 8 228 250 sont le prix TTC (TVA de 19,25 % ajoutée).",
    },
    {
        id: 17,
        question: "Pourquoi raisonner en TCO plutôt que sur le seul prix d'achat ?",
        answers: [
            "Parce que le TCO est toujours plus bas",
            "Parce que le TCO additionne tous les coûts sur la durée d'usage",
            "Parce que le TCO ne concerne que les logiciels libres",
        ],
        correct: "Parce que le TCO additionne tous les coûts sur la durée d'usage",
        explanation:
            "Le coût total de possession compte l'acquisition, la mise en œuvre, l'exploitation et l'évolution ou la sortie, sur 3 à 5 ans. Une solution peu chère à l'achat peut coûter plus cher au final (un abonnement peut être moins cher à 3 ans mais plus cher à 5).",
    },
    {
        id: 18,
        question: "À quoi sert la grille pondérée pour comparer des offres ?",
        answers: [
            "À rendre la décision explicable avec des critères pondérés et notés",
            "À choisir toujours l'offre la moins chère",
            "À remplacer le contrat",
        ],
        correct: "À rendre la décision explicable avec des critères pondérés et notés",
        explanation:
            "On donne un poids à chaque critère (total 100 %), on note chaque offre de 1 à 5, puis on calcule la moyenne pondérée. Le choix devient justifiable et fournit des arguments en négociation. On peut aussi tester la sensibilité en changeant les poids.",
    },
    {
        id: 19,
        question: "Que règle la clause de réversibilité d'un contrat logiciel ?",
        answers: [
            "La récupération des données et du code et la transition vers un autre prestataire",
            "Le montant des pénalités de retard",
            "La durée de la garantie",
        ],
        correct:
            "La récupération des données et du code et la transition vers un autre prestataire",
        explanation:
            "Elle évite d'être prisonnier d'un fournisseur : formats ouverts, délai et assistance à la sortie. Elle est surtout importante pour les services SaaS, où les données sont hébergées chez le prestataire.",
    },
    {
        id: 20,
        question:
            "Quel document formalise la vérification de la conformité des livrables, avec des critères d'acceptation mesurables ?",
        answers: [
            "Le NDA",
            "La recette, formalisée par un procès-verbal (PV) signé",
            "Le devis",
        ],
        correct: "La recette, formalisée par un procès-verbal (PV) signé",
        explanation:
            "La recette est la vérification formelle des livrables. Des critères mesurables évitent les discussions floues, et le PV signé sert de preuve. Plus largement, tout engagement oral doit être confirmé par écrit.",
    },
];

export default Questions;