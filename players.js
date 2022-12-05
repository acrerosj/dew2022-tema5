const container = document.querySelector('div.players');
const team_players = new Team(container);

const form = document.forms.createplayer;
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let name = form.name.value;
  let number = form.number.value;
  let team = form.team.value;
  let player = new Player(name, number, team);
  team_players.addPlayer(player);
});

function deletePlayer(elem) {
  console.log('borrando...', elem);
  team_players.deletePlayer(elem);
  
}