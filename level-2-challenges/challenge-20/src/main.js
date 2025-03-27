import { logMessage, getApiUrl } from '../utils/helpers';

let connectionActive = false;
const setupConnectButton = () => {
  const connectBtn = document.querySelector('#connect');
  connectBtn.addEventListener('click', async () => {
    logMessage('connectStart');
    const res = await fetch(getApiUrl());
    const data = await res.json();
    if (data.status === 500) {
      return logMessage('connectFail');
    }
    connectionActive = true;
    logMessage('connectSuccess');
  });
};

let launchIntervalId = null;

const setupLaunchButton = () => {
  const launchBtn = document.querySelector('#launch');
  launchBtn.addEventListener('click', () => {
    // const connectionActive = Array.from(
    //   document.querySelectorAll('#log-list li')
    // ).some((element) =>
    //   element.textContent.includes('Connection established with Major Tom.')
    // );

    if (!connectionActive) {
      return logMessage('notConnected');
    }

    let countDown = 3;
    logMessage('launchStart');

    launchIntervalId = setInterval(() => {
      if (countDown === 0) {
        clearInterval(launchIntervalId);
        logMessage('launchSuccess');
        launchIntervalId = null;
      } else {
        logMessage('launchCountdown', countDown);
        countDown--;
      }
    }, 1000);
  });
};

const setupAbortButton = () => {
  const abortBtn = document.querySelector('#abort');
  abortBtn.addEventListener('click', () => {
    if (launchIntervalId) {
      logMessage('abortSuccess');
      clearInterval(launchIntervalId);
      launchIntervalId = null;
    } else {
      logMessage('abortFail');
    }
  });
};

export const main = () => {
  const navContainer = document.querySelector('#app');
  navContainer.innerHTML = `
    <div class="controls">
      <button id="connect">Connect to Major Tom</button>
      <button id="launch">Initiate Launch</button>
      <button id="abort">Abort Mission</button>
    </div>

    <div class="logs">
      <h2>Mission Logs:</h2>
      <ul id="log-list"></ul>
    </div>
  `;

  setupConnectButton();
  setupLaunchButton();
  setupAbortButton();
};
