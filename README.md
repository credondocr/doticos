# Doticos API

## Technology Stack

- Mongoose
- Redis
- Nodejs
- Express
- Dota api
- Steam-id-convertor

## Configuración del ambiente

Se necesita crear un archivo con la extension `.env` en donde almacenaremos todas nuestras variables de entorno:

```
STEAM_API_KEY=""
REDIS_URL=""
MONGO_URL=""
PORT=""
```

### Como obtener la api key de dota y steam?

La steam api key la pueden solicitar en el siguiente [link](http://steamcommunity.com/dev/apikey)

### Como descargar todas las dependencias del proyecto
``
	npm install
``
### Como correr el proyecto?

``
	npm start
``

### Preguntas frecuentas

* ***Puedo aportar algo para el proyecto?***

Claro que puedes, nos puedes apoyar desde sugerir nuevas funcionalidades hasta por que no corregir algunas pulgas o inclusive aportar código.

* ***Puedo donar para el desarrollo del proyecto?***

Claro que puedes, solo te ponen en contacto conmigo por correo y lo podemos hablar -> credondocr@gmail.com **Recuerden que los servidores no se pagan solos**. 

* ***Este proyecto es opensource?***

Claro, el proyecto es sin animos de lucro, la idea es brindarle a la comunidad mas herramientas para mejorar y de paso jugar un rato con algo que a algunos nos apasionan, desarrollar aplicaciones.

Recuerden, pueden forkear mi código mejorarlo y esperamos con gusto que les ayude en algo, vamos a darle mantenimiento al mismo y mejorarlo con el paso del tiempo pero ***entre mas desarrolladores mas facil podemos hacer las cosas***.

![](http://i.imgur.com/HebGAKu.png)

Cualquier duda sobre el proyecto por favor preguntarla al correo credondocr@gmail.com

## Schemas

###Player

```
{
    "_id" : ObjectId("57c33709655d9d433a18e286"),
    "account_id" : "112496270",
    "steam_base_64_id" : "76561198072761998",
    "losses" : [ 
        2591757460.0
    ],
    "wins" : [],
    "__v" : 0,
    "winrate" : 0,
    "losses_count" : 1,
    "wins_count" : 0
}

```

### Matches

```
{
    "_id" : ObjectId("57c343ee597167b43e59653f"),
    "radiant_win" : true,
    "duration" : 1832,
    "pre_game_duration" : "0",
    "start_time" : "1443812564",
    "match_id" : "1837920994",
    "match_seq_num" : "1628406937",
    "tower_status_radiant" : "2047",
    "tower_status_dire" : "1542",
    "barracks_status_radiant" : "63",
    "barracks_status_dire" : "3",
    "cluster" : "123",
    "first_blood_time" : 72,
    "lobby_type" : "1",
    "human_players" : "10",
    "leagueid" : "3681",
    "positive_votes" : "0",
    "negative_votes" : "0",
    "game_mode" : "2",
    "flags" : "0",
    "engine" : "1",
    "radiant_score" : "0",
    "dire_score" : "0",
    "radiant_team_id" : "1729060",
    "radiant_name" : "Verum Gaming 2.0",
    "radiant_logo" : "40847606185703130",
    "radiant_team_complete" : "0",
    "radiant_captain" : "115504647",
    "dire_captain" : "76449552",
    "picks_bans" : [ 
        {
            "order" : 0,
            "team" : 1,
            "hero_id" : 51,
            "is_pick" : false
        }, 
        {
            "order" : 1,
            "team" : 0,
            "hero_id" : 39,
            "is_pick" : false
        }, 
        {
            "order" : 2,
            "team" : 1,
            "hero_id" : 38,
            "is_pick" : false
        }, 
        {
            "order" : 3,
            "team" : 0,
            "hero_id" : 85,
            "is_pick" : false
        }, 
        {
            "order" : 4,
            "team" : 1,
            "hero_id" : 25,
            "is_pick" : true
        }, 
        {
            "order" : 5,
            "team" : 0,
            "hero_id" : 65,
            "is_pick" : true
        }, 
        {
            "order" : 6,
            "team" : 0,
            "hero_id" : 30,
            "is_pick" : true
        }, 
        {
            "order" : 7,
            "team" : 1,
            "hero_id" : 7,
            "is_pick" : true
        }, 
        {
            "order" : 8,
            "team" : 1,
            "hero_id" : 67,
            "is_pick" : false
        }, 
        {
            "order" : 9,
            "team" : 0,
            "hero_id" : 12,
            "is_pick" : false
        }, 
        {
            "order" : 10,
            "team" : 1,
            "hero_id" : 1,
            "is_pick" : false
        }, 
        {
            "order" : 11,
            "team" : 0,
            "hero_id" : 61,
            "is_pick" : false
        }, 
        {
            "order" : 12,
            "team" : 0,
            "hero_id" : 71,
            "is_pick" : true
        }, 
        {
            "order" : 13,
            "team" : 1,
            "hero_id" : 21,
            "is_pick" : true
        }, 
        {
            "order" : 14,
            "team" : 0,
            "hero_id" : 11,
            "is_pick" : true
        }, 
        {
            "order" : 15,
            "team" : 1,
            "hero_id" : 44,
            "is_pick" : true
        }, 
        {
            "order" : 16,
            "team" : 0,
            "hero_id" : 91,
            "is_pick" : false
        }, 
        {
            "order" : 17,
            "team" : 1,
            "hero_id" : 72,
            "is_pick" : false
        }, 
        {
            "order" : 18,
            "team" : 0,
            "hero_id" : 48,
            "is_pick" : true
        }, 
        {
            "order" : 19,
            "team" : 1,
            "hero_id" : 74,
            "is_pick" : true
        }
    ],
    "players" : [ 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 741,
                    "ability" : 5224
                }, 
                {
                    "level" : 2,
                    "time" : 806,
                    "ability" : 5222
                }, 
                {
                    "level" : 3,
                    "time" : 839,
                    "ability" : 5224
                }, 
                {
                    "level" : 4,
                    "time" : 924,
                    "ability" : 5222
                }, 
                {
                    "level" : 5,
                    "time" : 1010,
                    "ability" : 5222
                }, 
                {
                    "level" : 6,
                    "time" : 1089,
                    "ability" : 5225
                }, 
                {
                    "level" : 7,
                    "time" : 1180,
                    "ability" : 5222
                }, 
                {
                    "level" : 8,
                    "time" : 1277,
                    "ability" : 5223
                }, 
                {
                    "level" : 9,
                    "time" : 1441,
                    "ability" : 5223
                }, 
                {
                    "level" : 10,
                    "time" : 1495,
                    "ability" : 5224
                }, 
                {
                    "level" : 11,
                    "time" : 1576,
                    "ability" : 5225
                }, 
                {
                    "level" : 12,
                    "time" : 1817,
                    "ability" : 5224
                }, 
                {
                    "level" : 13,
                    "time" : 1895,
                    "ability" : 5223
                }, 
                {
                    "level" : 14,
                    "time" : 2018,
                    "ability" : 5223
                }, 
                {
                    "level" : 15,
                    "time" : 2120,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2275,
                    "ability" : 5225
                }, 
                {
                    "level" : 17,
                    "time" : 2398,
                    "ability" : 5002
                }, 
                {
                    "level" : 18,
                    "time" : 2461,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 3348,
            "hero_damage" : 8054,
            "gold_spent" : 13045,
            "gold" : 6136,
            "level" : 18,
            "xp_per_min" : 605,
            "gold_per_min" : 612,
            "denies" : 24,
            "last_hits" : 231,
            "leaver_status" : 0,
            "assists" : 9,
            "deaths" : 2,
            "kills" : 6,
            "item_5" : 212,
            "item_4" : 0,
            "item_3" : 26,
            "item_2" : 147,
            "item_1" : 116,
            "item_0" : 63,
            "hero_id" : 48,
            "player_slot" : 0,
            "account_id" : 175296637
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 740,
                    "ability" : 5062
                }, 
                {
                    "level" : 2,
                    "time" : 764,
                    "ability" : 5059
                }, 
                {
                    "level" : 3,
                    "time" : 856,
                    "ability" : 5059
                }, 
                {
                    "level" : 4,
                    "time" : 926,
                    "ability" : 5062
                }, 
                {
                    "level" : 5,
                    "time" : 1063,
                    "ability" : 5059
                }, 
                {
                    "level" : 6,
                    "time" : 1130,
                    "ability" : 5062
                }, 
                {
                    "level" : 7,
                    "time" : 1201,
                    "ability" : 5059
                }, 
                {
                    "level" : 8,
                    "time" : 1234,
                    "ability" : 5062
                }, 
                {
                    "level" : 9,
                    "time" : 1391,
                    "ability" : 5063
                }, 
                {
                    "level" : 10,
                    "time" : 1519,
                    "ability" : 5064
                }, 
                {
                    "level" : 11,
                    "time" : 1543,
                    "ability" : 5064
                }, 
                {
                    "level" : 12,
                    "time" : 1745,
                    "ability" : 5063
                }, 
                {
                    "level" : 13,
                    "time" : 1797,
                    "ability" : 5063
                }, 
                {
                    "level" : 14,
                    "time" : 1856,
                    "ability" : 5063
                }, 
                {
                    "level" : 15,
                    "time" : 1989,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2124,
                    "ability" : 5064
                }, 
                {
                    "level" : 17,
                    "time" : 2238,
                    "ability" : 5002
                }, 
                {
                    "level" : 18,
                    "time" : 2348,
                    "ability" : 5002
                }, 
                {
                    "level" : 19,
                    "time" : 2358,
                    "ability" : 5002
                }, 
                {
                    "level" : 20,
                    "time" : 2461,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 4033,
            "hero_damage" : 13399,
            "gold_spent" : 15160,
            "gold" : 4790,
            "level" : 20,
            "xp_per_min" : 740,
            "gold_per_min" : 643,
            "denies" : 10,
            "last_hits" : 226,
            "leaver_status" : 0,
            "assists" : 11,
            "deaths" : 4,
            "kills" : 9,
            "item_5" : 154,
            "item_4" : 249,
            "item_3" : 65,
            "item_2" : 63,
            "item_1" : 0,
            "item_0" : 212,
            "hero_id" : 11,
            "player_slot" : 1,
            "account_id" : 115504647
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 727,
                    "ability" : 5138
                }, 
                {
                    "level" : 2,
                    "time" : 888,
                    "ability" : 5139
                }, 
                {
                    "level" : 3,
                    "time" : 950,
                    "ability" : 5138
                }, 
                {
                    "level" : 4,
                    "time" : 1072,
                    "ability" : 5139
                }, 
                {
                    "level" : 5,
                    "time" : 1237,
                    "ability" : 5138
                }, 
                {
                    "level" : 6,
                    "time" : 1475,
                    "ability" : 5141
                }, 
                {
                    "level" : 7,
                    "time" : 1526,
                    "ability" : 5140
                }, 
                {
                    "level" : 8,
                    "time" : 1818,
                    "ability" : 5138
                }, 
                {
                    "level" : 9,
                    "time" : 1895,
                    "ability" : 5140
                }, 
                {
                    "level" : 10,
                    "time" : 2096,
                    "ability" : 5139
                }, 
                {
                    "level" : 11,
                    "time" : 2158,
                    "ability" : 5141
                }, 
                {
                    "level" : 12,
                    "time" : 2357,
                    "ability" : 5140
                }, 
                {
                    "level" : 13,
                    "time" : 2363,
                    "ability" : 5140
                }, 
                {
                    "level" : 14,
                    "time" : 2463,
                    "ability" : 5139
                }, 
                {
                    "level" : 15,
                    "time" : 2497,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 1703,
            "tower_damage" : 504,
            "hero_damage" : 5256,
            "gold_spent" : 7205,
            "gold" : 4263,
            "level" : 15,
            "xp_per_min" : 420,
            "gold_per_min" : 359,
            "denies" : 6,
            "last_hits" : 42,
            "leaver_status" : 0,
            "assists" : 13,
            "deaths" : 1,
            "kills" : 5,
            "item_5" : 188,
            "item_4" : 180,
            "item_3" : 108,
            "item_2" : 46,
            "item_1" : 36,
            "item_0" : 43,
            "hero_id" : 30,
            "player_slot" : 2,
            "account_id" : 129295611
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 722,
                    "ability" : 5353
                }, 
                {
                    "level" : 2,
                    "time" : 818,
                    "ability" : 5355
                }, 
                {
                    "level" : 3,
                    "time" : 990,
                    "ability" : 5353
                }, 
                {
                    "level" : 4,
                    "time" : 1017,
                    "ability" : 5355
                }, 
                {
                    "level" : 5,
                    "time" : 1111,
                    "ability" : 5353
                }, 
                {
                    "level" : 6,
                    "time" : 1350,
                    "ability" : 5356
                }, 
                {
                    "level" : 7,
                    "time" : 1477,
                    "ability" : 5353
                }, 
                {
                    "level" : 8,
                    "time" : 1791,
                    "ability" : 5355
                }, 
                {
                    "level" : 9,
                    "time" : 1965,
                    "ability" : 5355
                }, 
                {
                    "level" : 10,
                    "time" : 2283,
                    "ability" : 5354
                }, 
                {
                    "level" : 11,
                    "time" : 2460,
                    "ability" : 5356
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 644,
            "hero_damage" : 2310,
            "gold_spent" : 7650,
            "gold" : 1201,
            "level" : 11,
            "xp_per_min" : 257,
            "gold_per_min" : 284,
            "denies" : 3,
            "last_hits" : 45,
            "leaver_status" : 0,
            "assists" : 6,
            "deaths" : 3,
            "kills" : 0,
            "item_5" : 46,
            "item_4" : 181,
            "item_3" : 254,
            "item_2" : 73,
            "item_1" : 218,
            "item_0" : 63,
            "hero_id" : 71,
            "player_slot" : 3,
            "account_id" : 112246685
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 729,
                    "ability" : 5320
                }, 
                {
                    "level" : 2,
                    "time" : 769,
                    "ability" : 5322
                }, 
                {
                    "level" : 3,
                    "time" : 810,
                    "ability" : 5320
                }, 
                {
                    "level" : 4,
                    "time" : 863,
                    "ability" : 5321
                }, 
                {
                    "level" : 5,
                    "time" : 874,
                    "ability" : 5320
                }, 
                {
                    "level" : 6,
                    "time" : 1047,
                    "ability" : 5323
                }, 
                {
                    "level" : 7,
                    "time" : 1082,
                    "ability" : 5320
                }, 
                {
                    "level" : 8,
                    "time" : 1198,
                    "ability" : 5322
                }, 
                {
                    "level" : 9,
                    "time" : 1326,
                    "ability" : 5322
                }, 
                {
                    "level" : 10,
                    "time" : 1493,
                    "ability" : 5322
                }, 
                {
                    "level" : 11,
                    "time" : 1540,
                    "ability" : 5323
                }, 
                {
                    "level" : 12,
                    "time" : 1810,
                    "ability" : 5321
                }, 
                {
                    "level" : 13,
                    "time" : 1851,
                    "ability" : 5321
                }, 
                {
                    "level" : 14,
                    "time" : 2103,
                    "ability" : 5321
                }, 
                {
                    "level" : 15,
                    "time" : 2237,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2371,
                    "ability" : 5323
                }, 
                {
                    "level" : 17,
                    "time" : 2531,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 574,
            "hero_damage" : 13089,
            "gold_spent" : 15615,
            "gold" : 827,
            "level" : 17,
            "xp_per_min" : 523,
            "gold_per_min" : 531,
            "denies" : 4,
            "last_hits" : 120,
            "leaver_status" : 0,
            "assists" : 12,
            "deaths" : 3,
            "kills" : 13,
            "item_5" : 100,
            "item_4" : 108,
            "item_3" : 36,
            "item_2" : 102,
            "item_1" : 1,
            "item_0" : 48,
            "hero_id" : 65,
            "player_slot" : 4,
            "account_id" : 34110444
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 663,
                    "ability" : 5041
                }, 
                {
                    "level" : 2,
                    "time" : 851,
                    "ability" : 5040
                }, 
                {
                    "level" : 3,
                    "time" : 937,
                    "ability" : 5040
                }, 
                {
                    "level" : 4,
                    "time" : 1034,
                    "ability" : 5042
                }, 
                {
                    "level" : 5,
                    "time" : 1295,
                    "ability" : 5040
                }, 
                {
                    "level" : 6,
                    "time" : 1430,
                    "ability" : 5043
                }, 
                {
                    "level" : 7,
                    "time" : 1503,
                    "ability" : 5041
                }, 
                {
                    "level" : 8,
                    "time" : 1597,
                    "ability" : 5040
                }, 
                {
                    "level" : 9,
                    "time" : 2007,
                    "ability" : 5041
                }, 
                {
                    "level" : 10,
                    "time" : 2324,
                    "ability" : 5041
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 18,
            "hero_damage" : 4330,
            "gold_spent" : 4955,
            "gold" : 618,
            "level" : 10,
            "xp_per_min" : 196,
            "gold_per_min" : 201,
            "denies" : 0,
            "last_hits" : 30,
            "leaver_status" : 0,
            "assists" : 5,
            "deaths" : 8,
            "kills" : 2,
            "item_5" : 28,
            "item_4" : 0,
            "item_3" : 218,
            "item_2" : 36,
            "item_1" : 63,
            "item_0" : 46,
            "hero_id" : 25,
            "player_slot" : 128,
            "account_id" : 49305296
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 669,
                    "ability" : 5023
                }, 
                {
                    "level" : 2,
                    "time" : 927,
                    "ability" : 5025
                }, 
                {
                    "level" : 3,
                    "time" : 974,
                    "ability" : 5023
                }, 
                {
                    "level" : 4,
                    "time" : 1161,
                    "ability" : 5025
                }, 
                {
                    "level" : 5,
                    "time" : 1241,
                    "ability" : 5023
                }, 
                {
                    "level" : 6,
                    "time" : 1568,
                    "ability" : 5026
                }, 
                {
                    "level" : 7,
                    "time" : 1628,
                    "ability" : 5024
                }, 
                {
                    "level" : 8,
                    "time" : 1744,
                    "ability" : 5023
                }, 
                {
                    "level" : 9,
                    "time" : 2003,
                    "ability" : 5025
                }, 
                {
                    "level" : 10,
                    "time" : 2342,
                    "ability" : 5025
                }, 
                {
                    "level" : 11,
                    "time" : 2399,
                    "ability" : 5026
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 0,
            "hero_damage" : 3457,
            "gold_spent" : 5220,
            "gold" : 44,
            "level" : 11,
            "xp_per_min" : 204,
            "gold_per_min" : 198,
            "denies" : 9,
            "last_hits" : 34,
            "leaver_status" : 0,
            "assists" : 6,
            "deaths" : 9,
            "kills" : 1,
            "item_5" : 0,
            "item_4" : 0,
            "item_3" : 43,
            "item_2" : 1,
            "item_1" : 180,
            "item_0" : 16,
            "hero_id" : 7,
            "player_slot" : 129,
            "account_id" : 124880944
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 721,
                    "ability" : 5130
                }, 
                {
                    "level" : 2,
                    "time" : 786,
                    "ability" : 5132
                }, 
                {
                    "level" : 3,
                    "time" : 835,
                    "ability" : 5131
                }, 
                {
                    "level" : 4,
                    "time" : 901,
                    "ability" : 5131
                }, 
                {
                    "level" : 5,
                    "time" : 978,
                    "ability" : 5131
                }, 
                {
                    "level" : 6,
                    "time" : 1102,
                    "ability" : 5130
                }, 
                {
                    "level" : 7,
                    "time" : 1281,
                    "ability" : 5133
                }, 
                {
                    "level" : 8,
                    "time" : 1427,
                    "ability" : 5131
                }, 
                {
                    "level" : 9,
                    "time" : 1501,
                    "ability" : 5130
                }, 
                {
                    "level" : 10,
                    "time" : 1740,
                    "ability" : 5130
                }, 
                {
                    "level" : 11,
                    "time" : 1883,
                    "ability" : 5133
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 0,
            "hero_damage" : 3466,
            "gold_spent" : 5665,
            "gold" : 231,
            "level" : 11,
            "xp_per_min" : 259,
            "gold_per_min" : 216,
            "denies" : 7,
            "last_hits" : 53,
            "leaver_status" : 0,
            "assists" : 2,
            "deaths" : 5,
            "kills" : 1,
            "item_5" : 25,
            "item_4" : 88,
            "item_3" : 34,
            "item_2" : 46,
            "item_1" : 50,
            "item_0" : 102,
            "hero_id" : 21,
            "player_slot" : 130,
            "account_id" : 194399067
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 704,
                    "ability" : 5190
                }, 
                {
                    "level" : 2,
                    "time" : 800,
                    "ability" : 5191
                }, 
                {
                    "level" : 3,
                    "time" : 832,
                    "ability" : 5190
                }, 
                {
                    "level" : 4,
                    "time" : 976,
                    "ability" : 5191
                }, 
                {
                    "level" : 5,
                    "time" : 1039,
                    "ability" : 5190
                }, 
                {
                    "level" : 6,
                    "time" : 1146,
                    "ability" : 5193
                }, 
                {
                    "level" : 7,
                    "time" : 1236,
                    "ability" : 5191
                }, 
                {
                    "level" : 8,
                    "time" : 1306,
                    "ability" : 5190
                }, 
                {
                    "level" : 9,
                    "time" : 1628,
                    "ability" : 5192
                }, 
                {
                    "level" : 10,
                    "time" : 1752,
                    "ability" : 5192
                }, 
                {
                    "level" : 11,
                    "time" : 1836,
                    "ability" : 5193
                }, 
                {
                    "level" : 12,
                    "time" : 2012,
                    "ability" : 5191
                }, 
                {
                    "level" : 13,
                    "time" : 2080,
                    "ability" : 5192
                }, 
                {
                    "level" : 14,
                    "time" : 2221,
                    "ability" : 5192
                }, 
                {
                    "level" : 15,
                    "time" : 2309,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2495,
                    "ability" : 5193
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 0,
            "hero_damage" : 7367,
            "gold_spent" : 9685,
            "gold" : 1036,
            "level" : 16,
            "xp_per_min" : 442,
            "gold_per_min" : 376,
            "denies" : 4,
            "last_hits" : 164,
            "leaver_status" : 0,
            "assists" : 4,
            "deaths" : 6,
            "kills" : 4,
            "item_5" : 21,
            "item_4" : 63,
            "item_3" : 26,
            "item_2" : 46,
            "item_1" : 145,
            "item_0" : 212,
            "hero_id" : 44,
            "player_slot" : 131,
            "account_id" : 101801641
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 716,
                    "ability" : 5372
                }, 
                {
                    "level" : 2,
                    "time" : 775,
                    "ability" : 5375
                }, 
                {
                    "level" : 3,
                    "time" : 838,
                    "ability" : 5372
                }, 
                {
                    "level" : 4,
                    "time" : 881,
                    "ability" : 5370
                }, 
                {
                    "level" : 5,
                    "time" : 956,
                    "ability" : 5372
                }, 
                {
                    "level" : 6,
                    "time" : 1033,
                    "ability" : 5370
                }, 
                {
                    "level" : 7,
                    "time" : 1105,
                    "ability" : 5372
                }, 
                {
                    "level" : 8,
                    "time" : 1209,
                    "ability" : 5370
                }, 
                {
                    "level" : 9,
                    "time" : 1307,
                    "ability" : 5371
                }, 
                {
                    "level" : 10,
                    "time" : 1452,
                    "ability" : 5372
                }, 
                {
                    "level" : 11,
                    "time" : 1532,
                    "ability" : 5370
                }, 
                {
                    "level" : 12,
                    "time" : 1707,
                    "ability" : 5375
                }, 
                {
                    "level" : 13,
                    "time" : 1769,
                    "ability" : 5375
                }, 
                {
                    "level" : 14,
                    "time" : 1962,
                    "ability" : 5371
                }, 
                {
                    "level" : 15,
                    "time" : 2218,
                    "ability" : 5371
                }, 
                {
                    "level" : 16,
                    "time" : 2437,
                    "ability" : 5370
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 86,
            "hero_damage" : 9280,
            "gold_spent" : 10685,
            "gold" : 448,
            "level" : 16,
            "xp_per_min" : 442,
            "gold_per_min" : 397,
            "denies" : 19,
            "last_hits" : 134,
            "leaver_status" : 0,
            "assists" : 4,
            "deaths" : 5,
            "kills" : 5,
            "item_5" : 77,
            "item_4" : 46,
            "item_3" : 50,
            "item_2" : 193,
            "item_1" : 102,
            "item_0" : 65,
            "hero_id" : 74,
            "player_slot" : 132,
            "account_id" : 76449552
        }
    ],
    "__v" : 0
}
```
