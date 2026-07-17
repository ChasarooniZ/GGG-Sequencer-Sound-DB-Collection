export const DB_PREFIX = "ggg-sfx";

// Start from 01
const p = "modules/ggg/assets/sounds";
export const database = {
  melee: {
    axe: {
      throw: {
        "01": {
          throw: `${p}/SoundFlakes/diablo-wrath/weapon/axe-throwing.ogg`,
          "spin-hit": `${p}/SoundFlakes/diablo-wrath/weapon/axe-throwing-hitting-flesh.ogg`,
        },
      },
      slash: {
        flesh: {
          "01": {
            "01": `${p}/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 1.ogg`,
            "02": `${p}/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 2.ogg`,
            "03": `${p}/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 3.ogg`,
            "04": `${p}/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 4.ogg`,
            "05": `${p}/Soniss/GDC2024/Justsoundeffects/Axe Flesh Hit 5.ogg`,
          },
        },
      },
    },
    blade: {
      strike: {
        general: {
          "01": {
            "01": `${p}/Soniss/GDC2026/David Dumais Audio/Blade Swing.ogg`,
          },
          "02": {
            "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Attack 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Attack 2.ogg`,
            "03": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Attack 3.ogg`,
          },
        },
        greatsword: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Large 005.ogg`,
          },
        },
        shortsword: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Medium 005.ogg`,
          },
        },
        dagger: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Small 005.ogg`,
          },
        },
        rapier: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Strike Blade Thin 005.ogg`,
          },
        },
        bamboo: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 005.ogg`,
          },
        },
      },
      block: {
        greatsword: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Large 005.ogg`,
          },
        },
        shortsword: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Medium 005.ogg`,
          },
        },
        dagger: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Small 005.ogg`,
          },
        },
        rapier: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Block Blade Thin 005.ogg`,
          },
        },
      },
      parry: {
        "01": {
          "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Parry Blade 005.ogg`,
        },
      },
      throw: {
        "01": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 004.ogg`,
          "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Bamboo 005.ogg`,
        },

        "02": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-throw-swoosh-02.ogg`,
        },
      },
      spin: {
        "01": {
          "through-flesh": `${p}/SoundFlakes/diablo-wrath/weapon/sword-out-of-flesh.ogg`,
        },
      },
    },
    bludgeoning: {
      strike: {
        "one-hand": {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Medium 005.ogg`,
          },
        },
        "two-hand": {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Strike Blunt Large 005.ogg`,
          },
        },
        general: {
          "01": {
            metal_hit: `${p}/Soniss/GDC2026/David Dumais Audio/Swing Metal Hit.ogg`,
          },
        },
        flail: {
          "01": {
            "01": `${p}/SoundFlakes/diablo-wrath/weapon/bludgeon-throwing.ogg`,
          },
          "02": {
            "01": `${p}/SoundFlakes/diablo-wrath/weapon/shield-breaking-with-bludgeon.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh E.ogg`,
            "06": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Flail Whoosh F.ogg`,
          },
        },
      },
      block: {
        "one-hand": {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Medium 005.ogg`,
          },
        },
        "two-hand": {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Block Blunt Large 005.ogg`,
          },
        },
      },
      parry: {
        "01": {
          "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Parry Blunt 005.ogg`,
        },
      },
      throw: {
        chain: {
          "01": {
            "01": `${p}/SoundFlakes/diablo-wrath/weapon/bludgeon-chain-fly.ogg`,
          },
        },
      },
    },
    polearm: {
      strike: {
        "01": {
          blade: {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blade 005.ogg`,
          },
          blunt: {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Blunt 005.ogg`,
          },
          pierce: {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Strike Wooden Pierce 005.ogg`,
          },
        },
        "02": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-01.ogg`,
          "02": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-02.ogg`,
          "03": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-03.ogg`,
          "04": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-04.ogg`,
          "05": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-05.ogg`,
        },
        "05": {
          magical: `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-hit-the-giant.ogg`,
        },
      },
      block: {
        "01": {
          blade: {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blade 005.ogg`,
          },
          blunt: {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Blunt 005.ogg`,
          },
          pierce: {
            "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Block Wooden Pierce 005.ogg`,
          },
        },
      },
      parry: {
        "01": {
          "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Parry Wooden 005.ogg`,
        },
      },
      hit: {
        "01": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/malthael-weapon-hit.ogg`,
        },
        "02": {
          pierce: `${p}/SoundFlakes/diablo-wrath/weapon/spear-impale-flesh-hit.ogg`,
        },
      },
    },
    torch: {
      "01": {
        "01": `${p}/ovani-sounds/Fire SFX/Torch/Intense Torch A.ogg`,
        "02": `${p}/ovani-sounds/Fire SFX/Torch/Intense Torch B.ogg`,
      },
      "02": {
        "01": `${p}/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh A.ogg`,
        "02": `${p}/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh B.ogg`,
        "03": `${p}/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh C.ogg`,
        "04": `${p}/ovani-sounds/Fire SFX/Torch/Intense Torch Swoosh D.ogg`,
      },
      "03": {
        "01": `${p}/TomMusic/FreeFantasySFX/Torch/Torch Attack Strike 1.ogg`,
        "02": `${p}/TomMusic/FreeFantasySFX/Torch/Torch Attack Strike 2.ogg`,
      },
    },
    unarmed: {
      fist: {
        strike: {
          "01": {
            medium: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Medium A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Medium B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Medium C.ogg`,
            },
            heavy: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Heavy C.ogg`,
            },
            light: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Light A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Light B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Punches/Punch Light C.ogg`,
            },
          },
          "02": {
            "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Punch A (1).ogg`,
            "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Punch B (1).ogg`,
            "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Punch C (1).ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Punch A.ogg`,
            "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Punch B.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Big Punch A.ogg`,
            "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Big Punch B.ogg`,
            "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Big Punch C.ogg`,
          },
          "05": {
            "01": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-face-punch.ogg`,
          },
          "06": {
            hit: {
              "01": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-1.ogg`,
              "02": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-2.ogg`,
              "03": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-3.ogg`,
              "04": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-4.ogg`,
              "05": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-5.ogg`,
              "06": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-6.ogg`,
              "07": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-7.ogg`,
              "08": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-8.ogg`,
              "09": `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-9.ogg`,
              10: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-10.ogg`,
              11: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-11.ogg`,
              12: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-12.ogg`,
              13: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-13.ogg`,
              14: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-14.ogg`,
              15: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-15.ogg`,
              16: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-16.ogg`,
              17: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-17.ogg`,
              18: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-18.ogg`,
              19: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-19.ogg`,
              20: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-20.ogg`,
              21: `${p}/Soniss/GDC2026/David Dumais Audio/Punch Hit-21.ogg`,
            },
          },
        },
        miss: {
          "01": {
            "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Miss A.ogg`,
            "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Miss B.ogg`,
          },
        },
      },
      elbow: {
        strike: {
          "01": {
            medium: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Medium A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Medium B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Medium C.ogg`,
            },
            heavy: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Heavy C.ogg`,
            },
            light: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Light A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Light B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Elbow Hits/Elbow Hit Light C.ogg`,
            },
          },
        },
      },
      kick: {
        strike: {
          "01": {
            medium: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Medium A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Medium B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Medium C.ogg`,
            },
            heavy: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Heavy C.ogg`,
            },
            light: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Light A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Light B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Light C.ogg`,
            },
          },
          "02": {
            "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing A.ogg`,
            "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing B.ogg`,
            "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing C.ogg`,
            "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing D.ogg`,
            "05": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing E.ogg`,
            "06": `${p}/ovani-sounds/Foley Impacts Vol. 1/Kicks/Kick Swing F.ogg`,
          },
          "03": {
            short: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Kick A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Short Kick B.ogg`,
            },
            long: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Kick A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Kick B.ogg`,
            },
          },
        },
      },
      knee: {
        strike: {
          "01": {
            medium: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Medium A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Medium B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Medium C.ogg`,
            },
            heavy: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Heavy C.ogg`,
            },
            light: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Light A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Light B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Light C.ogg`,
            },
          },
          "02": {
            "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Belt A.ogg`,
            "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Belt B.ogg`,
            "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Knee Hits/Knee Hit Belt C.ogg`,
          },
        },
      },
      slap: {
        strike: {
          "01": {
            medium: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Medium A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Medium B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Medium C.ogg`,
            },
            heavy: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Heavy C.ogg`,
            },
            light: {
              "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Light A.ogg`,
              "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Light B.ogg`,
              "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Slaps/Slap Light C.ogg`,
            },
          },
        },
      },
    },
    whip: {
      strike: {
        "01": {
          "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip A.ogg`,
          "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip B.ogg`,
          "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip C.ogg`,
          "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip D.ogg`,
          "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Whip E.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Whip A.ogg`,
          "02": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Whip B.ogg`,
          "03": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Whip C.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Double Whip.ogg`,
        },
        "04": {
          "01": `${p}/Soniss/GDC2026/David Dumais Audio/Whip Snap.ogg`,
        },
      },
    },
  },
  ranged: {
    bow: {
      strike: {
        general: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Attack 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Attack 2.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Throw 005.ogg`,
          },
        },
        long_bow: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Shot 005.ogg`,
          },
        },
        short_bow: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Shot 005.ogg`,
          },
        },
      },
      impact: {
        "01": {
          "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Arrows/Arrows Impact 005.ogg`,
        },
      },
    },
    crossbow: {
      strike: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot A.ogg`,
          "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot B.ogg`,
          "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot C.ogg`,
          "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Shot D.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Shot 005.ogg`,
        },
      },
    },
    bomb: {
      acid: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Acid.ogg`,
        },
      },
      blood: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Blood.ogg`,
        },
      },
      explosion: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Explosion.ogg`,
        },
      },
      electricity: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Lightning.ogg`,
        },
      },
      fire: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Fire.ogg`,
        },
      },
      holy_water: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Holy Water.ogg`,
        },
      },
      ice: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Ice.ogg`,
        },
      },
      poison: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Poison.ogg`,
        },
      },
      water: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Water.ogg`,
        },
      },
      break: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Break A.ogg`,
          "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Break B.ogg`,
          "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Pot Break C.ogg`,
        },
      },
    },
    firearm: {
      arquebus: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Shot 005.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Impact 005.ogg`,
          },
        },
      },
      old_timey: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot A.ogg`,
            "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot B.ogg`,
            "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot C.ogg`,
            "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot D.ogg`,
            "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Old Timey Gunshot E.ogg`,
          },
        },
      },
      flare_gun: {
        strike: {
          "01": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Steampunk Flare.ogg`,
          },
        },
      },
      flintlock_pistol: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Shot 005.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Impact 005.ogg`,
          },
        },
      },
      musket: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Shot 005.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Impact 005.ogg`,
          },
        },
      },
      rifle: {
        strike: {
          steampunk: {
            "01": {
              "01": `${p}/Soniss/GDC2024/BluezoneCorp/Steampunk Gun Shot.ogg`,
            },
          },
        },
      },
      sniper: {
        "01": {
          "01": `${p}/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 1.ogg`,
          "02": `${p}/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 2.ogg`,
          "03": `${p}/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 3.ogg`,
          "04": `${p}/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 4.ogg`,
          "05": `${p}/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 5.ogg`,
          "06": `${p}/Soniss/GDC2024/PolePosition/Lynx 50 - 4m - 6.ogg`,
        },
      },
    },
    sling: {
      strike: {
        "01": {
          "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Throw 005.ogg`,
        },
      },
      impact: {
        "01": {
          "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 001.ogg`,
          "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 002.ogg`,
          "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 003.ogg`,
          "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 004.ogg`,
          "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Sling/Sling Impact 005.ogg`,
        },
      },
    },
    thrown: {
      general: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/General Throw A.ogg`,
          "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/General Throw B.ogg`,
          "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/General Throw C.ogg`,
        },
      },
      blade: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Blade 005.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Large Blade Whoosh E.ogg`,
          },
        },
        knife: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Small Blade Whoosh E.ogg`,
          },
        },
      },
      blunt: {
        whoosh: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh E.ogg`,
            "06": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Blunt Whoosh F.ogg`,
          },
        },
      },
      boomerang: {
        whoosh: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Boomerang 004.ogg`,
          },
        },
      },

      knife: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Throw 005.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Knives/Knives Impact 005.ogg`,
          },
        },
      },
      shuriken: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Throw 005.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Shurikens/Shurikens Impact 005.ogg`,
          },
        },
      },
      spear: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Throw 005.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh E.ogg`,
            "06": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh F.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Spears/Spears Impact 005.ogg`,
          },
        },
      },
      stone: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Throw 005.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Throwables/Stones/Stones Impact 005.ogg`,
          },
        },
      },
    },
    siege_weapons: {
      balista: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot D.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Shot 005.ogg`,
          },
        },
      },
      cannon: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Shot 005.ogg`,
          },
          "02": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Steampunk Cannon Shot.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 001.ogg`,
            "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 002.ogg`,
            "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 003.ogg`,
            "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 004.ogg`,
            "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Impact 005.ogg`,
          },
        },
      },
    },
    scifi: {
      bfg: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Big Freaking Gun A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Big Freaking Gun B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Big Freaking Gun C.ogg`,
          },
        },
      },
      bio: {
        charge: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Bio Charge A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Bio Charge B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Bio Charge C.ogg`,
            },
          },
        },
      },
      blaster: {
        strike: {
          "02": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Sci-Fi Gun Shot.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Echo Blaster.ogg`,
          },
        },
      },
      charge: {
        strike: {
          single: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Single A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Single B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Single C.ogg`,
            },
          },
          semi: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Semi Automatic A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Semi Automatic B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Semi Automatic C.ogg`,
            },
          },
          auto: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Automatic A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Automatic B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Micro Charge Automatic C.ogg`,
            },
          },
        },
      },
      deathgrinder: {
        strike: {
          single: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Single A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Single B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Single C.ogg`,
            },
          },
          semi: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Semi Automatic A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Semi Automatic B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Semi Automatic C.ogg`,
            },
          },
          auto: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Automatic A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Automatic B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Deathgrinder Automatic C.ogg`,
            },
          },
        },
      },
      decimator: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 005.ogg`,
            "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 006.ogg`,
            "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 007.ogg`,
            "08": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Molecular Decimator 008.ogg`,
          },
        },
      },
      disintegrator: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Disintegrator A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Disintegrator B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Disintegrator C.ogg`,
          },
        },
      },
      electric: {
        charge: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Electric Charge A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Electric Charge B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Electric Charge C.ogg`,
            },
          },
        },
        rifle: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Single A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Single B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Semi-Automatic D.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electro Rifle Shot Automatic D.ogg`,
              },
            },
          },
        },
      },
      electromagnetic: {
        rifle: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Single A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Single B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Semi-Automatic D.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Electromagnetic Rifle Shot Automatic D.ogg`,
              },
            },
          },
        },
      },
      entropy: {
        blaster: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 001.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 002.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 003.ogg`,
              "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 004.ogg`,
              "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 005.ogg`,
              "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 006.ogg`,
              "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 007.ogg`,
              "08": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Entropy Blaster 008.ogg`,
            },
          },
        },
      },
      graviton: {
        hammer: {
          strike: {
            burst: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Graviton Hammer Burst 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Graviton Hammer Burst 002.ogg`,
              },
            },
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 002.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 003.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 004.ogg`,
                "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 005.ogg`,
                "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 006.ogg`,
                "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Graviton Hammer 007.ogg`,
              },
            },
          },
        },
      },
      impulse: {
        charge: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Impulse Charge A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Impulse Charge B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Impulse Charge C.ogg`,
            },
          },
        },
        emiter: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Single A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Single B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Semi Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Semi Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Semi Automatic C.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Impulse Emitter Automatic C.ogg`,
              },
            },
          },
        },
      },
      laser: {
        beam: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Laser Beam A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Laser Beam B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Laser Beam C.ogg`,
            },
            "04": {
              "01": `${p}/Soniss/GDC2024/DoexStudio/Laser_Beam_004.ogg`,
            },
          },
        },
        lazgun: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Single A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Single B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Semi Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Semi Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Semi Automatic C.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Lazgun Automatic C.ogg`,
              },
            },
          },
        },
        pistol: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Single A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Single B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Semi-Automatic D.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Pistol Shot Automatic D.ogg`,
              },
            },
          },
        },
        rifle: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Single A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Single B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Semi-Automatic D.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Laser Rifle Shot Automatic D.ogg`,
              },
            },
          },
        },
      },
      missile: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Missile Launch A.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Missile Launch B.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Missile Launch C.ogg`,
          },
        },
        impact: {
          explosion: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Rocket Explosion A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Rocket Explosion B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Rocket Explosion C.ogg`,
            },
          },
        },
      },
      needler: {
        strike: {
          burst: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Kinetic Impaler Burst 001.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Kinetic Impaler Burst 002.ogg`,
            },
          },
          single: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 001.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 002.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 003.ogg`,
              "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 004.ogg`,
              "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 005.ogg`,
              "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 006.ogg`,
              "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 007.ogg`,
              "08": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Kinetic Impaler 008.ogg`,
            },
          },
        },
      },
      null_ray: {
        emitter: {
          strike: {
            burst: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Null-Ray Emitter Burst 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Bursts/Null-Ray Emitter Burst 002.ogg`,
              },
            },
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 002.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 003.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 004.ogg`,
                "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 005.ogg`,
                "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 006.ogg`,
                "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Null-Ray Emitter 007.ogg`,
              },
            },
          },
        },
      },
      orbital_gun: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Orbital Gun A.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Orbital Gun B.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Orbital Gun C.ogg`,
          },
        },
      },
      particle: {
        charge: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Particle Charge A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Particle Charge B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Particle Charge C.ogg`,
            },
          },
        },
        gun: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Particle Gun A.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Particle Gun B.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Particle Gun C.ogg`,
          },
        },
      },
      phase: {
        disruptor: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 001.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 002.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 003.ogg`,
              "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 004.ogg`,
              "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 005.ogg`,
              "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 006.ogg`,
              "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 007.ogg`,
              "08": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Medium/Phase Disruptor 008.ogg`,
            },
          },
        },
      },
      plasma: {
        gun: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Plasmagun A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Plasmagun B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Plasmagun C.ogg`,
            },
          },
        },
        lance: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 001.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 002.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 003.ogg`,
              "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 004.ogg`,
              "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 005.ogg`,
              "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 006.ogg`,
              "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Plasma Lance 007.ogg`,
            },
          },
        },
      },
      power: {
        charge: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Power Charge A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Power Charge B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Charge/Power Charge C.ogg`,
            },
          },
        },
      },
      proton: {
        heavy_gun: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Proton Heavy Gun A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Proton Heavy Gun B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Heavy/Proton Heavy Gun C.ogg`,
            },
          },
        },
      },
      pulse: {
        pistol: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Single A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Single B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Semi-Automatic D.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic C.ogg`,
                "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Light/Pulse Shot Automatic D.ogg`,
              },
            },
          },
        },
        pulsator: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Single A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Single B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Semi Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Semi Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Semi Automatic C.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Pulsator Automatic C.ogg`,
              },
            },
          },
        },
      },
      sonic: {
        supersonic_gun: {
          strike: {
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Single A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Single B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Single C.ogg`,
              },
            },
            semi: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Semi Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Semi Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Semi Automatic C.ogg`,
              },
            },
            auto: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Automatic A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Automatic B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Light/Supersonic Gun Automatic C.ogg`,
              },
            },
          },
        },
      },
      singularity: {
        pistol: {
          strike: {
            burst: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol Burst.ogg`,
              },
            },
            single: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 002.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 003.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 004.ogg`,
                "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 005.ogg`,
                "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Small/Singularity Pistol 006.ogg`,
              },
            },
          },
        },
      },
      artillery: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Mars Artillery A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Mars Artillery B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Mars Artillery C.ogg`,
          },
        },
      },
      cannon: {
        strike: {
          "02": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Sci-Fi Cannon Shot.ogg`,
          },
        },
        void: {
          strike: {
            "01": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 001.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 002.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 003.ogg`,
              "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 004.ogg`,
              "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 005.ogg`,
              "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 006.ogg`,
              "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Big/Void Cannon 007.ogg`,
            },
          },
        },
      },
      torpedo: {
        strike: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Ship Torpedo A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Ship Torpedo B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Heavy/Ship Torpedo C.ogg`,
          },
        },
      },
      turret: {
        charge: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Turret Rotation A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Turret Rotation B.ogg`,
          },
        },
      },
    },
  },
  magic: {
    arcane: {
      cast: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Item Use A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Item Use B.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Reward 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Reward 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Reward 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Reward 004.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Arcade Spell.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 004.ogg`,
          },
        },
        arrow: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Energy Arrow 007.ogg`,
          },
        },
        astral: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Astral Flare 007.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mana Surge 006.ogg`,
          },
        },
        crystal: {
          "02": {
            "01": `${p}/Soniss/GDC2026/Epic Stock Media/Glass Surge.ogg`,
          },
        },
        missiles: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Arcane Missiles 007.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Force Barrage 007.ogg`,
          },
        },
        ripple: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Arcane Ripple 007.ogg`,
          },
        },
      },
      impact: {
        blast: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Gravi Blast Dry.ogg`,
          },
        },
      },
      surge: {
        crystals: {
          "04": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Chains 004.ogg`,
          },
        },
        ethereal: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Aetherial Pulse 006.ogg`,
          },
        },
        wave: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Mystic Vortex 007.ogg`,
          },
        },
        long: {
          "03": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Discovery Jingle.ogg`,
          },
        },
      },
      light: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Light 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Light 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Light 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Light 004.ogg`,
          },
        },
        revealing: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Fairy Dust 004.ogg`,
          },
        },
      },
      buff: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Amulet D.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Charm A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Charm B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Equip Charm C.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Elven Charm 004.ogg`,
          },
        },
      },
      curse: {
        glyph: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Arcane Spells/Glyphic Resonance 007.ogg`,
          },
        },
      },
    },
    primal: {
      cast: {
        general: {
          "03": {
            "01": `${p}/ovani-sounds/Magic/Nature/Animorphic Bond.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Magic/Nature/Summon Bramble Trap.ogg`,
          },
        },
        summon: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Summon Sapling.ogg`,
          },
        },
      },
      strike: {
        vine: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Whip Vine A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Nature/Whip Vine B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Nature/Whip Vine C.ogg`,
            "04": `${p}/ovani-sounds/Magic/Nature/Whip Vine D.ogg`,
          },
        },
        moonbeam: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Moon Beam.ogg`,
          },
        },
        sunbeam: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Sun Beam.ogg`,
          },
        },
      },
      buff: {
        barkskin: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Barkskin.ogg`,
          },
        },
        thorns: {
          "02": {
            "01": `${p}/ovani-sounds/Magic/Nature/Thorn Shield.ogg`,
          },
        },
      },
      burst: {
        bramble: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Bramble Burst.ogg`,
          },
        },
        bulb: {
          "01": {
            plant: `${p}/ovani-sounds/Magic/Nature/Bulb Burst Plant.ogg`,
            splat: `${p}/ovani-sounds/Magic/Nature/Bulb Burst.ogg`,
          },
        },
      },
      healing: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Nature/Natural Healing.ogg`,
        },
      },
      growth: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Nature/Verdant Growth.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Magic/Nature/Root Snare.ogg`,
        },
      },
    },
    divine: {
      cast: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 005.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Celestial Choir 006.ogg`,
          },
          "03": {
            "01": `${p}/Soniss/GDC2026/Epic Stock Media/Light Power Up.ogg`,
          },
        },
        bolt: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Light Bolt Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Light/Light Bolt Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Light/Light Bolt Cast C.ogg`,
          },
        },
        beam: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Hallowed Beam 005.ogg`,
          },
        },
        bells: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail E.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail F.ogg`,
            "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail G.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Gong D.ogg`,
          },
          "03": {
            long: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Long A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Long B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Long.ogg`,
            },
            short: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Short A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Short B.ogg`,
            },
          },
          "04": {
            saddle: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle C.ogg`,
              "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Saddle D.ogg`,
            },
            short: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Short A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Short B.ogg`,
            },
            steady: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Steady A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Steady B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Rise Steady C.ogg`,
            },
          },
          "05": {
            "01": `${p}/Soniss/GDC2026/Ivo Vicic/Church Bells.ogg`,
          },
        },
        smite: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Smite 007.ogg`,
          },
        },
      },
      impact: {
        bells: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact E.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact F.ogg`,
            "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact G.ogg`,
            "08": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact H.ogg`,
            "09": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact I.ogg`,
            10: `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Impact J.ogg`,
          },
        },
        bolt: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Light Bolt Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Light/Light Bolt Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Light/Light Bolt Impact C.ogg`,
          },
        },
        wrath: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Heavenly Wrath.ogg`,
          },
        },
        flame: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Heavenly Flame.ogg`,
          },
        },
        shock: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Holy Shock.ogg`,
          },
        },
      },
      loop: {
        bolt: {
          "01": {
            trail: `${p}/ovani-sounds/Magic/Light/Light Bolt Trail Loop.ogg`,
          },
        },
        bells: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Loops/Holy Loop Layer D.ogg`,
          },
        },
      },
      nova: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Light/Holy Nova.ogg`,
        },
      },
      healing: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Heal 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Heal 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Heal 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Heal 004.ogg`,
        },
        "02": {
          mass_healing: {
            "01": {
              "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 001.ogg`,
              "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 002.ogg`,
              "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 003.ogg`,
              "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 004.ogg`,
              "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Mass Heal 005.ogg`,
            },
          },
        },
      },
      light: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Light/Illuminate.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Magic/Light/Holy Light.ogg`,
        },
      },
      buff: {
        ward: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Holy Ward.ogg`,
          },
        },
        bless: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Bless 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Bless 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Bless 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Bless 004.ogg`,
          },
        },
        consecrate: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Consecrate.ogg`,
          },
        },
        sanctuary: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Sanctuary 005.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Divine Magic/Grace Whisper 005.ogg`,
          },
        },
        shield: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Holy/Holy Tail Shield.ogg`,
          },
        },
      },
    },
    occult: {
      cast: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Dread Surge 007.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 004.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Magic/Dark/Necrotic Touch.ogg`,
          },
          "04": {
            "01": `${p}/Soniss/GDC2026/Epic Stock Media/Alien Swell.ogg`,
          },
          "05": {
            "01": `${p}/Soniss/GDC2026/InMotionAudio/Evil Ring.ogg`,
            "02": `${p}/Soniss/GDC2026/InMotionAudio/Evil Bong.ogg`,
          },
        },
        beam: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 004.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 007.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 003.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 005.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Shadow Wail 006.ogg`,
          },
        },
        blast: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Oblivion Strike 007.ogg`,
          },
        },
        fear: {
          "02": {
            "01": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Fear 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Fear 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Fear 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Fear 004.ogg`,
          },
        },
        ghostly: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Grave Whisper 006.ogg`,
          },
        },
        laughter: {
          "01": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Mad Maiden Stinger.ogg`,
          },
        },
        shatter: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Ebon Shatter 005.ogg`,
          },
        },
        countdown: {
          "01": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Spooky Countdown.ogg`,
          },
        },
      },
      impact: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 004.ogg`,
          },
          "02": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Impact Boom.ogg`,
            "02": `${p}/Soniss/GDC2024/BluezoneCorp/Impact Braam.ogg`,
          },
          "03": {
            "01": `${p}/Soniss/GDC2024/Jake Fielding/Boom - Cinematic Horn.ogg`,
          },
        },
        metal: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fatality 004.ogg`,
          },
        },
      },
      movement: {
        teleportation: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Shadow Teleport 005.ogg`,
          },
        },
        whoosh: {
          gravity: {
            "01": {
              "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 001.ogg`,
              "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 002.ogg`,
              "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 003.ogg`,
              "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Gravity Anchor 004.ogg`,
            },
          },
          shimmer: {
            "03": {
              "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 001.ogg`,
              "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 002.ogg`,
              "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 003.ogg`,
              "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Crystal 004.ogg`,
            },
          },
        },
      },
      bolt: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Cast C.ogg`,
          },
          loop: {
            trail: `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Trail Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Dark/Shadow Bolt Impact C.ogg`,
          },
        },
      },
      pulse: {
        "01": {
          abyss: `${p}/ovani-sounds/Magic/Dark/Abyssal Pulse.ogg`,
          shock: `${p}/ovani-sounds/Magic/Dark/Dread Wave.ogg`,
          shatter: `${p}/ovani-sounds/Magic/Dark/Soul Shatter.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 004.ogg`,
          "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Space Oddity 005.ogg`,
        },
      },
      surge: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Mist Horror 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Mist Horror 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Mist Horror 003.ogg`,
          },
        },
        long: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Suspense 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Suspense 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Suspense 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Suspense 004.ogg`,
          },
        },
      },
      siphon: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Dark/Soul Siphon.ogg`,
        },
      },
      buff: {
        ghostly: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Cold Charm 004.ogg`,
          },
        },
      },
      curse: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Dark/Nightshade Curse.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Magic/Dark/Horrify.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dark Castle 004.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 004.ogg`,
          },
          "05": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 005.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 006.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Dark Magic/Blight Curse 007.ogg`,
          },
        },

        confused: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Confuse 004.ogg`,
          },
        },
        hypnotize: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hypnotize 004.ogg`,
          },
        },
        restrained: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Hold 004.ogg`,
          },
        },
        stun: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Stun 004.ogg`,
          },
        },
      },
    },
    acid: {},
    air: {
      impact: {
        turbine: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Turbine 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Turbine 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Turbine 003.ogg`,
          },
        },
      },
      blade: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Air/Aero Blade Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Air/Aero Blade Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Air/Aero Blade Cast C.ogg`,
          },
          loop: {
            trail: `${p}/ovani-sounds/Magic/Air/Aero Blade Trail Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Air/Aero Blade Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Air/Aero Blade Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Air/Aero Blade Impact C.ogg`,
          },
        },
        "02": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Air/Cyclone Blade Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Air/Cyclone Blade Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Air/Cyclone Blade Cast C.ogg`,
          },
          loop: {
            trail: `${p}/ovani-sounds/Magic/Air/Cyclone Blade Trail Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Air/Cyclone Blade Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Air/Cyclone Blade Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Air/Cyclone Blade Impact C.ogg`,
          },
        },
      },
      movement: {
        teleportation: {
          "01": {
            in: `${p}/ovani-sounds/Magic/Air/Aeroportation In.ogg`,
            out: `${p}/ovani-sounds/Magic/Air/Aeroportation Out.ogg`,
          },
        },
        jump: {
          "02": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactive Jump 004.ogg`,
          },
        },
        wind: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 003.ogg`,
          },
        },
        turbine: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Topter 004.ogg`,
          },
        },
      },
      surge: {
        "01": {
          sky: `${p}/ovani-sounds/Magic/Air/Sky Surge.ogg`,
          whirlwind_gust: `${p}/ovani-sounds/Magic/Air/Whirlwind Gust.ogg`,
          embrace: `${p}/ovani-sounds/Magic/Air/Zephyrs Embrace.ogg`,
          resonance: `${p}/ovani-sounds/Magic/Air/Zephyrs Resonance.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Metal Wind 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Metal Wind 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Metal Wind 003.ogg`,
        },
        "06": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Wind 004.ogg`,
        },
      },
      mist: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Air/Mistform.ogg`,
        },
      },
      misc: {
        echo: {
          "01": {
            cast: `${p}/ovani-sounds/Magic/Air/Echoing Gust Cast.ogg`,
            impact: `${p}/ovani-sounds/Magic/Air/Echoing Gust Impact.ogg`,
          },
        },
      },
    },
    earth: {
      cast: {
        magnetic: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Earth/Magnetic Burst.ogg`,
          },
        },
      },
      ranged: {
        barrage: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Rock Meteor Swarm 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Rock Meteor Swarm 2.ogg`,
          },
        },
        boulder: {
          "01": {
            cast: {
              "01": `${p}/ovani-sounds/Magic/Earth/Boulder Throw Cast A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Earth/Boulder Throw Cast B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Earth/Boulder Throw Cast C.ogg`,
            },
            loop: {
              trail: `${p}/ovani-sounds/Magic/Earth/Boulder Throw Trail Loop.ogg`,
            },
            impact: {
              "01": `${p}/ovani-sounds/Magic/Earth/Boulder Throw Impact A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Earth/Boulder Throw Impact B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Earth/Boulder Throw Impact C.ogg`,
            },
          },
        },
        rock: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Magic/Rock Shoot A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Magic/Rock Shoot B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Magic/Rock Shoot C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Magic/Rock Shoot D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Magic/Rock Shoot E.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Earth/Magic/Rock Shoot No Ring A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Magic/Rock Shoot No Ring B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Magic/Rock Shoot No Ring C.ogg`,
          },
          "03": {
            cast: {
              "01": `${p}/ovani-sounds/Magic/Earth/Rock Throw Cast A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Earth/Rock Throw Cast B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Earth/Rock Throw Cast C.ogg`,
            },
            loop: {
              trail: `${p}/ovani-sounds/Magic/Earth/Rock Throw Trail Loop.ogg`,
            },
            impact: {
              "01": `${p}/ovani-sounds/Magic/Earth/Rock Throw Impact A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Earth/Rock Throw Impact B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Earth/Rock Throw Impact C.ogg`,
            },
          },
          "04": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Rock Meteor Throw 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Rock Meteor Throw 2.ogg`,
          },
        },
        stone: {
          "01": {
            cast: {
              "01": `${p}/ovani-sounds/Magic/Earth/Stone Throw Cast A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Earth/Stone Throw Cast B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Earth/Stone Throw Cast C.ogg`,
            },
            loop: {
              trail: `${p}/ovani-sounds/Magic/Earth/Stone Trail Loop.ogg`,
            },
            impact: {
              "01": `${p}/ovani-sounds/Magic/Earth/Stone Throw Impact A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Earth/Stone Throw Impact B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Earth/Stone Throw Impact C.ogg`,
            },
          },
        },
        magnetic: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Magnet 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Magnet 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Magnet 003.ogg`,
          },
        },
      },
      impact: {
        general: {
          "01": {
            normal: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact C.ogg`,
              "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact D.ogg`,
              "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact E.ogg`,
              "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact F.ogg`,
              "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact G.ogg`,
            },
            muffled: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact Muffled A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact Muffled B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Impact Muffled C.ogg`,
            },
          },
        },
        stone: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Magic/Impact A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Magic/Impact B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Magic/Impact C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Magic/Impact D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Magic/Impact E.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Earth/Stones/Large Stones Impact A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Stones/Large Stones Impact B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Stones/Large Stones Impact C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Stones/Large Stones Impact D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Stones/Large Stones Impact E.ogg`,
            "06": `${p}/ovani-sounds/Earth/Stones/Large Stones Impact F.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Earth/Stones/Medium Stones Impact A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Stones/Medium Stones Impact B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Stones/Medium Stones Impact C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Stones/Medium Stones Impact D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Stones/Medium Stones Impact E.ogg`,
          },
        },
        seismic: {
          "02": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Vibro 004.ogg`,
          },
        },
      },
      tail: {
        "01": {
          short: {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail E.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail F.ogg`,
            "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail G.ogg`,
            "08": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail H.ogg`,
            "09": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail I.ogg`,
          },
          long: {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long E.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long F.ogg`,
            "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Tail Long G.ogg`,
          },
        },
      },
      strike: {
        "01": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-breaks-the-stone-door.ogg`,
        },
      },
      movement: {
        meld: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Earth/Earthmeld.ogg`,
          },
        },
        quake: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Earth/Quake Step.ogg`,
          },
        },
        whoosh: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh E.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh F.ogg`,
            "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Whoosh G.ogg`,
          },
        },
      },
      rise: {
        "01": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise A.ogg`,
          "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise B.ogg`,
          "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise C.ogg`,
          "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise D.ogg`,
          "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise E.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Steady A.ogg`,
          "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Steady B.ogg`,
          "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Steady C.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Earth Rise Saddle.ogg`,
        },
      },
      loop: {
        "01": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer A.ogg`,
          "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer B.ogg`,
          "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer C.ogg`,
          "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Earth/Loops/Earth Loop Layer D.ogg`,
        },
      },
      crumble: {
        "01": {
          "01": `${p}/ovani-sounds/Earth/Stones/Crumbling Rock A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Stones/Crumbling Rock B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Stones/Crumbling Rock C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Stones/Crumbling Rock D.ogg`,
          "05": `${p}/ovani-sounds/Earth/Stones/Crumbling Rock E.ogg`,
        },
      },
      drag: {
        "01": {
          "01": `${p}/ovani-sounds/Earth/Stones/Large Stones Drag A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Stones/Large Stones Drag B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Stones/Large Stones Drag C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Stones/Large Stones Drag D.ogg`,
          "05": `${p}/ovani-sounds/Earth/Stones/Large Stones Drag E.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Earth/Stones/Medium Stones Drag A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Stones/Medium Stones Drag B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Stones/Medium Stones Drag C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Stones/Medium Stones Drag D.ogg`,
          "05": `${p}/ovani-sounds/Earth/Stones/Medium Stones Drag E.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 004.ogg`,
        },
      },
      earthquake: {
        distant: {
          loop: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Distant Loop A.ogg`,
            },
          },
          long: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Distant Long A.ogg`,
            },
          },
          short: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Distant Short A.ogg`,
            },
          },
        },
        close: {
          loop: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Loop A.ogg`,
            },
          },
          long: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Long A.ogg`,
            },
          },
          short: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Short A.ogg`,
            },
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Underground/Earthquake Impacts A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Underground/Earthquake Impacts B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Underground/Earthquake Impacts C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Underground/Earthquake Impacts D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Underground/Earthquake Impacts E.ogg`,
            "06": `${p}/ovani-sounds/Earth/Underground/Earthquake Impacts F.ogg`,
          },
        },
      },
      buff: {
        armor: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Earth/Stone Armor.ogg`,
          },
        },
      },
      explosion: {
        "01": {
          "01": `${p}/ovani-sounds/Earth/Magic/Eruption A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Magic/Eruption B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Magic/Eruption C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Magic/Eruption D.ogg`,
          "05": `${p}/ovani-sounds/Earth/Magic/Eruption E.ogg`,
        },
      },
      structure: {
        wall: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Earth/Stone Wall.ogg`,
          },
          "02": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Rock Wall 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Rock Wall 2.ogg`,
          },
        },
        tunnel: {
          "01": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Secret Tunnel.ogg`,
          },
        },
      },
      pulse: {
        seismic: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Earth/Seismic Pulse.ogg`,
          },
        },
      },
      sand: {
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Sand/Sand Impact A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Sand/Sand Impact B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Sand/Sand Impact C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Sand/Sand Impact D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Sand/Sand Impact E.ogg`,
          },
        },
        movement: {
          short: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Sand/Sand Movement Short A.ogg`,
              "02": `${p}/ovani-sounds/Earth/Sand/Sand Movement Short B.ogg`,
              "03": `${p}/ovani-sounds/Earth/Sand/Sand Movement Short C.ogg`,
              "04": `${p}/ovani-sounds/Earth/Sand/Sand Movement Short D.ogg`,
            },
          },
          long: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Sand/Sand Movement Long A.ogg`,
              "02": `${p}/ovani-sounds/Earth/Sand/Sand Movement Long B.ogg`,
            },
          },
        },
        pour: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Sand/Sand Pour A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Sand/Sand Pour B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Sand/Sand Pour C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Sand/Sand Pour D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Sand/Sand Pour E.ogg`,
          },
        },
        shake: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Sand/Sand Shake A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Sand/Sand Shake B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Sand/Sand Shake C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Sand/Sand Shake D.ogg`,
          },
        },
      },
      imprison: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Earth/Earthen Grasp.ogg`,
        },
      },
      landslide: {
        loop: {
          small: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Landslides/Small Landslide Loop.ogg`,
            },
          },
          large: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Landslides/Landslide Loop A.ogg`,
            },
          },
        },
        long: {
          large: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Landslides/Landslide Long A.ogg`,
              "02": `${p}/ovani-sounds/Earth/Landslides/Landslide Long B.ogg`,
            },
          },
        },
        short: {
          small: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Landslides/Small Landslide Short A.ogg`,
              "02": `${p}/ovani-sounds/Earth/Landslides/Small Landslide Short B.ogg`,
              "03": `${p}/ovani-sounds/Earth/Landslides/Small Landslide Short C.ogg`,
              "04": `${p}/ovani-sounds/Earth/Landslides/Small Landslide Short D.ogg`,
            },
          },
          large: {
            "01": {
              "01": `${p}/ovani-sounds/Earth/Landslides/Landslide Short A.ogg`,
              "02": `${p}/ovani-sounds/Earth/Landslides/Landslide Short B.ogg`,
              "03": `${p}/ovani-sounds/Earth/Landslides/Landslide Short C.ogg`,
              "04": `${p}/ovani-sounds/Earth/Landslides/Landslide Short D.ogg`,
              "05": `${p}/ovani-sounds/Earth/Landslides/Landslide Short E.ogg`,
              "06": `${p}/ovani-sounds/Earth/Landslides/Landslide Short F.ogg`,
            },
          },
        },
        stomp: {
          "01": {
            "01": `${p}/ovani-sounds/Earth/Magic/Landslide Stomp A.ogg`,
            "02": `${p}/ovani-sounds/Earth/Magic/Landslide Stomp B.ogg`,
            "03": `${p}/ovani-sounds/Earth/Magic/Landslide Stomp C.ogg`,
            "04": `${p}/ovani-sounds/Earth/Magic/Landslide Stomp D.ogg`,
            "05": `${p}/ovani-sounds/Earth/Magic/Landslide Stomp E.ogg`,
          },
        },
      },
      lift: {
        "01": {
          "01": `${p}/ovani-sounds/Earth/Magic/Earth Lift A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Magic/Earth Lift B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Magic/Earth Lift C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Magic/Earth Lift D.ogg`,
          "05": `${p}/ovani-sounds/Earth/Magic/Earth Lift E.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Earth/Magic/Earth Whoosh A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Magic/Earth Whoosh B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Magic/Earth Whoosh C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Magic/Earth Whoosh D.ogg`,
        },
      },
      spike: {
        "01": {
          "01": `${p}/ovani-sounds/Earth/Magic/Earth Spike A.ogg`,
          "02": `${p}/ovani-sounds/Earth/Magic/Earth Spike B.ogg`,
          "03": `${p}/ovani-sounds/Earth/Magic/Earth Spike C.ogg`,
          "04": `${p}/ovani-sounds/Earth/Magic/Earth Spike D.ogg`,
          "05": `${p}/ovani-sounds/Earth/Magic/Earth Spike E.ogg`,
        },
      },
      misc: {},
    },
    electricity: {
      cast: {
        charge: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Shock/Thunderbolt Strike Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Shock/Thunderbolt Strike Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Shock/Thunderbolt Strike Cast C.ogg`,
          },
        },
      },
      strike: {
        whip: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Shock/Lightning Whip A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Shock/Lightning Whip B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Shock/Lightning Whip C.ogg`,
          },
        },
      },
      impact: {
        charge: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Shock/Thunderbolt Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Shock/Thunderbolt Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Shock/Thunderbolt Impact C.ogg`,
          },
        },
        crackle: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Shock/Thunderous Boom.ogg`,
          },
        },
        crash: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Thunderstrike Crash 005.ogg`,
          },
        },
        burst: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Electroheart 004.ogg`,
          },
        },
      },
      lightning_bolt: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Cast C.ogg`,
          },
          loop: {
            trail: `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Trail Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Shock/Lightning Bolt Impact C.ogg`,
          },
        },
      },
    },
    fire: {
      cast: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Spell A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Spell B.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Only A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Only B.ogg`,
          },
          "03": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Fireball 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Fireball 2.ogg`,
            "03": `${p}/TomMusic/FreeFantasySFX/Spells/Fireball 3.ogg`,
          },
          "04": {
            "01": `${p}/Soniss/GDC2026/Epic Stock Media/Fire Whoosh.ogg`,
          },
        },
        throw: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast and Tail A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast and Tail B.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Crackling.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Hiss A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Hiss B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Hiss C.ogg`,
          },
          "04": {
            slow: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long C.ogg`,
              "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Long D.ogg`,
              "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Phase.ogg`,
            },
          },
          "05": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Tail Whip D.ogg`,
          },
        },
        hit: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Then Hit A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Then Hit B.ogg`,
            "03": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Cast Then Hit C.ogg`,
          },
        },
        rapid: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Rapid Fire.ogg`,
          },
        },
        torch: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch On_Off.ogg`,
          },
        },
      },
      strike: {
        chains: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Fire/Flame Chain A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Fire/Flame Chain B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Fire/Flame Chain C.ogg`,
          },
        },
        whip: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Fire/Fire Whip.ogg`,
          },
        },
      },
      surge: {
        general: {},
        flames: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Firespray 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Firespray 2.ogg`,
          },
        },
      },
      aura: {
        "01": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Aura.ogg`,
        },
      },
      impact: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact B.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact Short E.ogg`,
          },
        },
        flame: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Impact A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Fire Impact B.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Fire SFX/Misc/Fire Punch.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Comet 004.ogg`,
          },
        },
        spark: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Fire Start 005.ogg`,
          },
        },
        extinguish: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact C.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact D.ogg`,
          },
        },
      },
      fireball: {
        "01": {
          large: {
            cast: {
              "01": `${p}/ovani-sounds/Magic/Fire/Large Fireball Cast A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Fire/Large Fireball Cast B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Fire/Large Fireball Cast C.ogg`,
            },
            loop: {
              trail: `${p}/ovani-sounds/Magic/Fire/Large Fireball Trail Loop.ogg`,
            },
            impact: {
              "01": `${p}/ovani-sounds/Magic/Fire/Large Fireball Impact A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Fire/Large Fireball Impact B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Fire/Large Fireball Impact C.ogg`,
            },
          },
          medium: {
            cast: {
              "01": `${p}/ovani-sounds/Magic/Fire/Medium Fireball Cast A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Fire/Medium Fireball Cast B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Fire/Medium Fireball Cast C.ogg`,
            },
            loop: {
              trail: `${p}/ovani-sounds/Magic/Fire/Medium Fireball Trail Loop.ogg`,
            },
            impact: {
              "01": `${p}/ovani-sounds/Magic/Fire/Medium Fireball Impact A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Fire/Medium Fireball Impact B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Fire/Medium Fireball Impact C.ogg`,
            },
          },
          small: {
            cast: {
              "01": `${p}/ovani-sounds/Magic/Fire/Small Fireball Cast A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Fire/Small Fireball Cast B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Fire/Small Fireball Cast C.ogg`,
            },
            loop: {
              trail: `${p}/ovani-sounds/Magic/Fire/Small Fireball Trail Loop.ogg`,
            },
            impact: {
              "01": `${p}/ovani-sounds/Magic/Fire/Small Fireball Impact A.ogg`,
              "02": `${p}/ovani-sounds/Magic/Fire/Small Fireball Impact B.ogg`,
              "03": `${p}/ovani-sounds/Magic/Fire/Small Fireball Impact C.ogg`,
            },
          },
        },
      },
      burst: {
        general: {
          "01": {
            small: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Strike A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Strike B.ogg`,
            },
          },
        },
        flames: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fiery Burst Long Tail A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fiery Burst Long Tail B.ogg`,
            "03": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fiery Burst Long Tail C.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Magic/Fire/Burning Hands.ogg`,
          },
        },
        lava: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Fire/Lava Burst.ogg`,
          },
        },
        nuke: {
          "01": {
            "01": `${p}/Soniss/GDC2024/David Dumais/Nuke.ogg`,
          },
        },
      },
      loop: {
        storm: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer E.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer F.ogg`,
          },
          "02": {
            spin: `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Loops/Fire Loop Layer D.ogg`,
          },
        },
      },
      burn: {
        "03": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Long A.ogg`,
          "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Long B.ogg`,
        },
      },
      buff: {
        general: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Firebuff 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Firebuff 2.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Fire SFX/Misc/Flame Short Low End A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Misc/Flame Short Low End B.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Tear A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Tear B.ogg`,
          },
        },
        armor: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Fire/Flame Armor.ogg`,
          },
        },
      },
      movement: {
        circle: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Circle Around.ogg`,
          },
        },
        whoosh: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Quick Whoosh L to R.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Low Movement A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Low Movement B.ogg`,
          },
        },
        dash: {
          "01": {
            leaving: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh A.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh B.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh C.ogg`,
            },
            returning: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh D.ogg`,
              "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh F.ogg`,
              "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh G.ogg`,
              "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh H.ogg`,
            },
            maxspeed: {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Whoosh E.ogg`,
            },
          },
          "04": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Rise Whoosh E.ogg`,
          },
        },
        bolt: {
          "03": {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Move Quick.ogg`,
          },
        },
        radiation: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Fire Reactor 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Fire Reactor 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Fire Reactor 003.ogg`,
          },
        },
      },
      torch: {
        "01": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Intense A.ogg`,
          "02": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Intense B.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Long Intense.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Movement A.ogg`,
          "02": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Movement C.ogg`,
        },
        "04": {
          "01": `${p}/ovani-sounds/Fire SFX/Fire Tools/Blow Torch Off Intense.ogg`,
        },
      },
      structure: {
        pillar: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Fire/Flame Pillar.ogg`,
          },
        },
      },
      cursed: {
        "01": {
          "01": `${p}/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame A.ogg`,
          "02": `${p}/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame B.ogg`,
          "03": `${p}/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame C.ogg`,
          "04": `${p}/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame D.ogg`,
          "05": `${p}/ovani-sounds/Fire SFX/Big Fire/Ethereal Flame E.ogg`,
        },
      },
      extinguish: {
        "01": {
          "01": `${p}/ovani-sounds/Fire SFX/Misc/Psssht Fwhoooofft.ogg`,
        },
      },
      ignite: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Fire/Combustion.ogg`,
        },
      },
      phoenix: {
        "01": {
          burst: `${p}/ovani-sounds/Magic/Fire/Phoenix Burst.ogg`,
          flash: `${p}/ovani-sounds/Magic/Fire/Phoenix Flash.ogg`,
        },
      },
      rain: {
        loop: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Misc/Rain On Fire Loop.ogg`,
          },
        },
      },
      summon: {
        "01": {
          long: {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Long A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Long B.ogg`,
          },
          medium: {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Medium A.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Medium B.ogg`,
          },
          short: {
            "01": `${p}/ovani-sounds/Fire SFX/Fire Magic/Monster Fire Short A.ogg`,
          },
        },
      },
      misc: {
        blazing_comet: {
          "01": {
            complete: `${p}/ovani-sounds/Magic/Fire/Blazing Comet.ogg`,
          },
        },
      },
    },
    ice: {
      cast: {},
      strike: {
        icycle: {
          single: {
            "01": {
              "01": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Throw 1.ogg`,
              "02": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Throw 2.ogg`,
            },
          },
          multiple: {
            "01": {
              "01": `${p}/ovani-sounds/Magic/Ice/Icicle Barrage.ogg`,
            },
            "02": {
              "01": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Barrage 1.ogg`,
              "02": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Barrage 2.ogg`,
            },
          },
        },
      },
      loop: {
        "01": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer C.ogg`,
        },
      },
      ice_lance: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Cast C.ogg`,
          },
          loop: {
            "01": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Travel Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Ice/Crystal Lance Impact C.ogg`,
          },
        },
      },
      snowball: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Ice/Snow Ball A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Ice/Snow Ball B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Ice/Snow Ball C.ogg`,
          },
          loop: {
            "01": `${p}/ovani-sounds/Magic/Ice/Snow Ball Travel Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Ice/Snow Ball Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Ice/Snow Ball Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Ice/Snow Ball Impact C.ogg`,
          },
        },
      },
      freeze: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Ice/Icy Veins.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Magic/Ice/Frozen Echo.ogg`,
        },
        "03": {
          "01": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Freeze 1.ogg`,
          "02": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Freeze 2.ogg`,
        },
        "04": {
          "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Freeze 004.ogg`,
        },
      },
      gale: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Ice/Arctic Gale.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Magic/Ice/Frost Nova.ogg`,
        },
      },
      movement: {
        dash: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh D.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh H.ogg`,
          },
        },
      },
      buff: {
        shield: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Ice/Glacial Shield.ogg`,
          },
        },
        movement: {
          "01": {
            water_walking: `${p}/ovani-sounds/Magic/Ice/Water Walking.ogg`,
          },
        },
      },
      structure: {
        column: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Ice/Crystal Column.ogg`,
          },
        },
        wall: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Wall 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Ice Wall 2.ogg`,
          },
        },
      },
    },
    mental: {},
    sonic: {
      choir: {
        neutraL: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir 002.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir Tail 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir Tail 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Choir Tail 003.ogg`,
          },
        },
      },
      drums: {
        surge: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Anvil Drums 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Anvil Drums 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Anvil Drums 003.ogg`,
          },
        },
      },
      harp: {
        surge: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Magic Harp 004.ogg`,
          },
        },
      },
      roar: {
        "05": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Roar 004.ogg`,
        },
      },
      slam: {
        "01": {
          "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 001.ogg`,
          "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 002.ogg`,
          "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 003.ogg`,
          "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 004.ogg`,
          "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 005.ogg`,
          "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Offensive Spells/Shockwave Slam 006.ogg`,
        },
      },
    },
    water: {
      cast: {
        general: {
          "06": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Water Swoosh.ogg`,
          },
        },
        wave: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Long D.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail C.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise Steady A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise Steady B.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise D.ogg`,
          },
          "05": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Wave Attack 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Wave Attack 2.ogg`,
          },
        },
        blade: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Blades A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Tail Blades C.ogg`,
          },
        },
        beam: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise High.ogg`,
          },
        },
        current: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Current Pulse 007.ogg`,
          },
        },
        geyser: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 007.ogg`,
            "08": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Burst 008.ogg`,
          },
        },
        maelstrom: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 005.ogg`,
            "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 006.ogg`,
            "07": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Maelstrom Roar 007.ogg`,
          },
        },
        spray: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Spells/Waterspray 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Spells/Waterspray 2.ogg`,
          },
        },
        bubble: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Poison 004.ogg`,
          },
        },
        time: {
          reverse: {
            "01": {
              "01": `${p}/Soniss/GDC2024/BluezoneCorp/Water Glitch.ogg`,
            },
          },
        },
      },
      impact: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact D.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact E.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact F.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact H.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact I.ogg`,
            "07": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact J.ogg`,
          },
        },
        bubble: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Bubble 004.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact B.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact C.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Impact G.ogg`,
          },
        },
        fill: {
          "01": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Water Impact.ogg`,
          },
        },
        submerge: {
          "01": {
            "01": `${p}/Soniss/GDC2026/Epic Stock Media/Submerge.ogg`,
          },
        },
      },
      jet: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Water/Aqua Jet Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Water/Aqua Jet Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Water/Aqua Jet Cast C.ogg`,
          },
          loop: {
            trail: `${p}/ovani-sounds/Magic/Water/Aqua Jet Trail Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Water/Aqua Jet Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Water/Aqua Jet Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Water/Aqua Jet Impact C.ogg`,
          },
        },
      },
      bolt: {
        "01": {
          cast: {
            "01": `${p}/ovani-sounds/Magic/Water/Aqua Bolt Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Water/Aqua Bolt Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Water/Aqua Bolt Cast C.ogg`,
          },
          loop: {
            trail: `${p}/ovani-sounds/Magic/Water/Aqua Bolt Trail Loop.ogg`,
          },
          impact: {
            "01": `${p}/ovani-sounds/Magic/Water/Aqua Bolt Impact A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Water/Aqua Bolt Impact B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Water/Aqua Bolt Impact C.ogg`,
          },
        },
      },
      rain: {
        whoosh: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Rain 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Rain 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Rain 003.ogg`,
          },
        },
        summon: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Summon Rain Cast.ogg`,
          },
        },
        loop: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Nature/Summon Rain Loop.ogg`,
          },
        },
      },
      loop: {
        "02": {
          "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer A.ogg`,
          "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer D.ogg`,
          "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer E.ogg`,
        },
        "03": {
          bubble: `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Loops/Water Loop Layer B.ogg`,
        },
      },
      movement: {
        surge: {
          tides: {
            "01": {
              "01": `${p}/ovani-sounds/Magic/Water/Tidal Surge.ogg`,
            },

            "02": {
              "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 001.ogg`,
              "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 002.ogg`,
              "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 003.ogg`,
              "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 004.ogg`,
              "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 005.ogg`,
              "06": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Tidal Rush 006.ogg`,
            },
          },
          underwater: {
            "01": {
              "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Rise Whoosh.ogg`,
            },
          },
        },
        dash: {
          "01": {
            "01": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh E.ogg`,
            "05": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh F.ogg`,
            "06": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Water/Water Whoosh G.ogg`,
          },
        },
      },
      heal: {
        "01": {
          "01": `${p}/ovani-sounds/Magic/Water/Aqua Heal.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Magic/Water/Purify.ogg`,
        },
      },
      imprison: {
        bubble: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Water/Bubble Prison.ogg`,
          },
        },
        geyser: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Geyser Shackle 005.ogg`,
          },
        },
      },
      buff: {
        wave: {
          "01": {
            "01": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 001.ogg`,
            "02": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 002.ogg`,
            "03": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 003.ogg`,
            "04": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 004.ogg`,
            "05": `${p}/ovani-sounds/Modern Magic Sound FX Pack Vol. 1/Water Magic/Wavecrash Echo 005.ogg`,
          },
        },
        bubble: {
          "01": {
            "01": `${p}/Soniss/GDC2026/Cinematic Sound Design/Cartoon Bubbles Short.ogg`,
          },
        },
      },
    },
    metal: {
      impact: {
        anvil: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Anvil 004.ogg`,
          },
        },
        lock: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Magic Lock 005.ogg`,
          },
        },
        spring: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Metal Spring 005.ogg`,
          },
        },
      },
      whoosh: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 004.ogg`,
            "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Glass 005.ogg`,
          },
        },
      },
    },
    time: {
      reverse: {
        "01": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Tenet 004.ogg`,
        },
      },

      slow: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Slow 004.ogg`,
        },
      },
    },
    counter: {
      counterspell: {
        "01": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-spellbreaking.ogg`,
        },
      },
      dispel: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Fantasy/Fantasy Dispel 004.ogg`,
        },
      },
    },
    healing: {
      regen: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 002.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 003.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Regen 004.ogg`,
        },
      },
    },
    misc: {
      debuffs: {
        hunger: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailment Hunger 004.ogg`,
          },
        },
        bleed: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Bleed 004.ogg`,
          },
        },
        grease: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 004.ogg`,
            "05": `${p}/ovani-sounds/Player Status SFX/Ailments/Ailments Grease 005.ogg`,
          },
        },
      },
      fairy: {
        twinkle: {
          "01": {
            "01": `${p}/Soniss/GDC2026/Cinematic Sound Design/Button Arp Twinkle.ogg`,
          },
        },
      },
    },
  },
  equipment: {
    weapons: {
      axe: {
        equip: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Axe.ogg`,
          },
        },
      },
      blade: {
        sheathe: {
          general: {
            "01": {
              "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Sheath 1.ogg`,
              "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Sheath 2.ogg`,
            },
          },
          greatsword: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Large 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Large 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Large 003.ogg`,
            },
          },
          shortsword: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Medium 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Medium 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Medium 003.ogg`,
            },
            "02": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Sheathe A.ogg`,
              "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Sheathe B.ogg`,
              "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Sheathe C.ogg`,
            },
          },
          dagger: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Small 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Small 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Small 003.ogg`,
            },
            "02": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Knife Sheathe A.ogg`,
              "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Knife Sheathe B.ogg`,
            },
          },
          rapier: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Thin 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Thin 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Sheathe Blade Thin 003.ogg`,
            },
          },
        },
        unsheathe: {
          general: {
            "01": {
              "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Unsheath 1.ogg`,
              "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Unsheath 2.ogg`,
            },
          },
          greatsword: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Large 005.ogg`,
            },
          },
          shortsword: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Medium 005.ogg`,
            },

            "02": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw A.ogg`,
              "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw B.ogg`,
              "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw C.ogg`,
              "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Sword Draw D.ogg`,
            },
          },
          dagger: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Small 005.ogg`,
            },

            "02": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Knife Draw.ogg`,
            },
          },
          rapier: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blade/Unsheathe Blade Thin 004.ogg`,
            },
          },
        },
        equip: {
          general: {
            "01": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip General Weapon C.ogg`,
            },
          },
          dagger: {
            "01": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Dagger.ogg`,
            },
          },
          sword: {
            "01": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Sword.ogg`,
            },
          },
        },
      },
      bludgeoning: {
        sheathe: {
          "one-hand": {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Small 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Small 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Small 003.ogg`,
            },
          },
          "two-hand": {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Large 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Large 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Sheathe Blunt Large 003.ogg`,
            },
          },
        },
        unsheathe: {
          "one-hand": {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Medium 005.ogg`,
            },
          },
          "two-hand": {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Blunt/Unsheathe Blunt Large 005.ogg`,
            },
          },
        },
        equip: {
          general: {
            "01": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip General Weapon A.ogg`,
            },
          },
          flail: {
            "01": {
              "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Flail.ogg`,
            },
          },
        },
      },
      bow: {
        draw: {
          long_bow: {
            fast: {
              "01": {
                "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 001.ogg`,
                "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 002.ogg`,
                "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 003.ogg`,
                "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 004.ogg`,
                "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Fast 005.ogg`,
              },
            },
            long: {
              "01": {
                "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 001.ogg`,
                "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 002.ogg`,
                "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 003.ogg`,
                "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 004.ogg`,
                "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Long Bow/Long Bow Draw Long 005.ogg`,
              },
            },
          },
          short_bow: {
            fast: {
              "01": {
                "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 001.ogg`,
                "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 002.ogg`,
                "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 003.ogg`,
                "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 004.ogg`,
                "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Fast 005.ogg`,
              },
            },
            long: {
              "01": {
                "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 001.ogg`,
                "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 002.ogg`,
                "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 003.ogg`,
                "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 004.ogg`,
                "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Small Bow/Small Bow Draw Long 005.ogg`,
              },
            },
          },
        },
        sheathe: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Put Away 1.ogg`,
          },
        },
        unsheathe: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Take Out 1.ogg`,
          },
        },
        equip: {
          "01": {
            wood: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip General Weapon B.ogg`,
          },
        },
      },
      crossbow: {
        load: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Load A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Crossbow Load B.ogg`,
          },
          "02": {
            fast: {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Fast 005.ogg`,
            },
          },
          "03": {
            long: {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Long 005.ogg`,
            },
          },
          "04": {
            super_fast: {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Super Fast 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Crossbow/Crossbow Reload Super Fast 002.ogg`,
            },
          },
        },
        equip: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Equip Crossbow.ogg`,
          },
        },
      },
      polearm: {
        sheathe: {
          "01": {
            blunt: {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Sheathe Wooden Blunt 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Sheathe Wooden Blunt 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Sheathe Wooden Blunt 003.ogg`,
            },
          },
        },
        unsheathe: {
          "01": {
            blade: {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blade 005.ogg`,
            },
            blunt: {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Blunt 005.ogg`,
            },
            pierce: {
              "01": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Melee Sound FX Pack Vol. 1/Polearm/Unsheathe Wooden Pierce 005.ogg`,
            },
          },
        },
      },
      firearm: {
        arquebus: {
          reload: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Arquebus/Arquebus Reload 005.ogg`,
            },
          },
        },
        flintlock_pistol: {
          reload: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Flintlock Pistol/Flintlock Pistol Reload 005.ogg`,
            },
          },
        },
        musket: {
          reload: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Musket/Musket Reload 005.ogg`,
            },
          },
        },
        pistol: {
          draw: {
            "01": {
              "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw A.ogg`,
              "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw B.ogg`,
              "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw C.ogg`,
              "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw D.ogg`,
              "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin Draw E.ogg`,
            },
          },
          spin: {
            spin: {
              "01": {
                "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin A.ogg`,
                "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin B.ogg`,
                "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin C.ogg`,
                "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin D.ogg`,
                "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Pistol Spin E.ogg`,
              },
            },
          },
        },
        revolver: {
          load: {
            "01": {
              "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load F.ogg`,
              "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load E.ogg`,
              "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load D.ogg`,
              "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load C.ogg`,
              "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load B.ogg`,
              "06": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Load A.ogg`,
            },
          },
          close: {
            "01": {
              "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close A.ogg`,
              "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close B.ogg`,
              "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close C.ogg`,
              "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close D.ogg`,
              "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Revolver Cylinder Close E.ogg`,
            },
          },
        },
        rifle: {
          reload: {
            "02": {
              "01": `${p}/Soniss/GDC2024/BluezoneCorp/Steampunk Gun Reload.ogg`,
            },
          },
        },
      },
      siege_weapons: {
        cannon: {
          reload: {
            normal: {
              "01": {
                "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 001.ogg`,
                "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 002.ogg`,
                "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 003.ogg`,
                "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 004.ogg`,
                "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload 005.ogg`,
              },
            },
            fast: {
              "01": {
                "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload Fast 001.ogg`,
                "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Firearms/Cannon/Cannon Reload Fast 002.ogg`,
              },
            },
          },
        },
        ballista: {
          reload: {
            "01": {
              "01": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 001.ogg`,
              "02": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 002.ogg`,
              "03": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 003.ogg`,
              "04": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 004.ogg`,
              "05": `${p}/ovani-sounds/Weaponry Ranged Sound FX Pack Vol. 1/Projectile Weapons/Ballista/Ballista Reload 005.ogg`,
            },
          },
        },
      },
      scifi: {
        general: {
          reload: {
            general: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Reloading A.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Reloading B.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Reloading C.ogg`,
              },
              "02": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 002.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 003.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Gun Foley Light 004.ogg`,
              },
            },
            charge: {
              charge: {
                "01": {
                  "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging 001.ogg`,
                },
              },
              discharge: {
                "01": {
                  "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging 002.ogg`,
                },
              },
              fast_charge: {
                "01": {
                  "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging Fast 001.ogg`,
                  "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Charging Fast 002.ogg`,
                },
              },
            },
            light: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 002.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 003.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Light 004.ogg`,
              },
            },
            medium: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 002.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 003.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Medium 004.ogg`,
              },
            },
            heavy: {
              "01": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 001.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 002.ogg`,
              },
              "02": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 003.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 004.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 005.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 006.ogg`,
              },
              "03": {
                "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 007.ogg`,
                "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 008.ogg`,
                "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 009.ogg`,
                "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Weapon/Reload/Reload Heavy 010.ogg`,
              },
            },
          },
          disable: {
            "02": {
              "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Weapon Disabled A.ogg`,
              "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Weapon Disabled B.ogg`,
              "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Weapon Disabled C.ogg`,
            },
          },
        },
        blaster: {
          reload: {
            "02": {
              "01": `${p}/Soniss/GDC2024/BluezoneCorp/Sci-Fi Gun Reload.ogg`,
            },
          },
        },
      },
    },
    armor: {
      armor: {
        equip: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Armor.ogg`,
          },
        },
      },
      helmet: {
        equip: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Helmet A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Helmet B.ogg`,
          },
        },
      },
      shield: {
        equip: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Shield A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Equip Shield B.ogg`,
          },
        },
        impact: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Armor/Shield Impact D.ogg`,
          },
          "02": {
            metal: {
              "01": `${p}/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 1.ogg`,
              "02": `${p}/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 2.ogg`,
              "03": `${p}/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 3.ogg`,
              "04": `${p}/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 4.ogg`,
              "05": `${p}/Soniss/GDC2024/Justsoundeffects/Metal Shield Block 5.ogg`,
            },
          },
        },
      },
    },
    consumables: {
      bombs: {
        dynamite: {
          fuse: {
            "01": {
              "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Dynamite Fuse A.ogg`,
              "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Dynamite Fuse B.ogg`,
            },
          },
        },
      },
      potions: {
        open: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Open A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Open B.ogg`,
          },
          "02": {
            "01": `${p}/Soniss/GDC2024/Eiravaein Works/flask_bottle.ogg`,
          },
        },
        drink: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Drink A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Drink B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Drink C.ogg`,
          },
        },
        equip: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Equip A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Equip B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Equip C.ogg`,
          },
        },
        handle: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Handle A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Handle B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Potion Handle C.ogg`,
          },
        },
        effects: {
          light: {
            "01": {
              "01": `${p}/Soniss/GDC2026/Epic Stock Media/Light Potion.ogg`,
            },
          },
        },
      },
    },
    misc: {
      misc: {
        unequip: {
          "01": {
            narrow: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item A.ogg`,
            item: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item B.ogg`,
            arrow: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item C.ogg`,
            jewelry: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Unequip Item D.ogg`,
          },
        },
      },
      bag: {
        open: {
          "01": {
            "01": `${p}/Soniss/GDC2026/Epic Stock Media/Bag Open.ogg`,
          },
        },
      },
      canteen: {
        drink: {
          "01": {
            "01": `${p}/Soniss/GDC2024/Eiravaein Works/flask_canteen.ogg`,
          },
        },
      },
      chest: {
        open: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Open 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Open 2.ogg`,
          },
        },
        close: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Close 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Doors Gates and Chests/Chest Close 2.ogg`,
          },
        },
      },
      clock: {
        ring: {
          "01": {
            "01": `${p}/ovani-sounds/_Free Weekly WAVs/Steampunk Grandfather Clock Melody.ogg`,
          },
        },
      },
      flint_and_steel: {
        "01": {
          "01": `${p}/ovani-sounds/Fire SFX/Flint/Sharp Flint Spark A.ogg`,
          "02": `${p}/ovani-sounds/Fire SFX/Flint/Sharp Flint Spark B.ogg`,
          "03": `${p}/ovani-sounds/Fire SFX/Flint/Sharp Flint Spark C.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Fire SFX/Flint/Sharp Success Flint A.ogg`,
          "02": `${p}/ovani-sounds/Fire SFX/Flint/Sharp Success Flint B.ogg`,
        },
      },
      lasso: {
        swinging: {
          "01": {
            "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging A.ogg`,
            "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging B.ogg`,
            "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging C.ogg`,
            "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging D.ogg`,
            "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Swinging E.ogg`,
          },
        },
        throw: {
          "01": {
            "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw A.ogg`,
            "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw B.ogg`,
            "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw C.ogg`,
            "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw D.ogg`,
            "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Lasso Throw E.ogg`,
          },
        },
      },
      lock: {
        unlock: {
          "02": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Lockbox Unlock A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Lockbox Unlock B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Lockbox Unlock C.ogg`,
          },
          "03": {
            "01": `${p}/TomMusic/FreeFantasySFX/Doors Gates and Chests/Lock Unlock.ogg`,
          },
        },
      },
      paper: {
        throw: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Paper 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Paper 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Paper 003.ogg`,
          },
        },
      },
      torch: {
        light: {
          "01": {
            "01": `${p}/ovani-sounds/Fire SFX/Torch/Torch Light B.ogg`,
            "02": `${p}/ovani-sounds/Fire SFX/Torch/Torch Light C.ogg`,
          },
          "02": {
            "01": `${p}/TomMusic/FreeFantasySFX/Torch/Light Torch 1.ogg`,
            "02": `${p}/TomMusic/FreeFantasySFX/Torch/Light Torch 2.ogg`,
          },
        },
        loop: {
          "01": {
            "01": `${p}/TomMusic/FreeFantasySFX/Torch/Torch Loop.ogg`,
          },
        },
      },
    },
  },
  tasks: {
    crafting: {
      acquiring_materials: {
        leather: {
          "01": {
            "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Skinning Animal A.ogg`,
          },
        },
      },
      blacksmithing: {
        hammer: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Hammer E.ogg`,
          },
        },
        tool: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Black Smith Tool E.ogg`,
          },
        },
      },
      carpentry: {
        hammer: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Carpenter Hammer D.ogg`,
          },
        },
      },
      whetstone: {
        sharpen: {
          "01": {
            "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone A.ogg`,
            "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone B.ogg`,
            "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone C.ogg`,
            "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone D.ogg`,
            "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone E.ogg`,
          },
          "02": {
            "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast A.ogg`,
            "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast B.ogg`,
            "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast C.ogg`,
            "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast D.ogg`,
            "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Weapons/Blade Sharpen Whetstone Fast E.ogg`,
          },
        },
      },
      scifi: {
        craft: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Craft A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Craft B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Craft C.ogg`,
          },
        },
        transform: {
          "02": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Transform A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Transform B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Transform C.ogg`,
          },
        },
        upgrade: {
          "02": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade C.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade D.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Upgrade E.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Upgrade 005.ogg`,
          },
        },
        servo_motor: {
          "02": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Servo Motor A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Servo Motor B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Servo Motor C.ogg`,
          },
        },
      },
    },
    cooking: {},
    medicine: {
      heartbeat: {
        "01": {
          slow: `${p}/ovani-sounds/Player Status SFX/General/Low HP Heartbeat Slow Loop.ogg`,
          fast: `${p}/ovani-sounds/Player Status SFX/General/Low HP Heartbeat Fast Loop.ogg`,
          middle: `${p}/ovani-sounds/Player Status SFX/General/Low HP Heartbeat Mid Loop.ogg`,
        },
      },
    },
    stealth: {
      spotted: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Detected 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Detected 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Detected 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Musical/Musical Detected 004.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 001.ogg`,
          "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 002.ogg`,
          "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 003.ogg`,
          "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Heavy Tom 004.ogg`,
        },
      },
      sneak: {
        bush: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Bush Rustle Short A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Bush Rustle Short B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Bush Rustle Short C.ogg`,
          },
        },
      },
    },
  },
  abilities: {
    commander: {
      war_horn: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn B.ogg`,
          "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn C.ogg`,
          "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn D.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn A.ogg`,
          "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn A Delay.ogg`,
          "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Items & Misc/Warhorn E.ogg`,
        },
        "03": {
          "01": `${p}/Soniss/GDC2024/Jake Fielding/Bram - Cinematic Horn.ogg`,
        },
      },
    },
    fighter: {
      flurry: {
        "01": {
          "01": `${p}/ovani-sounds/_Free Weekly WAVs/1000 Sword Jutsu.ogg`,
        },
      },
    },
    gunslinger: {
      guitar: {
        "01": {
          "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger A.ogg`,
          "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger B.ogg`,
          "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger C.ogg`,
          "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger D.ogg`,
          "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Instrumentation/Stinger Guitar Danger E.ogg`,
        },
      },
      whistle: {
        "01": {
          "01": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle A.ogg`,
          "02": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle B.ogg`,
          "03": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle C.ogg`,
          "04": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle D.ogg`,
          "05": `${p}/ovani-sounds/Wild West Sound FX Pack Vol. 1/Outlaws/Duel Start Whistle E.ogg`,
        },
      },
    },
    monk: {
      qi_blast: {
        "01": {
          "01": `${p}/Soniss/GDC2026/Epic Stock Media/Blast.ogg`,
        },
      },
      touch_of_death: {
        "01": {
          "01": `${p}/Soniss/GDC2026/Epic Stock Media/Light Punch.ogg`,
        },
      },
    },
    rogue: {
      sneak_attack: {
        "01": {
          "01": `${p}/Soniss/GDC2026/Epic Stock Media/Sneak Attack.ogg`,
        },
      },
    },
    swashbuckler: {
      finisher: {
        general: {
          "01": {
            "01": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-last-hit.ogg`,
          },
        },
        bleeding: {
          "01": {
            "01": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-impale-flesh-05.ogg`,
            "02": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-out-of-flesh-06.ogg`,
            "03": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-slice-flesh-02.ogg`,
          },
        },
      },
    },
    misc: {
      whip: {
        "01": {
          "01": `${p}/ovani-sounds/_Free Weekly WAVs/Ability Shield.ogg`,
        },
      },
    },
    buff: {
      "01": {
        fire: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Fire.ogg`,
        ice: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Ice.ogg`,
        electricity: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Lightning.ogg`,
        poison: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up Poison.ogg`,
        misc: `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Weapon Power Up.ogg`,
      },
    },
  },
  impact: {
    arrow: {
      blocked: {
        "01": {
          "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Blocked 1.ogg`,
          "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Blocked 2.ogg`,
          "03": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Blocked 3.ogg`,
        },
      },
      hit: {
        "01": {
          "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Impact Hit 1.ogg`,
          "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Impact Hit 2.ogg`,
          "03": `${p}/TomMusic/FreeFantasySFX/Attacks/Bow Attacks Hits and Blocks/Bow Impact Hit 3.ogg`,
        },
        "02": {
          "01": `${p}/Soniss/GDC2026/Cinematic Sound Design/Arrow Hit Rattle.ogg`,
        },
      },
    },
    blade: {
      blocked: {
        "03": {
          "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Blocked 1.ogg`,
          "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Blocked 2.ogg`,
          "03": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Blocked 3.ogg`,
        },
      },
    },
    debris: {
      "01": {
        "01": `${p}/Soniss/GDC2026/Cinematic Sound Design/Woosh Debris.ogg`,
      },
    },
    fall: {
      general: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall C.ogg`,
        },
      },
      boxes: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Plastic and Boxes A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Plastic and Boxes B.ogg`,
        },
      },
      carpet: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet C.ogg`,
          "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet D.ogg`,
          "05": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet E.ogg`,
          "06": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Carpet F.ogg`,
        },
      },
      chair: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Chair A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Chair B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Chair C.ogg`,
        },
      },
      concrete: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Concrete A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Concrete B.ogg`,
        },
      },
      grass: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Grass A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Grass B.ogg`,
        },
      },
      metal: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Metal A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Metal B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Metal C.ogg`,
        },
        "02": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/axe-hitting-metal.ogg`,
        },
      },
      sand: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Sand A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Sand B.ogg`,
        },
      },
      wood: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Wood A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Wood B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Fall Wood C.ogg`,
        },
      },
      slip: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Slip Fall A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Falls/Slip Fall B.ogg`,
        },
      },
    },
    flesh: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Flesh Hits/Flesh Hit A.ogg`,
        "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Flesh Hits/Flesh Hit B.ogg`,
        "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Flesh Hits/Flesh Hit C.ogg`,
      },
      "02": {
        "01": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-hit-flesh-01.ogg`,
        "02": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-hit-flesh-02.ogg`,
        "03": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-hit-flesh-03.ogg`,
      },

      "03": {
        "01": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Impact Hit 1.ogg`,
        "02": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Impact Hit 2.ogg`,
        "03": `${p}/TomMusic/FreeFantasySFX/Attacks/Sword Attacks Hits and Blocks/Sword Impact Hit 3.ogg`,
      },
    },
    explosion: {
      general: {
        "01": {
          "01": `${p}/Soniss/GDC2024/David Dumais/Realistic_Explosion.ogg`,
        },
      },
    },
    general: {
      "01": {
        "01": `${p}/TomMusic/FreeFantasySFX/Spells/Spell Impact 1.ogg`,
        "02": `${p}/TomMusic/FreeFantasySFX/Spells/Spell Impact 2.ogg`,
        "03": `${p}/TomMusic/FreeFantasySFX/Spells/Spell Impact 3.ogg`,
      },
    },
    spell: {
      "01": {
        "01": `${p}/Soniss/GDC2026/Cinematic Sound Design/Transition Frantic Shaker Snap.ogg`,
      },
      "02": {
        "01": `${p}/Soniss/GDC2026/Cinematic Sound Design/Impact Cut Sweep.ogg`,
      },
    },
    wood: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Wood.ogg`,
      },
    },
    scifi: {
      digital: {
        "01": {
          "01": `${p}/ovani-sounds/_Free Weekly WAVs/Cool Digital Impact.ogg`,
        },
      },
      shield: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Shield Impact A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Shield Impact B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Shield Impact C.ogg`,
          },
        },
        deflector: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact C.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact D.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Deflector Impact E.ogg`,
          },
        },
        hull: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact C.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact D.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Shields and Impacts/Hull Impact E.ogg`,
          },
        },
      },
    },
  },
  actions: {
    movement: {
      dash: {
        "02": {
          "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Dash 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Dash 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Dash 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Dash 004.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Move 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Move 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Move 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Move 004.ogg`,
        },
        "04": {
          "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Simple.ogg`,
        },
      },
      slide: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Fall Slide.ogg`,
        },
      },
    },
    cheer: {
      "01": {
        "01": `${p}/ovani-sounds/Crowd Sound FX Pack/Non-Verbal/Inspired Cheering.ogg`,
      },
    },
    laugh: {
      "01": {
        "01": `${p}/ovani-sounds/Crowd Sound FX Pack/Non-Verbal/Laugh B.ogg`,
      },
    },
    drop_object: {
      heavy: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Object Drop.ogg`,
        },
      },
    },
    grab: {
      clothes: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low C.ogg`,
          "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth Low D.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High C.ogg`,
          "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Cloth High D.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon C.ogg`,
          "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Nylon D.ogg`,
        },
      },
      flesh: {
        "01": {
          "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Skin A.ogg`,
          "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Skin B.ogg`,
          "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Grab/Grab Skin C.ogg`,
        },
      },
    },
    handshake: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake A.ogg`,
        "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake B.ogg`,
        "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake C.ogg`,
        "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Handshake D.ogg`,
      },
    },
    high_five: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five A.ogg`,
        "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five B.ogg`,
        "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five C.ogg`,
        "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/High Five D.ogg`,
      },
    },
    slam: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Slam A.ogg`,
        "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Slam B.ogg`,
      },
    },
    snap: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap A.ogg`,
        "02": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap B.ogg`,
        "03": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap C.ogg`,
        "04": `${p}/ovani-sounds/Foley Impacts Vol. 1/Misc/Finger Snap D.ogg`,
      },
    },
  },
  scifi: {
    throw: {
      energy: {
        "03": {
          "01": `${p}/ovani-sounds/_Free Weekly WAVs/Guitar Hit.ogg`,
        },
      },
    },
    surge: {
      general: {
        "01": {
          "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Vehicles/Reactive A.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Vehicles/Reactive B.ogg`,
          "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Vehicles/Reactive C.ogg`,
        },
      },
    },
    teleportation: {
      "01": {
        "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 001.ogg`,
        "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 002.ogg`,
        "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 003.ogg`,
        "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 004.ogg`,
      },
      "02": {
        "01": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Teleport A.ogg`,
        "02": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Teleport B.ogg`,
        "03": `${p}/ovani-sounds/Science Fiction SFX 2/Misc/Mechanisms/Teleport C.ogg`,
      },
    },
    power_up: {
      general: {
        "01": {
          "01": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short A.ogg`,
          "02": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short B.ogg`,
          "03": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short C.ogg`,
          "04": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Artifact Short D.ogg`,
        },
        "02": {
          short: {
            "01": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Short A.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Short B.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Short C.ogg`,
          },
          long: {
            "01": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Metalic Long.ogg`,
          },
        },
        "03": {
          short: {
            "01": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Short A.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Short B.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Short C.ogg`,
          },
          long: {
            "01": `${p}/ovani-sounds/Sci-Fi/Environment/Power-Ups/Power-Up Weapon Long.ogg`,
          },
        },
      },
      buff: {
        "01": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Success.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Success 001.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Success 002.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI New Task 001.ogg`,
        },
        "04": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 001.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 004.ogg`,
        },
      },
      debuff: {
        "01": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Failed.ogg`,
        },
        "02": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Warning.ogg`,
        },
        "03": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Fail 001.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI Task Fail 002.ogg`,
        },
        "04": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/UI New Task 002.ogg`,
        },
        "05": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 001.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 002.ogg`,
          "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 003.ogg`,
          "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Critical 004.ogg`,
        },
        "06": {
          "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 002.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Inventory/Inventory Management 003.ogg`,
        },
      },
    },
    equipment: {
      device: {
        use: {
          "01": {
            "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 004.ogg`,
          },
          "02": {
            "01": `${p}/Soniss/GDC2024/BluezoneCorp/Alien Interface 2.ogg`,
            "02": `${p}/Soniss/GDC2024/BluezoneCorp/Alien Interface 3.ogg`,
            "03": `${p}/Soniss/GDC2024/BluezoneCorp/Alien Interface 4.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Unknown.ogg`,
          },
          "04": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Ship/Ship Interactions 004.ogg`,
          },
        },
        startup: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Startup.ogg`,
          },
        },
        shutdown: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/UI/Navigation Shutdown.ogg`,
          },
        },
      },
      medical: {
        analysis: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Analysis.ogg`,
          },
        },
        healing: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Healing.ogg`,
          },
        },
        medicine: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Medicine.ogg`,
          },
        },
      },
      weapon: {
        charge: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 001.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 002.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 003.ogg`,
            "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 004.ogg`,
            "05": `${p}/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 005.ogg`,
            "06": `${p}/ovani-sounds/Sci-Fi/Weapon/Charge-Up/Weapon Charge-Up 006.ogg`,
          },
        },
        reload: {
          general: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 1 A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 1 B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 1 C.ogg`,
            },
            "02": {
              "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 2 A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 2 B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics 2 C.ogg`,
            },
          },
        },
        interact: {
          screen: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen C.ogg`,
              "04": `${p}/ovani-sounds/Sci-Fi/Weapon/Mechanics/Gun Mechanics Bassy Screen D.ogg`,
            },
          },
        },
      },
      scanner: {
        general: {
          "01": {
            "01": `${p}/Soniss/GDC2024/David Dumais/Scanner.ogg`,
          },
        },
      },
      meter_refill: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Meters Refill 004.ogg`,
        },
      },
      power_up: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-004.ogg`,
        },
        "02": {
          "01": `${p}/Soniss/GDC2024/BluezoneCorp/Alien Interface 1.ogg`,
        },
        "03": {
          "01": `${p}/Soniss/GDC2024/DoexStudio/Power Up 1.ogg`,
          "02": `${p}/Soniss/GDC2024/DoexStudio/Power Up 2.ogg`,
          "03": `${p}/Soniss/GDC2024/DoexStudio/Power Up 3.ogg`,
          "04": `${p}/Soniss/GDC2024/DoexStudio/Power Up 4.ogg`,
        },
      },
      ready: {
        "02": {
          "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Ready To Fly 004.ogg`,
        },
      },
    },
    armor: {
      shield: {
        overshield: {
          "03": {
            "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Overshield 004.ogg`,
          },
        },
      },
      forcefield: {
        loop: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Environment/Force Fields/Force Field Portal.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Environment/Force Fields/Force Field Secret Experiment.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Environment/Force Fields/Force Field Waves.ogg`,
          },
        },
      },
      consumables: {
        healing: {
          stimpack: {
            "01": {
              "01": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 001.ogg`,
              "02": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 002.ogg`,
              "03": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 003.ogg`,
              "04": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 004.ogg`,
            },
            "02": {
              "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Interactive/Medical/Medical Stimpack.ogg`,
            },
          },
        },
      },
    },
    robot: {
      guns: {
        deploy: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Gun Mech A.ogg`,
          },
        },
        widthdraw: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Weapons/Misc/Gun Mech B.ogg`,
          },
        },
      },
      deploy: {
        "01": {
          "01": `${p}/Soniss/GDC2026/Epic Stock Media/Robot Deploy.ogg`,
        },
      },
      transformation: {
        "01": {
          "01": `${p}/Soniss/GDC2024/Unreal SFX/Droid Transformation.ogg`,
        },
      },
      mechanical: {
        calibration: {
          general: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration C.ogg`,
            },
          },
          heavy: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy C.ogg`,
              "04": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Heavy D.ogg`,
            },
          },
        },
        servo: {
          general: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo B.ogg`,
            },
          },
          heavy: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo Heavy A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo Heavy B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Servo Heavy C.ogg`,
            },
          },
          tank: {
            calibration: {
              general: {
                "01": {
                  "01": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration A.ogg`,
                  "02": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration B.ogg`,
                  "03": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Calibration C.ogg`,
                },
              },
              heavy: {
                "01": {
                  "01": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank A.ogg`,
                  "02": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank B.ogg`,
                  "03": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank C.ogg`,
                  "04": `${p}/ovani-sounds/Sci-Fi/Environment/Robot Mechanics/Robomech Tank D.ogg`,
                },
              },
            },
          },
        },
      },
      move: {
        combat: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move C.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move D.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move E.ogg`,
            "06": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Combat Move F.ogg`,
          },
        },
        power: {
          "01": {
            "01": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Power Move A.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Power Move B.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Movement/Robot Power Move C.ogg`,
          },
        },
      },
      update: {
        "01": {
          "01": `${p}/Soniss/GDC2024/Unreal SFX/Droid UI.ogg`,
        },
      },
      voice: {
        "01": {
          "01": `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Droidvoice 1.ogg`,
          "02": `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Droidvoice 2.ogg`,
          "03": `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Droidvoice 3.ogg`,
        },
        "02": {
          funny: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Funny.ogg`,
          question: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Question.ogg`,
          sad: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Sad.ogg`,
          statement: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Automaton Statement.ogg`,
        },
        "03": {
          funny: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Funny.ogg`,
          question: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Question.ogg`,
          sad: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Sad.ogg`,
          statement: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Metallic Voice Statement.ogg`,
        },
        "04": {
          happy: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Happy.ogg`,
          question: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Question.ogg`,
          sad: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Sad.ogg`,
          statement: `${p}/ovani-sounds/Sci-Fi/Environment/Droid Voices/Radio Droid Statement.ogg`,
        },
        "05": {
          "01": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid I Voice A.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid I Voice B.ogg`,
          "03": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid I Voice C.ogg`,
        },
        "06": {
          "01": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice A.ogg`,
          "02": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice B.ogg`,
          "03": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice C.ogg`,
          "04": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice D.ogg`,
          "05": `${p}/ovani-sounds/Science Fiction SFX 2/Robots/Voice/Droid III Voice E.ogg`,
        },
        "07": {
          archivist: {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Archivist/Robots Voice Archivist 005.ogg`,
          },
          emperor: {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 005.ogg`,
            "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Emperor/Robots Voice Emperor 006.ogg`,
          },
          soldier: {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 005.ogg`,
            "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 006.ogg`,
            "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Soldier/Robots Voice Soldier 007.ogg`,
          },
          trader: {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 005.ogg`,
            "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 006.ogg`,
            "07": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Trader/Robots Voice Trader 007.ogg`,
          },
          worker: {
            "01": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 001.ogg`,
            "02": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 002.ogg`,
            "03": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 003.ogg`,
            "04": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 004.ogg`,
            "05": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 005.ogg`,
            "06": `${p}/ovani-sounds/Science Fiction Sound FX Pack Vol. 4/Robots/Worker/Robots Voice Worker 006.ogg`,
          },
        },
      },
    },
    vehicles: {
      copter: {},
      spaceship: {
        engine: {
          general: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Engine.ogg`,
            },
            "02": {
              "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Grinding Engines.ogg`,
            },
            "03": {
              "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Jet-Like.ogg`,
            },
          },
          fighter: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Fighter A.ogg`,
              "02": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Fighter B.ogg`,
              "03": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Fighter C.ogg`,
            },
          },
          old: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Old Engine Center.ogg`,
            },
          },
          stealth: {
            "01": {
              "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Stealth Bassy.ogg`,
            },
          },
        },
        ftl: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Ftl Center.ogg`,
          },
        },
        shield: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Transport/Spaceships/Spaceship Phase Field.ogg`,
          },
        },
      },
      speeder: {
        swoop: {
          "01": {
            "01": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop A.ogg`,
            "02": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop B.ogg`,
            "03": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop C.ogg`,
            "04": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop D.ogg`,
            "05": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop E.ogg`,
            "06": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop F.ogg`,
            "07": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop G.ogg`,
            "08": `${p}/ovani-sounds/Sci-Fi/Transport/Gliders and Speeders/Single Swoop H.ogg`,
          },
        },
      },
    },
    misc: {
      wispy: {
        "01": {
          "01": `${p}/Soniss/GDC2024/DoexStudio/Comedic_006.ogg`,
        },
      },
    },
  },
  misc: {
    critical: {
      melee: {
        "01": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/etherael-attack-01.ogg`,
          "02": `${p}/SoundFlakes/diablo-wrath/weapon/etherael-attack-02.ogg`,
          "03": `${p}/SoundFlakes/diablo-wrath/weapon/etherael-attack-03.ogg`,
          "04": `${p}/SoundFlakes/diablo-wrath/weapon/etherael-attack-04.ogg`,
        },
      },
    },
    critical_miss: {
      melee: {
        "01": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-01.ogg`,
          "02": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-03.ogg`,
          "03": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-04.ogg`,
          "04": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-05.ogg`,
        },
        "02": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/giant-demon-sword-swoosh.ogg`,
        },
      },
      thrown: {
        "01": {
          "01": `${p}/SoundFlakes/diablo-wrath/weapon/imperius-spear-whoosh.ogg`,
        },
      },
    },
  },
};
