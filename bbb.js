const sidebar = document.getElementById('sidebar');

function toggleMenu(){
  sidebar.classList.toggle('open');
}

function changePage(id){
  document.querySelectorAll('.page')
    .forEach(p => p.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  sidebar.classList.remove('open');
}

function toggleProject(card){
  card.classList.toggle('open');
}

changePage('home');
