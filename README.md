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
    "_id" : ObjectId("57c3370a655d9d433a18e472"),
    "radiant_win" : false,
    "match_id" : "2586871443",
    "players" : [ 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 212,
                    "ability" : 5448
                }, 
                {
                    "level" : 2,
                    "time" : 265,
                    "ability" : 5450
                }, 
                {
                    "level" : 3,
                    "time" : 278,
                    "ability" : 5450
                }, 
                {
                    "level" : 4,
                    "time" : 317,
                    "ability" : 5451
                }, 
                {
                    "level" : 5,
                    "time" : 398,
                    "ability" : 5450
                }, 
                {
                    "level" : 6,
                    "time" : 457,
                    "ability" : 5452
                }, 
                {
                    "level" : 7,
                    "time" : 542,
                    "ability" : 5450
                }, 
                {
                    "level" : 8,
                    "time" : 634,
                    "ability" : 5448
                }, 
                {
                    "level" : 9,
                    "time" : 845,
                    "ability" : 5448
                }, 
                {
                    "level" : 10,
                    "time" : 894,
                    "ability" : 5448
                }, 
                {
                    "level" : 11,
                    "time" : 927,
                    "ability" : 5452
                }, 
                {
                    "level" : 12,
                    "time" : 1178,
                    "ability" : 5451
                }, 
                {
                    "level" : 13,
                    "time" : 1399,
                    "ability" : 5451
                }, 
                {
                    "level" : 14,
                    "time" : 1545,
                    "ability" : 5451
                }, 
                {
                    "level" : 15,
                    "time" : 1705,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 1890,
                    "ability" : 5452
                }, 
                {
                    "level" : 17,
                    "time" : 2107,
                    "ability" : 5002
                }, 
                {
                    "level" : 18,
                    "time" : 2175,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 171,
            "hero_damage" : 11327,
            "gold_spent" : 10765,
            "gold" : 529,
            "level" : 18,
            "xp_per_min" : 504,
            "gold_per_min" : 370,
            "denies" : 2,
            "last_hits" : 119,
            "leaver_status" : 0,
            "assists" : 14,
            "deaths" : 8,
            "kills" : 4,
            "item_5" : 23,
            "item_4" : 178,
            "item_3" : 206,
            "item_2" : 214,
            "item_1" : 41,
            "item_0" : 1,
            "hero_id" : 86,
            "player_slot" : 0,
            "account_id" : 95612067
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 242,
                    "ability" : 5179
                }, 
                {
                    "level" : 2,
                    "time" : 268,
                    "ability" : 5178
                }, 
                {
                    "level" : 3,
                    "time" : 327,
                    "ability" : 5179
                }, 
                {
                    "level" : 4,
                    "time" : 491,
                    "ability" : 5180
                }, 
                {
                    "level" : 5,
                    "time" : 610,
                    "ability" : 5178
                }, 
                {
                    "level" : 6,
                    "time" : 751,
                    "ability" : 5181
                }, 
                {
                    "level" : 7,
                    "time" : 897,
                    "ability" : 5179
                }, 
                {
                    "level" : 8,
                    "time" : 995,
                    "ability" : 5178
                }, 
                {
                    "level" : 9,
                    "time" : 1254,
                    "ability" : 5178
                }, 
                {
                    "level" : 10,
                    "time" : 1425,
                    "ability" : 5179
                }, 
                {
                    "level" : 11,
                    "time" : 1453,
                    "ability" : 5181
                }, 
                {
                    "level" : 12,
                    "time" : 1914,
                    "ability" : 5180
                }, 
                {
                    "level" : 13,
                    "time" : 1915,
                    "ability" : 5180
                }, 
                {
                    "level" : 14,
                    "time" : 1989,
                    "ability" : 5180
                }, 
                {
                    "level" : 15,
                    "time" : 2226,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 0,
            "hero_damage" : 9369,
            "gold_spent" : 8550,
            "gold" : 500,
            "level" : 15,
            "xp_per_min" : 349,
            "gold_per_min" : 281,
            "denies" : 0,
            "last_hits" : 52,
            "leaver_status" : 0,
            "assists" : 12,
            "deaths" : 8,
            "kills" : 5,
            "item_5" : 212,
            "item_4" : 46,
            "item_3" : 42,
            "item_2" : 188,
            "item_1" : 180,
            "item_0" : 190,
            "hero_id" : 40,
            "player_slot" : 1,
            "account_id" : 209006237
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 171,
                    "ability" : 5147
                }, 
                {
                    "level" : 2,
                    "time" : 254,
                    "ability" : 5148
                }, 
                {
                    "level" : 3,
                    "time" : 309,
                    "ability" : 5147
                }, 
                {
                    "level" : 4,
                    "time" : 379,
                    "ability" : 5146
                }, 
                {
                    "level" : 5,
                    "time" : 455,
                    "ability" : 5147
                }, 
                {
                    "level" : 6,
                    "time" : 535,
                    "ability" : 5149
                }, 
                {
                    "level" : 7,
                    "time" : 610,
                    "ability" : 5147
                }, 
                {
                    "level" : 8,
                    "time" : 705,
                    "ability" : 5148
                }, 
                {
                    "level" : 9,
                    "time" : 832,
                    "ability" : 5148
                }, 
                {
                    "level" : 10,
                    "time" : 1003,
                    "ability" : 5148
                }, 
                {
                    "level" : 11,
                    "time" : 1136,
                    "ability" : 5149
                }, 
                {
                    "level" : 12,
                    "time" : 1424,
                    "ability" : 5146
                }, 
                {
                    "level" : 13,
                    "time" : 1500,
                    "ability" : 5146
                }, 
                {
                    "level" : 14,
                    "time" : 1704,
                    "ability" : 5146
                }, 
                {
                    "level" : 15,
                    "time" : 1863,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2154,
                    "ability" : 5149
                }, 
                {
                    "level" : 17,
                    "time" : 2286,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 1523,
            "tower_damage" : 1100,
            "hero_damage" : 9501,
            "gold_spent" : 11110,
            "gold" : 557,
            "level" : 17,
            "xp_per_min" : 455,
            "gold_per_min" : 376,
            "denies" : 4,
            "last_hits" : 161,
            "leaver_status" : 0,
            "assists" : 14,
            "deaths" : 7,
            "kills" : 5,
            "item_5" : 178,
            "item_4" : 1,
            "item_3" : 0,
            "item_2" : 0,
            "item_1" : 231,
            "item_0" : 46,
            "hero_id" : 33,
            "player_slot" : 2,
            "account_id" : 157721364
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 109,
                    "ability" : 5508
                }, 
                {
                    "level" : 2,
                    "time" : 273,
                    "ability" : 5510
                }, 
                {
                    "level" : 3,
                    "time" : 349,
                    "ability" : 5509
                }, 
                {
                    "level" : 4,
                    "time" : 410,
                    "ability" : 5511
                }, 
                {
                    "level" : 5,
                    "time" : 506,
                    "ability" : 5511
                }, 
                {
                    "level" : 6,
                    "time" : 632,
                    "ability" : 5512
                }, 
                {
                    "level" : 7,
                    "time" : 701,
                    "ability" : 5511
                }, 
                {
                    "level" : 8,
                    "time" : 766,
                    "ability" : 5511
                }, 
                {
                    "level" : 9,
                    "time" : 919,
                    "ability" : 5508
                }, 
                {
                    "level" : 10,
                    "time" : 1085,
                    "ability" : 5508
                }, 
                {
                    "level" : 11,
                    "time" : 1165,
                    "ability" : 5512
                }, 
                {
                    "level" : 12,
                    "time" : 1294,
                    "ability" : 5510
                }, 
                {
                    "level" : 13,
                    "time" : 1358,
                    "ability" : 5508
                }, 
                {
                    "level" : 14,
                    "time" : 1476,
                    "ability" : 5510
                }, 
                {
                    "level" : 15,
                    "time" : 1605,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 1704,
                    "ability" : 5002
                }, 
                {
                    "level" : 17,
                    "time" : 1777,
                    "ability" : 5512
                }, 
                {
                    "level" : 18,
                    "time" : 1885,
                    "ability" : 5002
                }, 
                {
                    "level" : 19,
                    "time" : 2054,
                    "ability" : 5002
                }, 
                {
                    "level" : 20,
                    "time" : 2197,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 2024,
            "hero_damage" : 12665,
            "gold_spent" : 15760,
            "gold" : 111,
            "level" : 20,
            "xp_per_min" : 596,
            "gold_per_min" : 461,
            "denies" : 7,
            "last_hits" : 178,
            "leaver_status" : 0,
            "assists" : 8,
            "deaths" : 4,
            "kills" : 6,
            "item_5" : 170,
            "item_4" : 212,
            "item_3" : 7,
            "item_2" : 164,
            "item_1" : 50,
            "item_0" : 249,
            "hero_id" : 95,
            "player_slot" : 3,
            "account_id" : 102588537
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 179,
                    "ability" : 5050
                }, 
                {
                    "level" : 2,
                    "time" : 302,
                    "ability" : 5048
                }, 
                {
                    "level" : 3,
                    "time" : 329,
                    "ability" : 5051
                }, 
                {
                    "level" : 4,
                    "time" : 421,
                    "ability" : 5051
                }, 
                {
                    "level" : 5,
                    "time" : 467,
                    "ability" : 5051
                }, 
                {
                    "level" : 6,
                    "time" : 540,
                    "ability" : 5049
                }, 
                {
                    "level" : 7,
                    "time" : 660,
                    "ability" : 5051
                }, 
                {
                    "level" : 8,
                    "time" : 750,
                    "ability" : 5048
                }, 
                {
                    "level" : 9,
                    "time" : 993,
                    "ability" : 5050
                }, 
                {
                    "level" : 10,
                    "time" : 1116,
                    "ability" : 5048
                }, 
                {
                    "level" : 11,
                    "time" : 1207,
                    "ability" : 5049
                }, 
                {
                    "level" : 12,
                    "time" : 1284,
                    "ability" : 5050
                }, 
                {
                    "level" : 13,
                    "time" : 1443,
                    "ability" : 5050
                }, 
                {
                    "level" : 14,
                    "time" : 1592,
                    "ability" : 5048
                }, 
                {
                    "level" : 15,
                    "time" : 1835,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2017,
                    "ability" : 5049
                }, 
                {
                    "level" : 17,
                    "time" : 2301,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 0,
            "hero_damage" : 12685,
            "gold_spent" : 12170,
            "gold" : 621,
            "level" : 17,
            "xp_per_min" : 449,
            "gold_per_min" : 373,
            "denies" : 5,
            "last_hits" : 125,
            "leaver_status" : 0,
            "assists" : 8,
            "deaths" : 5,
            "kills" : 7,
            "item_5" : 46,
            "item_4" : 123,
            "item_3" : 108,
            "item_2" : 63,
            "item_1" : 36,
            "item_0" : 88,
            "hero_id" : 9,
            "player_slot" : 4,
            "account_id" : 86731009
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 294,
                    "ability" : 5003
                }, 
                {
                    "level" : 2,
                    "time" : 294,
                    "ability" : 5004
                }, 
                {
                    "level" : 3,
                    "time" : 324,
                    "ability" : 5004
                }, 
                {
                    "level" : 4,
                    "time" : 378,
                    "ability" : 5005
                }, 
                {
                    "level" : 5,
                    "time" : 436,
                    "ability" : 5004
                }, 
                {
                    "level" : 6,
                    "time" : 534,
                    "ability" : 5006
                }, 
                {
                    "level" : 7,
                    "time" : 620,
                    "ability" : 5003
                }, 
                {
                    "level" : 8,
                    "time" : 711,
                    "ability" : 5004
                }, 
                {
                    "level" : 9,
                    "time" : 837,
                    "ability" : 5003
                }, 
                {
                    "level" : 10,
                    "time" : 966,
                    "ability" : 5005
                }, 
                {
                    "level" : 11,
                    "time" : 1042,
                    "ability" : 5006
                }, 
                {
                    "level" : 12,
                    "time" : 1253,
                    "ability" : 5003
                }, 
                {
                    "level" : 13,
                    "time" : 1290,
                    "ability" : 5005
                }, 
                {
                    "level" : 14,
                    "time" : 1327,
                    "ability" : 5005
                }, 
                {
                    "level" : 15,
                    "time" : 1553,
                    "ability" : 5006
                }, 
                {
                    "level" : 16,
                    "time" : 1553,
                    "ability" : 5002
                }, 
                {
                    "level" : 17,
                    "time" : 1651,
                    "ability" : 5002
                }, 
                {
                    "level" : 18,
                    "time" : 1742,
                    "ability" : 5002
                }, 
                {
                    "level" : 19,
                    "time" : 1813,
                    "ability" : 5002
                }, 
                {
                    "level" : 20,
                    "time" : 2132,
                    "ability" : 5002
                }, 
                {
                    "level" : 21,
                    "time" : 2132,
                    "ability" : 5002
                }, 
                {
                    "level" : 22,
                    "time" : 2132,
                    "ability" : 5002
                }, 
                {
                    "level" : 23,
                    "time" : 2253,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 186,
            "tower_damage" : 2603,
            "hero_damage" : 7281,
            "gold_spent" : 21350,
            "gold" : 4233,
            "level" : 24,
            "xp_per_min" : 853,
            "gold_per_min" : 698,
            "denies" : 13,
            "last_hits" : 390,
            "leaver_status" : 0,
            "assists" : 4,
            "deaths" : 1,
            "kills" : 7,
            "item_5" : 63,
            "item_4" : 81,
            "item_3" : 0,
            "item_2" : 145,
            "item_1" : 208,
            "item_0" : 147,
            "hero_id" : 1,
            "player_slot" : 128,
            "account_id" : 98838289
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 220,
                    "ability" : 5239
                }, 
                {
                    "level" : 2,
                    "time" : 273,
                    "ability" : 5237
                }, 
                {
                    "level" : 3,
                    "time" : 340,
                    "ability" : 5238
                }, 
                {
                    "level" : 4,
                    "time" : 405,
                    "ability" : 5237
                }, 
                {
                    "level" : 5,
                    "time" : 458,
                    "ability" : 5237
                }, 
                {
                    "level" : 6,
                    "time" : 514,
                    "ability" : 5240
                }, 
                {
                    "level" : 7,
                    "time" : 660,
                    "ability" : 5237
                }, 
                {
                    "level" : 8,
                    "time" : 710,
                    "ability" : 5239
                }, 
                {
                    "level" : 9,
                    "time" : 787,
                    "ability" : 5239
                }, 
                {
                    "level" : 10,
                    "time" : 991,
                    "ability" : 5239
                }, 
                {
                    "level" : 11,
                    "time" : 1034,
                    "ability" : 5240
                }, 
                {
                    "level" : 12,
                    "time" : 1410,
                    "ability" : 5238
                }, 
                {
                    "level" : 13,
                    "time" : 1547,
                    "ability" : 5238
                }, 
                {
                    "level" : 14,
                    "time" : 1700,
                    "ability" : 5238
                }, 
                {
                    "level" : 15,
                    "time" : 1912,
                    "ability" : 5240
                }, 
                {
                    "level" : 16,
                    "time" : 1913,
                    "ability" : 5002
                }, 
                {
                    "level" : 17,
                    "time" : 2108,
                    "ability" : 5002
                }, 
                {
                    "level" : 18,
                    "time" : 2307,
                    "ability" : 5002
                }, 
                {
                    "level" : 19,
                    "time" : 2316,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 806,
            "hero_damage" : 16516,
            "gold_spent" : 12275,
            "gold" : 2531,
            "level" : 19,
            "xp_per_min" : 539,
            "gold_per_min" : 397,
            "denies" : 12,
            "last_hits" : 91,
            "leaver_status" : 0,
            "assists" : 16,
            "deaths" : 7,
            "kills" : 9,
            "item_5" : 60,
            "item_4" : 41,
            "item_3" : 127,
            "item_2" : 90,
            "item_1" : 125,
            "item_0" : 50,
            "hero_id" : 51,
            "player_slot" : 129,
            "account_id" : 85565543
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 103,
                    "ability" : 5256
                }, 
                {
                    "level" : 2,
                    "time" : 259,
                    "ability" : 5257
                }, 
                {
                    "level" : 3,
                    "time" : 384,
                    "ability" : 5256
                }, 
                {
                    "level" : 4,
                    "time" : 482,
                    "ability" : 5255
                }, 
                {
                    "level" : 5,
                    "time" : 588,
                    "ability" : 5257
                }, 
                {
                    "level" : 6,
                    "time" : 709,
                    "ability" : 5258
                }, 
                {
                    "level" : 7,
                    "time" : 845,
                    "ability" : 5256
                }, 
                {
                    "level" : 8,
                    "time" : 935,
                    "ability" : 5256
                }, 
                {
                    "level" : 9,
                    "time" : 1046,
                    "ability" : 5255
                }, 
                {
                    "level" : 10,
                    "time" : 1185,
                    "ability" : 5255
                }, 
                {
                    "level" : 11,
                    "time" : 1258,
                    "ability" : 5258
                }, 
                {
                    "level" : 12,
                    "time" : 1512,
                    "ability" : 5255
                }, 
                {
                    "level" : 13,
                    "time" : 1561,
                    "ability" : 5257
                }, 
                {
                    "level" : 14,
                    "time" : 1698,
                    "ability" : 5257
                }, 
                {
                    "level" : 15,
                    "time" : 1829,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 2121,
                    "ability" : 5258
                }, 
                {
                    "level" : 17,
                    "time" : 2305,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 963,
            "tower_damage" : 312,
            "hero_damage" : 6275,
            "gold_spent" : 11475,
            "gold" : 285,
            "level" : 17,
            "xp_per_min" : 455,
            "gold_per_min" : 360,
            "denies" : 2,
            "last_hits" : 141,
            "leaver_status" : 0,
            "assists" : 12,
            "deaths" : 6,
            "kills" : 3,
            "item_5" : 182,
            "item_4" : 178,
            "item_3" : 30,
            "item_2" : 231,
            "item_1" : 1,
            "item_0" : 9,
            "hero_id" : 55,
            "player_slot" : 130,
            "account_id" : 81004850
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 151,
                    "ability" : 5550
                }, 
                {
                    "level" : 2,
                    "time" : 233,
                    "ability" : 5549
                }, 
                {
                    "level" : 3,
                    "time" : 276,
                    "ability" : 5549
                }, 
                {
                    "level" : 4,
                    "time" : 320,
                    "ability" : 5550
                }, 
                {
                    "level" : 5,
                    "time" : 407,
                    "ability" : 5549
                }, 
                {
                    "level" : 6,
                    "time" : 471,
                    "ability" : 5551
                }, 
                {
                    "level" : 7,
                    "time" : 614,
                    "ability" : 5549
                }, 
                {
                    "level" : 8,
                    "time" : 662,
                    "ability" : 5548
                }, 
                {
                    "level" : 9,
                    "time" : 703,
                    "ability" : 5548
                }, 
                {
                    "level" : 10,
                    "time" : 859,
                    "ability" : 5550
                }, 
                {
                    "level" : 11,
                    "time" : 888,
                    "ability" : 5551
                }, 
                {
                    "level" : 12,
                    "time" : 1170,
                    "ability" : 5550
                }, 
                {
                    "level" : 13,
                    "time" : 1357,
                    "ability" : 5548
                }, 
                {
                    "level" : 14,
                    "time" : 1431,
                    "ability" : 5548
                }, 
                {
                    "level" : 15,
                    "time" : 1549,
                    "ability" : 5002
                }, 
                {
                    "level" : 16,
                    "time" : 1661,
                    "ability" : 5551
                }, 
                {
                    "level" : 17,
                    "time" : 1819,
                    "ability" : 5002
                }, 
                {
                    "level" : 18,
                    "time" : 1819,
                    "ability" : 5002
                }, 
                {
                    "level" : 19,
                    "time" : 1950,
                    "ability" : 5002
                }, 
                {
                    "level" : 20,
                    "time" : 2022,
                    "ability" : 5002
                }, 
                {
                    "level" : 21,
                    "time" : 2118,
                    "ability" : 5002
                }, 
                {
                    "level" : 22,
                    "time" : 2173,
                    "ability" : 5002
                }, 
                {
                    "level" : 23,
                    "time" : 2316,
                    "ability" : 5002
                }, 
                {
                    "level" : 24,
                    "time" : 2316,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 683,
            "hero_damage" : 18700,
            "gold_spent" : 19660,
            "gold" : 2163,
            "level" : 24,
            "xp_per_min" : 842,
            "gold_per_min" : 597,
            "denies" : 2,
            "last_hits" : 254,
            "leaver_status" : 0,
            "assists" : 16,
            "deaths" : 3,
            "kills" : 9,
            "item_5" : 117,
            "item_4" : 137,
            "item_3" : 235,
            "item_2" : 125,
            "item_1" : 48,
            "item_0" : 131,
            "hero_id" : 99,
            "player_slot" : 131,
            "account_id" : 92578222
        }, 
        {
            "ability_upgrades" : [ 
                {
                    "level" : 1,
                    "time" : 121,
                    "ability" : 5107
                }, 
                {
                    "level" : 2,
                    "time" : 335,
                    "ability" : 5106
                }, 
                {
                    "level" : 3,
                    "time" : 533,
                    "ability" : 5106
                }, 
                {
                    "level" : 4,
                    "time" : 639,
                    "ability" : 5107
                }, 
                {
                    "level" : 5,
                    "time" : 925,
                    "ability" : 5106
                }, 
                {
                    "level" : 6,
                    "time" : 1102,
                    "ability" : 5109
                }, 
                {
                    "level" : 7,
                    "time" : 1207,
                    "ability" : 5106
                }, 
                {
                    "level" : 8,
                    "time" : 1250,
                    "ability" : 5107
                }, 
                {
                    "level" : 9,
                    "time" : 1361,
                    "ability" : 5107
                }, 
                {
                    "level" : 10,
                    "time" : 1536,
                    "ability" : 5108
                }, 
                {
                    "level" : 11,
                    "time" : 1670,
                    "ability" : 5109
                }, 
                {
                    "level" : 12,
                    "time" : 1906,
                    "ability" : 5108
                }, 
                {
                    "level" : 13,
                    "time" : 1906,
                    "ability" : 5108
                }, 
                {
                    "level" : 14,
                    "time" : 2071,
                    "ability" : 5108
                }, 
                {
                    "level" : 15,
                    "time" : 2234,
                    "ability" : 5002
                }
            ],
            "hero_healing" : 0,
            "tower_damage" : 475,
            "hero_damage" : 8062,
            "gold_spent" : 8485,
            "gold" : 1097,
            "level" : 15,
            "xp_per_min" : 365,
            "gold_per_min" : 304,
            "denies" : 0,
            "last_hits" : 87,
            "leaver_status" : 0,
            "assists" : 12,
            "deaths" : 11,
            "kills" : 3,
            "item_5" : 0,
            "item_4" : 252,
            "item_3" : 46,
            "item_2" : 180,
            "item_1" : 36,
            "item_0" : 1,
            "hero_id" : 19,
            "player_slot" : 132,
            "account_id" : 59465694
        }
    ],
    "__v" : 0
}
```