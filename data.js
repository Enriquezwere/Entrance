var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-entrance",
      "name": "Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.022648238388679687,
        "pitch": -0.42335584584971286,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -0.02301305723999647,
          "pitch": -0.022279476222616168,
          "rotation": 0,
          "target": "1-entrance-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1898891034136554,
          "pitch": -0.163627503288982,
          "title": "Main Entrance",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">CSTC main entrance is the primary point of entry for students, teachers, staff, and visitors to access the school premises.</span><div><span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\"><br></span></div>"
        }
      ]
    },
    {
      "id": "1-entrance-front",
      "name": "Entrance front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.007123792865291634,
        "pitch": -0.3122850689898726,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -3.1051595344389558,
          "pitch": 0.32423969272913844,
          "rotation": 0,
          "target": "0-main-entrance"
        },
        {
          "yaw": 0.012076181952545895,
          "pitch": 0.06619382558693232,
          "rotation": 0,
          "target": "2-security"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-security",
      "name": "Security",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.5959780565468655,
        "pitch": 0.08308272878536016,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 1.3774756158350279,
          "pitch": 0.02555125068991515,
          "rotation": 0,
          "target": "4-hallway-right"
        },
        {
          "yaw": -1.403505514760079,
          "pitch": 0.11560510707471394,
          "rotation": 0,
          "target": "3-hallway-left"
        },
        {
          "yaw": 3.0697550238420037,
          "pitch": 0.3533217121957417,
          "rotation": 0,
          "target": "1-entrance-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway-left",
      "name": "Hallway (Left)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.08526628346128007,
        "pitch": 0.07188206099160332,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -3.1007220242625113,
          "pitch": 0.13563522995902133,
          "rotation": 0,
          "target": "2-security"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway-right",
      "name": "Hallway (Right)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.01721828097323197,
        "pitch": 0.08040310934800843,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -1.770074395804901,
          "pitch": 0.11560361497777194,
          "rotation": 0,
          "target": "2-security"
        },
        {
          "yaw": 0.10797291799037367,
          "pitch": -0.039476262515222516,
          "rotation": 0,
          "target": "5-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.10863784119556641,
        "pitch": -0.02230822582498071,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -0.18035270237316325,
          "pitch": 0.1282008686569025,
          "rotation": 0,
          "target": "8-activity-area"
        },
        {
          "yaw": -3.1161121470169775,
          "pitch": 0.1843173995851295,
          "rotation": 0,
          "target": "4-hallway-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cashier-and-registrar",
      "name": "Cashier and Registrar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 1.3566024491665232,
        "pitch": -0.05827612228600998,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -0.01739985335710159,
          "pitch": 0.0791267762708312,
          "rotation": 0,
          "target": "7-waiting-area"
        },
        {
          "yaw": -1.1577183502000228,
          "pitch": 0.14485056637722593,
          "rotation": 0,
          "target": "8-activity-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9981205216387039,
          "pitch": -0.05181952407150092,
          "title": "Cashier and Registrar",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">CSTC cashier handles financial transactions and manages the school's finances, while the registrar is responsible for managing student records and overseeing the enrollment process.</span><div><span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\"><br></span></div>"
        }
      ]
    },
    {
      "id": "7-waiting-area",
      "name": "Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.46025153942741603,
        "pitch": 0.00855795648340063,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -1.0056798044401702,
          "pitch": 0.11987970845371088,
          "rotation": 0,
          "target": "9-activity-area-stage"
        },
        {
          "yaw": -3.0466494566435642,
          "pitch": 0.1378235606094087,
          "rotation": 0,
          "target": "6-cashier-and-registrar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.331595053542573,
          "pitch": 0.05537284266185161,
          "title": "Office of the President",
          "text": "This is the office of Nelson D. Mendoza the President and Founder of CSTC.<div><br></div>"
        },
        {
          "yaw": 0.6911090063994259,
          "pitch": 0.13606083241634792,
          "title": "Canteen",
          "text": "<span style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(58, 68, 84);\">Canteen is a designated area within a school or institution where food and beverages are sold to students and staff.</span>"
        }
      ]
    },
    {
      "id": "8-activity-area",
      "name": "Activity Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1062776917593187,
          "pitch": 0.0994123209639497,
          "rotation": 0,
          "target": "6-cashier-and-registrar"
        },
        {
          "yaw": 2.991564874365353,
          "pitch": 0.07399017625311188,
          "rotation": 0,
          "target": "5-hallway"
        },
        {
          "yaw": -0.028465636419314322,
          "pitch": 0.09946714736514828,
          "rotation": 0,
          "target": "9-activity-area-stage"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.30154066930595036,
          "pitch": 0.07578983090010283,
          "title": "Activity Area&nbsp;",
          "text": "The activity area encompasses all the locations and facilities where students participate in extracurricular and co-curricular activities, fostering a well-rounded educational experience.<br><div><br></div>"
        }
      ]
    },
    {
      "id": "9-activity-area-stage",
      "name": "Activity Area (Stage)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -0.07455352911789248,
        "pitch": -0.014753975479383286,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -1.1632849713080944,
          "pitch": 0.15257248166384763,
          "rotation": 0,
          "target": "7-waiting-area"
        },
        {
          "yaw": -0.004249813067810138,
          "pitch": 0.3004281770569861,
          "rotation": 0,
          "target": "8-activity-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
