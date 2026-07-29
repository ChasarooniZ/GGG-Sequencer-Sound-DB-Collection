export const DB_PREFIX = "ggg-vfx";

// Start from 01
const p = "modules/ggg/assets/vfx";
export const database = {
  actions: {
    reload: {
      still: {
        "01": {
          "01": `${p}/game-icons.net/still/reload.webp`,
        },
      },
    },
  },
  magic: {
    explosion: {
      bokeh: {
        "01": `${p}/effekseeker/Effekseeker01/bokeh_explosion.json`,
      },
      domain_expansion: {
        "01": `${p}/effekseeker/AndrewFM01/domain_expansion.json`,
      },
    },
    healing: {
      general: {
        "01": {
          "01": `${p}/Dream Circles/animationpack_support/healing_a.json`,
        },
      },
      regeneration: {
        "01": {
          "01": `${p}/Dream Circles/animationpack_support/regeneration_a.json`,
          "02": `${p}/Dream Circles/animationpack_support/regeneration_b.json`,
          "03": `${p}/Dream Circles/animationpack_support/regeneration_c.json`,
        },
      },
    },
    time: {
      dissolve: {
        "01": `${p}/pioya/clock/dissolve.json`,
      },
      freeze: {
        "01": `${p}/pioya/clock/freeze.json`,
      },
      prison: {
        "01": `${p}/pioya/clock/prison.json`,
        "02": `${p}/pioya/clock/prison_2.json`,
      },
      reverse: {
        "01": `${p}/pioya/clock/reverse.json`,
      },
      speed_up: {
        "01": `${p}/pioya/clock/speed_up.json`,
      },
    },
  },
};
