export const DB_PREFIX = "ggg";

// Start from 01
const p = "modules/ggg/assets/sounds";
export const database = {
  strikes: {
    generic: {},
    weapons: { melee: {}, ranged: {} },
    natural: {},
  },
  magic: {
    arcane: {},
    primal: {},
    acid: {},
    air: {},
    cold: {},
    earth: {
      ranged: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot E.ogg`,
        },
        "02": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot No Ring A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot No Ring B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Rock Shoot No Ring C.ogg`,
        },
      },
      impact: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Impact A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Impact B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Impact C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Impact D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Impact E.ogg`,
        },
        "02": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Impact A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Impact B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Impact C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Impact D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Impact E.ogg`,
          "06": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Impact F.ogg`,
        },
        "02": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Impact A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Impact B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Impact C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Impact D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Impact E.ogg`,
        },
      },
      crumble: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Crumbling Rock A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Crumbling Rock B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Crumbling Rock C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Crumbling Rock D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Crumbling Rock E.ogg`,
        },
      },
      drag: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Drag A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Drag B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Drag C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Drag D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Large Stones Drag E.ogg`,
        },
        "02": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Drag A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Drag B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Drag C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Drag D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Stones/Medium Stones Drag E.ogg`,
        },
      },
      earthquake: {
        distant: {
          loop: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Distant Loop A.ogg`,
            },
          },
          long: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Distant Long A.ogg`,
            },
          },
          short: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Distant Short A.ogg`,
            },
          },
        },
        close: {
          loop: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Loop A.ogg`,
            },
          },
          long: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Long A.ogg`,
            },
          },
          short: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Short A.ogg`,
            },
          },
        },
        impact: {
          "01": {
            "01": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Impacts A.ogg`,
            "02": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Impacts B.ogg`,
            "03": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Impacts C.ogg`,
            "04": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Impacts D.ogg`,
            "05": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Impacts E.ogg`,
            "06": `${p}/assets/sounds/ovani-sounds/Earth/Underground/Earthquake Impacts F.ogg`,
          },
        },
      },
      explosion: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Eruption A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Eruption B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Eruption C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Eruption D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Eruption E.ogg`,
        },
      },
      landslide: {
        loop: {
          small: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Small Landslide Loop.ogg`,
            },
          },
          large: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Loop A.ogg`,
            },
          },
        },
        long: {
          large: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/landslide Long A.ogg`,
              "02": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/landslide Long B.ogg`,
            },
          },
        },
        short: {
          small: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Small Landslide Short A.ogg`,
              "02": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Small Landslide Short B.ogg`,
              "03": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Small Landslide Short C.ogg`,
              "04": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Small Landslide Short D.ogg`,
            },
          },
          large: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Short A.ogg`,
              "02": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Short B.ogg`,
              "03": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Short C.ogg`,
              "04": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Short D.ogg`,
              "05": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Short E.ogg`,
              "06": `${p}/assets/sounds/ovani-sounds/Earth/Landslides/Landslide Short F.ogg`,
            },
          },
        },
        stomp: {
          "01": {
            "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Landslide Stomp A.ogg`,
            "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Landslide Stomp B.ogg`,
            "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Landslide Stomp C.ogg`,
            "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Landslide Stomp D.ogg`,
            "05": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Landslide Stomp E.ogg`,
          },
        },
      },
      lift: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Lift A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Lift B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Lift C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Lift D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Lift E.ogg`,
        },
        "02": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Whoosh A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Whoosh B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Whoosh C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Whoosh D.ogg`,
        },
      },
      spike: {
        "01": {
          "01": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Spike A.ogg`,
          "02": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Spike B.ogg`,
          "03": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Spike C.ogg`,
          "04": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Spike D.ogg`,
          "05": `${p}/assets/sounds/ovani-sounds/Earth/Magic/Earth Spike E.ogg`,
        },
      },
      sand: {
        impact: {
          "01": {
            "01": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Impact A.ogg`,
            "02": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Impact B.ogg`,
            "03": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Impact C.ogg`,
            "04": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Impact D.ogg`,
            "05": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Impact E.ogg`,
          },
        },
        movement: {
          short: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Movement Short A.ogg`,
              "02": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Movement Short B.ogg`,
              "03": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Movement Short C.ogg`,
              "04": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Movement Short D.ogg`,
            },
          },
          long: {
            "01": {
              "01": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Movement Long A.ogg`,
              "02": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Movement Long B.ogg`,
            },
          },
        },
        pour: {
          "01": {
            "01": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Pour A.ogg`,
            "02": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Pour B.ogg`,
            "03": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Pour C.ogg`,
            "04": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Pour D.ogg`,
            "05": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Pour E.ogg`,
          },
        },
        shake: {
          "01": {
            "01": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Shake A.ogg`,
            "02": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Shake B.ogg`,
            "03": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Shake C.ogg`,
            "04": `${p}/assets/sounds/ovani-sounds/Earth/Sand/Sand Shake D.ogg`,
          },
        },
      },
    },
    fire: {},
    mental: {},
    sonic: {},
    vitality: {},
    void: {},
    water: {},
  },
  equipment: {},
  tasks: {
    crafting: {},
    cooking: {},
  },
  misc: {
    critical: {},
    critical_miss: {},
  },
};
