const Discord = require('discord.js');
var fs = require('fs');
var express = require('express');


const TOKEN = '';
const PREFIX = '';
const GMaps = 'gmaps.js';

var bot = new Discord.Client();

bot.on('ready', function() {
    console.log('Ready');
	console.log('Bot has started, with '+ bot.users.size + ' users, in ' + bot.channels.size +' channels of ' + bot.guilds.size + ' guilds');
	this.user.setActivity("Pokémon Go");
});

bot.on('message', function(message){
var datelog = new Date();
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');

    /*switch (args[0].toLowerCase()) {
        case 'bienvenue':
            message.channel.send('Bonjour et bienvenue sur le discord de Cholet !');
            break;
		case 'bonjour tout le monde':
			message.channel.send('Salut, la forme ?');
			break;
		case 'bonsoir':
			message.channel.send('Bonne soirée à toi, ' + message.author + " " );
		break;
        case 'ping':
            message.channel.send('Pong!');
            break;
		case 'a':
			switch (args[1]) {
				case 'demain':
					message.channel.send('Bonne nuit, A demain ' + message.author + ", j'espère te revoir bientôt !");
					message.react("🌜");
					message.react("💤");
				break;
			}
			case 'toujours':
			switch (args[1]) {
				case 'enretard':
					message.react("😱");
					message.react("😥");
					message.channel.send('Désolé ' + message.author + ", j'essayerais d'être plus réactif la prochaine fois !");
				break;
			}
		case '!jenesaispas' :

			switch (args[1]) {
				case 'tyranocif' :
					message.channel.send("", {embed: {
						title: "**__Les stats de " + args[1] + " sont : __**",
						color: 0xff0000,
						description: "**CP Max :**\n4491\n**Boost météo :**\nSoleil",
						thumbnail: {
							url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"
						},
						footer: {
							text: "Discord bot by Mr1Dridri#4991"
						}
					}}).catch(console.error);
				break;
				var args = message.content.substr(4);
				if(args.length === 0){
					message.channel.send('veuillez indiquer le raid souhaité ' + message.author);}
				break;
			}

		case '':
			message.channel.send('');
			break;


		//default:
           // message.channel.send('Invalid command');
        //break;
    }*/

	if (message.content.startsWith("!combat")) {//debut raid
	
	
		var args = message.content.substr(6);
		if(args.length === 0){
        message.channel.send("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x: Vous n'avez pas préciser le raid :x: ",
          footer: {
            text: "Réessayez !"
          }
        }});
		}
		else {
			var compomsg = message.content.substring(PREFIX.length).split(' ');
			var longueur = compomsg.length;
			var nompoke = compomsg[1];
			var arene = "";
			for (i=2; i<longueur-1 ; i++) {
			var arene = arene + compomsg[i] + " ";	}
			var horaire = "";
			var horaire = horaire + compomsg[i];
			var i = 0;
			var heure = "";
			var minute = "";
			while ( i < 2 ){//définition de l'heure
				if ( horaire[i] !== "h" || horaire[i] !== "H" || horaire[i] !== ":" ){
					heure = heure + horaire[i];
				}
				i=i+1;

			}// fin définition de l'heure
			i=i+1;
			while ( i < 5 ){//définition des minute
					minute = minute + horaire[i];
				i=i+1;

			}

			var lien = " ";

			if (nompoke === 'registeel' || nompoke === 'Registeel') { lien = "https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_379_00.png"; };

			if (nompoke === 'help') { message.channel.send("Pour proposer un raid : !raid <nom du pokemon> <nom de l'arene> <horaire propose>\nEx : !raid Mewtwo Jupiter 8h30"); lien = "1";};
			if (lien === ' ') { message.channel.send("Erreur, vérifie le nom de ton pokemon");}
	  //else message.channel.send("Merci de verifier le nom du pokemon indique" ) break;
			else { message.channel.send("@everyone", {embed: {
				title: "Demande de raid :",
				color: 0x1394e3,
				description: "Souhaitez vous faire le raid " + compomsg[1] + "\nà l'arène "+ arene + "à " + horaire + " :question:\n:regional_indicator_y: : OUI ou :regional_indicator_n: : NON",
				thumbnail: {
					//url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"},
					url: lien
				},
				footer: {
					text: "Merci d'indiquer votre réponse avec les réactions ci-dessous."
				}
			}})
			.then(function (message) {
				message.react("🇾")// obtenir le unicode de l'émoji : taper " \:regional_indicator_y: " sur discord surtout avec l'antislash , copier coller le resultat ici
				message.react("🇳")
              //message.pin()
              //message.delete()
				lien === "";
				lien = "";
            }).catch(console.error);
			}

		}
	}//fin raid

	if (message.content.startsWith("!couleur")) {//debut couleur
	
	
		var args = message.content.substr(9);
		if(args.length === 0){
			message.channel.send("Merci d'indiquer ta couleur");
		}
		else {
		if (args === 'bleu'){
			message.channel.send("Tu as choisi la couleur bleu :thumbsup: ");
			let role = message.guild.roles.find("name", "Team_Bleu");
			let member = message.member;
			member.addRole(role).catch(console.error);
		};
		if (args === 'rouge'){
			message.channel.send("Tu as choisi la couleur rouge :thumbsup: ");
			let role = message.guild.roles.find("name", "Team_Rouge");
			let member = message.member;
			member.addRole(role).catch(console.error);
		};
		if (args === 'jaune'){
			message.channel.send("Tu as choisi la couleur jaune :thumbsup: ");
			let role = message.guild.roles.find("name", "Team_Jaune");
			let member = message.member;
			member.addRole(role).catch(console.error);
		};
	}
	}//fin couleur

	if (message.content.startsWith("!stat")) {//début stat
	
	
		var args = message.content.substr(6);
		var nompoke1 = message.content.substring(PREFIX.length).split(' ');
		var nompoke = nompoke1[1];
		var cpmax = "";
		var type1 = "";
		var type2 = "";
		var boost = "";
		if (nompoke === 'tyranocif') { lien = "https://pokemongo.gamepress.gg/sites/pokemongo/files/2018-01/pokemon_icon_248_00.png"; cpmax = "3670"; type1 = "Roche <:roche:469151871651676161>" ; type2 = "Ténebre <:tenebre:469151870968004608>"; boost = "Soleil"};
		if (nompoke === 'mysdibulle') { lien = "http://www.pokepedia.fr/images/thumb/c/cd/Mysdibule-RS.png/375px-Mysdibule-RS.png"; cpmax = "2500"; type1 = "Fée" ; type2 = "Ténebre"; boost = "Soleil"};
		var faiblesse1 = "";
		var faiblesse2 = "";
		if (type1 === 'Roche' || type2 === 'Roche') {faiblesse1 = "Combat :combat:";}
		if (type1 === 'Fée' || type2 === 'Roche') {faiblesse1 = "Eau :eau:";}
		message.channel.send("", {embed: {
			title: "**__Les stats de " + nompoke + " sont : __**",
			color: 0xff0000,
			description: "**CP Max :**\n" + cpmax +"\n**Boost météo :**\n" + boost + "\n**Type 1 :**\n" + type1 + "\n**Type 2 :**\n" + type2 + "\n**Faiblesses :**\n" + faiblesse1 + " <:combat:469151871194497054>" + faiblesse2 + "",
			thumbnail: {
				url: lien//"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzZbvI-UTD4M-mDnUuld-MMLNU_j420uu84pZxVxpDnbIqxMwuw"
			},
			footer: {
				text: "Discord bot by Mr1Dridri#4991"
			}
		}}).catch(console.error);
	}//fin stat

	/*if (message.content.startsWith("!news") || message.content.startsWith("!newz") || message.content.startsWith("!new")) {//début news
	
	
		message.channel.send("", {embed: {
			title: "Les événements en cours / à venir sont :",
			color: 0x1394e3,
			description: "**__Du  01/09 au 02/09 :__**\n- Challenge Numéro 3 : Décrochez les bonus de poussière d'étoile en réalisant des quêtes de terrain.\n- Spawn grandement augmenté de Goélise avec la possibilité de l'obtenir en shiny.\n**__Community Day le 22/09 de 11h à 14h__**\nGermignon + Triple XP à la capture\n**__Boss T5 du 17/08 au 20/09 :__**\n- Regirock\n**__Récompense 7ème tampon du mois de septembre__** :\nEntei :",
			thumbnail: {
				url: "https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_278_00_shiny.png"
			},
			image: {
				url: "https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_244_00.png"
			},
			footer: {
				text: "Discord bot by Mr1Dridri#4991"
			}
		}}).catch(console.error);
	}//fin news


	if (message.content.startsWith("!arene") || message.content.startsWith("!arène")) {//début arene
	
//var args = message.content.substr(6);
		var args = message.content.substring(PREFIX.length).split(' ');
		var test = message.content.substr(7);
		var nomarene = args[1];
		var nomarene2 = args[2];
		var nomarene3 = args[3];
		var nomarene4 = args[4];
		var nomarene5 = args[5];
		var lat = 0;
		var longu = 0;
		var urlimage = "";
		var imgarene = "";
		var nomdef = "";
		if(test.length === 0){
			message.channel.send("", {embed: {
			title: "Erreur:",
			color: 0xff0000,
			description: " :warning: Vous n'avez pas préciser le nom de l'arène :warning: ",
			footer: {
				text: "Réessayez !"
			}
			}});
		}
		else{*/
		/*cadran solaire
		chapelle chapeau
		road to mexico
		interlude
		musée du textile
		aire de jeux pour enfants
		centre social du planty
		carteron
		Mobilisés De La 2eme Legion
		Mission 1899
		Club House Cholet
		air de jeux
		eglise du sacr coeur
		chapelle jeanne d'arc
		marthyrs de la résistance
		brickart
		jardin de verre
		crayon geant du bretonnais
		église notre dame
		caisse d'épargne
		porte parc de mail
		stele du 8 mai 1945
		winston churchill
		esapce performance
		Piscine De Glisseo
		the chaos
		le crayon geant
		uranus
		aire de jeux camoufler
		cci
		guitare
		*/


			/*var erreurs = 0;
			var nbarenecholet = 34;
			if (nomarene === "solaire" || nomarene === "cadran"){lat = 47.059029;longu = -0.882278;imgarene = "https://lh5.ggpht.com/SE7dOsY_3p0N2pecv7b2g2wln8V2LvzL7Cday-nPv_6E4catRgx8t7KGKhplkoAGbHD0qCKooGVyE9rTW1bP", nomdef = "Cadran Solaire"} else(erreurs = erreurs +1);
			if (nomarene === "chapeau" || nomarene === "chapelle" && nomarene2 === "chapeau" ) {lat = 47.066117; longu = -0.864714;imgarene = "https://lh4.ggpht.com/Yzm5CdOXwPN3OBgwDMP7Czrs2yt2hzEXqgBlsScuxxdHjyDEJHbloH-YAZYD0Ss-bXhBDffne5iXoltIROV7"; nomdef = "Chapelle Chapeau"} else(erreurs = erreurs +1);
			if (nomarene === "road"  || nomarene === "mexico"  || nomarene === "faubourg") {lat = 47.075414; longu = -0.8379919999999856; imgarene = "https://lh6.ggpht.com/363DpucLQ_B7l0GQQivCQzcmVOrvqbXnL1gE3xBXwN1x7i3ObAQJ5DZujPkI_07fsRNfVJeNbs6Vgb2LE6k"; nomdef = "Road to Mexico"} else(erreurs = erreurs +1);
			if (nomarene === "interlude") {lat = 47.058293; longu = -0.8897130000000288; imgarene = "https://lh5.ggpht.com/_z1kdiomrRSlsESdNvlyOefd1LiN8J28zrZr5NfxbEz1bpE5YEd1BYDSQ0uXcoKBZuIjXbaCDNOhvaJK5yk"; nomdef = "Interlude"} else(erreurs = erreurs +1);
			if (nomarene === "musee" || nomarene === "musée" ) {lat = 47.068311; longu = -0.8979630000000043; imgarene = "https://lh4.ggpht.com/7x9g1lnPnLv7qomcPeJ_hE2XFIOw9UTqRtdtCjqkhYSDSAoN_FarrWI1k6-RypaOHguq_g0-vEeX9zK7LT8I"; nomdef = "Musée du Textile"} else(erreurs = erreurs +1);
			if ( (nomarene === "enfants" || nomarene === "enfant" ) || (nomarene === "air" || nomarene === "aire" ) && nomarene2 === "de" && (nomarene3 === "jeux" || nomarene3 === "jeu") && nomarene4 === "pour" && nomarene5 === "enfants" ) {lat = 47.055342; longu = -0.862592; imgarene = "https://lh4.ggpht.com/959KPEed7WTa29lLdQmKb5_oYkN70TmYiUowsWupd6RuIyX7h-EQKcfhfL2GWZglRWbeIxs9kH_k7Pnhjdg"; nomdef = "Aire De Jeux Pour Enfants"} else(erreurs = erreurs +1);
			if (nomarene === "planty" || nomarene === "centre" && nomarene2 === "social" && nomarene3 === "du" && nomarene4 === "planty") {lat = 47.05763499999999; longu = -0.8676070000000209; imgarene = "https://lh6.ggpht.com/T_1JDv0QX4pilCuBGlhSnguXRPrrDuqDx7QqIhOXZYTCB7QQ8Nk6xeuS2Z8TLGGWwnSFrG67dVEICKbOGPA"; nomdef = "Centre Social du Planty" } else(erreurs = erreurs +1);
			if (nomarene === "carteron" || nomarene === "calvaire" && nomarene2 === "du" && nomarene3 === "carteron") {lat = 47.050946999999994; longu = -0.8684990000000425; imgarene = "https://lh3.ggpht.com/88ha-wDH9mCEDud0uB_oEPdQEPFcyxK3_9J3kI8_yaWMvzHbmTHhVn9GD6x9LgRLsA_ojJqnI-trqxC08T_c"; nomdef = "Le Calvaire du Carteron" } else(erreurs = erreurs +1);
			if (nomarene === "mobilisés" || nomarene === "mobilise" || nomarene === "mobilisé" ) {lat = 47.06704; longu = -0.8732310000000325; imgarene = "https://lh6.ggpht.com/iBa1buFrz8RJxhHbzP8mZBLaiaHnSBRRl569HD69AH6ibLgfVBg6C43x03gu13dvl04wBu2JmS02n5ydNOLfXw"; nomdef = "Mobilisés De La 2eme Legion" } else(erreurs = erreurs +1);
			if (nomarene === "mission" || nomarene === "1899" || nomarene === "mission" && nomarene2 === "1899" ) {lat = 47.070668; longu = -0.8837899999999763; imgarene = "https://lh3.ggpht.com/U-ZhFoZgvDjsqCGH3u7ZVnH4wr95DZYWIK58NewYRUoKqItWsRNEKLLdMqWdDIBh0XVQSwDENEZ1FLiG-YU"; nomdef = "Mission 1899" } else(erreurs = erreurs +1);
			if (nomarene === "club" || nomarene === "golf" || nomarene === "club" && nomarene2 === "house" ) {lat = 47.081186; longu = -0.8978879999999663; imgarene = "https://lh4.ggpht.com/KXSyK3kCYmuinzLIxiAeuRsYtQrq70ybuBIcnroBwZfCQeaEwLaKqYuj5H2Xukn_kDNolOLcjRG-yL_4USNb"; nomdef = "Club House Cholet" } else(erreurs = erreurs +1);
			if (nomarene === "air" || nomarene === "air" && nomarene2 === "de" && nomarene3 === "jeux") {lat = 47.063109; longu = -0.8961420000000544; imgarene = "https://lh5.ggpht.com/bg_iWMwjgw2rZbKdBt_sWSvQIcDaPoK5_d-1VhKW5F5s064fyyEDSpBVi_8pyr46oWjkY-OMj7YKAsyKfVDXEw"; nomdef = "Air De Jeux" } else(erreurs = erreurs +1);
			if (nomarene === "sacre" || nomarene === "coeur" || nomarene === "sacré" || nomarene === "eglise" && nomarene2 === "du" || nomarene === "église" && nomarene2 === "sacré"  ) {lat = 47.067024999999994; longu = -0.8871589999999969; imgarene = "https://lh5.ggpht.com/KbMPAPHtKPY2Yy2LvvirImlcNPyqH4c5as-7KE05Qq39Vz53cEVVOVpKh8fUEf4ygkMKmW-wuyGo572GSbJ7-g"; nomdef = "Eglise du Sacré Coeur" } else(erreurs = erreurs +1);
			if (nomarene === "jeanne" || nomarene === "chapelle" && nomarene2 === "jeanne" ) {lat = 47.064756; longu = -0.8852890000000571; imgarene = "https://lh5.ggpht.com/aEdTwVpUu4nfntv5HOvSuafjBzMgN64KcODRCdRumbZ86QllLRAO_egTE6cMay4cCAHT3juGWniwZNwD9cZq5Q"; nomdef = "Chapelle Jeanne D'arc" } else(erreurs = erreurs +1);
			if (nomarene === "martyrs" || nomarene === "martyr" || nomarene === "martirs" || nomarene === "resistance" || nomarene === "résistance" ||  nomarene === "martyrs" && nomarene2 === "de" ) {lat = 47.062236999999996; longu = -0.8862960000000157; imgarene = "https://lh3.ggpht.com/1FR4gcUlzQEqAz3Li7-AtZIDkeNgAHTgy2M3zfLSAUc1LAmazsY6-ehztTnph3Mm0xS8A2nO7iFg6gV8HVh8"; nomdef = "Martyrs De La Resistance" } else(erreurs = erreurs +1);
			if (nomarene === "brick" || nomarene === "brickart" || nomarene === "brick'art" ) {lat = 47.05975299999999; longu = -0.8785410000000411; imgarene = "https://lh5.ggpht.com/FCPoIDSs2zxqPM0OVZYhWqfZzNw6qdm1O5bJFEOh6ecAeSXhy312n82v4w7sSxZtbRpCzq8urJUHx6wE-VkZ"; nomdef = "Brick'art" } else(erreurs = erreurs +1);
			if (nomarene === "jardin" || nomarene === "verre" ) {lat = 47.06269799999999; longu = -0.880877000000055; imgarene = "https://lh4.ggpht.com/pxcX76GaluuF2QB3ZZsjJjOnlhCz_QmtYXbjc_1OvpLDzkQ4_b9bohSleCmszX-N8cl0t3DLk8HQw62YlnKu"; nomdef = "Jardin De Verre" } else(erreurs = erreurs +1);
			if (nomarene === "bretonnais" || nomarene === "crayon" && (nomarene2 === "geant" || nomarene2 === "géant") && (nomarene3 === "du" || nomarene === "bretonnais" )) {lat = 47.060195; longu = -0.886594999999943; imgarene = "https://lh3.googleusercontent.com/E66sfY2Il25ByWkaYC-tG45Kq0Z0WbiaUOZ7MTa_Sp8a8j9lblNwwCDr2lhBPvsWQWPi-rBHmUy4hFhMcT7Txw"; nomdef = "Crayon Géant Du Bretonnais" } else(erreurs = erreurs +1);
			if (nomarene === "dame" || nomarene === "notre-dame" || (nomarene === "eglise" || nomarene === "église") && (nomarene2 === "notre-dame" || nomarene2 === "notre") ) {lat = 47.060882; longu = -0.8815210000000206; imgarene = "https://lh3.googleusercontent.com/MoWfEYAv0XWrFJsB1ZC3x8DWkKWuaYD9ZIXYb3tKJLoXT0h8rgK-otV-Rtj8CbM4NF86qyB8UvEJIK2NC4YJ"; nomdef = "Église Notre-Dame" } else(erreurs = erreurs +1);
			if (nomarene === "caisse" || nomarene === "epargne" || nomarene === "épargne" ) {lat = 47.060255; longu = -0.880151000000069; imgarene = "https://lh6.ggpht.com/pI1ucWUxSpzhTG__Xkc0ChLA4BE74M8xB3H3nviwgonnyRMg-Pu4bvvshMx8ghIZNjFUF5cfRatUuw39TOmm"; nomdef = "Caisse D'épargne" } else(erreurs = erreurs +1);
			if (nomarene === "mail" || nomarene === "porte" || nomarene === "parc" ) {lat = 47.059507; longu = -0.8814549999999599; imgarene = "https://lh3.ggpht.com/yI6Ap43_odiS8MqSAGVdS9AqevtJeR1qAfC9UY6QByDp2biUQcOKvXvELe44jIf4-u3vnmcOndds1rrOvjk"; nomdef = "Porte Parc De Mail" } else(erreurs = erreurs +1);
			if (nomarene === "stele" || nomarene === "stèle" || nomarene === "1945" ) {lat = 47.056444; longu = -0.8786360000000286; imgarene = "https://lh6.ggpht.com/4xh9VKhgJYg4hmmwLt3_NS6ipqzx_89bx8J5wK_-vBnGZhmCqf6WZ7hCMKLMf6KtKNwoczMcbIwlmtpyEns"; nomdef = "Stele Du 8 Mai 1945" } else(erreurs = erreurs +1);
			if (nomarene === "winston" || nomarene === "place" || nomarene === "churchill" ) {lat = 47.053374; longu = -0.881815999999958; imgarene = "https://lh6.ggpht.com/v3GBXYZzuQM8eCZXAb5iscrDSQlHo-axJW5opb_gYd50gXFL_UWI-pQVwi7J30IvI7-L7034Cqumrca7Mus"; nomdef = "Place Winston Churchill" } else(erreurs = erreurs +1);
			if (nomarene === "espace" || nomarene === "performance" ) {lat = 47.055131; longu = -0.8758319999999458; imgarene = "https://lh5.ggpht.com/ZFurdzzYALd0s9ed1QWfK2Q7skMRWHtAb8QQHe_3lGQQjurW3reDf2iGbA1pfskF8EZaI1WYMSRx_K4oFrAR"; nomdef = "Espace Performance" } else(erreurs = erreurs +1);
			if (nomarene === "piscine" || nomarene === "glisseo" || nomarene === "glisséo" ) {lat = 47.053116; longu = -0.878467999999998; imgarene = "https://lh6.ggpht.com/ou5rAO82YTJy7Pz-6VXeQi_XBgtfN1Vwd9Hj6JTFwzMCp1JaYkabX_M0eA2-1PCFmYLZsZcffgCsGT1e2mgaaA"; nomdef = "Piscine De Glisseo" } else(erreurs = erreurs +1);
			if (nomarene === "chaos" || nomarene === "the" && nomarene2 === "chaos" ) {lat = 47.054584; longu = -0.8710829999999987; imgarene = "https://lh5.ggpht.com/omVRLwbKWgU5Tf1tELVvCQBhFjYxkbiQPiPdzfkuvQvkBJplfQdsQSYS1jg6K8fbwFC1vJTBSdKycWQowc_CIF3hX-PZBiPc4qp-N738FESI9jsJtw"; nomdef = "The Chaos" } else(erreurs = erreurs +1);
			if (nomarene === "crayon" && ( nomarene2 === "géant" || nomarene2 === "geant")) {lat = 47.047414; longu = -0.9011120000000119; imgarene = "https://lh3.googleusercontent.com/WU7X2erwDH-5gibaMcE8NKR9EMmvWDkVOIcDNWBx1GeCR1xZVlls2eZW0ZokQo7LorgUia84ogK7sngsCzXv"; nomdef = "Le Crayon Géant" } else(erreurs = erreurs +1);
			if (nomarene === "uranus" ) {lat = 47.037686; longu = -0.8619220000000496; imgarene = "https://lh3.googleusercontent.com/k2yXL_0Ybea5xVMtBmFXlokjPTI5geehFZta9dgw43QszqbWItyNrR3bJiM7n91Pntdij2waHiBSGzNAa3o"; nomdef = "Uranus" } else(erreurs = erreurs +1);
			if ( (nomarene === "camoufler" || nomarene === "camoufle" ) || (nomarene === "air" || nomarene === "aire" ) && nomarene2 === "de" && (nomarene3 === "jeux" || nomarene3 === "jeu") && nomarene4 === "camoufler" ) {lat = 47.048693; longu = -0.8848050000000285; imgarene = "https://lh6.ggpht.com/fWdhRHeyRouu_uVxzAQDfuHiTaurelM3UHodsSmyNzW1M7W462tFijxc_r42KR7-iQTN7bepy8AsoNONjfJbZw"; nomdef = "Aire De Jeux Camoufler"} else(erreurs = erreurs +1);
			if (nomarene === "cci" || nomarene === "chambre" ) {lat = 47.061810; longu = -0.875253; imgarene = "https://lh5.googleusercontent.com/p/AF1QipP_tqWMvWiddvi2UklU6uZ_0BKIZcWw7iz6gVOl=w203-h151-k-no"; nomdef = "Chambre de Commerce et de l'Industrie" } else(erreurs = erreurs +1);
			if (nomarene === "guitare" || nomarene === "electrique" ) {lat = 47.055451; longu = -0.860124; imgarene = ""; nomdef = "Guitare Électrique" } else(erreurs = erreurs +1);
			if (nomarene === "communauté" || nomarene === "communaute" || nomarene === "agglomeration" || nomarene === "agglomération" ) {lat = 47.063797; longu = -0.871441; imgarene = ""; nomdef = "Communauté d'Agglomération" } else(erreurs = erreurs +1);
			if (nomarene === "bateau" || nomarene === "pirate" ) {lat = 47.03833199999999; longu = -0.8355629999999792; imgarene = "https://lh6.ggpht.com/Ru2VP28dVn7NCyE6_08PHe71aRmDUUg9Q-Uu1eMrq__fnoNSc4Qadf6S0Wjp-tw7z4xaIz39mq6sysz-rfI"; nomdef = "Bateau Pirate" } else(erreurs = erreurs +1);
      if (nomarene === "calvaire" || nomarene === "Sadi" || nomarene === "sadi" || nomarene === "Sadi"|| nomarene === "carnot"){lat = 47.061810;longu = -0.869493;imgarene = "", nomdef = "Calvaire Sadi Carnot"} else(erreurs = erreurs +1);

			if (erreurs === nbarenecholet) {message.channel.send("Erreur, vérifie le nom de ton arène.")}
			else {
				urlimage = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + longu + "&size=610x300&sensor=true&zoom=17&markers=" + lat + "," + longu + "&scale=1";
				message.channel.send("", {embed: {
					title: "Position de l'arène :",
					color: 0x1394e3,
					description: "**L'arène "+ nomdef + " se trouve ici : [ouvrir maps](https://www.google.fr/maps/search/"+lat + "," + longu + "/)**",
					thumbnail: {
						url: imgarene,
					},
					image: {
						url: urlimage
					},
					footer: {
						text: "Discord bot by @Mr1Dridri#4991"
					}
				}}).catch(console.error);
			}

		}
	}//fin arene


	if (message.content.startsWith("!help") || message.content.startsWith("!aide") || message.content.startsWith("!aides")) {//début help
	
	
		message.channel.send("", {embed: {
			title: "La liste des commandes en place :",
			color: 0x1394e3,
			description: "**__!news :__**\n- Permet d'afficher les dernières nouvelles\nQue ce soit les événements en cours ou futurs\n**__!arene <nom de l'arene> :__**\n- Indique la position de l'arene avec un lien Google maps (pratique pour les nouveaux joueurs)\n**__!bossraid__**\n- Liste des boss de raid\n- Possibilité de filtrer en ajoutant le nombre de tête après (Ex : __!bossraid 4__ pour la liste des boss de raid de niveau 4)\n**__!quete__** :\n- Permet de déclarer une quete interessante à un pokestop précis. Il suffit de déclarer ceci : !quete Faire 3 lancers à effet à la suite, Spinda, pokéstop de l'autre-faubourg  (PS : Ne pas oublier les 2 virgules, elles sont importantes pour la lecture de la commande par le bot Merci :) )\n**__!help ou !aide :__**\n- Liste des commandes",
			thumbnail: {
				url: "https://pokemongo.gamepress.gg/sites/pokemongo/files/2018-01/pokemon_icon_242_00.png"
			},
			footer: {
				text: "Merci d'utiliser uniquement ce salon pour les commandes afin d'éviter le spam sur le serveur.\nDiscord bot by Mr1Dridri#4991"
			}
		}}).catch(console.error);
	}//fin help

*/
	/*	if (message.content.startsWith("!listeraids") || message.content.startsWith("!listeraid") ) {//début raidsliste
		message.channel.send("", {embed: {
			title: "La liste des Raids sont :",
			color: 0x1394e3,
			description: "**__1 tête :__**\n- Salamèche :star:\n- Makuhita :star:\n- Meditikka :star:\n- Amonita :star:\n- Wailmer :star:\n- Magicarpe :star:\n**__2 Têtes :__**\n- Noadkoko d'Alola\n- Kirlia\n- Magmar\n- Mysdibulle :star:\n- Simularbre\n**__3 Têtes :__**\n- Porygon\n- Raichu d'Alola\n- Donphan\n- Pyroli\n- Mackogneur\n- Onix\n**__4 Têtes : __**\n- Tyranocif\n- Démolosse\n- Absol :star:\n- Ossatueur d'Alola\n- Grolem\n- Rhinoféros\n**__5 Têtes : __**\n- Registeel",

			footer: {
				text: "Discord bot by Mr1Dridri#4991"
			}
		}}).catch(console.error);
	}//fin listeraid
*/

  if (message.content.startsWith("!bossraid") || message.content.startsWith("!raidboss") ) {//début raidsliste
	
	
    var args = message.content.substr(10);
    const https = require('https');

    https.get('https://gamepress.gg//sites//default//files//aggregatedjson//raid-boss-list-PoGO.json?1449952405732167729', (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      // A chunk of data has been recieved.
      // A chunk of data has been recieved.
      // A chunk of data has been recieved.
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var item;
        var listpoke = JSON.parse(data);
        var listecomplete = "";

        for (item in listpoke) {
          if (listpoke[item].future === 'Off' && listpoke[item].legacy === 'Off' && listpoke[item].special === 'Off'){
            var titre = listpoke[item].title;
            i = 0;
            while (titre[i] !== ">"){
              i=i+1
            }
            i=i+1
			      var pokemon = "";
            for ( i = i; i < (titre.length - 4); i++) {
              pokemon = pokemon + titre[i];
            }
            //Systeme de traduction
            var jsonfile = require('C:/Users/adrien/Desktop/fork dridri/botdiscord/names.json');
            if(jsonfile.hasOwnProperty(pokemon)){
              pokemon = jsonfile[pokemon]
            }
            //ajout cp max boost et non Boost ainsi que type(s) et cp raid
            var cpmax = listpoke[item].max_cp;
            i=0;
            var cpmaxboost = "";
            while (listpoke[item].weather_max[i] !== ".") {
              cpmaxboost = cpmaxboost + listpoke[item].weather_max[i];
              i = i+1;
            };
            //ajout du type
            i = 0;
            var type =  listpoke[item].type;
            var type1 = "";
            var type2 = "";
            //console.log("start");
            var longueur = listpoke[item].type.length;
            //console.log(longueur)
            //while ((type[i] !== ",") || (i < longueur) ) {
            while (i < longueur && type[i] !== ",") {
              type1 = type1 + type[i];
              i = i+1;
              //console.log(i);
              //console.log("ok");
            };
            //i = i+1;
            //console.log(type1);
            if (type[i]=","){
              i=i+2;
              while (i < longueur) {
                type2 = type2 + type[i];
                i = i+1;
              };
            }
            //console.log(type2);
            //traduction des types
            var jsonfile = require('C:/Users/adrien/Desktop/fork dridri/botdiscord/types.json');
            if(jsonfile.hasOwnProperty(type1)){
              type1 = jsonfile[type1]
            }
            if(jsonfile.hasOwnProperty(type2)){
              type2 = jsonfile[type2]
            }

            var cpraid = listpoke[item].cp;
            //ajout niveau
            var i = 0;
            var tiers = listpoke[item].tier;
            var niveau = tiers.substring(tiers.lastIndexOf("raid-tier-stars"));
            var ancienniveau;
            while (niveau[i] !== ">") {
              i=i+1
            }

            i=i+1;
            niveau = niveau[i];
            if (args ===""){
            if (niveau === ancienniveau) {
              listecomplete = listecomplete + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + " | "+ cpmaxboost + "  | "+ type1 + " " + type2 + "\n";
            }else {listecomplete = listecomplete + "\n**__Raid " + niveau + "__** :star: :\n" + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + "  | "+ cpmaxboost +"  | "+ type1 + " " + type2 + "\n";}
            ancienniveau = niveau;
          }

          if (args ==="1"){
            if (niveau === "1"){
            if (niveau === ancienniveau) {
              listecomplete = listecomplete + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + " | "+ cpmaxboost + "  | "+ type1 + " " + type2 + "\n";
            }else {
              listecomplete = listecomplete + "\n**__Raid " + niveau + "__** :star: :\n" + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + "  | "+ cpmaxboost +"  | "+ type1 + " " + type2 + "\n";
            }
            ancienniveau = "1";
            //console.log(listecomplete);
            }
          }//fin raid 1


          if (args === "2"){//debut raid 2
                    if (niveau === "2"){
                    if (niveau === ancienniveau) {
                      listecomplete = listecomplete + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + " | "+ cpmaxboost + "  | "+ type1 + " " + type2 + "\n";
                    }else {
                      listecomplete = listecomplete + "\n**__Raid " + niveau + "__** :star: :\n" + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + "  | "+ cpmaxboost +"  | "+ type1 + " " + type2 + "\n";
                    }
                    ancienniveau = "2";
                    //console.log(listecomplete);
                    }
          }//fin raid 2

          if (args === "3"){//debut raid 3
                    if (niveau === "3"){
                    if (niveau === ancienniveau) {
                      listecomplete = listecomplete + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + " | "+ cpmaxboost + "  | "+ type1 + " " + type2 + "\n";
                    }else {
                      listecomplete = listecomplete + "\n**__Raid " + niveau + "__** :star: :\n" + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + "  | "+ cpmaxboost +"  | "+ type1 + " " + type2 + "\n";
                    }
                    ancienniveau = "3";
                    //console.log(listecomplete);
                    }
          }//fin raid 3


          if (args === "4"){//debut raid 4
                    if (niveau === "4"){
                    if (niveau === ancienniveau) {
                      listecomplete = listecomplete + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + " | "+ cpmaxboost + "  | "+ type1 + " " + type2 + "\n";
                    }else {
                      listecomplete = listecomplete + "\n**__Raid " + niveau + "__** :star: :\n" + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + "  | "+ cpmaxboost +"  | "+ type1 + " " + type2 + "\n";
                    }
                    ancienniveau = "4";
                    //console.log(listecomplete);
                    }

          }//fin raid 4

          if (args === "5"){//debut raid 5

                    if (niveau === "5"){
                    if (niveau === ancienniveau) {
                      listecomplete = listecomplete + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + " | "+ cpmaxboost + "  | "+ type1 + " " + type2 + "\n";
                    }else {
                      listecomplete = listecomplete + "\n**__Raid " + niveau + "__** :star: :\n" + ":small_orange_diamond: __" + pokemon + "__ : " + cpmax + "  | "+ cpmaxboost +"  | "+ type1 + " " + type2 + "\n";
                    }
                    ancienniveau = "5";
                    //console.log(listecomplete);
                    }
                  }



        }
        }
		if (listecomplete.length < 2048 ) {
        message.channel.send("", {embed: {
          title: "La liste des Raids sont : (Iv100 & Iv100 boost météo)",
          color: 0x1394e3,
          description: "" + listecomplete + "",
          footer: {
            text: "Discord bot by Mr1Dridri#4991"
          }
        }}).catch(console.error);
		}
		else {
			var listecomplete1 = "";
			for (i = 0; i < 2046; i++) {
				listecomplete1 = listecomplete1 + listecomplete[i];
			}
			console.log("listecomplete1 chargée");
			message.channel.send("", {embed: {
          title: "La liste des Raids sont : (Iv100 & Iv100 boost météo)",
          color: 0x1394e3,
          description: "" + listecomplete1 + "",
          footer: {
            text: "Discord bot by Mr1Dridri#4991"
          }
        }}).catch(console.error);
		console.log(listecomplete1);
		console.log("listecomplete1 envoyée");
					var listecomplete2 = "";
			for (i = 2046; i < listecomplete.length; i++) {
				listecomplete2 = listecomplete2 + listecomplete[i];
			}
			console.log("listecomplete2 chargée");
			message.channel.send("", {embed: {
          title: "",
          color: 0x1394e3,
          description: "" + listecomplete2 + "",
          footer: {
            text: "Discord bot by Mr1Dridri#4991"
          }
        }}).catch(console.error);
		console.log("listecomplete2 envoyée");
		}
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
message.delete();
}//fin testlisteraid

if (message.content.startsWith("!maintenance")) {//début maintenance
	
	
message.channel.send("", {embed: {
  title: ":warning: Maintenance :warning:",
  color: 0x1394e3,
  description: "Actuellement en maintenance, je serais de nouveau disponible dans quelques instants.",
  footer: {
    text: "Discord bot by Mr1Dridri#4991"
  }
}}).catch(console.error);
}//fin maintenance

if (message.content.startsWith("!update")) {//début maintenance
	
	
message.channel.send("", {embed: {
  title: ":gear: Mise à jour :gear:",
  color: 0x1394e3,
  description: "Nouvelle Mise à jour:\n- Ajout de la commande **__!bossraid__** permettant l'affichage de la liste des boss de raid.\nCette commande est directement lié au site pokemongo.gamepress.gg qui m'ont gentillement autorisé à utiliser leur données.\nA bientôt pour une nouvelle update.",
  footer: {
    text: "Discord bot by Mr1Dridri#4991"
  }
}}).catch(console.error);
}//fin maintenance

if (message.content.startsWith("!stopbotdridri")) {//début stopbot
	
	
message.channel.send("Arret du serveur en cours ...Serveur Arrêté.A bientot");
process.exit(-1);
}//fin stopbot

if (message.content.startsWith("!spinda") || message.content.startsWith("!Spinda")) {//début spinda
	
	
  message.channel.send("", {embed: {
    title: "Spinda :",
    color: 0x1394e3,
    description: "Spinda est obtenable via une quête : Faire 3 lancers à effet à la suite. Il est disponible en 8 formes donc cherchez et pensez à annoncer le pokestop ou le lieu, les autres joueurs s'empresseront de la récupérer.\n**__Aujourd'hui__ Uniquement celui en bas à droite (N8) est disponible. A 22h possible changement et nous passerions à un autre Spinda.**",
    image: {
      url: "https://cdn.discordapp.com/attachments/445562657316274176/473987485047848961/unknown.png"
    },
    footer: {
      text: "Merci d'utiliser uniquement ce salon pour les commandes afin d'éviter le spam sur le serveur.\nDiscord bot by Mr1Dridri#4991"
    }
  }}).catch(console.error);
}//fin spinda


if (message.content.startsWith("!quete") || message.content.startsWith("!recherche") || message.content.startsWith("!quête")) {//debut quête
	
	
  var args = message.content.substring(PREFIX.length).split(',');
  var mots = message.content.substring(PREFIX.length).split(' ');
  var test = message.content.substr(7);
  var quete = args[0];
  quete = quete.replace(mots[0], "");
  var reward = args[1];
  var pokestop = args[2];
  //bot.delete_message(message)
var messageaenvoyer = new Discord.RichEmbed()
    //.setTitle("Quête de Terrain")
	  .setAuthor(message.author.username + " a déclaré :", message.author.avatarURL)
    .setColor(0x1394e3)
    .setDescription("**Quête :**\n" + quete + "\n\n**Récompense :**\n" + reward + "\n\n**Pokestop :\n**" + pokestop + "")
    .setThumbnail("https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/static_assets/png/QuestReward.png")
    .setFooter("Discord bot by Mr1Dridri#4991")
message.channel.send(messageaenvoyer);
message.delete();
}//fin quête

  if (message.content === 'what is my avatar') {
	
	
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }

  if (message.content === 'datejour') {
    // Send the user's avatar URL
	
	
    message.reply(datelog.toString());
  }

  if (message.content === '!testbotdridri') {
    // Send the user's avatar URL
    message.channel.send("", {embed: {
      title: message.author.avatarURL + " Spinda :",
      color: 0x1394e3,
      description: message.author.avatarURL + " Spinda est obtenable via une [quête](https://www.pokemongolive.com) : Faire 3 lancers à effet à la suite. Il est disponible en 8 formes donc cherchez et pensez à annoncer le pokestop ou le lieu, les autres joueurs s'empresseront de la récupérer.\n**__Aujourd'hui__ Uniquement celui en bas à droite (N8) est disponible. A 22h possible changement et nous passerions à un autre Spinda.**",
      image: {
        url: "https://cdn.discordapp.com/attachments/445562657316274176/473987485047848961/unknown.png"
      },
      footer: {
        text: "Merci d'utiliser uniquement ce salon pour les commandes afin d'éviter le spam sur le serveur.\nDiscord bot by Mr1Dridri#4991"
      }
    }}).catch(console.error);
  }
  
	//Systeme de Log
	if(message.content.startsWith("!")){
	bot.channels.get('').send("\n============================================\nMessage envoyé par " + message.author.username + " le " + datelog.toString() + "\nContenu : \n" + message.content);
	console.log("\n============================================\nMessage envoyé par " + message.author.username + " le " + datelog.toString() + "\nContenu : \n" + message.content );
	}
})
bot.login(TOKEN);
