// Import stylesheets
import { env_supported } from './env';
import { format_bytes } from './format';
import { storage_quota } from './storage';
import './style.css';

(function () {
  //
  const rootEl: HTMLElement = document.getElementById('app');
  const container = document.createElement('div');

  //
  const heading = document.createElement('h1');
  heading.innerHTML = 'IndexdDB Storage';
  container.append(heading);

  const err = env_supported();
  console.log(err);
  if (err !== true) {
    const msg = document.createElement('p');
    msg.classList.add('alert', 'alert-danger');
    msg.innerHTML = err.toString();
    container.append(msg);
    //
    rootEl.append(container);
    return;
  }
  console.log(navigator.storage);

  /**
   *
   */
  storage_quota().then(({ quota, usage }) => {
    //
    const quotaNice = format_bytes(quota);
    const usageNice = format_bytes(usage);
    const usagePercent = Math.round((usage / quota) * 100);

    //
    const p1 = document.createElement('p');
    p1.innerHTML = `Total: ${quotaNice}`;
    const p2 = document.createElement('p');
    p2.innerHTML = `Used: ${usageNice} (${usagePercent}%)`;

    //
    container.append(p1);
    container.append(p2);

    //
    rootEl.append(container);
  });
})();
