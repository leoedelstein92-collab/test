// Thèmes supplémentaires, rangés par famille pour varier les parties :
// vie de tous les jours, apparence et style, idées et société, situations imaginaires, relations.
// Même format que themes.js ; q(fr, en, es) raccourcit l'écriture des questions.
const q = (fr, en, es) => ({ fr, en, es });

const DAILY = [
  {
    id: "late", weights: { org: -3, laz: 1, clu: 0.5 },
    most: q("Qui est le plus souvent en retard ?", "Who is always the latest?", "¿Quién llega tarde más a menudo?"),
    least: q("Qui est toujours le plus ponctuel ?", "Who is always the most punctual?", "¿Quién es siempre el más puntual?"),
  },
  {
    id: "wakeup", weights: { laz: 2, org: -1, tem: 1 },
    most: q("Qui a le plus de mal à se lever le matin ?", "Who has the hardest time getting up in the morning?", "¿A quién le cuesta más levantarse por la mañana?"),
    least: q("Qui saute du lit le plus facilement le matin ?", "Who jumps out of bed the most easily?", "¿Quién salta de la cama con más facilidad?"),
  },
  {
    id: "mondays", weights: { laz: 1.5, tem: 1.5 }, tie: { glu: 0.05 },
    most: q("Qui déteste le plus les lundis ?", "Who hates Mondays the most?", "¿Quién odia más los lunes?"),
    least: q("Qui aime le plus les lundis ?", "Who loves Mondays the most?", "¿A quién le gustan más los lunes?"),
  },
  {
    id: "driver", weights: { org: 1, int: 1, spd: 0.5, clu: -2, tem: -1 },
    most: q("Qui serait le meilleur conducteur ?", "Who would be the best driver?", "¿Quién sería el mejor conductor?"),
    least: q("Qui serait le pire conducteur ?", "Who would be the worst driver?", "¿Quién sería el peor conductor?"),
  },
  {
    id: "neighbor", weights: { kin: 2, evi: -1, tem: -1, tal: -0.5, org: 0.5 },
    most: q("Qui serait le meilleur voisin ?", "Who would be the best neighbour?", "¿Quién sería el mejor vecino?"),
    least: q("Qui serait le pire voisin ?", "Who would be the worst neighbour?", "¿Quién sería el peor vecino?"),
  },
  {
    id: "tidy", weights: { org: 3, laz: -1 },
    most: q("Qui a la chambre la mieux rangée ?", "Who has the tidiest bedroom?", "¿Quién tiene la habitación más ordenada?"),
    least: q("Qui a la chambre la plus en bazar ?", "Who has the messiest bedroom?", "¿Quién tiene la habitación más desordenada?"),
  },
  {
    id: "phone", weights: { tal: 2, soc: 1.5, laz: 0.5 },
    most: q("Qui passe le plus de temps au téléphone ?", "Who spends the most time on the phone?", "¿Quién pasa más tiempo al teléfono?"),
    least: q("Qui passe le moins de temps au téléphone ?", "Who spends the least time on the phone?", "¿Quién pasa menos tiempo al teléfono?"),
  },
  {
    id: "sleep", weights: { laz: 2, glu: 0.5, spd: -1 },
    most: q("Qui fait les plus longues siestes ?", "Who takes the longest naps?", "¿Quién duerme las siestas más largas?"),
    least: q("Qui ne fait jamais la sieste ?", "Who never takes a nap?", "¿Quién nunca duerme la siesta?"),
  },
  {
    id: "fridge", weights: { glu: 2, laz: 0.5, cun: 0.5 }, tag: "glutton",
    most: q("Qui viderait le frigo en pleine nuit ?", "Who would raid the fridge in the middle of the night?", "¿Quién vaciaría la nevera en plena noche?"),
    least: q("Qui ne toucherait jamais au frigo des autres ?", "Who would never touch someone else's fridge?", "¿Quién nunca tocaría la nevera de otro?"),
  },
  {
    id: "dishes", weights: { org: 1, kin: 1, laz: -2 }, tie: { clu: -0.05 },
    most: q("Qui ferait la vaisselle sans qu'on lui demande ?", "Who would do the dishes without being asked?", "¿Quién fregaría los platos sin que se lo pidan?"),
    least: q("Qui laisserait la vaisselle s'empiler pendant des semaines ?", "Who would let the dishes pile up for weeks?", "¿Quién dejaría los platos acumularse durante semanas?"),
  },
  {
    id: "complain", weights: { tem: 2, tal: 1 },
    most: q("Qui râle le plus ?", "Who complains the most?", "¿Quién se queja más?"),
    least: q("Qui ne se plaint jamais ?", "Who never complains?", "¿Quién nunca se queja?"),
  },
  {
    id: "sporty", weights: { spd: 2, str: 1, laz: -1 },
    most: q("Qui est le plus sportif ?", "Who is the sportiest?", "¿Quién es el más deportista?"),
    least: q("Qui est le moins sportif ?", "Who is the least sporty?", "¿Quién es el menos deportista?"),
  },
  {
    id: "gamer", weights: { laz: 2, int: 0.5, glu: 0.5 },
    most: q("Qui passerait ses nuits sur les jeux vidéo ?", "Who would spend their nights playing video games?", "¿Quién pasaría las noches jugando a videojuegos?"),
    least: q("Qui n'a jamais touché une console ?", "Who has never touched a game console?", "¿Quién nunca ha tocado una consola?"),
  },
  {
    id: "student", weights: { int: 2, org: 1.5, laz: -1 }, tie: { kin: 0.05 },
    most: q("Qui aurait les meilleures notes à l'école ?", "Who would get the best grades at school?", "¿Quién sacaría las mejores notas en el colegio?"),
    least: q("Qui aurait les pires notes à l'école ?", "Who would get the worst grades at school?", "¿Quién sacaría las peores notas en el colegio?"),
  },
  {
    id: "dentist", weights: { bra: -2, cut: 0.5 }, tie: { unl: 0.05 },
    most: q("Qui aurait le plus peur d'aller chez le dentiste ?", "Who would be the most scared of the dentist?", "¿Quién tendría más miedo al dentista?"),
    least: q("Qui irait chez le dentiste en sifflotant ?", "Who would whistle on the way to the dentist?", "¿Quién iría al dentista silbando?"),
  },
  {
    id: "spender", weights: { ric: 2, sty: 1, glu: 0.5, int: -0.5 },
    most: q("Qui dépenserait le plus en shopping ?", "Who would spend the most on shopping?", "¿Quién gastaría más en compras?"),
    least: q("Qui dépenserait le moins en shopping ?", "Who would spend the least on shopping?", "¿Quién gastaría menos en compras?"),
  },
  {
    id: "lottery", weights: { glu: 1, hum: 0.5, int: -2 },
    most: q("Qui dilapiderait le plus vite un gain au loto ?", "Who would blow a lottery win the fastest?", "¿Quién se gastaría más rápido un premio de la lotería?"),
    least: q("Qui placerait le plus sagement un gain au loto ?", "Who would invest a lottery win most wisely?", "¿Quién invertiría con más cabeza un premio de la lotería?"),
  },
];

const LOOKS = [
  {
    id: "beautiful", weights: { bea: 3, cut: 0.5, scr: -0.5 },
    most: q("Qui est le plus beau ou la plus belle ?", "Who is the most good-looking?", "¿Quién es el más guapo o la más guapa?"),
    least: q("Qui est le moins beau ou la moins belle ?", "Who is the least good-looking?", "¿Quién es el menos guapo o la menos guapa?"),
  },
  {
    id: "dressed", weights: { sty: 3, ric: 0.5 },
    most: q("Qui est le mieux habillé ?", "Who is the best dressed?", "¿Quién viste mejor?"),
    least: q("Qui est le plus mal habillé ?", "Who is the worst dressed?", "¿Quién viste peor?"),
  },
  {
    id: "hair", weights: { sty: 2, bea: 1 },
    most: q("Qui a la plus belle coiffure ?", "Who has the best hairstyle?", "¿Quién tiene el mejor peinado?"),
    least: q("Qui a la coiffure la plus ratée ?", "Who has the worst hairstyle?", "¿Quién tiene el peor peinado?"),
  },
  {
    id: "vain", weights: { sty: 2, bea: 1, soc: 0.5, kin: -0.5 },
    most: q("Qui passe le plus de temps devant le miroir ?", "Who spends the most time in front of the mirror?", "¿Quién pasa más tiempo delante del espejo?"),
    least: q("Qui ne se regarde jamais dans un miroir ?", "Who never looks in a mirror?", "¿Quién nunca se mira al espejo?"),
  },
  {
    id: "model", weights: { bea: 2, sty: 2, clu: -1 },
    most: q("Qui ferait le meilleur mannequin ?", "Who would make the best fashion model?", "¿Quién sería la mejor modelo?"),
    least: q("Qui ferait le pire mannequin ?", "Who would make the worst fashion model?", "¿Quién sería el peor modelo?"),
  },
  {
    id: "makeover", weights: { sty: -3, bea: -1, laz: 0.5 },
    most: q("Qui aurait le plus besoin d'un relooking ?", "Who most needs a makeover?", "¿Quién necesita más un cambio de look?"),
    least: q("Qui aurait le moins besoin d'un relooking ?", "Who least needs a makeover?", "¿Quién necesita menos un cambio de look?"),
  },
  {
    id: "charm", weights: { bea: 1, hum: 1, soc: 1, kin: 0.5, rom: 0.5, scr: -1 },
    most: q("Qui a le plus de charme ?", "Who is the most charming?", "¿Quién tiene más encanto?"),
    least: q("Qui a le moins de charme ?", "Who is the least charming?", "¿Quién tiene menos encanto?"),
  },
  {
    id: "influencer", weights: { soc: 2, tal: 1, sty: 1, bea: 0.5, hum: 0.5 },
    most: q("Qui ferait le meilleur influenceur ?", "Who would be the best influencer?", "¿Quién sería el mejor influencer?"),
    least: q("Qui ferait le pire influenceur ?", "Who would be the worst influencer?", "¿Quién sería el peor influencer?"),
  },
];

// Idées et société : on reste sur des jeux de rôle (maire, débat, révolution…), sans parti ni opinion réelle.
const IDEAS = [
  {
    id: "dictator", weights: { evi: 2, lea: 2, cun: 1, tem: 1, hon: -0.5 }, tag: "leader",
    most: q("Qui deviendrait le pire dictateur ?", "Who would become the worst dictator?", "¿Quién se convertiría en el peor dictador?"),
    least: q("Qui serait incapable de devenir un tyran ?", "Who could never become a tyrant?", "¿Quién sería incapaz de convertirse en tirano?"),
  },
  {
    id: "revolution", weights: { bra: 2, lea: 2, tem: 0.5, hon: 0.5 }, tag: "leader",
    most: q("Qui mènerait une révolution ?", "Who would lead a revolution?", "¿Quién lideraría una revolución?"),
    least: q("Qui resterait chez lui pendant la révolution ?", "Who would stay home during the revolution?", "¿Quién se quedaría en casa durante la revolución?"),
  },
  {
    id: "mayor", weights: { lea: 1, kin: 1, int: 1, hon: 1, org: 1, laz: -1 }, tag: "leader",
    most: q("Qui serait le meilleur maire de ta ville ?", "Who would be the best mayor of your town?", "¿Quién sería el mejor alcalde de tu ciudad?"),
    least: q("Qui serait le pire maire de ta ville ?", "Who would be the worst mayor of your town?", "¿Quién sería el peor alcalde de tu ciudad?"),
  },
  {
    id: "debate", weights: { int: 1, tal: 1, cun: 1, lea: 0.5, hum: 0.5 },
    most: q("Qui gagnerait un débat télévisé ?", "Who would win a TV debate?", "¿Quién ganaría un debate televisado?"),
    least: q("Qui perdrait un débat télévisé en dix secondes ?", "Who would lose a TV debate in ten seconds?", "¿Quién perdería un debate televisado en diez segundos?"),
  },
  {
    id: "promises", weights: { hon: -2, cun: 1, tal: 1, lea: 1 },
    most: q("Qui ferait le plus de promesses électorales jamais tenues ?", "Who would make the most campaign promises and keep none?", "¿Quién haría más promesas electorales sin cumplir ninguna?"),
    least: q("Qui tiendrait toutes ses promesses électorales ?", "Who would keep every campaign promise?", "¿Quién cumpliría todas sus promesas electorales?"),
  },
  {
    id: "diplomat", weights: { int: 1, kin: 1, soc: 1, hon: 0.5, tem: -2 },
    most: q("Qui serait le meilleur diplomate ?", "Who would be the best diplomat?", "¿Quién sería el mejor diplomático?"),
    least: q("Qui déclencherait un incident diplomatique ?", "Who would cause a diplomatic incident?", "¿Quién provocaría un incidente diplomático?"),
  },
  {
    id: "eco", weights: { kin: 2, ric: -1, evi: -1, int: 0.5 },
    most: q("Qui est le plus écolo ?", "Who is the most eco-friendly?", "¿Quién es el más ecologista?"),
    least: q("Qui est le moins écolo ?", "Who is the least eco-friendly?", "¿Quién es el menos ecologista?"),
  },
  {
    id: "conspiracy", weights: { int: -2, tal: 1, unl: 0.5 },
    most: q("Qui croirait le plus aux théories du complot ?", "Who would believe the most conspiracy theories?", "¿Quién se creería más teorías de la conspiración?"),
    least: q("Qui démonterait toutes les théories du complot ?", "Who would debunk every conspiracy theory?", "¿Quién desmontaría todas las teorías de la conspiración?"),
  },
  {
    id: "strike", weights: { laz: 1, tem: 1, tal: 1, org: -1 },
    most: q("Qui ferait grève le plus souvent ?", "Who would go on strike the most often?", "¿Quién haría huelga más a menudo?"),
    least: q("Qui ne ferait jamais grève ?", "Who would never go on strike?", "¿Quién nunca haría huelga?"),
  },
  {
    id: "rebel", weights: { org: -2, bra: 1, tem: 1 },
    most: q("Qui est le plus rebelle ?", "Who is the most rebellious?", "¿Quién es el más rebelde?"),
    least: q("Qui respecte le plus les règles ?", "Who follows the rules the most?", "¿Quién respeta más las normas?"),
  },
  {
    id: "oldschool", weights: { org: 1, tem: 1, hum: -1, soc: -1, spd: -0.5 },
    most: q("Qui est le plus vieux jeu ?", "Who is the most old-fashioned?", "¿Quién está más chapado a la antigua?"),
    least: q("Qui est le plus dans l'air du temps ?", "Who is the most up to date?", "¿Quién está más a la moda?"),
  },
  {
    id: "philosopher", weights: { int: 2, tal: 0.5, spd: -0.5 },
    most: q("Qui ferait le meilleur philosophe ?", "Who would be the best philosopher?", "¿Quién sería el mejor filósofo?"),
    least: q("Qui ferait le pire philosophe ?", "Who would be the worst philosopher?", "¿Quién sería el peor filósofo?"),
  },
  {
    id: "crazyideas", weights: { hum: 1, clu: 1, tal: 0.5, int: 0.5 },
    most: q("Qui a les idées les plus farfelues ?", "Who has the craziest ideas?", "¿Quién tiene las ideas más disparatadas?"),
    least: q("Qui a les idées les plus raisonnables ?", "Who has the most sensible ideas?", "¿Quién tiene las ideas más sensatas?"),
  },
  {
    id: "lawyer", weights: { cun: 1.5, int: 1, tal: 1, org: 0.5 },
    most: q("Qui serait le meilleur avocat ?", "Who would be the best lawyer?", "¿Quién sería el mejor abogado?"),
    least: q("Qui serait le pire avocat ?", "Who would be the worst lawyer?", "¿Quién sería el peor abogado?"),
  },
  {
    id: "liar", weights: { hon: -3, cun: 1 },
    most: q("Qui ment le plus ?", "Who lies the most?", "¿Quién miente más?"),
    least: q("Qui est le plus honnête ?", "Who is the most honest?", "¿Quién es el más honesto?"),
  },
];

const SITUATIONS = [
  {
    id: "zombies", weights: { str: 1, bra: 1, spd: 1, cun: 1 }, tag: "survivor", anti: "doomed",
    most: q("Qui survivrait le plus longtemps à une invasion de zombies ?", "Who would survive a zombie outbreak the longest?", "¿Quién sobreviviría más tiempo a una invasión zombi?"),
    least: q("Qui se ferait mordre en premier par un zombie ?", "Who would get bitten by a zombie first?", "¿A quién mordería primero un zombi?"),
  },
  {
    id: "horror", weights: { unl: 2, clu: 1, bra: -1, int: -1 }, tag: "doomed", anti: "survivor",
    most: q("Qui mourrait en premier dans un film d'horreur ?", "Who would die first in a horror movie?", "¿Quién moriría primero en una película de terror?"),
    least: q("Qui serait le dernier survivant d'un film d'horreur ?", "Who would be the last survivor of a horror movie?", "¿Quién sería el último superviviente de una película de terror?"),
  },
  {
    id: "spy", weights: { cun: 2, int: 1, spd: 0.5, tal: -1, clu: -1 },
    most: q("Qui ferait le meilleur espion ?", "Who would be the best spy?", "¿Quién sería el mejor espía?"),
    least: q("Qui ferait le pire espion ?", "Who would be the worst spy?", "¿Quién sería el peor espía?"),
  },
  {
    id: "heist", weights: { cun: 2, spd: 1, org: 0.5, hon: -1, clu: -1 },
    most: q("Qui réussirait le casse du siècle ?", "Who would pull off the heist of the century?", "¿Quién daría el golpe del siglo?"),
    least: q("Qui se ferait arrêter dès le début du casse ?", "Who would get caught at the start of the heist?", "¿A quién detendrían al principio del atraco?"),
  },
  {
    id: "detective", weights: { int: 2, cun: 1, org: 0.5, clu: -0.5 },
    most: q("Qui ferait le meilleur détective ?", "Who would be the best detective?", "¿Quién sería el mejor detective?"),
    least: q("Qui ferait le pire détective ?", "Who would be the worst detective?", "¿Quién sería el peor detective?"),
  },
  {
    id: "mars", weights: { bra: 2, int: 1, str: 0.5 },
    most: q("Qui enverrais-tu en premier sur Mars ?", "Who would you send to Mars first?", "¿A quién enviarías primero a Marte?"),
    least: q("Qui ne faudrait surtout pas envoyer sur Mars ?", "Who should never be sent to Mars?", "¿A quién no habría que enviar nunca a Marte?"),
  },
  {
    id: "camping", weights: { kin: 1, bra: 1, str: 0.5, tem: -1 }, tag: "survivor", anti: "doomed",
    most: q("Qui serait le meilleur compagnon de camping ?", "Who would be the best camping buddy?", "¿Quién sería el mejor compañero de acampada?"),
    least: q("Qui serait le pire compagnon de camping ?", "Who would be the worst camping buddy?", "¿Quién sería el peor compañero de acampada?"),
  },
  {
    id: "karaoke", weights: { soc: 2, tal: 1, hum: 0.5, clu: -0.5 }, tag: "dancer",
    most: q("Qui mettrait le feu au karaoké ?", "Who would rock the karaoke night?", "¿Quién arrasaría en el karaoke?"),
    least: q("Qui viderait la salle au karaoké ?", "Who would empty the room at karaoke?", "¿Quién vaciaría la sala en el karaoke?"),
  },
  {
    id: "party", weights: { soc: 3, hum: 1, ric: 0.5 }, tag: "dancer",
    most: q("Qui organiserait la meilleure fête ?", "Who would throw the best party?", "¿Quién organizaría la mejor fiesta?"),
    least: q("Qui organiserait la fête la plus ennuyeuse ?", "Who would throw the most boring party?", "¿Quién organizaría la fiesta más aburrida?"),
  },
  {
    id: "interview", weights: { int: 1, org: 1, sty: 0.5, hon: 0.5, soc: 0.5, clu: -1, tem: -1 },
    most: q("Qui réussirait le mieux un entretien d'embauche ?", "Who would ace a job interview?", "¿Quién bordaría una entrevista de trabajo?"),
    least: q("Qui raterait le plus son entretien d'embauche ?", "Who would bomb a job interview?", "¿Quién fracasaría en una entrevista de trabajo?"),
  },
  {
    id: "boss", weights: { tem: 2, evi: 1, lea: 1, kin: -1 },
    most: q("Qui serait le patron le plus tyrannique ?", "Who would be the bossiest boss?", "¿Quién sería el jefe más tiránico?"),
    least: q("Qui serait le patron le plus cool ?", "Who would be the coolest boss?", "¿Quién sería el jefe más majo?"),
  },
  {
    id: "colleague", weights: { kin: 1, int: 1, org: 1, laz: -1, tem: -1 },
    most: q("Qui serait le meilleur collègue de bureau ?", "Who would be the best office colleague?", "¿Quién sería el mejor compañero de oficina?"),
    least: q("Qui serait le pire collègue de bureau ?", "Who would be the worst office colleague?", "¿Quién sería el peor compañero de oficina?"),
  },
  {
    id: "boardgame", weights: { tem: 2, evi: 0.5, kin: -0.5 },
    most: q("Qui serait le plus mauvais perdant au Monopoly ?", "Who would be the sorest loser at Monopoly?", "¿Quién sería el peor perdedor en el Monopoly?"),
    least: q("Qui serait le plus beau joueur au Monopoly ?", "Who would be the best sport at Monopoly?", "¿Quién sabría perder mejor en el Monopoly?"),
  },
  {
    id: "cheater", weights: { cun: 2, hon: -2, evi: 0.5 },
    most: q("Qui tricherait le plus aux jeux de société ?", "Who would cheat the most at board games?", "¿Quién haría más trampas en los juegos de mesa?"),
    least: q("Qui ne tricherait jamais aux jeux de société ?", "Who would never cheat at board games?", "¿Quién nunca haría trampas en los juegos de mesa?"),
  },
  {
    id: "queue", weights: { cun: 1, evi: 1, tem: 1, kin: -1, hon: -0.5 },
    most: q("Qui doublerait tout le monde dans la file d'attente ?", "Who would cut in line in front of everyone?", "¿Quién se colaría en la cola delante de todos?"),
    least: q("Qui laisserait passer tout le monde dans la file d'attente ?", "Who would let everyone go first in line?", "¿Quién dejaría pasar a todos en la cola?"),
  },
];

const RELATIONS = [
  {
    id: "babysitter", weights: { kin: 2, bra: 1, org: 0.5, hon: 0.5, evi: -2, clu: -1, laz: -1 },
    most: q("Qui serait le meilleur baby-sitter ?", "Who would be the best babysitter?", "¿Quién sería el mejor canguro?"),
    least: q("Qui serait le pire baby-sitter ?", "Who would be the worst babysitter?", "¿Quién sería el peor canguro?"),
  },
  {
    id: "secret", weights: { tal: -2, hon: 1.5, kin: 0.5 },
    most: q("Qui garderait le mieux un secret ?", "Who would keep a secret best?", "¿Quién guardaría mejor un secreto?"),
    least: q("Qui répéterait ton secret à tout le monde ?", "Who would tell your secret to everyone?", "¿Quién contaría tu secreto a todo el mundo?"),
  },
  {
    id: "gossip", weights: { tal: 2, soc: 1, hon: -1 },
    most: q("Qui est la plus grosse commère ?", "Who is the biggest gossip?", "¿Quién es el más cotilla?"),
    least: q("Qui ne raconte jamais de ragots ?", "Who never gossips?", "¿Quién nunca cotillea?"),
  },
  {
    id: "birthday", weights: { org: -2, kin: -1, laz: 0.5, clu: 0.5 },
    most: q("Qui oublierait ton anniversaire ?", "Who would forget your birthday?", "¿Quién olvidaría tu cumpleaños?"),
    least: q("Qui n'oublierait jamais ton anniversaire ?", "Who would never forget your birthday?", "¿Quién nunca olvidaría tu cumpleaños?"),
  },
  {
    id: "holiday", weights: { hum: 1, kin: 1, soc: 1, ric: 1, tem: -1 },
    most: q("Avec qui partirais-tu le plus volontiers en vacances ?", "Who would you most like to go on holiday with?", "¿Con quién te irías de vacaciones con más ganas?"),
    least: q("Avec qui ne partirais-tu surtout pas en vacances ?", "Who would you never go on holiday with?", "¿Con quién nunca te irías de vacaciones?"),
  },
  {
    id: "petcare", weights: { kin: 2, laz: -1, clu: -1 },
    most: q("Qui s'occuperait le mieux de ton animal de compagnie ?", "Who would take the best care of your pet?", "¿Quién cuidaría mejor de tu mascota?"),
    least: q("Qui s'occuperait le plus mal de ton animal de compagnie ?", "Who would take the worst care of your pet?", "¿Quién cuidaría peor de tu mascota?"),
  },
  {
    id: "hugs", weights: { kin: 2, cut: 1, scr: -1 },
    most: q("Qui fait les meilleurs câlins ?", "Who gives the best hugs?", "¿Quién da los mejores abrazos?"),
    least: q("Qui fait les pires câlins ?", "Who gives the worst hugs?", "¿Quién da los peores abrazos?"),
  },
  {
    id: "polite", weights: { kin: 2, tem: -2, org: 0.5 },
    most: q("Qui est le plus poli ?", "Who is the most polite?", "¿Quién es el más educado?"),
    least: q("Qui est le plus malpoli ?", "Who is the rudest?", "¿Quién es el más maleducado?"),
  },
  {
    id: "jealous", weights: { tem: 1.5, rom: 1, evi: 0.5, kin: -0.5 },
    most: q("Qui est le plus jaloux ?", "Who is the most jealous?", "¿Quién es el más celoso?"),
    least: q("Qui est le moins jaloux ?", "Who is the least jealous?", "¿Quién es el menos celoso?"),
  },
  {
    id: "romantic", weights: { rom: 3, kin: 0.5 },
    most: q("Qui est le plus romantique ?", "Who is the most romantic?", "¿Quién es el más romántico?"),
    least: q("Qui est le moins romantique ?", "Who is the least romantic?", "¿Quién es el menos romántico?"),
  },
  {
    id: "grandparent", weights: { kin: 2, glu: 0.5, cut: 0.5 },
    most: q("Qui serait le grand-parent le plus gâteau ?", "Who would be the most doting grandparent?", "¿Quién sería el abuelo más consentidor?"),
    least: q("Qui serait le grand-parent le plus sévère ?", "Who would be the strictest grandparent?", "¿Quién sería el abuelo más severo?"),
  },
];

const FAMILIES = { daily: DAILY, looks: LOOKS, ideas: IDEAS, situations: SITUATIONS, relations: RELATIONS };

module.exports = Object.entries(FAMILIES).flatMap(([family, list]) => list.map((t) => ({ ...t, family })));
