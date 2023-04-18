// Import stylesheets
import { format_bytes } from './format';
import { storage_quota } from './storage';
import './style.css';

const appDiv: HTMLElement = document.getElementById('app');

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
  const container = document.createElement('div');

  //
  const heading = document.createElement('h1');
  heading.innerHTML = 'IndexdDB Storage';
  container.append(heading);

  //
  const p1 = document.createElement('p');
  p1.innerHTML = `Total: ${quotaNice}`;
  const p2 = document.createElement('p');
  p2.innerHTML = `Used: ${usageNice} (${usagePercent}%)`;

  //
  container.append(p1);
  container.append(p2);

  //
  appDiv.append(container);
});
