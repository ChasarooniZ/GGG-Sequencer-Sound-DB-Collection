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
    },
    blade: {
      strike: {
        general: {
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
      },
    },
    balista: {
      strike: {
        "01": {
          "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot A.ogg`,
          "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot B.ogg`,
          "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot C.ogg`,
          "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Weapons/Ballista Shoot D.ogg`,
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
      spear: {
        whoosh: {
          "01": {
            "01": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh A.ogg`,
            "02": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh B.ogg`,
            "03": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh C.ogg`,
            "04": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh D.ogg`,
            "05": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh E.ogg`,
            "06": `${p}/ovani-sounds/Medieval Fantasy Sound FX Pack Vol. 2/Whooshes/Spear Whoosh F.ogg`,
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
          "04": {
            "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Change 004.ogg`,
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
        bolt: {
          "01": {
            "01": `${p}/ovani-sounds/Magic/Light/Light Bolt Cast A.ogg`,
            "02": `${p}/ovani-sounds/Magic/Light/Light Bolt Cast B.ogg`,
            "03": `${p}/ovani-sounds/Magic/Light/Light Bolt Cast C.ogg`,
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
          "02": {
            "01": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 001.ogg`,
            "02": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 002.ogg`,
            "03": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 003.ogg`,
            "04": `${p}/ovani-sounds/Player Status SFX/General/Abstract Decision 004.ogg`,
          },
          "03": {
            "01": `${p}/ovani-sounds/Magic/Dark/Necrotic Touch.ogg`,
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
      },
      impact: {
        general: {
          "01": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 003.ogg`,
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Impacts/Impact Moor 004.ogg`,
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
            "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Wind Drum 004.ogg`,
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
          "05": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Stone Plate 005.ogg`,
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
        general: {
          "03": {
            "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactor 001.ogg`,
            "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactor 002.ogg`,
            "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Whoosh/Whoosh Reactor 003.ogg`,
          },
        },
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
            "03": `${p}/ovani-sounds/Modular Magic Sound FX Pack Vol. 1/Fire/Fire Impact E.ogg`,
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
            "02": `${p}/ovani-sounds/Fire SFX/Fire Movement/Fire Quick Whoosh R to L.ogg`,
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
    },
    water: {
      cast: {
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
    general: {
      "01": {
        "01": `${p}/TomMusic/FreeFantasySFX/Spells/Spell Impact 1.ogg`,
        "02": `${p}/TomMusic/FreeFantasySFX/Spells/Spell Impact 2.ogg`,
        "03": `${p}/TomMusic/FreeFantasySFX/Spells/Spell Impact 3.ogg`,
      },
    },
    wood: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Wood.ogg`,
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
  movement: {
    slide: {
      "01": {
        "01": `${p}/ovani-sounds/Foley Impacts Vol. 1/Beefy Impacts/Beefy Fall Slide.ogg`,
      },
    },
  },
  scifi: {
    teleportation: {
      "01": {
        "01": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 001.ogg`,
        "02": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 002.ogg`,
        "03": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 003.ogg`,
        "04": `${p}/ovani-sounds/Motion and Impacts Sound FX Pack Vol. 2/Riser/Riser Jump Pad 004.ogg`,
      },
    },
    equipment: {
      general: {
        device: {
          use: {
            "01": {
              "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 001.ogg`,
              "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 002.ogg`,
              "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 003.ogg`,
              "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Device Use 004.ogg`,
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
      },
      power_up: {
        "01": {
          "01": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-001.ogg`,
          "02": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-002.ogg`,
          "03": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-003.ogg`,
          "04": `${p}/ovani-sounds/Player Status SFX/Sci-Fi/Sci-Fi Power Up-004.ogg`,
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
      consumables: {
        healing: {
          stimpack: {
            "01": {
              "01": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 001.ogg`,
              "02": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 002.ogg`,
              "03": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 003.ogg`,
              "04": `${p}/ovani-sounds/Player Status SFX/General/Stimpack 004.ogg`,
            },
          },
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
          "02": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-02.ogg`,
          "03": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-03.ogg`,
          "04": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-04.ogg`,
          "05": `${p}/SoundFlakes/diablo-wrath/weapon/tyrael-sword-swoosh-05.ogg`,
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
