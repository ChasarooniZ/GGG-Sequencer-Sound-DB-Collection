import { database as soundDb, DB_PREFIX as soundDbPrefix } from "./soundD.jsb";
//Code lovingly borrowed from PF2e Grphics
Hooks.once("init", async function () {
  Hooks.once("sequencerReady", () => {
    Sequencer.Database.registerEntries(soundDbPrefix, { sfx: soundDb });
    // Sequencer.Database.registerEntries(assetDbPrefix, videoDb);
  });

  if (import.meta.hot) {
    // Prevents reloads
    import.meta.hot.accept();

    if (window.Sequencer) {
      Sequencer.Database.registerEntries(soundDbPrefix, soundDb, false, true);
      Sequencer.Database.registerEntries(assetDbPrefix, videoDb, false, true);
    }
  }
});

Hooks.once("ready", async function () {});
