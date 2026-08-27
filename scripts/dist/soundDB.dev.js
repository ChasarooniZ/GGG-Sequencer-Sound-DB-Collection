"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = exports.DB_PREFIX = void 0;
var DB_PREFIX = "ggg-sfx"; // Start from 01

exports.DB_PREFIX = DB_PREFIX;
var p = "modules/ggg/assets/sounds";
var database = {
  melee: {
    axe: {
      "throw": {
        "01": {
          "throw": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/axe-throwing.ogg"),
          "spin-hit": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/axe-throwing-hitting-flesh.ogg")
        }
      },
      strike: {
        heavy: {
          general: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heave Axe Normal Whoosh 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heave Axe Normal Whoosh 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heave Axe Normal Whoosh 03.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Whoosh 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Whoosh 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Whoosh 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Whoosh 04.ogg")
            }
          },
          blood: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike 04.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike 04.ogg")
            }
          },
          lethal: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack 08.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only 05.ogg")
            },
            "03": {
              metal: {
                "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only Metal 01.ogg"),
                "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only Metal 02.ogg"),
                "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Lethal Attack Only Metal 03.ogg")
              }
            }
          }
        }
      },
      slash: {
        flesh: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 1.ogg"),
            "02": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 2.ogg"),
            "03": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 3.ogg"),
            "04": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 4.ogg"),
            "05": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 5.ogg")
          }
        }
      }
    },
    blade: {
      strike: {
        general: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Blade Swing.ogg")
          },
          "02": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Attack 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Attack 2.ogg"),
            "03": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Attack 3.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 09.ogg"),
            10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 10.ogg"),
            11: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type A Katana 11.ogg")
          },
          "04": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 09.ogg"),
            10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 10.ogg"),
            11: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 11.ogg"),
            12: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 12.ogg"),
            13: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Whoosh Type B Katana 13.ogg")
          }
        },
        bamboo: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 005.ogg")
          }
        },
        dagger: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 005.ogg")
          }
        },
        greatsword: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 005.ogg")
          },
          "02": {
            blood: {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type A 09.ogg")
            },
            whoosh: {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type A 09.ogg")
            }
          },
          "03": {
            blood: {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 10.ogg"),
              11: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type B 11.ogg")
            },
            whoosh: {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 10.ogg"),
              11: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type B 11.ogg")
            }
          },
          "04": {
            blood: {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 10.ogg"),
              11: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Attack Full Type C 11.ogg")
            },
            whoosh: {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Greatsword/Greatsword Whoosh Type C 10.ogg")
            }
          }
        },
        karambit: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type A 09.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type B 08.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Attack Full Type C 07.ogg")
          }
        },
        katana: {
          general: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut Without Blood 10.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut Without Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut Without Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut Without Blood 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut Without Blood 04.ogg")
            },
            "03": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type C Cut Without Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type C Cut Without Blood 02.ogg")
            },
            "04": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut Without Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut Without Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut Without Blood 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut Without Blood 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut Without Blood 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut Without Blood 06.ogg")
            }
          },
          blood: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type A Cut And Blood 10.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut And Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut And Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut And Blood 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut And Blood 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type B Cut And Blood 05.ogg")
            },
            "03": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type C Cut And Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type C Cut And Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type C Cut And Blood 03.ogg")
            },
            "04": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut And Blood 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut And Blood 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut And Blood 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut And Blood 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut And Blood 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Katana Type D Cut And Blood 06.ogg")
            }
          }
        },
        shortsword: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 005.ogg")
          }
        },
        rapier: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 005.ogg")
          }
        }
      },
      block: {
        greatsword: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 005.ogg")
          }
        },
        shortsword: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 005.ogg")
          }
        },
        dagger: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 005.ogg")
          }
        },
        rapier: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 005.ogg")
          }
        }
      },
      parry: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 005.ogg")
        }
      },
      "throw": {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 005.ogg")
        },
        "02": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-throw-swoosh-02.ogg")
        }
      },
      spin: {
        "01": {
          "through-flesh": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/sword-out-of-flesh.ogg")
        }
      }
    },
    bludgeoning: {
      strike: {
        "one-hand": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 005.ogg")
          }
        },
        "two-hand": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 005.ogg")
          }
        },
        general: {
          "01": {
            metal_hit: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Swing Metal Hit.ogg")
          },
          "02": {
            iron_staff: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Spin Final.ogg")
          }
        },
        flail: {
          "01": {
            "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/bludgeon-throwing.ogg")
          },
          "02": {
            "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/shield-breaking-with-bludgeon.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh F.ogg")
          }
        },
        nanchaku: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type A 09.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type B 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type B 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type B 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type B 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type B 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type B 06.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 09.ogg"),
            10: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 10.ogg"),
            11: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Attack Full Type C 11.ogg")
          }
        },
        staff: {
          iron: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 06.ogg"),
              "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 07.ogg"),
              "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 08.ogg"),
              "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 09.ogg"),
              10: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 10.ogg"),
              11: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 11.ogg"),
              12: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type A 12.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type B 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type B 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type B 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type B 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type B 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type B 06.ogg")
            },
            "03": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type C 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type C 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type C 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type C 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type C 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Attack Full Type C 06.ogg")
            }
          }
        }
      },
      block: {
        "one-hand": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 005.ogg")
          }
        },
        "two-hand": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 005.ogg")
          }
        }
      },
      parry: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 005.ogg")
        }
      },
      "throw": {
        chain: {
          "01": {
            "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/bludgeon-chain-fly.ogg")
          }
        }
      },
      spin: {
        nanchaku: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Circular Whoosh.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Spin Loop Type A.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Nunchakus/Nunchaku Spin Loop Type B.ogg")
          }
        },
        staff: {
          iron: {
            "01": {
              full: "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Spin Full.ogg")
            }
          }
        }
      }
    },
    claws: {
      strike: {
        stab: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 09.ogg"),
            10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 10.ogg"),
            11: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 11.ogg"),
            12: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 12.ogg"),
            13: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 13.ogg"),
            14: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 14.ogg"),
            15: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 15.ogg"),
            16: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 16.ogg"),
            17: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 17.ogg"),
            18: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 18.ogg"),
            19: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Stab Metal Claws 19.ogg")
          }
        },
        slash: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Whoosh Metal Claws 07.ogg")
          }
        }
      }
    },
    polearm: {
      strike: {
        "01": {
          blade: {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 005.ogg")
          },
          blunt: {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 005.ogg")
          },
          pierce: {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 005.ogg")
          }
        },
        "02": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-01.ogg"),
          "02": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-02.ogg"),
          "03": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-03.ogg"),
          "04": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-04.ogg"),
          "05": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-05.ogg")
        },
        "05": {
          magical: "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-the-giant.ogg")
        }
      },
      block: {
        "01": {
          blade: {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 005.ogg")
          },
          blunt: {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 005.ogg")
          },
          pierce: {
            "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 005.ogg")
          }
        }
      },
      parry: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 005.ogg")
        }
      },
      hit: {
        "01": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/malthael-weapon-hit.ogg")
        },
        "02": {
          pierce: "".concat(p, "/SoundFlakes/diablo-wrath/weapon/spear-impale-flesh-hit.ogg")
        }
      }
    },
    torch: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Intense Torch A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Intense Torch B.ogg")
      },
      "02": {
        "01": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh B.ogg"),
        "03": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh C.ogg"),
        "04": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh D.ogg")
      },
      "03": {
        "01": "".concat(p, "/TomMusic/FreeFantasySFX/Torch/Torch Attack Strike 1.ogg"),
        "02": "".concat(p, "/TomMusic/FreeFantasySFX/Torch/Torch Attack Strike 2.ogg")
      }
    },
    unarmed: {
      fist: {
        strike: {
          "01": {
            medium: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Medium A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Medium B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Medium C.ogg")
            },
            heavy: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Heavy C.ogg")
            },
            light: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Light A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Light B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Light C.ogg")
            }
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Punch A (1).ogg"),
            "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Punch B (1).ogg"),
            "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Punch C (1).ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Punch A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Punch B.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Big Punch A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Big Punch B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Big Punch C.ogg")
          },
          "05": {
            "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-face-punch.ogg")
          },
          "06": {
            hit: {
              "01": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-1.ogg"),
              "02": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-2.ogg"),
              "03": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-3.ogg"),
              "04": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-4.ogg"),
              "05": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-5.ogg"),
              "06": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-6.ogg"),
              "07": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-7.ogg"),
              "08": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-8.ogg"),
              "09": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-9.ogg"),
              10: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-10.ogg"),
              11: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-11.ogg"),
              12: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-12.ogg"),
              13: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-13.ogg"),
              14: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-14.ogg"),
              15: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-15.ogg"),
              16: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-16.ogg"),
              17: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-17.ogg"),
              18: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-18.ogg"),
              19: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-19.ogg"),
              20: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-20.ogg"),
              21: "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Punch Hit-21.ogg")
            }
          }
        },
        miss: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Miss A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Miss B.ogg")
          }
        }
      },
      elbow: {
        strike: {
          "01": {
            medium: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Medium A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Medium B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Medium C.ogg")
            },
            heavy: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Heavy C.ogg")
            },
            light: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Light A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Light B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Light C.ogg")
            }
          }
        }
      },
      kick: {
        strike: {
          "01": {
            medium: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Medium A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Medium B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Medium C.ogg")
            },
            heavy: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Heavy C.ogg")
            },
            light: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Light A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Light B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Light C.ogg")
            }
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing F.ogg")
          },
          "03": {
            "short": {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Kick A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Kick B.ogg")
            },
            "long": {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Kick A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Kick B.ogg")
            }
          }
        }
      },
      knee: {
        strike: {
          "01": {
            medium: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Medium A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Medium B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Medium C.ogg")
            },
            heavy: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Heavy C.ogg")
            },
            light: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Light A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Light B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Light C.ogg")
            }
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Belt A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Belt B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Belt C.ogg")
          }
        }
      },
      slap: {
        strike: {
          "01": {
            medium: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Medium A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Medium B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Medium C.ogg")
            },
            heavy: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Heavy C.ogg")
            },
            light: {
              "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Light A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Light B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Light C.ogg")
            }
          }
        }
      }
    },
    whip: {
      strike: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip E.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Whip A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Whip B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Whip C.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Double Whip.ogg")
        },
        "04": {
          "01": "".concat(p, "/Soniss/GDC2026/David Dumais Audio/Whip Snap.ogg")
        }
      }
    }
  },
  ranged: {
    bow: {
      strike: {
        general: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Attack 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Attack 2.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 005.ogg")
          }
        },
        long_bow: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 005.ogg")
          }
        },
        short_bow: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 005.ogg")
          }
        }
      },
      impact: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 005.ogg")
        }
      }
    },
    crossbow: {
      strike: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot D.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 005.ogg")
        }
      }
    },
    blowgun: {
      strike: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny D.ogg")
        }
      }
    },
    bomb: {
      acid: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Acid.ogg")
        }
      },
      blood: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Blood.ogg")
        }
      },
      explosion: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Explosion.ogg")
        }
      },
      electricity: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Lightning.ogg")
        }
      },
      fire: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Fire.ogg")
        }
      },
      holy_water: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Holy Water.ogg")
        }
      },
      ice: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Ice.ogg")
        }
      },
      poison: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Poison.ogg")
        }
      },
      water: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Water.ogg")
        }
      },
      "break": {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Break A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Break B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Break C.ogg")
        }
      }
    },
    firearm: {
      arquebus: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 005.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 005.ogg")
          }
        }
      },
      old_timey: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot E.ogg")
          }
        }
      },
      flare_gun: {
        strike: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Steampunk Flare.ogg")
          }
        }
      },
      flintlock_pistol: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 005.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 005.ogg")
          }
        }
      },
      musket: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 005.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 005.ogg")
          }
        }
      },
      rifle: {
        strike: {
          steampunk: {
            "01": {
              "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Steampunk Gun Shot.ogg")
            }
          }
        }
      },
      sniper: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 1.ogg"),
          "02": "".concat(p, "/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 2.ogg"),
          "03": "".concat(p, "/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 3.ogg"),
          "04": "".concat(p, "/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 4.ogg"),
          "05": "".concat(p, "/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 5.ogg"),
          "06": "".concat(p, "/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 6.ogg")
        }
      }
    },
    sling: {
      strike: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 005.ogg")
        }
      },
      impact: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 005.ogg")
        }
      }
    },
    thrown: {
      general: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/General Throw A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/General Throw B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/General Throw C.ogg")
        }
      },
      blade: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 005.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh E.ogg")
          }
        },
        knife: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh E.ogg")
          }
        }
      },
      blunt: {
        whoosh: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh F.ogg")
          }
        }
      },
      boomerang: {
        whoosh: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 004.ogg")
          }
        }
      },
      knife: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 005.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 005.ogg")
          }
        }
      },
      shuriken: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 005.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 005.ogg")
          }
        }
      },
      spear: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 005.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh F.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 005.ogg")
          }
        }
      },
      stone: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 005.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 005.ogg")
          }
        }
      }
    },
    siege_weapons: {
      balista: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot D.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 005.ogg")
          }
        }
      },
      cannon: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 005.ogg")
          },
          "02": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Steampunk Cannon Shot.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 005.ogg")
          }
        }
      }
    },
    scifi: {
      bfg: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Big Freaking Gun A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Big Freaking Gun B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Big Freaking Gun C.ogg")
          }
        }
      },
      bio: {
        charge: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Bio Charge A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Bio Charge B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Bio Charge C.ogg")
            }
          }
        }
      },
      blaster: {
        strike: {
          "02": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Sci-Fi Gun Shot.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Echo Blaster.ogg")
          }
        }
      },
      charge: {
        strike: {
          single: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Single A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Single B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Single C.ogg")
            }
          },
          semi: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Semi Automatic A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Semi Automatic B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Semi Automatic C.ogg")
            }
          },
          auto: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Automatic A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Automatic B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Automatic C.ogg")
            }
          }
        }
      },
      deathgrinder: {
        strike: {
          single: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Single A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Single B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Single C.ogg")
            }
          },
          semi: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Semi Automatic A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Semi Automatic B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Semi Automatic C.ogg")
            }
          },
          auto: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Automatic A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Automatic B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Automatic C.ogg")
            }
          }
        }
      },
      decimator: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 007.ogg"),
            "08": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 008.ogg")
          }
        }
      },
      disintegrator: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Disintegrator A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Disintegrator B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Disintegrator C.ogg")
          }
        }
      },
      electric: {
        charge: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Electric Charge A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Electric Charge B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Electric Charge C.ogg")
            }
          }
        },
        rifle: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic D.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic D.ogg")
              }
            }
          }
        }
      },
      electromagnetic: {
        rifle: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic D.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic D.ogg")
              }
            }
          }
        }
      },
      entropy: {
        blaster: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 005.ogg"),
              "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 006.ogg"),
              "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 007.ogg"),
              "08": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 008.ogg")
            }
          }
        }
      },
      graviton: {
        hammer: {
          strike: {
            burst: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Graviton Hammer Burst 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Graviton Hammer Burst 002.ogg")
              }
            },
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 005.ogg"),
                "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 006.ogg"),
                "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 007.ogg")
              }
            }
          }
        }
      },
      impulse: {
        charge: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Impulse Charge A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Impulse Charge B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Impulse Charge C.ogg")
            }
          }
        },
        emiter: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Semi Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Semi Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Semi Automatic C.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Automatic C.ogg")
              }
            }
          }
        }
      },
      laser: {
        beam: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Laser Beam A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Laser Beam B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Laser Beam C.ogg")
            },
            "04": {
              "01": "".concat(p, "/Soniss/GDC2024/DoexStudio/Laser_Beam_004.ogg")
            }
          }
        },
        lazgun: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Semi Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Semi Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Semi Automatic C.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Automatic C.ogg")
              }
            }
          }
        },
        pistol: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic D.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic D.ogg")
              }
            }
          }
        },
        rifle: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic D.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic D.ogg")
              }
            }
          }
        }
      },
      missile: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Missile Launch A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Missile Launch B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Missile Launch C.ogg")
          }
        },
        impact: {
          explosion: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Rocket Explosion A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Rocket Explosion B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Rocket Explosion C.ogg")
            }
          }
        }
      },
      needler: {
        strike: {
          burst: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Kinetic Impaler Burst 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Kinetic Impaler Burst 002.ogg")
            }
          },
          single: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 005.ogg"),
              "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 006.ogg"),
              "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 007.ogg"),
              "08": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 008.ogg")
            }
          }
        }
      },
      null_ray: {
        emitter: {
          strike: {
            burst: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Null-Ray Emitter Burst 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Null-Ray Emitter Burst 002.ogg")
              }
            },
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 005.ogg"),
                "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 006.ogg"),
                "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 007.ogg")
              }
            }
          }
        }
      },
      orbital_gun: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Orbital Gun A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Orbital Gun B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Orbital Gun C.ogg")
          }
        }
      },
      particle: {
        charge: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Particle Charge A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Particle Charge B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Particle Charge C.ogg")
            }
          }
        },
        gun: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Particle Gun A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Particle Gun B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Particle Gun C.ogg")
          }
        }
      },
      phase: {
        disruptor: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 005.ogg"),
              "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 006.ogg"),
              "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 007.ogg"),
              "08": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 008.ogg")
            }
          }
        }
      },
      plasma: {
        gun: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Plasmagun A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Plasmagun B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Plasmagun C.ogg")
            }
          }
        },
        lance: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 005.ogg"),
              "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 006.ogg"),
              "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 007.ogg")
            }
          }
        }
      },
      power: {
        charge: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Power Charge A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Power Charge B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Power Charge C.ogg")
            }
          }
        }
      },
      proton: {
        heavy_gun: {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Proton Heavy Gun A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Proton Heavy Gun B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Heavy/Proton Heavy Gun C.ogg")
            }
          }
        }
      },
      pulse: {
        pistol: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic D.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic D.ogg")
              }
            }
          }
        },
        pulsator: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Semi Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Semi Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Semi Automatic C.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Automatic C.ogg")
              }
            }
          }
        }
      },
      sonic: {
        supersonic_gun: {
          strike: {
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Single A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Single B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Single C.ogg")
              }
            },
            semi: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Semi Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Semi Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Semi Automatic C.ogg")
              }
            },
            auto: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Automatic A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Automatic B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Automatic C.ogg")
              }
            }
          }
        }
      },
      singularity: {
        pistol: {
          strike: {
            burst: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol Burst.ogg")
              }
            },
            single: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 005.ogg"),
                "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 006.ogg")
              }
            }
          }
        }
      },
      artillery: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Mars Artillery A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Mars Artillery B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Mars Artillery C.ogg")
          }
        }
      },
      cannon: {
        strike: {
          "02": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Sci-Fi Cannon Shot.ogg")
          }
        },
        "void": {
          strike: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 005.ogg"),
              "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 006.ogg"),
              "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 007.ogg")
            }
          }
        }
      },
      torpedo: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Ship Torpedo A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Ship Torpedo B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Ship Torpedo C.ogg")
          }
        }
      },
      turret: {
        charge: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Turret Rotation A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Turret Rotation B.ogg")
          }
        }
      }
    }
  },
  magic: {
    arcane: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Item Use A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Item Use B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Reward 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Reward 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Reward 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Reward 004.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Arcade Spell.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Change 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Change 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Change 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Change 004.ogg")
          }
        },
        arrow: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 007.ogg")
          }
        },
        astral: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 007.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 006.ogg")
          }
        },
        crystal: {
          "02": {
            "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Glass Surge.ogg")
          }
        },
        missiles: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 007.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 007.ogg")
          }
        },
        ripple: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 007.ogg")
          }
        }
      },
      impact: {
        blast: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast Dry.ogg")
          }
        }
      },
      surge: {
        crystals: {
          "04": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 004.ogg")
          }
        },
        ethereal: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 006.ogg")
          }
        },
        wave: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 007.ogg")
          }
        },
        "long": {
          "03": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Discovery Jingle.ogg")
          }
        }
      },
      light: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Light 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Light 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Light 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Light 004.ogg")
          }
        },
        revealing: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 004.ogg")
          }
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet D.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Charm A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Charm B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Charm C.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 004.ogg")
          }
        }
      },
      curse: {
        glyph: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 007.ogg")
          }
        }
      }
    },
    primal: {
      cast: {
        general: {
          "03": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Animorphic Bond.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Summon Bramble Trap.ogg")
          }
        },
        animate_tree: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Animate Tree 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Nature/Animate Tree 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Nature/Animate Tree 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Nature/Animate Tree 004.ogg")
          }
        },
        animal_friend: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Animal Friend A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Animal Friend B.ogg")
          }
        },
        insect_plague: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Insect Plague A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Insect Plague B.ogg")
          }
        },
        iron_wood: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Iron Wood A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Iron Wood B.ogg")
          }
        },
        roots: {
          deep: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Deep Roots 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic II/Nature/Deep Roots 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic II/Nature/Deep Roots 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Magic II/Nature/Deep Roots 004.ogg")
            }
          }
        },
        summon: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Summon Sapling.ogg")
          }
        }
      },
      strike: {
        vine: {
          whip: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic/Nature/Whip Vine A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Nature/Whip Vine B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Nature/Whip Vine C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Magic/Nature/Whip Vine D.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Nature Whip A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Nature Whip B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Nature Whip C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Nature Whip D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Nature Whip E.ogg")
            }
          },
          whip_and_grab: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Grasping Vine A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Grasping Vine B.ogg")
            }
          }
        },
        moonbeam: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Moon Beam.ogg")
          }
        },
        sunbeam: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Sun Beam.ogg")
          }
        }
      },
      buff: {
        barkskin: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Barkskin.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Bark Skin A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Bark Skin B.ogg")
          }
        },
        bear_rage: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Bear Rage.ogg")
          }
        },
        bird_flight: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Bird Flight.ogg")
          }
        },
        horse_speed: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Horse Speed.ogg")
          }
        },
        lion_courage: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Lion Courage.ogg")
          }
        },
        owl_wisdom: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Owl Wisdom.ogg")
          }
        },
        thorns: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Thorn Shield.ogg")
          }
        }
      },
      bugs: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Craft Text Sprawl B.ogg")
          }
        },
        poisonous_swarm: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Nature/Poisonous Swarm 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Nature/Poisonous Swarm 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Nature/Poisonous Swarm 003.ogg")
          }
        }
      },
      burst: {
        bramble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Bramble Burst.ogg")
          }
        },
        bulb: {
          "01": {
            plant: "".concat(p, "/ovani-sounds/Magic/Nature/Bulb Burst Plant.ogg"),
            splat: "".concat(p, "/ovani-sounds/Magic/Nature/Bulb Burst.ogg")
          }
        }
      },
      healing: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Nature/Natural Healing.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Goodberry Heal A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Goodberry Heal B.ogg")
        }
      },
      growth: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Nature/Verdant Growth.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Magic/Nature/Root Snare.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Plant Growth A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Plant Growth B.ogg")
        }
      },
      structure: {
        wall: {
          thorns: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Nature/Wall of Thorns.ogg")
            }
          }
        }
      }
    },
    divine: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 005.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 006.ogg")
          },
          "03": {
            "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Light Power Up.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Soulflare Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Soulflare Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Soulflare Cast C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Soulflare Cast D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Soulflare Cast E.ogg")
          }
        },
        bolt: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Cast C.ogg")
          }
        },
        beam: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 005.ogg")
          }
        },
        bells: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail G.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong D.ogg")
          },
          "03": {
            "long": {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Long A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Long B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Long.ogg")
            },
            "short": {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Short A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Short B.ogg")
            }
          },
          "04": {
            saddle: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle D.ogg")
            },
            "short": {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Short A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Short B.ogg")
            },
            steady: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Steady A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Steady B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Steady C.ogg")
            }
          },
          "05": {
            "01": "".concat(p, "/Soniss/GDC2026/Ivo Vicic/Church Bells.ogg")
          }
        },
        dispel: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Shield Counter A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Shield Counter B.ogg")
            }
          }
        },
        flame: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Sacred Flame.ogg")
          }
        },
        laser: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Holy Laser A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Holy Laser B.ogg")
          }
        },
        light: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Lights.ogg")
          }
        },
        shimmer: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Magic Shimmer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Magic Shimmer B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Magic Shimmer C.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Shimmer Low A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Shimmer Low B.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Shimmer Bell A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Shimmer Bell B.ogg")
          }
        },
        smite: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 007.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Light/Smite 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Light/Smite 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Light/Smite 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Light/Smite 004.ogg")
          }
        },
        spiritual_weapon: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Spiritual Weapon.ogg")
          }
        },
        turn_undead: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Turn Undead.ogg")
          }
        }
      },
      impact: {
        bells: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact G.ogg"),
            "08": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact H.ogg"),
            "09": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact I.ogg"),
            10: "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact J.ogg")
          }
        },
        bolt: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Impact C.ogg")
          }
        },
        wrath: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Heavenly Wrath.ogg")
          }
        },
        flame: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Heavenly Flame.ogg")
          }
        },
        shock: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Holy Shock.ogg")
          }
        }
      },
      loop: {
        bolt: {
          "01": {
            trail: "".concat(p, "/ovani-sounds/Magic/Light/Light Bolt Trail Loop.ogg")
          }
        },
        bells: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer D.ogg")
          }
        }
      },
      nova: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Light/Holy Nova.ogg")
        }
      },
      healing: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Heal 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Heal 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Heal 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Heal 004.ogg")
        },
        "02": {
          mass_healing: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 005.ogg")
            }
          }
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Magic II/Light/Cure 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Magic II/Light/Cure 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Magic II/Light/Cure 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Magic II/Light/Cure 004.ogg")
        }
      },
      light: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Light/Illuminate.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Magic/Light/Holy Light.ogg")
        }
      },
      restoration: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic II/Light/Divine Restoration 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Magic II/Light/Divine Restoration 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Magic II/Light/Divine Restoration 003.ogg")
        }
      },
      revivify: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Light/Revivify.ogg")
        }
      },
      seal: {
        loop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Light/Holy Seal Loop 001 - Shortened.ogg")
          }
        }
      },
      buff: {
        ward: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Holy Ward.ogg")
          }
        },
        bless: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Bless 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Bless 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Bless 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Bless 004.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Light/Bless 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Light/Bless 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Light/Bless 003.ogg")
          }
        },
        bliss: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Light/Eternal Bliss 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Light/Eternal Bliss 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Light/Eternal Bliss 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Light/Eternal Bliss 004.ogg")
          }
        },
        consecrate: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Light/Consecrate.ogg")
          }
        },
        sanctuary: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 005.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 005.ogg")
          }
        },
        shield: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Shield.ogg")
          }
        }
      }
    },
    occult: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 007.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Decision 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Decision 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Decision 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Decision 004.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Magic/Dark/Necrotic Touch.ogg")
          },
          "04": {
            "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Alien Swell.ogg")
          },
          "05": {
            "01": "".concat(p, "/Soniss/GDC2026/InMotionAudio/Evil Ring.ogg"),
            "02": "".concat(p, "/Soniss/GDC2026/InMotionAudio/Evil Bong.ogg")
          },
          "06": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Spell 3.ogg")
          },
          "07": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Dark/Soul Break 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Dark/Soul Break 002.ogg")
          }
        },
        bane: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Bane.ogg")
          }
        },
        beam: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 004.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 007.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 003.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 005.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 006.ogg")
          },
          "04": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Hit 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Hit 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Hit 3.ogg")
          }
        },
        blast: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 007.ogg")
          }
        },
        conjure: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Conjure A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Conjure B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Conjure C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Conjure D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Conjure E.ogg")
          }
        },
        countdown: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Spooky Countdown.ogg")
          }
        },
        energy: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Magic A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Magic B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Magic C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Magic D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Magic E.ogg")
          }
        },
        fear: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Cause Fear.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Fear 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Fear 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Fear 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Fear 004.ogg")
          }
        },
        ghostly: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 006.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Air/Ghostly/Ghost Breath A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Ghostly/Ghost Breath B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Ghostly/Ghost Breath C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Ghostly/Ghost Breath D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Ghostly/Ghost Breath E.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Spell 3.ogg")
          },
          "04": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Spell 4.ogg")
          }
        },
        hex: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Hex.ogg")
          }
        },
        inflict_wounds: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Inflict Wounds.ogg")
          }
        },
        laughter: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Mad Maiden Stinger.ogg")
          }
        },
        missile: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Whoosh E.ogg")
          }
        },
        shatter: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 005.ogg")
          }
        },
        wind: {
          "01": {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High E.ogg"),
              "06": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High F.ogg")
            },
            loop: {
              "01": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind High Loop.ogg")
            }
          },
          "02": {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low E.ogg"),
              "06": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low F.ogg")
            },
            loop: {
              "01": "".concat(p, "/ovani-sounds/Air/Ghostly/Hollow Wind Low Loop.ogg")
            }
          }
        }
      },
      impact: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 004.ogg")
          },
          "02": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Impact Boom.ogg"),
            "02": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Impact Braam.ogg")
          },
          "03": {
            "01": "".concat(p, "/Soniss/GDC2024/Jake Fielding/Boom - Cinematic Horn.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Anvil Select.ogg")
          }
        },
        metal: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 004.ogg")
          }
        }
      },
      movement: {
        teleportation: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 005.ogg")
          }
        },
        whoosh: {
          general: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Magic_Whoosh 1.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Magic_Whoosh 2.ogg")
            }
          },
          gravity: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 004.ogg")
            }
          },
          shimmer: {
            "03": {
              "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 004.ogg")
            }
          }
        }
      },
      bolt: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Cast C.ogg")
          },
          loop: {
            trail: "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Trail Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Dark/Shadow Bolt Impact C.ogg")
          }
        }
      },
      pulse: {
        "01": {
          abyss: "".concat(p, "/ovani-sounds/Magic/Dark/Abyssal Pulse.ogg"),
          shock: "".concat(p, "/ovani-sounds/Magic/Dark/Dread Wave.ogg"),
          shatter: "".concat(p, "/ovani-sounds/Magic/Dark/Soul Shatter.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 005.ogg")
        }
      },
      surge: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Mist Horror 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Mist Horror 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Mist Horror 003.ogg")
          }
        },
        "long": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Suspense 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Suspense 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Suspense 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Suspense 004.ogg")
          }
        }
      },
      siphon: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Dark/Soul Siphon.ogg")
        }
      },
      healing: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Resurrection 1.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Heal A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Heal B.ogg")
          }
        },
        false_life: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/False Life.ogg")
          }
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Magic_Buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Magic_Buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dark_Magic_Buff 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Sigil A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Sigil B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Sigil C.ogg")
          }
        },
        ghostly: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 004.ogg")
          }
        },
        shield: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Dark/Dark Shield.ogg")
          }
        }
      },
      curse: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Dark/Nightshade Curse.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic/Dark/Horrify.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 004.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 004.ogg")
          },
          "05": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 005.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 006.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 007.ogg")
          },
          "06": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Dark/Curse 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Dark/Curse 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Dark/Curse 003.ogg")
          }
        },
        bells: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Dark/Unholy Bells 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Dark/Unholy Bells 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Dark/Unholy Bells 003.ogg")
          }
        },
        confused: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 004.ogg")
          }
        },
        hex: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Dark/Hex 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Dark/Hex 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Dark/Hex 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Dark/Hex 004.ogg")
          }
        },
        hypnotize: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 004.ogg")
          }
        },
        restrained: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 004.ogg")
          }
        },
        stun: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 004.ogg")
          }
        },
        stupefy: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Dark/Mana Break 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Dark/Mana Break 002.ogg")
          }
        }
      }
    },
    air: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell G.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell Big A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell Big B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell Big C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell Big D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Magic/Air Missile Spell Big E.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Air/Digital/Cartoon Wind A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Digital/Cartoon Wind B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Digital/Cartoon Wind C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Digital/Cartoon Wind D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Digital/Cartoon Wind E.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind F.ogg")
          },
          "05": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Spell 3.ogg")
          },
          "06": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Blow 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Blow 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Blow 003.ogg")
          }
        },
        blade: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Blade.ogg")
          }
        },
        gust: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Gust Fast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Whooshes/Gust Fast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Whooshes/Gust Fast C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Whooshes/Gust Fast D.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Medium A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Medium B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Medium C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Medium D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Medium E.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Whoosh 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Whoosh 2.ogg")
          }
        },
        fast: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Breath/Reverb_Added/Breathe Out Fast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Breath/Reverb_Added/Breathe Out Fast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Breath/Reverb_Added/Breathe Out Fast C.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Fast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Fast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Fast C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Fast D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Fast E.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny E.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny F.ogg"),
            "06": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny G.ogg"),
            "07": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Tiny H.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air Short A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air Short B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air Short C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air Short D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air Short E.ogg")
          }
        },
        push: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Push A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Push B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Push C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Push D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Push E.ogg")
          }
        },
        reverse: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Fast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Fast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Fast C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Fast D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Fast E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Fast F.ogg")
          },
          "02": {
            charge: {
              "01": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Slow A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Slow B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Slow C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Slow D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Slow E.ogg"),
              "06": "".concat(p, "/ovani-sounds/Air/Designed/Air Reverse Slow F.ogg")
            }
          }
        },
        roar: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Designed/Spinning Wind A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Designed/Spinning Wind B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Designed/Spinning Wind C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Designed/Spinning Wind D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Designed/Spinning Wind E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Air/Designed/Spinning Wind F.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Air/Designed/Stuttering Wind A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Designed/Stuttering Wind B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Designed/Stuttering Wind C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Designed/Stuttering Wind D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Designed/Stuttering Wind E.ogg")
          }
        },
        slice: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Slice A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Slice B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Whoosh Slice C.ogg")
          }
        },
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Wind Strike 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Wind Strike 002.ogg")
          }
        },
        suck: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Designed/Air Suck A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Designed/Air Suck B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Designed/Air Suck C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Designed/Air Suck D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Designed/Air Suck E.ogg")
          }
        },
        charge: {
          loop: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Air/Magic/Air Ball Spell Loop A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Magic/Air Ball Spell Loop B.ogg")
            }
          }
        }
      },
      impact: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Hit 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Hit 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Hit 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Hits A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Hits B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Hits C.ogg")
          }
        },
        turbine: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Turbine 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Turbine 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Turbine 003.ogg")
          }
        }
      },
      wind: {
        gust: {
          "long": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Big Wind Gust A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Whooshes/Big Wind Gust B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Air/Whooshes/Big Wind Gust C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Air/Whooshes/Big Wind Gust D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Air/Whooshes/Big Wind Gust E.ogg")
            }
          }
        },
        whirlwind: {
          "04": {
            "long": {
              "01": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Long A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Long B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Long C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Long D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Long E.ogg")
            },
            "short": {
              "01": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Short A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Short B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Short C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Short D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Air/Digital/Digital Wind Short E.ogg")
            }
          }
        }
      },
      cyclone: {
        loop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Cyclone Loop - Shortened.ogg")
          }
        }
      },
      blade: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Cast C.ogg")
          },
          loop: {
            trail: "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Trail Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Air/Aero Blade Impact C.ogg")
          }
        },
        "02": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Cast C.ogg")
          },
          loop: {
            trail: "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Trail Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Air/Cyclone Blade Impact C.ogg")
          }
        }
      },
      breathe: {
        out: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Breath/Breathe Out A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Breath/Breathe Out B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Breath/Breathe Out C.ogg")
          }
        },
        "in": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Breath/Breathe In A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Breath/Breathe In B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Breath/Breathe In C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Breath/Breathe In D.ogg")
          }
        }
      },
      movement: {
        air_walk: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Walk.ogg")
          }
        },
        teleportation: {
          "01": {
            "in": "".concat(p, "/ovani-sounds/Magic/Air/Aeroportation In.ogg"),
            out: "".concat(p, "/ovani-sounds/Magic/Air/Aeroportation Out.ogg")
          }
        },
        jump: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 004.ogg")
          }
        },
        wind: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 003.ogg")
          }
        },
        turbine: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 004.ogg")
          }
        },
        dash: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Breath/Reverb_Added/Breathe In Fast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Breath/Reverb_Added/Breathe In Fast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Breath/Reverb_Added/Breathe In Fast C.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind Short A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind Short B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind Short C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind Short D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind Short E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Air/Digital/Retro Game Wind Short F.ogg")
          }
        }
      },
      surge: {
        general: {
          "01": {
            sky: "".concat(p, "/ovani-sounds/Magic/Air/Sky Surge.ogg"),
            whirlwind_gust: "".concat(p, "/ovani-sounds/Magic/Air/Whirlwind Gust.ogg"),
            embrace: "".concat(p, "/ovani-sounds/Magic/Air/Zephyrs Embrace.ogg"),
            resonance: "".concat(p, "/ovani-sounds/Magic/Air/Zephyrs Resonance.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Metal Wind 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Metal Wind 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Metal Wind 003.ogg")
          },
          "05": {
            "01": "".concat(p, "/ovani-sounds/Air/Magic/Air Ball Spell Small A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Magic/Air Ball Spell Small B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Magic/Air Ball Spell Small C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Magic/Air Ball Spell Small D.ogg")
          },
          "06": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 004.ogg")
          }
        },
        wind: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Long A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Long B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Long C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Long D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Air/Whooshes/Air Whoosh Long E.ogg")
          }
        }
      },
      leak: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air E.ogg"),
          "04": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air F.ogg"),
          "05": "".concat(p, "/ovani-sounds/Air/Misc/Escaping Air G.ogg")
        }
      },
      mist: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Air/Mistform.ogg")
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Magic_Buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Magic_Buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Wind_Magic_Buff 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Air Glyph 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Air Glyph 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Air Glyph 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Air Glyph 004.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Wind Clearance 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Wind Clearance 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Wind Clearance 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Wind Clearance 004.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Buff A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Buff B.ogg")
          }
        },
        misc: {
          echo: {
            "01": {
              cast: "".concat(p, "/ovani-sounds/Magic/Air/Echoing Gust Cast.ogg"),
              impact: "".concat(p, "/ovani-sounds/Magic/Air/Echoing Gust Impact.ogg")
            }
          }
        }
      },
      debuff: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Air/Air Curse.ogg")
          }
        }
      }
    },
    acid: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Spell 2.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Spell 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Spell 1.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Magic_Whoosh 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Magic_Whoosh 2.ogg")
          }
        },
        bubble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Whoosh Bubble.ogg")
          }
        },
        toss: {
          "throw": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Shot A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Shot B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Shot C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Shot D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Shot E.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Whoosh A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Whoosh B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Whoosh C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Whoosh D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Whoosh E.ogg")
            }
          },
          impact: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Hit A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Hit B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Hit C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Hit D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Acid Hit E.ogg")
            }
          }
        }
      },
      impact: {
        "01": {
          "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Hit 1.ogg"),
          "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Hit 2.ogg"),
          "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Hit 3.ogg"),
          "04": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Hit 4.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Poison Hit A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Poison Hit B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Poison Hit C.ogg")
        }
      },
      buff: {
        "01": {
          "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Magic_Buff 1.ogg"),
          "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Magic_Buff 2.ogg"),
          "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Poison_Magic_Buff 3.ogg")
        }
      },
      debuff: {
        virulent: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Grotesque Acid A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Grotesque Acid B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Acid/Grotesque Acid C.ogg")
          }
        }
      }
    },
    earth: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Spell 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Magic_Whoosh 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Magic_Whoosh 2.ogg")
          }
        },
        grease: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Grease Short 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Earth/Grease Short 002.ogg")
          }
        },
        magnetic: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Earth/Magnetic Burst.ogg")
          }
        },
        rumble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Low A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Low B.ogg")
          }
        },
        stone: {
          "throw": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Attack A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Attack B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Attack C.ogg")
            }
          }
        },
        stonepocalypse: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Stonepocalypse.ogg")
          }
        },
        wind_up: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Stone Windup A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Stone Windup B.ogg")
          }
        }
      },
      ranged: {
        barrage: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Rock Meteor Swarm 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Rock Meteor Swarm 2.ogg")
          }
        },
        boulder: {
          "01": {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Cast A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Cast B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Cast C.ogg")
            },
            loop: {
              trail: "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Trail Loop.ogg")
            },
            impact: {
              "01": "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Earth/Boulder Throw Impact C.ogg")
            }
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Boulder Eruption 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Earth/Boulder Eruption 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Earth/Boulder Eruption 003.ogg")
          }
        },
        rock: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot E.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot No Ring A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot No Ring B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Magic/Rock Shoot No Ring C.ogg")
          },
          "03": {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Cast A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Cast B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Cast C.ogg")
            },
            loop: {
              trail: "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Trail Loop.ogg")
            },
            impact: {
              "01": "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Earth/Rock Throw Impact C.ogg")
            }
          },
          "04": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Rock Meteor Throw 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Rock Meteor Throw 2.ogg")
          },
          "05": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Rocky Missile 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Earth/Rocky Missile 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Earth/Rocky Missile 003.ogg")
          }
        },
        stone: {
          "01": {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Throw Cast A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Throw Cast B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Throw Cast C.ogg")
            },
            loop: {
              trail: "".concat(p, "/ovani-sounds/Magic/Earth/Stone Trail Loop.ogg")
            },
            impact: {
              "01": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Throw Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Throw Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Throw Impact C.ogg")
            }
          }
        },
        "throw": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Lift Throw A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Lift Throw B.ogg")
          }
        },
        magnetic: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Magnet 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Magnet 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Magnet 003.ogg")
          }
        }
      },
      impact: {
        general: {
          "01": {
            normal: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact E.ogg"),
              "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact F.ogg"),
              "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact G.ogg")
            },
            muffled: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact Muffled A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact Muffled B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact Muffled C.ogg")
            }
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Hit 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Hit 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks_Hit 3.ogg")
          }
        },
        stone: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Magic/Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Magic/Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Magic/Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Magic/Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Magic/Impact E.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Impact E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Impact F.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Impact E.ogg")
          }
        },
        seismic: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 004.ogg")
          }
        },
        multiple: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Hits Multiple A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Hits Multiple B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Hits Multiple C.ogg")
          }
        }
      },
      dig: {
        burrow: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Dig A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Dig B.ogg")
          }
        },
        erupt: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Erupt A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Earth Erupt B.ogg")
          }
        }
      },
      tail: {
        "01": {
          "short": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail G.ogg"),
            "08": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail H.ogg"),
            "09": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail I.ogg")
          },
          "long": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long G.ogg")
          }
        }
      },
      strike: {
        "01": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-breaks-the-stone-door.ogg")
        }
      },
      movement: {
        meld: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Earth/Earthmeld.ogg")
          }
        },
        quake: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Earth/Quake Step.ogg")
          }
        },
        whoosh: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh G.ogg")
          }
        }
      },
      rise: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise E.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Steady A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Steady B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Steady C.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Saddle.ogg")
        }
      },
      loop: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer D.ogg")
          }
        },
        geokinesis: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Geokinesis Loop 001 - Shortened.ogg")
          }
        }
      },
      crumble: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Earth/Stones/Crumbling Rock A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Stones/Crumbling Rock B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Stones/Crumbling Rock C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Stones/Crumbling Rock D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Earth/Stones/Crumbling Rock E.ogg")
        }
      },
      drag: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Drag A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Drag B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Drag C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Drag D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Earth/Stones/Large Stones Drag E.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Drag A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Drag B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Drag C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Drag D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Earth/Stones/Medium Stones Drag E.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 004.ogg")
        }
      },
      earthquake: {
        distant: {
          loop: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Distant Loop A.ogg")
            }
          },
          "long": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Distant Long A.ogg")
            }
          },
          "short": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Distant Short A.ogg")
            }
          }
        },
        close: {
          loop: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Loop A.ogg")
            }
          },
          "long": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Long A.ogg")
            }
          },
          "short": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Short A.ogg")
            }
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Impacts A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Impacts B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Impacts C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Impacts D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Impacts E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Earth/Underground/Earthquake Impacts F.ogg")
          }
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks _Magic_Buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks _Magic_Buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Rocks _Magic_Buff 3.ogg")
          }
        },
        armor: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Armor.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Stoneskin 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Earth/Stoneskin 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Earth/Stoneskin 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Earth/Stoneskin 004.ogg")
          }
        },
        shield: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Earth/Stone Ward 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Earth/Stone Ward 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Earth/Stone Ward 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Earth/Stone Ward 004.ogg")
          }
        },
        rune: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Earth/Rune Place.ogg")
          }
        }
      },
      explosion: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Earth/Magic/Eruption A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Magic/Eruption B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Magic/Eruption C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Magic/Eruption D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Earth/Magic/Eruption E.ogg")
        }
      },
      structure: {
        wall: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Earth/Stone Wall.ogg")
          },
          "02": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Rock Wall 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Rock Wall 2.ogg")
          }
        },
        tunnel: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Secret Tunnel.ogg")
          }
        }
      },
      pulse: {
        seismic: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Earth/Seismic Pulse.ogg")
          }
        }
      },
      sand: {
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Impact E.ogg")
          }
        },
        movement: {
          "short": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Movement Short A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Movement Short B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Movement Short C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Movement Short D.ogg")
            }
          },
          "long": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Movement Long A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Movement Long B.ogg")
            }
          }
        },
        pour: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Pour A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Pour B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Pour C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Pour D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Pour E.ogg")
          }
        },
        shake: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Shake A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Shake B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Shake C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Sand/Sand Shake D.ogg")
          }
        }
      },
      imprison: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Earth/Earthen Grasp.ogg")
        }
      },
      landslide: {
        loop: {
          small: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Landslides/Small Landslide Loop.ogg")
            }
          },
          large: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Loop A.ogg")
            }
          }
        },
        "long": {
          large: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Long A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Long B.ogg")
            }
          }
        },
        "short": {
          small: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Landslides/Small Landslide Short A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Earth/Landslides/Small Landslide Short B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Earth/Landslides/Small Landslide Short C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Earth/Landslides/Small Landslide Short D.ogg")
            }
          },
          large: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Short A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Short B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Short C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Short D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Short E.ogg"),
              "06": "".concat(p, "/ovani-sounds/Earth/Landslides/Landslide Short F.ogg")
            }
          }
        },
        stomp: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Earth/Magic/Landslide Stomp A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Earth/Magic/Landslide Stomp B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Earth/Magic/Landslide Stomp C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Earth/Magic/Landslide Stomp D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Earth/Magic/Landslide Stomp E.ogg")
          }
        }
      },
      lift: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Lift A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Lift B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Lift C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Lift D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Lift E.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Whoosh A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Whoosh B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Whoosh C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Whoosh D.ogg")
        }
      },
      spike: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Spike A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Spike B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Spike C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Spike D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Earth/Magic/Earth Spike E.ogg")
        }
      },
      misc: {}
    },
    electricity: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Spell 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Magic_Whoosh 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Magic_Whoosh 2.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Electro Strike 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Electro Strike 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Electro Strike 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Electro Strike 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Electro Strike 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Electro Strike 006.ogg")
          }
        },
        charge: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderbolt Strike Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderbolt Strike Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderbolt Strike Cast C.ogg")
          }
        },
        match: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Match A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Match B.ogg")
          }
        },
        shot: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Shot A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Shot B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Shot C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Shot D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Shot E.ogg")
          }
        },
        storm: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Storm Cast 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Storm Cast 002.ogg")
          }
        },
        whip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Whip A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Whip B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Whip C.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Whip A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Whip B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Whip C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Whip D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Whip E.ogg")
          }
        }
      },
      impact: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Hits 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Hits 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Hits 3.ogg")
          }
        },
        charge: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderbolt Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderbolt Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderbolt Impact C.ogg")
          }
        },
        crackle: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Shock/Thunderous Boom.ogg")
          }
        },
        crash: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 005.ogg")
          }
        },
        burst: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 004.ogg")
          }
        }
      },
      lightning_bolt: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Cast C.ogg")
          },
          loop: {
            trail: "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Trail Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Shock/Lightning Bolt Impact C.ogg")
          }
        }
      },
      thunder: {
        strike: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Thunder Strike 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Thunder Strike 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Thunder Strike 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Air and Thunder/Thunder Strike 004.ogg")
          }
        }
      },
      zap: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Electric/Electric Zap.ogg")
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Lighting_Buff 3.ogg")
          }
        }
      }
    },
    fire: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Spell A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Spell B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Only A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Only B.ogg")
          },
          "03": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Fireball 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Fireball 2.ogg"),
            "03": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Fireball 3.ogg")
          },
          "04": {
            "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Fire Whoosh.ogg")
          },
          "05": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Spell 3.ogg")
          }
        },
        ball: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Ball.ogg")
          }
        },
        blast: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Back Blast.ogg")
          }
        },
        "throw": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast and Tail A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast and Tail B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Crackling.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Hiss A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Hiss B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Hiss C.ogg")
          },
          "04": {
            slow: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Phase.ogg")
            }
          },
          "05": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip D.ogg")
          }
        },
        erupt: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Erupt A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Erupt B.ogg")
          }
        },
        gust: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Fire Gust 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Fire/Fire Gust 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Fire/Fire Gust 003.ogg")
          }
        },
        hit: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Then Hit A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Then Hit B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Then Hit C.ogg")
          }
        },
        miasma: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Miasma 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Fire/Miasma 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Fire/Miasma 003.ogg")
          }
        },
        rapid: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Rapid Fire.ogg")
          }
        },
        spray: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Burning Spray.ogg")
          }
        },
        summon: {
          coal: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Summon Coal Spirit.ogg")
            }
          },
          fire: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Summon Fire Spawn.ogg")
            }
          },
          sparkle: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Summon Sparkle.ogg")
            }
          }
        },
        torch: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch On_Off.ogg")
          }
        },
        strike: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Attack A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Attack B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Attack C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Attack D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Attack E.ogg")
            }
          },
          chains: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Flame Chain A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Flame Chain B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Flame Chain C.ogg")
            }
          },
          smoke: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Smoke Strike 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic II/Fire/Smoke Strike 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic II/Fire/Smoke Strike 003.ogg")
            }
          },
          shuriken: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Shuriken.ogg")
            }
          },
          whip: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Fire Whip.ogg")
            }
          }
        }
      },
      surge: {
        general: {},
        flames: {
          "01": {
            _markers: {
              loop: {
                start: 488,
                end: 1292
              }
            },
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Firespray 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Firespray 2.ogg")
          }
        }
      },
      aura: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Aura.ogg")
        }
      },
      impact: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short E.ogg")
          },
          "03": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Hit 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Hit 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Hit 3.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Hit A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Hit B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Hit C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Hit D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Fire/Fire Hit E.ogg")
          }
        },
        flame: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Fire Impact B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Misc/Fire Punch.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 004.ogg")
          }
        },
        spark: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 005.ogg")
          }
        },
        extinguish: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact C.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact D.ogg")
          }
        }
      },
      fireball: {
        "01": {
          large: {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Cast A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Cast B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Cast C.ogg")
            },
            loop: {
              trail: "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Trail Loop.ogg")
            },
            impact: {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Large Fireball Impact C.ogg")
            }
          },
          medium: {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Cast A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Cast B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Cast C.ogg")
            },
            loop: {
              trail: "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Trail Loop.ogg")
            },
            impact: {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Medium Fireball Impact C.ogg")
            }
          },
          small: {
            cast: {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Cast A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Cast B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Cast C.ogg")
            },
            loop: {
              trail: "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Trail Loop.ogg")
            },
            impact: {
              "01": "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Impact A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Impact B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic/Fire/Small Fireball Impact C.ogg")
            }
          }
        }
      },
      burst: {
        general: {
          "01": {
            small: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Strike A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Strike B.ogg")
            }
          }
        },
        flames: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fiery Burst Long Tail A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fiery Burst Long Tail B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fiery Burst Long Tail C.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic/Fire/Burning Hands.ogg")
          }
        },
        lava: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Fire/Lava Burst.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_Earthquake_With_Lava.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Magic_Fire_Earthquake 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Magic_Fire_Earthquake_with_Lava 1.ogg")
          }
        },
        nuke: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2024/David Dumais/Nuke.ogg")
          }
        }
      },
      loop: {
        lava: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Lava Enchantment Loop 001.ogg")
          }
        },
        storm: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer E.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer F.ogg")
          },
          "02": {
            spin: "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer D.ogg")
          }
        }
      },
      firebreath: {
        "01": {
          "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Dragon_Fireball 1.ogg")
        }
      },
      burn: {
        "03": {
          "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Long A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Long B.ogg")
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Firebuff 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Firebuff 2.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_magic_buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_magic_buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Fire_magic_buff 3.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Misc/Flame Short Low End A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Misc/Flame Short Low End B.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Tear A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Tear B.ogg")
          }
        },
        armor: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Fire/Flame Armor.ogg")
          }
        },
        flames: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Warm Buff 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Fire/Warm Buff 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Fire/Warm Buff 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Fire/Warm Buff 004.ogg")
          }
        },
        shield: {
          flames: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Fire/Fire Ward 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic II/Fire/Fire Ward 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic II/Fire/Fire Ward 003.ogg")
            }
          }
        }
      },
      movement: {
        circle: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Circle Around.ogg")
          }
        },
        whoosh: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Quick Whoosh L to R.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Low Movement A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Movement/Fire Low Movement B.ogg")
          }
        },
        dash: {
          "01": {
            leaving: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh C.ogg")
            },
            returning: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh D.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh F.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh G.ogg"),
              "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh H.ogg")
            },
            maxspeed: {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh E.ogg")
            }
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh E.ogg")
          }
        },
        bolt: {
          "03": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Move Quick.ogg")
          }
        },
        radiation: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Fire Reactor 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Fire Reactor 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Fire Reactor 003.ogg")
          }
        }
      },
      torch: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Intense A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Intense B.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Long Intense.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Movement A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Movement C.ogg")
        },
        "04": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Off Intense.ogg")
        }
      },
      structure: {
        pillar: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Fire/Flame Pillar.ogg")
          }
        }
      },
      cursed: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame E.ogg")
        }
      },
      extinguish: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Misc/Psssht Fwhoooofft.ogg")
        }
      },
      ignite: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Fire/Combustion.ogg")
        }
      },
      phoenix: {
        "01": {
          burst: "".concat(p, "/ovani-sounds/Magic/Fire/Phoenix Burst.ogg"),
          flash: "".concat(p, "/ovani-sounds/Magic/Fire/Phoenix Flash.ogg")
        }
      },
      rain: {
        loop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Misc/Rain On Fire Loop.ogg")
          }
        }
      },
      summon: {
        "01": {
          "long": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Long A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Long B.ogg")
          },
          medium: {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Medium A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Medium B.ogg")
          },
          "short": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Short A.ogg")
          }
        }
      },
      misc: {
        blazing_comet: {
          "01": {
            complete: "".concat(p, "/ovani-sounds/Magic/Fire/Blazing Comet.ogg")
          }
        }
      }
    },
    ice: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_spell 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_ Magic_whoosh 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_ Magic_whoosh 2.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frostbourne 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frostbourne 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frostbourne 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frostbourne 004.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Weapon A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Weapon B.ogg")
          }
        },
        conjure: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_conjure 1.ogg")
          }
        },
        dispel: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Ice Strike Dispel 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Ice Strike Dispel 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Ice Strike Dispel 003.ogg")
          },
          "05": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Dispel Iceberg.ogg")
          }
        },
        icycle: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Ice Strike Cast 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Ice Strike Cast 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Ice Strike Cast 003.ogg")
          }
        },
        shot: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Shoot A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Shoot B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Shoot C.ogg")
          }
        },
        snow: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Snow A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Snow B.ogg")
          }
        },
        summon: {
          iceberg: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Summon Iceberg 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Summon Iceberg 002.ogg")
            }
          },
          water_elemental: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Summon Water Elemental 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Summon Water Elemental 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Summon Water Elemental 003.ogg")
            }
          }
        },
        whoosh: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Whoosh D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Whoosh E.ogg")
          }
        }
      },
      strike: {
        icycle: {
          single: {
            "01": {
              "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Throw 1.ogg"),
              "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Throw 2.ogg")
            }
          },
          multiple: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic/Ice/Icicle Barrage.ogg")
            },
            "02": {
              "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Barrage 1.ogg"),
              "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Barrage 2.ogg")
            }
          }
        }
      },
      loop: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer C.ogg")
        }
      },
      ice_lance: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Cast C.ogg")
          },
          loop: {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Travel Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Lance Impact C.ogg")
          }
        }
      },
      snowball: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball C.ogg")
          },
          loop: {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball Travel Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Ice/Snow Ball Impact C.ogg")
          }
        }
      },
      freeze: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Ice/Icy Veins.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Magic/Ice/Frozen Echo.ogg")
        },
        "03": {
          "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Freeze 1.ogg"),
          "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Freeze 2.ogg")
        },
        "04": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 004.ogg")
        },
        "05": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Freeze A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Freeze B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Freeze C.ogg")
        }
      },
      gale: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Ice/Arctic Gale.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Magic/Ice/Frost Nova.ogg")
        }
      },
      impact: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_hits 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_hits 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_hits 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Hits A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Hits B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Hits C.ogg")
          }
        }
      },
      movement: {
        dash: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh D.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh H.ogg")
          }
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_Magic_Buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_Magic_Buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Ice_Magic_Buff 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Buff A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Ice/Ice Buff B.ogg")
          }
        },
        shield: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Glacial Shield.ogg")
          }
        },
        movement: {
          "01": {
            water_walking: "".concat(p, "/ovani-sounds/Magic/Ice/Water Walking.ogg")
          }
        }
      },
      structure: {
        column: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Ice/Crystal Column.ogg")
          }
        },
        wall: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Wall 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Ice Wall 2.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frost Wall 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frost Wall 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Frost Wall 003.ogg")
          }
        }
      }
    },
    mental: {},
    sonic: {
      choir: {
        neutraL: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir 002.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir Tail 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir Tail 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir Tail 003.ogg")
          }
        }
      },
      drums: {
        surge: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Anvil Drums 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Anvil Drums 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Anvil Drums 003.ogg")
          }
        }
      },
      harp: {
        surge: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 004.ogg")
          }
        }
      },
      roar: {
        "05": {
          "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 004.ogg")
        }
      },
      slam: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 004.ogg"),
          "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 005.ogg"),
          "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 006.ogg")
        }
      }
    },
    water: {
      cast: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Spell 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Spell 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Spell 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Magic_Whoosh 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Magic_Whoosh 2.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Cast C.ogg")
          },
          "06": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Water Swoosh.ogg")
          }
        },
        wave: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long D.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail C.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise Steady A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise Steady B.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise D.ogg")
          },
          "05": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Wave Attack 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Wave Attack 2.ogg")
          }
        },
        blade: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Blades A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Blades C.ogg")
          }
        },
        beam: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise High.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Attack A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Attack B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Attack C.ogg")
          }
        },
        call_of_the_deep: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Call Of The Deep.ogg")
          }
        },
        current: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 007.ogg")
          }
        },
        geyser: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 007.ogg"),
            "08": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 008.ogg")
          }
        },
        maelstrom: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 007.ogg")
          }
        },
        rain: {
          general: {},
          eerie: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Eerie Rain A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Eerie Rain B.ogg")
            }
          }
        },
        spray: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Waterspray 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Waterspray 2.ogg")
          }
        },
        bubble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 004.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Bubble Spell A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Bubble Spell B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Bubble Spell C.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Whoosh B.ogg")
          }
        },
        time: {
          reverse: {
            "01": {
              "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Water Glitch.ogg")
            }
          }
        }
      },
      impact: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact D.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact E.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact F.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact H.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact I.ogg"),
            "07": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact J.ogg")
          },
          "02": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Hit 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Hit 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Hit 3.ogg")
          }
        },
        bubble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 004.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact B.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact C.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact G.ogg")
          }
        },
        fill: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Water Impact.ogg")
          }
        },
        submerge: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Submerge.ogg")
          }
        }
      },
      jet: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Cast C.ogg")
          },
          loop: {
            trail: "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Trail Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Jet Impact C.ogg")
          }
        }
      },
      bolt: {
        "01": {
          cast: {
            "01": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Cast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Cast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Cast C.ogg")
          },
          loop: {
            trail: "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Trail Loop.ogg")
          },
          impact: {
            "01": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Bolt Impact C.ogg")
          }
        }
      },
      rain: {
        whoosh: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Rain 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Rain 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Rain 003.ogg")
          }
        },
        summon: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Summon Rain Cast.ogg")
          }
        },
        loop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Nature/Summon Rain Loop.ogg")
          }
        }
      },
      loop: {
        general: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer D.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer E.ogg")
          }
        },
        bubble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer B.ogg")
          }
        },
        tides: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Enchantment Of Tides Loop - Shortened.ogg")
          }
        }
      },
      movement: {
        surge: {
          tides: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Magic/Water/Tidal Surge.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 005.ogg"),
              "06": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 006.ogg")
            }
          },
          underwater: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise Whoosh.ogg")
            }
          }
        },
        dash: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh E.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh F.ogg"),
            "06": "".concat(p, "/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh G.ogg")
          }
        }
      },
      heal: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Magic/Water/Aqua Heal.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Magic/Water/Purify.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/River Blessing.ogg")
        }
      },
      imprison: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Trap.ogg")
          }
        },
        bubble: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic/Water/Bubble Prison.ogg")
          }
        },
        geyser: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 005.ogg")
          }
        },
        seal: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Seal Of The Ocean Loop.ogg")
          }
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Magic_Buff 1.ogg"),
            "02": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Magic_Buff 2.ogg"),
            "03": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Magic_Buff 3.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Water/Water Switch Up.ogg")
          }
        },
        mermaid_charm: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Mermaid Charm 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Mermaid Charm 002.ogg")
          }
        },
        shield: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Elemental Spell Vol 1/Water_Shield 1.ogg")
          }
        },
        ward: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Magic II/Water and Ice/Wave Ward.ogg")
          }
        },
        wave: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 005.ogg")
          }
        },
        bubble: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2026/Cinematic Sound Design/Cartoon Bubbles Short.ogg")
          }
        }
      }
    },
    metal: {
      impact: {
        anvil: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 004.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Anvil Deny.ogg")
          }
        },
        lock: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 005.ogg")
          }
        },
        spring: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 005.ogg")
          }
        },
        crash: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Loud Metal Bang.ogg")
          }
        }
      },
      whoosh: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 005.ogg")
          }
        }
      },
      spinning: {
        "01": {
          "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Iron Staff/Iron Staff Spinning Fast.ogg")
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Alert A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Alert B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Hammer/Hammer Alert.ogg")
          }
        }
      }
    },
    tech: {
      animate: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Animate A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Animate B.ogg")
        }
      },
      fabricate: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Fabricate A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Fabricate B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Fabricate C.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Creation A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Creation B.ogg")
        }
      },
      fail: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Fail A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Fail B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Fail C.ogg")
        }
      },
      healing: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Mending A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Mending B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Mending C.ogg")
        }
      },
      lock: {
        lock: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Arcane Lock.ogg")
          }
        },
        unlock: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Arcane Unlock.ogg")
          }
        }
      },
      summon: {
        servant: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Servant A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Servant B.ogg")
          }
        }
      },
      buff: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Buff.ogg")
          },
          "02": {
            tiny: "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Tiny.ogg"),
            whoosh: "".concat(p, "/ovani-sounds/Simple Magic Sound FX Pack Vol. 3/Mech/Mech Whoosh.ogg")
          }
        }
      }
    },
    time: {
      reverse: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 004.ogg")
        }
      },
      slow: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 004.ogg")
        }
      }
    },
    counter: {
      counterspell: {
        "01": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-spellbreaking.ogg")
        }
      },
      dispel: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 004.ogg")
        }
      }
    },
    healing: {
      regen: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 002.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 003.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 004.ogg")
        }
      }
    },
    misc: {
      debuffs: {
        hunger: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 004.ogg")
          }
        },
        bleed: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 004.ogg")
          }
        },
        grease: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 005.ogg")
          }
        }
      },
      fairy: {
        twinkle: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2026/Cinematic Sound Design/Button Arp Twinkle.ogg")
          }
        }
      }
    }
  },
  equipment: {
    weapons: {
      axe: {
        equip: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Axe.ogg")
            }
          },
          heavy: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Equip Heavy Axe 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Equip Heavy Axe 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Equip Heavy Axe 03.ogg")
            }
          }
        },
        unequip: {
          heavy: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Unequip Heavy Axe 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Unequip Heavy Axe 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Unequip Heavy Axe 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Unequip Heavy Axe 04.ogg")
            }
          }
        }
      },
      blade: {
        sheathe: {
          general: {
            "01": {
              "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Sheath 1.ogg"),
              "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Sheath 2.ogg")
            }
          },
          greatsword: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Large 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Large 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Large 003.ogg")
            }
          },
          katana: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Sheathing Katana 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Sheathing Katana 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Sheathing Katana 03.ogg")
            }
          },
          shortsword: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Medium 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Medium 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Medium 003.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Sheathe A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Sheathe B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Sheathe C.ogg")
            }
          },
          dagger: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Small 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Small 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Small 003.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Knife Sheathe A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Knife Sheathe B.ogg")
            }
          },
          rapier: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Thin 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Thin 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Thin 003.ogg")
            }
          }
        },
        unsheathe: {
          general: {
            "01": {
              "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Unsheath 1.ogg"),
              "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Unsheath 2.ogg")
            }
          },
          greatsword: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 005.ogg")
            }
          },
          shortsword: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 005.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw D.ogg")
            }
          },
          dagger: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 005.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Knife Draw.ogg")
            }
          },
          karambit: {
            "01": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type C 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type C 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type C 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type C 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type C 05.ogg")
            },
            "02": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type B 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type B 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type B 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type B 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type B 05.ogg"),
              "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type B 06.ogg")
            },
            "03": {
              "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type A 01.ogg"),
              "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type A 02.ogg"),
              "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type A 03.ogg"),
              "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type A 04.ogg"),
              "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 2/Karambit/Karambit Draw Full Type A 05.ogg")
            }
          },
          rapier: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 004.ogg")
            }
          }
        },
        equip: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip General Weapon C.ogg")
            }
          },
          dagger: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Dagger.ogg")
            }
          },
          sword: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Sword.ogg")
            }
          }
        }
      },
      bludgeoning: {
        sheathe: {
          "one-hand": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Small 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Small 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Small 003.ogg")
            }
          },
          "two-hand": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Large 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Large 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Large 003.ogg")
            }
          }
        },
        unsheathe: {
          "one-hand": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 005.ogg")
            }
          },
          "two-hand": {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 005.ogg")
            }
          }
        },
        equip: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip General Weapon A.ogg")
            }
          },
          flail: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Flail.ogg")
            }
          }
        }
      },
      bow: {
        draw: {
          long_bow: {
            fast: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 005.ogg")
              }
            },
            "long": {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 005.ogg")
              }
            }
          },
          short_bow: {
            fast: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 005.ogg")
              }
            },
            "long": {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 005.ogg")
              }
            }
          }
        },
        sheathe: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Put Away 1.ogg")
          }
        },
        unsheathe: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Take Out 1.ogg")
          }
        },
        equip: {
          "01": {
            wood: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip General Weapon B.ogg")
          }
        }
      },
      claws: {
        equip: {
          "01": {
            "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 01.ogg"),
            "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 02.ogg"),
            "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 03.ogg"),
            "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 04.ogg"),
            "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 05.ogg"),
            "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 06.ogg"),
            "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 07.ogg"),
            "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 08.ogg"),
            "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 09.ogg"),
            10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 10.ogg"),
            11: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Metal Claws/Open Close Metal Claws 11.ogg")
          }
        }
      },
      crossbow: {
        load: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Load A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Load B.ogg")
          },
          "02": {
            fast: {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 005.ogg")
            }
          },
          "03": {
            "long": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 005.ogg")
            }
          },
          "04": {
            super_fast: {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Super Fast 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Super Fast 002.ogg")
            }
          }
        },
        equip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Crossbow.ogg")
          }
        }
      },
      polearm: {
        sheathe: {
          "01": {
            blunt: {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Sheathe Wooden Blunt 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Sheathe Wooden Blunt 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Sheathe Wooden Blunt 003.ogg")
            }
          }
        },
        unsheathe: {
          "01": {
            blade: {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 005.ogg")
            },
            blunt: {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 005.ogg")
            },
            pierce: {
              "01": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 005.ogg")
            }
          }
        }
      },
      firearm: {
        arquebus: {
          reload: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 005.ogg")
            }
          }
        },
        flintlock_pistol: {
          reload: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 005.ogg")
            }
          }
        },
        musket: {
          reload: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 005.ogg")
            }
          }
        },
        pistol: {
          draw: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw E.ogg")
            }
          },
          spin: {
            spin: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin C.ogg"),
                "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin D.ogg"),
                "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin E.ogg")
              }
            }
          }
        },
        revolver: {
          load: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load F.ogg"),
              "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load E.ogg"),
              "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load D.ogg"),
              "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load C.ogg"),
              "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load B.ogg"),
              "06": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load A.ogg")
            }
          },
          close: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close D.ogg"),
              "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close E.ogg")
            }
          }
        },
        rifle: {
          reload: {
            "02": {
              "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Steampunk Gun Reload.ogg")
            }
          }
        }
      },
      siege_weapons: {
        cannon: {
          reload: {
            normal: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 004.ogg"),
                "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 005.ogg")
              }
            },
            fast: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload Fast 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload Fast 002.ogg")
              }
            }
          }
        },
        ballista: {
          reload: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 004.ogg"),
              "05": "".concat(p, "/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 005.ogg")
            }
          }
        }
      },
      scifi: {
        general: {
          reload: {
            general: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Reloading A.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Reloading B.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Reloading C.ogg")
              },
              "02": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 004.ogg")
              }
            },
            charge: {
              charge: {
                "01": {
                  "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging 001.ogg")
                }
              },
              discharge: {
                "01": {
                  "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging 002.ogg")
                }
              },
              fast_charge: {
                "01": {
                  "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging Fast 001.ogg"),
                  "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging Fast 002.ogg")
                }
              }
            },
            light: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 004.ogg")
              }
            },
            medium: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 002.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 003.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 004.ogg")
              }
            },
            heavy: {
              "01": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 001.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 002.ogg")
              },
              "02": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 003.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 004.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 005.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 006.ogg")
              },
              "03": {
                "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 007.ogg"),
                "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 008.ogg"),
                "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 009.ogg"),
                "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 010.ogg")
              }
            }
          },
          disable: {
            "02": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Weapon Disabled A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Weapon Disabled B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Weapon Disabled C.ogg")
            }
          }
        },
        blaster: {
          reload: {
            "02": {
              "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Sci-Fi Gun Reload.ogg")
            }
          }
        }
      }
    },
    armor: {
      armor: {
        equip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Armor.ogg")
          }
        }
      },
      helmet: {
        equip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Helmet A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Helmet B.ogg")
          }
        }
      },
      shield: {
        equip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Shield A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Shield B.ogg")
          }
        },
        impact: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact D.ogg")
          },
          "02": {
            metal: {
              "01": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 1.ogg"),
              "02": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 2.ogg"),
              "03": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 3.ogg"),
              "04": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 4.ogg"),
              "05": "".concat(p, "/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 5.ogg")
            }
          }
        }
      }
    },
    consumables: {
      bombs: {
        dynamite: {
          fuse: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Dynamite Fuse A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Dynamite Fuse B.ogg")
            }
          }
        }
      },
      potions: {
        open: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Open A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Open B.ogg")
          },
          "02": {
            "01": "".concat(p, "/Soniss/GDC2024/Eiravaein Works/flask_bottle.ogg")
          }
        },
        drink: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Drink A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Drink B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Drink C.ogg")
          }
        },
        equip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Equip A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Equip B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Equip C.ogg")
          }
        },
        handle: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Handle A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Handle B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Handle C.ogg")
          }
        },
        effects: {
          light: {
            "01": {
              "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Light Potion.ogg")
            }
          }
        }
      }
    },
    misc: {
      misc: {
        unequip: {
          "01": {
            narrow: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item A.ogg"),
            item: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item B.ogg"),
            arrow: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item C.ogg"),
            jewelry: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item D.ogg")
          }
        }
      },
      bag: {
        open: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Bag Open.ogg")
          }
        }
      },
      canteen: {
        drink: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2024/Eiravaein Works/flask_canteen.ogg")
          }
        }
      },
      chest: {
        open: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Open 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Open 2.ogg")
          }
        },
        close: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Close 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Close 2.ogg")
          }
        }
      },
      clock: {
        ring: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Steampunk Grandfather Clock Melody.ogg")
          }
        }
      },
      flint_and_steel: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Flint/Sharp Flint Spark A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Fire SFX/Flint/Sharp Flint Spark B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Fire SFX/Flint/Sharp Flint Spark C.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Fire SFX/Flint/Sharp Success Flint A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Fire SFX/Flint/Sharp Success Flint B.ogg")
        }
      },
      lasso: {
        swinging: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging E.ogg")
          }
        },
        "throw": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw E.ogg")
          }
        }
      },
      lock: {
        unlock: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Lockbox Unlock A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Lockbox Unlock B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Lockbox Unlock C.ogg")
          },
          "03": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Doors Gates and Chests/Lock Unlock.ogg")
          }
        }
      },
      paper: {
        "throw": {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Paper 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Paper 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Paper 003.ogg")
          }
        }
      },
      torch: {
        light: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Torch Light B.ogg"),
            "02": "".concat(p, "/ovani-sounds/Fire SFX/Torch/Torch Light C.ogg")
          },
          "02": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Torch/Light Torch 1.ogg"),
            "02": "".concat(p, "/TomMusic/FreeFantasySFX/Torch/Light Torch 2.ogg")
          }
        },
        loop: {
          "01": {
            "01": "".concat(p, "/TomMusic/FreeFantasySFX/Torch/Torch Loop.ogg")
          }
        }
      }
    }
  },
  tasks: {
    crafting: {
      ui: {
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Crafting Countdown.ogg")
          },
          "02": {
            fade_out: "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Crafting Fade Out Timer.ogg")
          }
        },
        alert: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Alert Craft.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Ambiguous Craft Alert.ogg")
          }
        },
        success: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Craft Success.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Good Craft A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Good Craft B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Good Craft C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Good Craft D.ogg")
          }
        },
        failure: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Bad Craft.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Craft Mistake.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Craft Denied A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Craft Denied B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Craft Denied C.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Miscraft A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Miscraft B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Miscraft C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Miscraft D.ogg")
          }
        }
      },
      acquiring_materials: {
        leather: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Skinning Animal A.ogg")
          }
        }
      },
      alchemy: {
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Potion Craft A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Potion Craft B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Potion Craft C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Potion Craft D.ogg")
          }
        },
        sort: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Potion Sorting.ogg")
          }
        }
      },
      blacksmithing: {
        hammer: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer E.ogg")
          }
        },
        tool: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool E.ogg")
          }
        }
      },
      carpentry: {
        hammer: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer D.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Hammer Wood A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Hammer Wood B.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Light Hammer Wood Craft.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Hammer/Hammer Craft Longer.ogg")
          },
          "05": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Hammer/Heavy Hammer Craft.ogg")
          }
        },
        lathe: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Lathe.ogg")
          }
        },
        sanding: {
          success: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/UI/Sanding Success.ogg")
            }
          }
        },
        saw: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Wood Saw A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Wood Saw B.ogg")
          },
          "02": {
            single: "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Wood Saw One-Shot.ogg")
          }
        },
        shave: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Wood Shave.ogg")
          }
        },
        stick: {
          craft: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Stick Craft.ogg")
            }
          }
        },
        ui: {
          select: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Wood Select.ogg")
            }
          },
          cancel: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Wood/Wood Deny.ogg")
            }
          }
        }
      },
      enchantment: {
        create: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Enchantment A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Enchantment B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Enchantment C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Enchantment D.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Create Enchantment.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Create Enchantment Quick.ogg")
          }
        },
        air: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Wind Craft.ogg")
          }
        },
        flame: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Flame Craft.ogg")
          }
        },
        nature: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Magic/Nature Craft.ogg")
          }
        }
      },
      leatherwork: {
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Leather Craft.ogg")
          }
        },
        strip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Leather Strip.ogg")
          }
        },
        tan: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Leather Tan.ogg")
          }
        },
        treat: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Leather Treat.ogg")
          }
        },
        whip: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Leather Whip.ogg")
          }
        }
      },
      metalwork: {
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Craft A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Craft B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Craft C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Craft D.ogg")
          }
        },
        grind: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Grind A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Metal Grind B.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Grind One-Shot.ogg")
          }
        },
        solder: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Soldering.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Light Solder Sparks.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Long Solder Craft.ogg")
          }
        },
        weld: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Weld Spark.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Quick Weld.ogg")
          }
        }
      },
      paperwork: {
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Sheet Craft.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Cardboard One-Shot C.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Package Crafting.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Sheet Crafting.ogg")
          }
        },
        tape: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Tape Crack.ogg")
          }
        }
      },
      stonework: {
        chisel: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Chisel A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Chisel B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Chisel C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Chisel D.ogg")
          }
        },
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Craft A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Craft B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Craft C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Craft D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Craft E.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Crafting.ogg")
          }
        },
        etch: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Etching.ogg")
          }
        },
        repair: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Metal/Stone Repair.ogg")
          }
        }
      },
      textilework: {
        fabric: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Fabric One-Shot A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Fabric One-Shot B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Fabric One-Shot C.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Fabric Crafting.ogg")
          }
        },
        felt: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Misc Craft/Felt Crafting.ogg")
          }
        }
      },
      weaving: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Weaving.ogg")
          }
        }
      },
      whetstone: {
        sharpen: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone E.ogg")
          },
          "02": {
            "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast E.ogg")
          }
        }
      },
      scifi: {
        craft: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Craft A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Craft B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Craft C.ogg")
          }
        },
        transform: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Transform A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Transform B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Transform C.ogg")
          }
        },
        upgrade: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade E.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 005.ogg")
          }
        },
        servo_motor: {
          "02": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Servo Motor A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Servo Motor B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Servo Motor C.ogg")
          }
        }
      }
    },
    cooking: {},
    medicine: {
      heartbeat: {
        "01": {
          slow: "".concat(p, "/ovani-sounds/Player Status SFX/General/Low HP Heartbeat Slow Loop.ogg"),
          fast: "".concat(p, "/ovani-sounds/Player Status SFX/General/Low HP Heartbeat Fast Loop.ogg"),
          middle: "".concat(p, "/ovani-sounds/Player Status SFX/General/Low HP Heartbeat Mid Loop.ogg")
        }
      }
    },
    stealth: {
      spotted: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Detected 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Detected 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Detected 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Musical/Musical Detected 004.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 004.ogg")
        }
      },
      sneak: {
        bush: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Bush Rustle Short A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Bush Rustle Short B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Bush Rustle Short C.ogg")
          }
        }
      }
    }
  },
  abilities: {
    commander: {
      war_horn: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn B.ogg"),
          "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn C.ogg"),
          "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn D.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn A Delay.ogg"),
          "03": "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn E.ogg")
        },
        "03": {
          "01": "".concat(p, "/Soniss/GDC2024/Jake Fielding/Bram - Cinematic Horn.ogg")
        }
      }
    },
    fighter: {
      flurry: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/1000 Sword Jutsu.ogg")
        }
      }
    },
    gunslinger: {
      guitar: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger E.ogg")
        }
      },
      whistle: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle E.ogg")
        }
      }
    },
    monk: {
      qi_blast: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Blast.ogg")
        }
      },
      touch_of_death: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Light Punch.ogg")
        }
      }
    },
    rogue: {
      sneak_attack: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Sneak Attack.ogg")
        }
      }
    },
    swashbuckler: {
      finisher: {
        general: {
          "01": {
            "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-last-hit.ogg")
          }
        },
        bleeding: {
          "01": {
            "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-impale-flesh-05.ogg"),
            "02": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-out-of-flesh-06.ogg"),
            "03": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-slice-flesh-02.ogg")
          }
        }
      }
    },
    misc: {
      whip: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Ability Shield.ogg")
        }
      }
    },
    buff: {
      "01": {
        fire: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Fire.ogg"),
        ice: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Ice.ogg"),
        electricity: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Lightning.ogg"),
        poison: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Poison.ogg"),
        misc: "".concat(p, "/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up.ogg")
      }
    }
  },
  impact: {
    axe: {
      flesh: {
        "01": {
          "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike Only 01.ogg"),
          "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike Only 02.ogg"),
          "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike Only 03.ogg"),
          "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Strike Only 04.ogg")
        },
        "02": {
          "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike Only 01.ogg"),
          "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike Only 02.ogg"),
          "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike Only 03.ogg"),
          "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Heavy Axe/Heavy Axe Hard Strike Only 04.ogg")
        }
      }
    },
    arrow: {
      blocked: {
        "01": {
          "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Blocked 1.ogg"),
          "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Blocked 2.ogg"),
          "03": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Blocked 3.ogg")
        }
      },
      hit: {
        "01": {
          "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Impact Hit 1.ogg"),
          "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Impact Hit 2.ogg"),
          "03": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Impact Hit 3.ogg")
        },
        "02": {
          "01": "".concat(p, "/Soniss/GDC2026/Cinematic Sound Design/Arrow Hit Rattle.ogg")
        }
      }
    },
    blade: {
      blocked: {
        "03": {
          "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Blocked 1.ogg"),
          "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Blocked 2.ogg"),
          "03": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Blocked 3.ogg")
        }
      }
    },
    blood: {
      "01": {
        "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 01.ogg"),
        "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 02.ogg"),
        "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 03.ogg"),
        "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 04.ogg"),
        "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 05.ogg"),
        "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 06.ogg"),
        "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 07.ogg"),
        "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 08.ogg"),
        "09": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 09.ogg"),
        10: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 10.ogg"),
        11: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 11.ogg"),
        12: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 12.ogg"),
        13: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 13.ogg"),
        14: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 14.ogg"),
        15: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 15.ogg"),
        16: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 16.ogg"),
        17: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 17.ogg"),
        18: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 18.ogg"),
        19: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 19.ogg"),
        20: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 20.ogg"),
        21: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 21.ogg"),
        22: "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type A Blood Used In Katana 22.ogg")
      },
      "02": {
        "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 01.ogg"),
        "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 02.ogg"),
        "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 03.ogg"),
        "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 04.ogg"),
        "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 05.ogg"),
        "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 06.ogg"),
        "07": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 07.ogg"),
        "08": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type B Blood Used In Katana 08.ogg")
      },
      "03": {
        "01": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type C Blood Used In Katana 01.ogg"),
        "02": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type C Blood Used In Katana 02.ogg"),
        "03": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type C Blood Used In Katana 03.ogg"),
        "04": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type C Blood Used In Katana 04.ogg"),
        "05": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type C Blood Used In Katana 05.ogg"),
        "06": "".concat(p, "/KhronStudio/Forged In Fury Vol 1/Katana/Type C Blood Used In Katana 06.ogg")
      }
    },
    debris: {
      "01": {
        "01": "".concat(p, "/Soniss/GDC2026/Cinematic Sound Design/Woosh Debris.ogg")
      }
    },
    fall: {
      general: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall C.ogg")
        }
      },
      boxes: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Plastic and Boxes A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Plastic and Boxes B.ogg")
        }
      },
      carpet: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet E.ogg"),
          "06": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet F.ogg")
        }
      },
      chair: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Chair A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Chair B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Chair C.ogg")
        }
      },
      concrete: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Concrete A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Concrete B.ogg")
        }
      },
      grass: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Grass A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Grass B.ogg")
        }
      },
      metal: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Metal A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Metal B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Metal C.ogg")
        },
        "02": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/axe-hitting-metal.ogg")
        }
      },
      sand: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Sand A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Sand B.ogg")
        }
      },
      wood: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Wood A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Wood B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Wood C.ogg")
        }
      },
      slip: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Slip Fall A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Falls/Slip Fall B.ogg")
        }
      }
    },
    flesh: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Flesh Hits/Flesh Hit A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Flesh Hits/Flesh Hit B.ogg"),
        "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Flesh Hits/Flesh Hit C.ogg")
      },
      "02": {
        "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-hit-flesh-01.ogg"),
        "02": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-hit-flesh-02.ogg"),
        "03": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-hit-flesh-03.ogg")
      },
      "03": {
        "01": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Impact Hit 1.ogg"),
        "02": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Impact Hit 2.ogg"),
        "03": "".concat(p, "/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Impact Hit 3.ogg")
      }
    },
    explosion: {
      general: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2024/David Dumais/Realistic_Explosion.ogg")
        }
      }
    },
    general: {
      "01": {
        "01": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Spell Impact 1.ogg"),
        "02": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Spell Impact 2.ogg"),
        "03": "".concat(p, "/TomMusic/FreeFantasySFX/Spells/Spell Impact 3.ogg")
      }
    },
    spell: {
      "01": {
        "01": "".concat(p, "/Soniss/GDC2026/Cinematic Sound Design/Transition Frantic Shaker Snap.ogg")
      },
      "02": {
        "01": "".concat(p, "/Soniss/GDC2026/Cinematic Sound Design/Impact Cut Sweep.ogg")
      }
    },
    wood: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Wood.ogg")
      }
    },
    scifi: {
      digital: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Cool Digital Impact.ogg")
        }
      },
      shield: {
        general: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Shield Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Shield Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Shield Impact C.ogg")
          }
        },
        deflector: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact E.ogg")
          }
        },
        hull: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact E.ogg")
          }
        }
      }
    }
  },
  actions: {
    movement: {
      dash: {
        "02": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Dash 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Dash 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Dash 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Dash 004.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Move 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Move 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Move 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/General/Abstract Move 004.ogg")
        },
        "04": {
          "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Simple.ogg")
        }
      },
      slide: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Fall Slide.ogg")
        }
      }
    },
    cheer: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Crowd Sound FX Pack/Non-Verbal/Inspired Cheering.ogg")
      }
    },
    laugh: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Crowd Sound FX Pack/Non-Verbal/Laugh B.ogg")
      }
    },
    drop_object: {
      heavy: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Object Drop.ogg")
        }
      }
    },
    grab: {
      clothes: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low D.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High D.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon D.ogg")
        }
      },
      flesh: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Skin A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Skin B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Skin C.ogg")
        }
      }
    },
    handshake: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake B.ogg"),
        "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake C.ogg"),
        "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake D.ogg")
      }
    },
    high_five: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five B.ogg"),
        "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five C.ogg"),
        "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five D.ogg")
      }
    },
    sharpen_weapon: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Scraping Tool.ogg")
      }
    },
    slam: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Slam A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Slam B.ogg")
      }
    },
    snap: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap B.ogg"),
        "03": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap C.ogg"),
        "04": "".concat(p, "/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap D.ogg")
      }
    },
    write: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Felt Marker Scribble.ogg")
      },
      "02": {
        "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Material/Felt Marker Squeek.ogg")
      }
    }
  },
  creatures: {
    shriek: {
      generic: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Rusty Tool A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Crafting Sound FX/Tool/Rusty Tool B.ogg")
        }
      }
    }
  },
  scifi: {
    "throw": {
      energy: {
        "03": {
          "01": "".concat(p, "/ovani-sounds/_Free Weekly WAVs/Guitar Hit.ogg")
        }
      }
    },
    surge: {
      general: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Vehicles/Reactive A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Vehicles/Reactive B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Vehicles/Reactive C.ogg")
        }
      }
    },
    teleportation: {
      "01": {
        "01": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 001.ogg"),
        "02": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 002.ogg"),
        "03": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 003.ogg"),
        "04": "".concat(p, "/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 004.ogg")
      },
      "02": {
        "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Teleport A.ogg"),
        "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Teleport B.ogg"),
        "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Teleport C.ogg")
      }
    },
    power_up: {
      general: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short D.ogg")
        },
        "02": {
          "short": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Short A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Short B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Short C.ogg")
          },
          "long": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Long.ogg")
          }
        },
        "03": {
          "short": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Short A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Short B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Short C.ogg")
          },
          "long": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Long.ogg")
          }
        }
      },
      buff: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Success.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Success 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Success 002.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI New Task 001.ogg")
        },
        "04": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 004.ogg")
        }
      },
      debuff: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Failed.ogg")
        },
        "02": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Warning.ogg")
        },
        "03": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Fail 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Fail 002.ogg")
        },
        "04": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI New Task 002.ogg")
        },
        "05": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 004.ogg")
        },
        "06": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 002.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 003.ogg")
        }
      }
    },
    equipment: {
      device: {
        use: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 004.ogg")
          },
          "02": {
            "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Alien Interface 2.ogg"),
            "02": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Alien Interface 3.ogg"),
            "03": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Alien Interface 4.ogg")
          },
          "03": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Unknown.ogg")
          },
          "04": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 004.ogg")
          }
        },
        startup: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Startup.ogg")
          }
        },
        shutdown: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Shutdown.ogg")
          }
        }
      },
      chain: {
        loop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Crafting Sound FX/Loops/Chain Craft Loop.ogg")
          }
        }
      },
      medical: {
        analysis: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Analysis.ogg")
          }
        },
        healing: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Healing.ogg")
          }
        },
        medicine: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Medicine.ogg")
          }
        }
      },
      weapon: {
        charge: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 006.ogg")
          }
        },
        reload: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 1 A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 1 B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 1 C.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 2 A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 2 B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 2 C.ogg")
            }
          }
        },
        interact: {
          screen: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen D.ogg")
            }
          }
        }
      },
      scanner: {
        general: {
          "01": {
            "01": "".concat(p, "/Soniss/GDC2024/David Dumais/Scanner.ogg")
          }
        }
      },
      meter_refill: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 004.ogg")
        }
      },
      power_up: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-004.ogg")
        },
        "02": {
          "01": "".concat(p, "/Soniss/GDC2024/BluezoneCorp/Alien Interface 1.ogg")
        },
        "03": {
          "01": "".concat(p, "/Soniss/GDC2024/DoexStudio/Power Up 1.ogg"),
          "02": "".concat(p, "/Soniss/GDC2024/DoexStudio/Power Up 2.ogg"),
          "03": "".concat(p, "/Soniss/GDC2024/DoexStudio/Power Up 3.ogg"),
          "04": "".concat(p, "/Soniss/GDC2024/DoexStudio/Power Up 4.ogg")
        }
      },
      ready: {
        "02": {
          "01": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 001.ogg"),
          "02": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 002.ogg"),
          "03": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 003.ogg"),
          "04": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 004.ogg")
        }
      }
    },
    armor: {
      shield: {
        overshield: {
          "03": {
            "01": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 004.ogg")
          }
        }
      },
      forcefield: {
        loop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Force Fields/Force Field Portal.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Force Fields/Force Field Secret Experiment.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Force Fields/Force Field Waves.ogg")
          }
        }
      },
      consumables: {
        healing: {
          stimpack: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Player Status SFX/General/Stimpack 001.ogg"),
              "02": "".concat(p, "/ovani-sounds/Player Status SFX/General/Stimpack 002.ogg"),
              "03": "".concat(p, "/ovani-sounds/Player Status SFX/General/Stimpack 003.ogg"),
              "04": "".concat(p, "/ovani-sounds/Player Status SFX/General/Stimpack 004.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Stimpack.ogg")
            }
          }
        }
      }
    },
    robot: {
      guns: {
        deploy: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Gun Mech A.ogg")
          }
        },
        widthdraw: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Gun Mech B.ogg")
          }
        }
      },
      deploy: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2026/Epic Stock Media/Robot Deploy.ogg")
        }
      },
      transformation: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2024/Unreal SFX/Droid Transformation.ogg")
        }
      },
      mechanical: {
        calibration: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration C.ogg")
            }
          },
          heavy: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy C.ogg"),
              "04": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy D.ogg")
            }
          }
        },
        servo: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo B.ogg")
            }
          },
          heavy: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo Heavy A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo Heavy B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo Heavy C.ogg")
            }
          },
          tank: {
            calibration: {
              general: {
                "01": {
                  "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration A.ogg"),
                  "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration B.ogg"),
                  "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration C.ogg")
                }
              },
              heavy: {
                "01": {
                  "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank A.ogg"),
                  "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank B.ogg"),
                  "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank C.ogg"),
                  "04": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank D.ogg")
                }
              }
            }
          }
        }
      },
      move: {
        combat: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move F.ogg")
          }
        },
        power: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Power Move A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Power Move B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Power Move C.ogg")
          }
        }
      },
      update: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2024/Unreal SFX/Droid UI.ogg")
        }
      },
      voice: {
        "01": {
          "01": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Droidvoice 1.ogg"),
          "02": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Droidvoice 2.ogg"),
          "03": "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Droidvoice 3.ogg")
        },
        "02": {
          funny: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Funny.ogg"),
          question: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Question.ogg"),
          sad: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Sad.ogg"),
          statement: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Statement.ogg")
        },
        "03": {
          funny: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Funny.ogg"),
          question: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Question.ogg"),
          sad: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Sad.ogg"),
          statement: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Statement.ogg")
        },
        "04": {
          happy: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Happy.ogg"),
          question: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Question.ogg"),
          sad: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Sad.ogg"),
          statement: "".concat(p, "/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Statement.ogg")
        },
        "05": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid I Voice A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid I Voice B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid I Voice C.ogg")
        },
        "06": {
          "01": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice A.ogg"),
          "02": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice B.ogg"),
          "03": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice C.ogg"),
          "04": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice D.ogg"),
          "05": "".concat(p, "/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice E.ogg")
        },
        "07": {
          archivist: {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 005.ogg")
          },
          emperor: {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 006.ogg")
          },
          soldier: {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 007.ogg")
          },
          trader: {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 006.ogg"),
            "07": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 007.ogg")
          },
          worker: {
            "01": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 001.ogg"),
            "02": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 002.ogg"),
            "03": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 003.ogg"),
            "04": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 004.ogg"),
            "05": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 005.ogg"),
            "06": "".concat(p, "/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 006.ogg")
          }
        }
      }
    },
    vehicles: {
      copter: {},
      spaceship: {
        engine: {
          general: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Engine.ogg")
            },
            "02": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Grinding Engines.ogg")
            },
            "03": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Jet-Like.ogg")
            }
          },
          fighter: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Fighter A.ogg"),
              "02": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Fighter B.ogg"),
              "03": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Fighter C.ogg")
            }
          },
          old: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Old Engine Center.ogg")
            }
          },
          stealth: {
            "01": {
              "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Stealth Bassy.ogg")
            }
          }
        },
        ftl: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Ftl Center.ogg")
          }
        },
        shield: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Phase Field.ogg")
          }
        }
      },
      speeder: {
        swoop: {
          "01": {
            "01": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop A.ogg"),
            "02": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop B.ogg"),
            "03": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop C.ogg"),
            "04": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop D.ogg"),
            "05": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop E.ogg"),
            "06": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop F.ogg"),
            "07": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop G.ogg"),
            "08": "".concat(p, "/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop H.ogg")
          }
        }
      }
    },
    misc: {
      wispy: {
        "01": {
          "01": "".concat(p, "/Soniss/GDC2024/DoexStudio/Comedic_006.ogg")
        }
      }
    }
  },
  misc: {
    critical: {
      melee: {
        "01": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/etherael-attack-01.ogg"),
          "02": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/etherael-attack-02.ogg"),
          "03": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/etherael-attack-03.ogg"),
          "04": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/etherael-attack-04.ogg")
        }
      }
    },
    critical_miss: {
      melee: {
        "01": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-01.ogg"),
          "02": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-03.ogg"),
          "03": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-04.ogg"),
          "04": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-05.ogg")
        },
        "02": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/giant-demon-sword-swoosh.ogg")
        }
      },
      thrown: {
        "01": {
          "01": "".concat(p, "/SoundFlakes/diablo-wrath/weapon/imperius-spear-whoosh.ogg")
        }
      }
    }
  }
};
exports.database = database;