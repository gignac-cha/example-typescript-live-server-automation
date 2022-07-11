window.addEventListener('load', (ev: Event) => {
  const button: HTMLButtonElement = document.createElement('button');
  button.textContent = 'Click!';
  button.addEventListener('click', (ev: MouseEvent) => {
    const div: HTMLDivElement = document.createElement('div');
    div.textContent = `${new Date()}`;
    document.body.appendChild(div);
  });
  document.body.appendChild(button);
});