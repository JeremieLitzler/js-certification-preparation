// complete the challenge here 👇

import { data } from '../public/data';
import {
  renderTrackMetadata,
  renderPlaylist,
  renderAudioEffects,
  renderMixParameters,
  renderInstrumentTuning,
} from './render';

// 1. Track Metadata Formatter
export function formatTrackMetadata(title, artist, genres) {
  const trackTitleEl = document.createElement('div');
  trackTitleEl.classList.add('track-title');
  trackTitleEl.innerText = title;

  const trackArtistEl = document.createElement('div');
  trackArtistEl.classList.add('track-artist');
  trackArtistEl.innerText = title;

  const trackGenresEl = document.createElement('div');
  trackGenresEl.classList.add('track-genres');
  trackGenresEl.innerText = genres.join(', ');

  const html = `${trackTitleEl.outerHTML}${trackArtistEl.outerHTML}${trackGenresEl.outerHTML}`;
  console.log(html);

  return html;
}

renderTrackMetadata(
  formatTrackMetadata(data.track.title, data.track.artist, data.track.genres)
);

// 2. Playlist Creator
export function createPlaylist(existingPlaylist, newTracks) {
  console.log('createPlaylist', existingPlaylist, newTracks);

  return [...existingPlaylist, [newTracks]];
}

renderPlaylist(
  createPlaylist(data.playlist, data.newTracks[0], data.newTracks[1])
);

// 3. Audio Effect Merger
export function mergeAudioEffects(defaultEffects, customEffects) {
  console.log('mergeAudioEffects', defaultEffects, customEffects);

  return { ...defaultEffects, ...customEffects };
}

renderAudioEffects(mergeAudioEffects(data.defaultEffects, data.customEffects));

// 4. Mix Assignment
export function assignMixParameters(params) {
  return { ...params, isMuted: false };
}

renderMixParameters(assignMixParameters(data.mixParameters));

// 5. Instrument Tuning Check
export function checkInstrumentTuning(tuningObject, instrumentName) {
  console.log('checkInstrumentTuning', tuningObject, instrumentName);
  return Object.hasOwn(tuningObject, instrumentName)
    ? tuningObject[instrumentName]
    : 440;
}

renderInstrumentTuning(checkInstrumentTuning(data.tuning, 'trumpet'));
