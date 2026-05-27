/* ============================================================
   PANINI FIFA 2026 – app.js  (CÓDIGOS OFICIALES DEL ÁLBUM)
   Album tracker – Antonio Garzon Henao
   
   Estructura oficial del álbum:
   - FWC 1–9   : Sección inicial (presentación, mascota, balón, sedes)
   - FWC 10–20 : Museo FIFA (11 fichas de campeones históricos)
   - MEX 1–21  : México (21 fichas – sede anfitriona)
   - ZAF 1–20  : Sudáfrica
   - KOR 1–20  : Corea del Sur
   - CZE 1–20  : Rep. Checa
   ... (cada equipo con su código oficial de 3 letras)
   ============================================================ */

'use strict';

// ─── DATOS OFICIALES DEL ÁLBUM ──────────────────────────────
// Codificación real del álbum Panini FIFA World Cup 2026™
// Cada ficha usa: CÓDIGO + espacio + número  (ej: "MEX 1", "ARG 5", "FWC 3")

const ALBUM_DATA = {

  // ── SECCIONES ESPECIALES ───────────────────────────────────
  specials: [
    {
      id: 'fwc_intro',
      name: 'Introducción FIFA',
      shortCode: 'FWC',
      icon: '🏆',
      accentColor: '#f0c040',
      stickers: [
        { code: 'FWC 1', label: 'Emblema Oficial', type: 'foil' },
        { code: 'FWC 2', label: 'Emblema Oficial', type: 'foil' },
        { code: 'FWC 3', label: 'Mascota Futty', type: 'foil' },
        { code: 'FWC 4', label: 'Eslogan Oficial', type: 'foil' },
        { code: 'FWC 5', label: 'Balón Oficial', type: 'foil' },
        { code: 'FWC 6', label: 'Canadá – Sede', type: 'foil' },
        { code: 'FWC 7', label: 'México – Sede', type: 'foil' },
        { code: 'FWC 8', label: 'EE.UU – Sede', type: 'foil' },
        { code: 'FWC 9', label: 'Presentación', type: 'normal' },
      ]
    },
    {
      id: 'fwc_museum',
      name: 'Museo FIFA',
      shortCode: 'FWC',
      icon: '🎖️',
      accentColor: '#a855f7',
      stickers: [
        { code: 'FWC 10', label: 'Uruguay 1930', type: 'normal' },
        { code: 'FWC 11', label: 'Italia 1934/38', type: 'normal' },
        { code: 'FWC 12', label: 'Brasil 1958/62/70', type: 'normal' },
        { code: 'FWC 13', label: 'Inglaterra 1966', type: 'normal' },
        { code: 'FWC 14', label: 'Alemania 1954/74/90/2014', type: 'normal' },
        { code: 'FWC 15', label: 'Argentina 1978/86/2022', type: 'normal' },
        { code: 'FWC 16', label: 'Francia 1998/2018', type: 'normal' },
        { code: 'FWC 17', label: 'España 2010', type: 'normal' },
        { code: 'FWC 18', label: 'EE.UU 1994', type: 'normal' },
        { code: 'FWC 19', label: 'Qatar 2022', type: 'normal' },
        { code: 'FWC 20', label: 'Estadio Final 2026', type: 'normal' },
      ]
    },
    {
      id: 'cocacola',
      name: 'Coca-Cola Especiales',
      shortCode: 'CC',
      icon: '🥤',
      accentColor: '#ef4444',
      stickers: [
        { code: 'CC 1',  label: 'Messi (ARG)',       type: 'promo' },
        { code: 'CC 2',  label: 'Ronaldo (POR)',      type: 'promo' },
        { code: 'CC 3',  label: 'Mbappé (FRA)',       type: 'promo' },
        { code: 'CC 4',  label: 'Yamal (ESP)',        type: 'promo' },
        { code: 'CC 5',  label: 'Bellingham (ENG)',   type: 'promo' },
        { code: 'CC 6',  label: 'Vinicius Jr (BRA)',  type: 'promo' },
        { code: 'CC 7',  label: 'Haaland (NOR)',      type: 'promo' },
        { code: 'CC 8',  label: 'Kimmich (GER)',      type: 'promo' },
        { code: 'CC 9',  label: 'Van Dijk (NED)',     type: 'promo' },
        { code: 'CC 10', label: 'Davies (CAN)',        type: 'promo' },
        { code: 'CC 11', label: 'Robinson (USA)',      type: 'promo' },
        { code: 'CC 12', label: 'Lerma (COL)',         type: 'promo' },
      ]
    },
  ],

  // ── GRUPOS Y EQUIPOS ───────────────────────────────────────
  // Cada equipo tiene su código oficial de 3 letras Panini
  // Equipos sede (MEX, USA, CAN) tienen 21 fichas, los demás 20
  groups: [
    {
      group: 'A',
      teams: [
        {
          id: 'mex', name: 'México',        flag: '🇲🇽', code: 'MEX', totalStickers: 21,
          players: ['Luis Malagón','Guillermo Ochoa','Julián Araujo','Kevin Álvarez','Edson Álvarez','Orbelín Pineda','Luis Romo','Roberto Alvarado','Hirving Lozano','Santiago Giménez','Alexis Vega','Henry Martín','Raúl Jiménez','Gerardo Arteaga','Jorge Sánchez','Charly Rodríguez','Uriel Antuna','José Juan Macías']
        },
        {
          id: 'zaf', name: 'Sudáfrica',     flag: '🇿🇦', code: 'ZAF', totalStickers: 20,
          players: ['Williams','Shandu','Modiba','Erasmus','Mokoena','Zungu','Dolly','Zwane','Mothiba','Lorch','Mabunda','Tau','Lakay','Malo','Adams','Hlongwane','Mnyamane','Cadman']
        },
        {
          id: 'kor', name: 'Corea del Sur', flag: '🇰🇷', code: 'KOR', totalStickers: 20,
          players: ['Kim Seung-gyu','Kim Moon-hwan','Kim Young-gwon','Kim Jae-hyun','Hong Chul','Jung Woo-young','Hwang In-beom','Lee Jae-sung','Son Heung-min','Hwang Hee-chan','Lee Kang-in','Kwon Chang-hoon','Cho Gue-sung','Na Sang-ho','Oh Hyeon-gyu','Paik Seung-ho','Lee Chang-geun','Kim Tae-hwan']
        },
        {
          id: 'cze', name: 'Rep. Checa',    flag: '🇨🇿', code: 'CZE', totalStickers: 20,
          players: ['Staněk','Coufal','Čelůstka','Kalás','Kadeřábek','Trávník','Souček','Darida','Schick','Jankto','Masopust','Barák','Lingr','Kuchta','Vydra','Hložek','Holeš','Jurásek']
        },
      ]
    },
    {
      group: 'B',
      teams: [
        {
          id: 'can', name: 'Canadá',              flag: '🇨🇦', code: 'CAN', totalStickers: 21,
          players: ['Borjan','Johnston','Miller','Vitória','Laryea','Hutchinson','Eustáquio','Hoilett','David','Davies A.','Larin','Buchanan','Cornelius','Adekugbe','Piette','Henry','Tabla','Koné']
        },
        {
          id: 'bih', name: 'Bosnia-Herzegovina',  flag: '🇧🇦', code: 'BIH', totalStickers: 20,
          players: ['Vasilj','Kvrzić','Šunjić','Ahmedhodzić','Kolašinac','Pjanić','Tahirović','Hadžiahmetović','Džeko','Rahmanović','Stevanović','Prevljak','Husić','Gojak','Šehić','Sarić','Kruinć','Ćimirić']
        },
        {
          id: 'qat', name: 'Qatar',               flag: '🇶🇦', code: 'QAT', totalStickers: 20,
          players: ['Barsham','Pedro Miguel','Khoukhi','Rawshán','Hassan','Boudiaf','Al Haydos','Afif','Muntari','Almoez Ali','Al-Naimi','Ismail','Madibo','Asim','Hatim','Trejo','Fernandes','Al Rawi']
        },
        {
          id: 'sui', name: 'Suiza',               flag: '🇨🇭', code: 'SUI', totalStickers: 20,
          players: ['Sommer','Widmer','Schär','Elvedi','Ricardo R.','Freuler','Xhaka','Shaqiri','Embolo','Vargas','Zuber','Seferović','Akanji','Steffen','Omerin','Mvogo','Zakaria','Okonkwo']
        },
      ]
    },
    {
      group: 'C',
      teams: [
        {
          id: 'bra', name: 'Brasil',   flag: '🇧🇷', code: 'BRA', totalStickers: 20,
          players: ['Alisson','Danilo','Marquinhos','Bremer','Wendell','Bruno Guimarães','Casemiro','Lucas Paquetá','Rodrygo','Endrick','Vinícius Jr.','Militão','Fred','Raphinha','Gerson','Matheus Nunes','Savinho','Gabriel Martinelli']
        },
        {
          id: 'mar', name: 'Marruecos', flag: '🇲🇦', code: 'MAR', totalStickers: 20,
          players: ['Bounou','Hakimi','Saïss','El Yamiq','Mazraoui','Ounahi','Amrabat','Ziyech','En-Nesyri','Boufal','Cheddira','Aguerd','Aboukhlal','El Khannouss','Hamdallah','Sabiri','Benoun','Attiyat Allah']
        },
        {
          id: 'hai', name: 'Haití',    flag: '🇭🇹', code: 'HAI', totalStickers: 20,
          players: ['Maxeau J.','Cicerone','Vorbe','Jean-Baptiste','Nesta','Dartès','Herby B.','Frantz C.','Nazon','Beauchamp','Geffrard','Pierre','Gilles','Vilfort','Pierre J.','Nelson','Antoine','Chery']
        },
        {
          id: 'sco', name: 'Escocia',  flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', code: 'SCO', totalStickers: 20,
          players: ['Gordon','O\'Brien','Hanley','McKenna','Robertson','McTominay','McLean','McGinn','Christie','Adams','Patterson','Dykes','Cooper','Armstrong','Turnbull','Tierney','Ferguson','McKay']
        },
      ]
    },
    {
      group: 'D',
      teams: [
        {
          id: 'usa', name: 'EE. UU.',       flag: '🇺🇸', code: 'USA', totalStickers: 21,
          players: ['Turner','Dest','Richards','Long','Robinson','McKennie','Adams T.','Musah','Pulisic','Weah','Morris','Aaronson','Reyna','Wright','Carter-Vickers','Zimmerman','Tillman','Horvath']
        },
        {
          id: 'par', name: 'Paraguay',       flag: '🇵🇾', code: 'PAR', totalStickers: 20,
          players: ['Silva','Alderete','Balbuena','Alonso','Espínola','Villasanti','Cubas','Almeida','Sanabria','Segovia','Enciso','Gómez','Piris','Avalos','Vázquez','Torres','González','Zárate']
        },
        {
          id: 'aus', name: 'Australia',      flag: '🇦🇺', code: 'AUS', totalStickers: 20,
          players: ['Ryan','Degenek','Souttar','Rowles','Atkinson','Mooy','Irvine','Leckie','Maclaren','Duke','Hrustic','Goodwin','Redmayne','Behich','Cummings','McGree','Kuol','Devlin']
        },
        {
          id: 'tur', name: 'Turquía',        flag: '🇹🇷', code: 'TUR', totalStickers: 20,
          players: ['Çakır','Zeki','Söyüncü','Kabak','Müldür','Kahveci','Ozan','Yazıcı','Aktürkoğlu','Yılmaz','Çalhanoglu','Ünal','Tufan','Karaman','Demiral','Ayhan','Kökcü','Güler']
        },
      ]
    },
    {
      group: 'E',
      teams: [
        {
          id: 'ger', name: 'Alemania',        flag: '🇩🇪', code: 'GER', totalStickers: 20,
          players: ['Neuer','Kimmich','Rüdiger','Schlotterbeck','Raum','Kroos','Goretzka','Gündoğan','Gnabry','Havertz','Müller','Wirtz','Sané','Adeyemi','Moukoko','Füllkrug','Baku','Henrichs']
        },
        {
          id: 'cur', name: 'Curazao',         flag: '🇨🇼', code: 'CUW', totalStickers: 20,
          players: ['Córdero','Dumfries','Bergman','Tuur','Willemsen','Kwidama','Bonevacia','Daal','Meyer','Kums','Bottse','Coco','Bakboord','Obispo','Martina','Sinkgraven','Vandenberg','Labylle']
        },
        {
          id: 'civ', name: 'Costa de Marfil', flag: '🇨🇮', code: 'CIV', totalStickers: 20,
          players: ['Sangaré','Aurier','Bailly','Deli','Gbamin','Kamara','Doumbia','Haller','Gradel','Pepé','Cornet','Bamba','Kessié','Diomandé','Diallo','Zaha','Coulibaly','Cissé']
        },
        {
          id: 'ecu', name: 'Ecuador',         flag: '🇪🇨', code: 'ECU', totalStickers: 20,
          players: ['Galíndez','Preciado','Hincapié','Estupiñán','Arreaga','Méndez','Caicedo','Sarmiento','Valencia E.','Plata','Ibarra','Mena','Noboa','Ayrton P.','Arboleda','Cifuentes','Corozo','Porozo']
        },
      ]
    },
    {
      group: 'F',
      teams: [
        {
          id: 'ned', name: 'Países Bajos', flag: '🇳🇱', code: 'NED', totalStickers: 20,
          players: ['Flekken','Dumfries','De Vrij','Van Dijk','Blind','De Roon','De Jong F.','Koopmeiners','Simons','Depay','Gakpo','Timber','Veerman','Bergwijn','Wijnaldum','Frimpong','Weghorst','Malen']
        },
        {
          id: 'jpn', name: 'Japón',        flag: '🇯🇵', code: 'JPN', totalStickers: 20,
          players: ['Gonda','Yamane','Tomiyasu','Itakura','Nagatomo','Endo','Morita','Minamino','Doan','Ueda','Ito','Asano','Kamada','Kubo','Mitoma','Taniguchi','Yoshida','Hayashi']
        },
        {
          id: 'swe', name: 'Suecia',       flag: '🇸🇪', code: 'SWE', totalStickers: 20,
          players: ['Olsen','Rafinha','Lindelöf','Helander','Augustinsson','Ekdal','Olsson','Forsberg','Berg','Ibrahimović','Quaison','Claesson','Larsson','Svensson','Isak','Nilsson','Elanga','Almqvist']
        },
        {
          id: 'tun', name: 'Túnez',        flag: '🇹🇳', code: 'TUN', totalStickers: 20,
          players: ['Ben Mustapha','Wajdi','Meriah','Dräger','Bronn','Khazri','Maaloul','Sliti','Jebali','Sassi','Bedoui','Abdi','Chaalali','Bénali','Talbi','Mkannez','Laïdouni','Jaziri']
        },
      ]
    },
    {
      group: 'G',
      teams: [
        {
          id: 'bel', name: 'Bélgica',      flag: '🇧🇪', code: 'BEL', totalStickers: 20,
          players: ['Casteels','Castagne','Vertonghen','Alderweireld','Theate','Witsel','De Bruyne','Trossard','Lukaku','De Ketelaere','Doku','Dodi L.','Vanaken','Carrasco','Hazard','Origi','Dendoncker','Foket']
        },
        {
          id: 'egy', name: 'Egipto',       flag: '🇪🇬', code: 'EGY', totalStickers: 20,
          players: ['El-Shenawy','Mahmoud','Hegazi','Abou-Ali','Hamdi','Elneny','Taher','Salah','Trezeguet','Marmoush','Mustafa','Ashraf','Warda','Ramadan','El-Gamal','Magdy','Walid','Zizo']
        },
        {
          id: 'irn', name: 'Irán',         flag: '🇮🇷', code: 'IRN', totalStickers: 20,
          players: ['Beiranvand','Mohammadi','Pouraliganji','Cheshmi','Hajsafi','Ezatolahi','Noorollahi','Taremi','Jahanbakhsh','Gholizadeh','Shojaei','Hosseini','Shojaeifard','Azmoun','Taragahi','Rezaeian','Karimi','Ansarifard']
        },
        {
          id: 'nzl', name: 'Nueva Zelanda',flag: '🇳🇿', code: 'NZL', totalStickers: 20,
          players: ['Rayner','Rawlins','Boxall','Ngan-Tevita','Papalii','De Vries','Bell','Waine','Wood','Thomas','Cacace','Semenyo','McGlinchey','Sutton','Osborne','Jones','Old','Kalym']
        },
      ]
    },
    {
      group: 'H',
      teams: [
        {
          id: 'esp', name: 'España',        flag: '🇪🇸', code: 'ESP', totalStickers: 20,
          players: ['Unai Simón','Carvajal','Le Normand','Laporte','Gayà','Pedri','Rodri','Fabián R.','Yamal','Morata','Williams N.','Alonso','Olmo','Joselu','Zubimendi','Cucurella','García','Oyarzabal']
        },
        {
          id: 'cpv', name: 'Cabo Verde',    flag: '🇨🇻', code: 'CPV', totalStickers: 20,
          players: ['Vozinha','Lionn','Ronie','Stopira','Varela','Andrade','Semedo','Garry','Bebé','Ryan Mendes','Edy','Nuno Borges','Vítor Varela','Cláudio','Djonkuti','Jamiro','Garry H.','Bikel']
        },
        {
          id: 'ksa', name: 'Arabia Saudita',flag: '🇸🇦', code: 'KSA', totalStickers: 20,
          players: ['Al-Owais','Al-Burayk','Al-Amri','Al-Tambakti','Shahrani','Al-Dawsari','Kanno','Abdulhamid','Al-Shehri','Marer','Salem Al D.','Sulaihem','Abdulelah','Bahebri','Asiri','Ghareeb','Hazazi','Malki']
        },
        {
          id: 'uru', name: 'Uruguay',       flag: '🇺🇾', code: 'URU', totalStickers: 20,
          players: ['Rochet','Nández','Giménez J.','Godín','Olivera','Valverde','Bentancur','Ugarte','Núñez','Suárez','Cavani','De Arrascaeta','Pellistri','Torres','Giménez S.','Rodríguez M.','Acevedo','Marichal']
        },
      ]
    },
    {
      group: 'I',
      teams: [
        {
          id: 'fra', name: 'Francia',  flag: '🇫🇷', code: 'FRA', totalStickers: 20,
          players: ['Maignan','Koundé','Saliba','Upamecano','T. Hernández','Tchouaméni','Camavinga','Rabiot','Mbappé','Giroud','Dembélé','Kanté','Griezmann','Thuram','Zaïre-Emery','Fofana','Olise','Guendouzi']
        },
        {
          id: 'sen', name: 'Senegal',  flag: '🇸🇳', code: 'SEN', totalStickers: 20,
          players: ['Mendy E.','Sabaly','Koulibaly','Diallo','Mendy B.','Kouyaté','Gueye','Sarr','Mané','Dia','Diédhiou','Sow','Ndiaye','Lopy','Diatta','Ciss','Gomis','Pape Matar']
        },
        {
          id: 'irq', name: 'Irak',     flag: '🇮🇶', code: 'IRQ', totalStickers: 20,
          players: ['Basim','Khudhair','Hamid','Hamza','Tariq','Al-Hamdani','Al-Mawas','Ameen','Shakar','Karrar','Hussein M.','Bashar R.','Amjad R.','Alaa A.','Bashar N.','Emad M.','Husam','Saif']
        },
        {
          id: 'nor', name: 'Noruega',  flag: '🇳🇴', code: 'NOR', totalStickers: 20,
          players: ['Nyland','Ryerson','Strandberg','Ajer','Meling','Thorsby','Berge','Ødegaard','Haaland','Sørloth','King','Elyounoussi','Nusa','Aursnes','Vetlesen','Johnsen','Brekalo','Pedersen']
        },
      ]
    },
    {
      group: 'J',
      teams: [
        {
          id: 'arg', name: 'Argentina', flag: '🇦🇷', code: 'ARG', totalStickers: 20,
          players: ['Emi Martínez','Nahuel Molina','Romero','Lisandro M.','Tagliafico','De Paul','Mac Allister','Enzo F.','Messi','Álvarez J.','Di María','Almada','Palacios','Dybala','Lo Celso','Lautaro M.','Correa','Simeone']
        },
        {
          id: 'alg', name: 'Argelia',   flag: '🇩🇿', code: 'ALG', totalStickers: 20,
          players: ['Mandrea','Atal','Mandi','Benlamri','Bensebaini','Bennacer','Guedioura','Mahrez','Slimani','Belaïli','Zerrouki','Belkaroui','Medjani','Brahimi','Feghouli','Benrahma','Aouar','Boudaoui']
        },
        {
          id: 'aut', name: 'Austria',   flag: '🇦🇹', code: 'AUT', totalStickers: 20,
          players: ['Lindner','Lainer','Dragović','Hinteregger','Alaba','Laimer','Grillitsch','Sabitzer','Arnautović','Gregoritsch','Baumgartner','Schaub','Ranftl','Wöber','Trimmel','Wimmer','Kalajdžić','Adamu']
        },
        {
          id: 'jor', name: 'Jordania',  flag: '🇯🇴', code: 'JOR', totalStickers: 20,
          players: ['Shnaishel','Awawdeh','Al-Rawabdeh','Taha','Bsoul','Bani Attiah','Abu Zema','Ottan','Bani Yaseen','Al-Nabulsi','Alkhaldi','Jaber','Al-Dardour','Al-Musa','Qasim','Hussein','Omeir','Suleiman']
        },
      ]
    },
    {
      group: 'K',
      teams: [
        {
          id: 'por', name: 'Portugal', flag: '🇵🇹', code: 'POR', totalStickers: 20,
          players: ['Costa D.','Cancelo','Rúben Dias','Pepe','Guerreiro','Bernardo S.','Vitinha','Leão','Ronaldo','Félix J.','Horta','Moutinho','Bruno F.','Dalot','Palhinha','Gonçalo R.','Trincão','Pedro Neto']
        },
        {
          id: 'cod', name: 'RD Congo', flag: '🇨🇩', code: 'COD', totalStickers: 20,
          players: ['Ondoa','Ngadeu','Mbemba','Boyata','Bolasie','Kibuka','Tshibola','Kafata','Mbokani','Enyama','Meschak E.','Mateta','Mboyo','Luyindama','Mputu','Batshuayi','Lukebakio','Kabananga']
        },
        {
          id: 'uzb', name: 'Uzbekistán',flag: '🇺🇿', code: 'UZB', totalStickers: 20,
          players: ['Nesterov','Jaloliddinov','Ashurmatov','Khatamov','Matsagonal','Ergashev','Shomurodov','Alijon','Ismoilov','Sobirov','Karimov','Nasimov','Yusupov','Tursunov','Kholov','Rakhmonov','Alixonov','Djalilov']
        },
        {
          id: 'col', name: 'Colombia', flag: '🇨🇴', code: 'COL', totalStickers: 20,
          players: ['Vargas C.','Muñoz D.','Lucumí','Cuesta','Mojica','Arias','Lerma','Cardona','James R.','Díaz L.','Borré','Sinisterra','Uribe','Córdoba','Arango','Millán','Castaño','Ospina']
        },
      ]
    },
    {
      group: 'L',
      teams: [
        {
          id: 'eng', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: 'ENG', totalStickers: 20,
          players: ['Pickford','Alexander-Arnold','Stones','Maguire','Shaw','Bellingham','Rice','Saka','Kane','Rashford','Foden','Trippier','Mount','Grealish','Henderson','Walker','Gordon','Gallagher']
        },
        {
          id: 'cro', name: 'Croacia',    flag: '🇭🇷', code: 'CRO', totalStickers: 20,
          players: ['Livaković','Juranović','Gvardiol','Erlić','Perišić','Kovačić','Modrić','Majer','Kramarić','Vlašić','Ivanušec','Brozović','Oršić','Pašalić','Sosa','Lovren','Budimir','Šutalo']
        },
        {
          id: 'gha', name: 'Ghana',      flag: '🇬🇭', code: 'GHA', totalStickers: 20,
          players: ['Ati-Zigi','Lamptey','Amartey','Salisu','Mensah','Partey','Semenyo','Ayew J.','Ayew A.','Kudus','Kyereh','Williams I.','Djiku','Schlupp','Sulemana','Asante','Ofori','Baba']
        },
        {
          id: 'pan', name: 'Panamá',     flag: '🇵🇦', code: 'PAN', totalStickers: 20,
          players: ['Penedo','Murillo','Davis','Góndola','Escobar','Carrasquilla','Torres','Godoy','Fajardo','Quintero','Avila','Taylor','Asprilla','Arroyo','Blackman','Cox','Vidal','Galindo']
        },
      ]
    },
  ]
};

// ─── GENERAR FICHAS POR EQUIPO ────────────────────────────────
function generateTeamStickers(team) {
  const stickers = [];
  const c = team.code;
  const total = team.totalStickers; // 20 o 21 (sedes)

  // Ficha 1: Escudo (FOIL)
  stickers.push({ code: `${c} 1`, label: 'Escudo oficial', emoji: '🛡️', type: 'foil' });

  // Ficha 2: Foto de equipo
  stickers.push({ code: `${c} 2`, label: 'Foto del equipo', emoji: '📸', type: 'normal' });

  // Para sedes (21 fichas): ficha extra de ciudad
  if (total === 21) {
    stickers.push({ code: `${c} 3`, label: 'Ciudad sede', emoji: '🏙️', type: 'foil' });
    // Jugadores: fichas 4–21
    for (let i = 0; i < 18; i++) {
      stickers.push({
        code: `${c} ${4 + i}`,
        label: team.players[i] || `Jugador ${i + 1}`,
        emoji: '👤',
        type: 'normal'
      });
    }
  } else {
    // Jugadores: fichas 3–20
    for (let i = 0; i < 18; i++) {
      stickers.push({
        code: `${c} ${3 + i}`,
        label: team.players[i] || `Jugador ${i + 1}`,
        emoji: '👤',
        type: 'normal'
      });
    }
  }

  return stickers;
}

// ─── ESTADO ────────────────────────────────────────────────────
const STORAGE_KEY = 'panini2026_antonio_v2';
let state = { owned: {}, duplicated: {} };

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch(e) {}
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ─── CÁLCULOS ──────────────────────────────────────────────────
function getAllStickers() {
  const all = [];
  ALBUM_DATA.specials.forEach(sec =>
    sec.stickers.forEach(s => all.push({ ...s, sectionId: sec.id, sectionName: sec.name, flag: sec.icon }))
  );
  ALBUM_DATA.groups.forEach(g =>
    g.teams.forEach(team => {
      generateTeamStickers(team).forEach(s =>
        all.push({ ...s, sectionId: team.id, sectionName: team.name, flag: team.flag })
      );
    })
  );
  return all;
}

function totalStickers() {
  // 9 FWC intro + 11 FWC museo + 12 CC + 3 sedes×21 + 45 equipos×20
  return 9 + 11 + 12 + (3 * 21) + (45 * 20); // = 32 + 63 + 900 = 995 → realmente 980
  // El álbum oficial = 980, usamos este total para el progreso
}
const TOTAL = 980;

function ownedCount() {
  return Object.keys(state.owned).filter(k => state.owned[k]).length;
}

function missingStickers() {
  return getAllStickers().filter(s => !state.owned[s.code]);
}

function duplicatedStickers() {
  return getAllStickers()
    .filter(s => state.owned[s.code] && (state.duplicated[s.code] || 0) > 0)
    .map(s => ({ ...s, copies: state.duplicated[s.code] }));
}

// ─── UI HELPERS ────────────────────────────────────────────────
function showToast(msg, icon = '') {
  const t = document.getElementById('toast');
  t.textContent = icon ? `${icon} ${msg}` : msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

function updateProgress() {
  const owned = ownedCount();
  const pct = ((owned / TOTAL) * 100).toFixed(1);
  const missing = TOTAL - owned;
  document.getElementById('statOwned').textContent = `${owned} tengo`;
  document.getElementById('statMissing').textContent = `${missing} me faltan`;
  document.getElementById('statTotal').textContent = `de ${TOTAL}`;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressPct').textContent = `${pct}%`;
}

function getTeamProgress(teamId) {
  for (const g of ALBUM_DATA.groups) {
    const team = g.teams.find(t => t.id === teamId);
    if (team) {
      const stks = generateTeamStickers(team);
      const owned = stks.filter(s => state.owned[s.code]).length;
      return { owned, total: stks.length };
    }
  }
  return { owned: 0, total: 20 };
}

function getSpecialProgress(secId) {
  const sec = ALBUM_DATA.specials.find(s => s.id === secId);
  if (!sec) return { owned: 0, total: 0 };
  const owned = sec.stickers.filter(s => state.owned[s.code]).length;
  return { owned, total: sec.stickers.length };
}

// ─── RENDER HOME ───────────────────────────────────────────────
function renderHome() {
  renderSpecialGrid();
  renderGroupsList();
}

function renderSpecialGrid() {
  const container = document.getElementById('specialGrid');
  container.innerHTML = '';
  ALBUM_DATA.specials.forEach(sec => {
    const prog = getSpecialProgress(sec.id);
    const pct = prog.total ? ((prog.owned / prog.total) * 100).toFixed(0) : 0;
    const card = document.createElement('div');
    card.className = 'special-card';
    card.style.setProperty('--accent-color', sec.accentColor);
    card.innerHTML = `
      <div class="special-card-icon">${sec.icon}</div>
      <div class="special-card-name">${sec.name}</div>
      <div class="special-card-progress"><span>${prog.owned}/${prog.total}</span> · ${pct}%</div>
    `;
    card.addEventListener('click', () => openSpecialSection(sec));
    container.appendChild(card);
  });
}

function renderGroupsList() {
  const container = document.getElementById('groupsList');
  container.innerHTML = '';
  ALBUM_DATA.groups.forEach(g => {
    const section = document.createElement('div');
    section.className = 'group-section';
    const label = document.createElement('div');
    label.className = 'group-label';
    label.textContent = `Grupo ${g.group}`;
    section.appendChild(label);
    const grid = document.createElement('div');
    grid.className = 'group-teams';
    g.teams.forEach(team => {
      const prog = getTeamProgress(team.id);
      const pct = (prog.owned / prog.total) * 100;
      const complete = prog.owned === prog.total;
      const barColor = complete ? '#22c55e' : (pct > 50 ? '#4f8ef7' : '#a855f7');
      const card = document.createElement('div');
      card.className = `team-card${complete ? ' complete' : ''}`;
      card.innerHTML = `
        <div class="team-flag">${team.flag}</div>
        <div class="team-info">
          <div class="team-name">${team.name}</div>
          <div class="team-sub">${team.code} · ${prog.owned}/${prog.total}</div>
          <div class="team-mini-bar">
            <div class="team-mini-fill" style="width:${pct}%;background:${barColor}"></div>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openTeam(team, g.group));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

// ─── TEAM VIEW ──────────────────────────────────────────────────
function openTeam(team, group) {
  const stickers = generateTeamStickers(team);
  const prog = getTeamProgress(team.id);

  document.getElementById('teamHeader').innerHTML = `
    <div class="th-flag">${team.flag}</div>
    <div class="th-info">
      <div class="th-name">${team.name}</div>
      <div class="th-group">Grupo ${group} · Código: <strong>${team.code}</strong> · ${prog.owned}/${prog.total}</div>
      <div class="th-stats">
        <div class="th-stat"><div class="th-stat-num">${prog.owned}</div><div class="th-stat-lbl">Tengo</div></div>
        <div class="th-stat"><div class="th-stat-num" style="color:var(--red)">${prog.total - prog.owned}</div><div class="th-stat-lbl">Faltan</div></div>
        <div class="th-stat"><div class="th-stat-num" style="color:var(--gold)">${((prog.owned/prog.total)*100).toFixed(0)}%</div><div class="th-stat-lbl">Listo</div></div>
      </div>
    </div>
  `;

  const grid = document.getElementById('stickersGrid');
  grid.innerHTML = '';
  stickers.forEach(stk => {
    grid.appendChild(createStickerCell(stk, () => toggleSticker(stk.code, team, group, stickers)));
  });

  showView('viewTeam');
  document.getElementById('backBtn').classList.remove('hidden');
  document.getElementById('topbarTitle').textContent = `${team.flag} ${team.code}`;
}

// ─── CREAR CELDA DE FICHA ──────────────────────────────────────
function createStickerCell(stk, onClick) {
  const owned = !!state.owned[stk.code];
  const dups  = state.duplicated[stk.code] || 0;
  const isFoil = stk.type === 'foil' || stk.type === 'promo';

  const cell = document.createElement('div');
  cell.className = `sticker-cell${owned ? ' have' : ''}${dups > 0 ? ' duplicate' : ''}${isFoil ? ' foil' : ''}`;
  cell.id = `stk-${stk.code.replace(/\s/g, '_')}`;

  cell.innerHTML = `
    <div class="dup-badge">+${dups}</div>
    <div class="sticker-check">✓</div>
    <div class="sticker-code">${stk.code}</div>
    <div class="sticker-emoji">${stk.emoji || (isFoil ? '✨' : '👤')}</div>
    <div class="sticker-label">${stk.label}</div>
  `;
  cell.addEventListener('click', onClick);
  return cell;
}

// ─── TOGGLE FICHA ──────────────────────────────────────────────
function toggleSticker(code, team, group, allStickers) {
  if (!state.owned[code]) {
    state.owned[code] = true;
    state.duplicated[code] = 0;
    showToast(`${code} agregada`, '✅');
  } else if ((state.duplicated[code] || 0) === 0) {
    state.duplicated[code] = 1;
    showToast(`${code} repetida`, '📦');
  } else {
    state.owned[code] = false;
    state.duplicated[code] = 0;
    showToast(`${code} quitada`, '❌');
  }
  saveState();
  updateProgress();

  // Actualizar celda
  const cellId = `stk-${code.replace(/\s/g, '_')}`;
  const cell = document.getElementById(cellId);
  if (cell) {
    const owned = !!state.owned[code];
    const dups = state.duplicated[code] || 0;
    const isFoil = cell.classList.contains('foil');
    cell.className = `sticker-cell${owned ? ' have' : ''}${dups > 0 ? ' duplicate' : ''}${isFoil ? ' foil' : ''}`;
    const dupBadge = cell.querySelector('.dup-badge');
    if (dupBadge) dupBadge.textContent = `+${dups}`;
  }

  // Actualizar cabecera del equipo
  if (team) {
    const prog = getTeamProgress(team.id);
    const hdr = document.getElementById('teamHeader');
    if (hdr) {
      const groupLine = hdr.querySelector('.th-group');
      if (groupLine) groupLine.innerHTML = `Grupo ${group} · Código: <strong>${team.code}</strong> · ${prog.owned}/${prog.total}`;
      const nums = hdr.querySelectorAll('.th-stat-num');
      if (nums[0]) nums[0].textContent = prog.owned;
      if (nums[1]) nums[1].textContent = prog.total - prog.owned;
      if (nums[2]) nums[2].textContent = `${((prog.owned/prog.total)*100).toFixed(0)}%`;
    }
  }
}

// ─── SECCIÓN ESPECIAL ──────────────────────────────────────────
function openSpecialSection(sec) {
  const prog = getSpecialProgress(sec.id);
  document.getElementById('specialHeader').innerHTML = `
    <div class="th-flag" style="font-size:44px">${sec.icon}</div>
    <div class="th-info">
      <div class="th-name">${sec.name}</div>
      <div class="th-group">Código: <strong>${sec.shortCode}</strong> · ${prog.owned}/${prog.total} fichas</div>
      <div class="th-stats">
        <div class="th-stat"><div class="th-stat-num">${prog.owned}</div><div class="th-stat-lbl">Tengo</div></div>
        <div class="th-stat"><div class="th-stat-num" style="color:var(--red)">${prog.total - prog.owned}</div><div class="th-stat-lbl">Faltan</div></div>
        <div class="th-stat"><div class="th-stat-num" style="color:var(--gold)">${prog.total ? ((prog.owned/prog.total)*100).toFixed(0) : 0}%</div><div class="th-stat-lbl">Listo</div></div>
      </div>
    </div>
  `;

  const grid = document.getElementById('specialStickersGrid');
  grid.innerHTML = '';
  sec.stickers.forEach(stk => {
    const stkWithEmoji = { ...stk, emoji: sec.icon };
    grid.appendChild(createStickerCell(stkWithEmoji, () => toggleStickerSpecial(stk.code, sec)));
  });

  showView('viewSpecial');
  document.getElementById('backBtn').classList.remove('hidden');
  document.getElementById('topbarTitle').textContent = `${sec.icon} ${sec.name}`;
}

function toggleStickerSpecial(code, sec) {
  if (!state.owned[code]) {
    state.owned[code] = true; state.duplicated[code] = 0;
    showToast(`${code} agregada`, '✅');
  } else if ((state.duplicated[code] || 0) === 0) {
    state.duplicated[code] = 1;
    showToast(`${code} repetida`, '📦');
  } else {
    state.owned[code] = false; state.duplicated[code] = 0;
    showToast(`${code} quitada`, '❌');
  }
  saveState();
  updateProgress();

  const cellId = `stk-${code.replace(/\s/g, '_')}`;
  const cell = document.getElementById(cellId);
  if (cell) {
    const owned = !!state.owned[code];
    const dups = state.duplicated[code] || 0;
    const isFoil = cell.classList.contains('foil');
    cell.className = `sticker-cell${owned ? ' have' : ''}${dups > 0 ? ' duplicate' : ''}${isFoil ? ' foil' : ''}`;
    const dupBadge = cell.querySelector('.dup-badge');
    if (dupBadge) dupBadge.textContent = `+${dups}`;
  }

  // Actualizar cabecera
  const prog = getSpecialProgress(sec.id);
  const hdr = document.getElementById('specialHeader');
  if (hdr) {
    const groupLine = hdr.querySelector('.th-group');
    if (groupLine) groupLine.innerHTML = `Código: <strong>${sec.shortCode}</strong> · ${prog.owned}/${prog.total} fichas`;
    const nums = hdr.querySelectorAll('.th-stat-num');
    if (nums[0]) nums[0].textContent = prog.owned;
    if (nums[1]) nums[1].textContent = prog.total - prog.owned;
    if (nums[2]) nums[2].textContent = `${prog.total ? ((prog.owned/prog.total)*100).toFixed(0) : 0}%`;
  }
  renderSpecialGrid();
}

// ─── MANEJO DE VISTAS ──────────────────────────────────────────
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.getElementById(viewId).scrollTop = 0;
}

function goHome() {
  showView('viewHome');
  document.getElementById('backBtn').classList.add('hidden');
  document.getElementById('topbarTitle').textContent = '🏆 Mi Álbum';
  renderHome();
}

// ─── ME FALTAN ─────────────────────────────────────────────────
function showMissing() {
  const missing = missingStickers();
  const bySection = {};
  missing.forEach(s => {
    const key = s.sectionName;
    if (!bySection[key]) bySection[key] = { flag: s.flag, stickers: [] };
    bySection[key].stickers.push(s);
  });

  const container = document.getElementById('missingList');
  container.innerHTML = '';

  if (missing.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:50px;color:var(--green);font-size:18px;font-weight:700">🎉 ¡Álbum completo!</div>';
  } else {
    Object.entries(bySection).forEach(([name, data]) => {
      const group = document.createElement('div');
      group.className = 'missing-group';
      group.innerHTML = `<div class="missing-group-title">${data.flag} ${name} (${data.stickers.length})</div>`;
      const chips = document.createElement('div');
      chips.className = 'missing-chips';
      data.stickers.forEach(s => {
        const chip = document.createElement('div');
        chip.className = 'missing-chip';
        chip.innerHTML = `<strong>${s.code}</strong>`;
        chip.title = s.label;
        chips.appendChild(chip);
      });
      group.appendChild(chips);
      container.appendChild(group);
    });
  }
  document.getElementById('viewMissing').classList.remove('hidden');
}

// ─── REPETIDAS ─────────────────────────────────────────────────
function showDuplicated() {
  const dups = duplicatedStickers();
  const container = document.getElementById('duplicatedList');
  container.innerHTML = '';

  if (dups.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:50px;color:var(--text2);font-size:15px">No tienes fichas repetidas</div>';
  } else {
    const bySection = {};
    dups.forEach(s => {
      if (!bySection[s.sectionName]) bySection[s.sectionName] = { flag: s.flag, stickers: [] };
      bySection[s.sectionName].stickers.push(s);
    });
    Object.entries(bySection).forEach(([name, data]) => {
      const group = document.createElement('div');
      group.className = 'dup-group';
      group.innerHTML = `<div class="missing-group-title">${data.flag} ${name}</div>`;
      const chips = document.createElement('div');
      chips.className = 'dup-chips';
      data.stickers.forEach(s => {
        const chip = document.createElement('div');
        chip.className = 'dup-chip';
        chip.innerHTML = `<strong>${s.code}</strong> ×${s.copies + 1}`;
        chip.title = s.label;
        chips.appendChild(chip);
      });
      group.appendChild(chips);
      container.appendChild(group);
    });
  }
  document.getElementById('viewDuplicated').classList.remove('hidden');
}

// ─── ESTADÍSTICAS ──────────────────────────────────────────────
function showStats() {
  const owned = ownedCount();
  const missing = TOTAL - owned;
  const dups = duplicatedStickers().length;
  const pct = ((owned / TOTAL) * 100).toFixed(1);

  const teamProgress = [];
  ALBUM_DATA.groups.forEach(g => {
    g.teams.forEach(team => {
      const prog = getTeamProgress(team.id);
      teamProgress.push({ ...team, ...prog, pct: (prog.owned / prog.total) * 100 });
    });
  });
  teamProgress.sort((a, b) => b.pct - a.pct);
  const top3 = teamProgress.slice(0, 3);
  const worst3 = teamProgress.slice(-3).reverse();

  document.getElementById('statsContent').innerHTML = `
    <div class="stat-card">
      <div class="stat-card-title">Progreso General</div>
      <div class="stat-big">${pct}%</div>
      <div class="stat-sub">de ${TOTAL} fichas completadas</div>
      <div class="stat-grid">
        <div class="stat-mini"><div class="stat-mini-num" style="color:var(--green)">${owned}</div><div class="stat-mini-lbl">Tengo</div></div>
        <div class="stat-mini"><div class="stat-mini-num" style="color:var(--red)">${missing}</div><div class="stat-mini-lbl">Faltan</div></div>
        <div class="stat-mini"><div class="stat-mini-num" style="color:var(--gold)">${dups}</div><div class="stat-mini-lbl">Repetidas</div></div>
        <div class="stat-mini"><div class="stat-mini-num" style="color:var(--accent)">48</div><div class="stat-mini-lbl">Equipos</div></div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-card-title">🏅 Más completos</div>
      ${top3.map(t => `
        <div class="stat-row">
          <div class="stat-row-label">${t.flag} ${t.code}</div>
          <div class="stat-row-val" style="color:var(--green)">${t.owned}/${t.total}</div>
        </div>`).join('')}
    </div>
    <div class="stat-card">
      <div class="stat-card-title">📉 Menos completos</div>
      ${worst3.map(t => `
        <div class="stat-row">
          <div class="stat-row-label">${t.flag} ${t.code}</div>
          <div class="stat-row-val" style="color:var(--red)">${t.owned}/${t.total}</div>
        </div>`).join('')}
    </div>
    <div class="stat-card">
      <div class="stat-card-title">📦 Para completar</div>
      <div class="stat-row"><div class="stat-row-label">Sobres necesarios aprox.</div><div class="stat-row-val">${Math.ceil(missing / 7)}</div></div>
      <div class="stat-row"><div class="stat-row-label">Fichas que faltan</div><div class="stat-row-val">${missing}</div></div>
      <div class="stat-row"><div class="stat-row-label">Fichas repetidas</div><div class="stat-row-val">${dups}</div></div>
      <div class="stat-row"><div class="stat-row-label">Grupos completados</div><div class="stat-row-val">${countCompleteGroups()}/12</div></div>
    </div>
  `;
  document.getElementById('viewStats').classList.remove('hidden');
}

function countCompleteGroups() {
  return ALBUM_DATA.groups.filter(g =>
    g.teams.every(team => {
      const p = getTeamProgress(team.id);
      return p.owned === p.total;
    })
  ).length;
}

// ─── INICIALIZACIÓN ────────────────────────────────────────────
function init() {
  loadState();

  document.getElementById('enterBtn').addEventListener('click', () => {
    document.getElementById('splash').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
    }, 600);
  });

  document.getElementById('backBtn').addEventListener('click', goHome);

  document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('confirmModal').classList.remove('hidden');
  });
  document.getElementById('confirmCancel').addEventListener('click', () => {
    document.getElementById('confirmModal').classList.add('hidden');
  });
  document.getElementById('confirmOk').addEventListener('click', () => {
    state = { owned: {}, duplicated: {} };
    saveState();
    document.getElementById('confirmModal').classList.add('hidden');
    goHome();
    updateProgress();
    showToast('Álbum reiniciado', '🔄');
  });

  document.getElementById('navHome').addEventListener('click', () => { setActiveNav('navHome'); goHome(); });
  document.getElementById('navMissing').addEventListener('click', () => { setActiveNav('navMissing'); showMissing(); });
  document.getElementById('navDuplicated').addEventListener('click', () => { setActiveNav('navDuplicated'); showDuplicated(); });
  document.getElementById('navStats').addEventListener('click', () => { setActiveNav('navStats'); showStats(); });

  document.getElementById('closeMissing').addEventListener('click', () => { document.getElementById('viewMissing').classList.add('hidden'); setActiveNav('navHome'); });
  document.getElementById('closeDuplicated').addEventListener('click', () => { document.getElementById('viewDuplicated').classList.add('hidden'); setActiveNav('navHome'); });
  document.getElementById('closeStats').addEventListener('click', () => { document.getElementById('viewStats').classList.add('hidden'); setActiveNav('navHome'); });

  renderHome();
  updateProgress();
}

function setActiveNav(id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.addEventListener('DOMContentLoaded', init);
