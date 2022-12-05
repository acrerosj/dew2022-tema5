class Team {
  list = [];

  constructor(container) {
    this.container = container;
    this.upload();
    this.show();
  }

  addPlayer(player) {
    this.list.push(player);
    this.container.insertAdjacentHTML('beforeend', player.render());
    this.store();
  }

  store() {
    localStorage.team = JSON.stringify(this.list);
  }

  upload() {
    let objects = localStorage.team ? JSON.parse(localStorage.team) : [];
    this.list = objects.map(o => Object.assign(new Player(), o));
  }

  show() {
    this.container.innerHTML = "";
    this.list.forEach(player => {
      this.container.insertAdjacentHTML('beforeend', player.render());
    })
  }

  search(name, number, team) {
    return this.list.findIndex((player) => player.name == name && player.team == team && player.number == number);
  }

  deletePlayer(div) {
    let name = div.dataset.name;
    let team = div.dataset.team;
    let number = div.dataset.number;
    let index = this.search(name, number, team);
    this.list.splice(index,1);
    div.remove();
    this.store();
  }

}