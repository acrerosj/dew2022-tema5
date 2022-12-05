class Player {
  constructor(name, team, number) {
    this.name = name;
    this.team = team;
    this.number = number;
  }

  render() {
    return `
      <div class="player" onclick="deletePlayer(this)" 
          data-name="${this.name}"
          data-number="${this.number}"
          data-team="${this.team}">
          <h2>${this.name}</h2>
          <h1>${this.number}</h1>
          <h3>${this.team}</h3>
      </div>
    `;
  }
}