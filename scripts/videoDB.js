export const DB_PREFIX = "ggg-vfx";

// Start from 01
const p = "modules/ggg/assets/vfx";
export const database = {
  _templates: {
    // Grid size, start point, end point
    ranged_1: [200, 200, 0],
    ranged_2: [100, 83, 83],
  },
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
    beam: {
      general: {
        "01": {
          _template: "ranged_1",
          yellow: `${p}/atlas_textures/36_beam.json`,
        },
      },
      squiggle: {
        "01": {
          _template: "ranged_2",
          pink: `${p}/atlas_textures/32a_squiggle.json`,
        },
      },
    },
    buff: {
      general: {
        "01": {
          attack: `${p}/Dream Circles/animationpack_support/buff_a.json`,
          defense: `${p}/Dream Circles/animationpack_support/buff_b.json`,
          magic: `${p}/Dream Circles/animationpack_support/buff_c.json`,
        },
      },
    },
    burst: {
      general: {
        "01": {
          pink: `${p}/atlas_textures/32e_burst.json`,
        },
      },
    },
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
          green: `${p}/Dream Circles/animationpack_support/healing_a.json`,
          blue: `${p}/Dream Circles/animationpack_support/healing_b.json`,
          pink: `${p}/Dream Circles/animationpack_support/healing_c.json`,
          red: `${p}/Dream Circles/animationpack_support/healing_d.json`,
        },
        "02": {
          green: `${p}/Dream Circles/animationpack_support/healing_2a.json`,
          blue: `${p}/Dream Circles/animationpack_support/healing_2b.json`,
          pink: `${p}/Dream Circles/animationpack_support/healing_2c.json`,
          red: `${p}/Dream Circles/animationpack_support/healing_2d.json`,
        },
        "03": {
          green: `${p}/Dream Circles/animationpack_support/healing_3a.json`,
          blue: `${p}/Dream Circles/animationpack_support/healing_3b.json`,
          pink: `${p}/Dream Circles/animationpack_support/healing_3c.json`,
          red: `${p}/Dream Circles/animationpack_support/healing_3d.json`,
        },
        "04": {
          green: `${p}/Dream Circles/animationpack_support/healing_4a.json`,
          blue: `${p}/Dream Circles/animationpack_support/healing_4b.json`,
          pink: `${p}/Dream Circles/animationpack_support/healing_4c.json`,
          dark_red: `${p}/Dream Circles/animationpack_support/healing_4d.json`,
        },
      },
      cleanse: {
        "01": {
          light: `${p}/Dream Circles/animationpack_support/cleanse_a.json`,
          dark: `${p}/Dream Circles/animationpack_support/cleanse_b.json`,
        },
      },
      regeneration: {
        "01": {
          purple: `${p}/Dream Circles/animationpack_support/regeneration_a.json`,
          blue: `${p}/Dream Circles/animationpack_support/regeneration_b.json`,
          green: `${p}/Dream Circles/animationpack_support/regeneration_c.json`,
        },
      },
      revive: {
        "01": {
          red: `${p}/Dream Circles/animationpack_support/revive_a.json`,
          green: `${p}/Dream Circles/animationpack_support/revive_b.json`,
          dark_pink: `${p}/Dream Circles/animationpack_support/revive_d.json`,
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
