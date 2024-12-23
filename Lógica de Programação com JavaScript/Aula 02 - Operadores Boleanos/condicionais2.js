// Muito util quando a variavel possui valores específicos

const permissoes = "admin"; // aluno || professor || admin
switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas!");
    break;
  case "professor":
    console.log("Você pode visualizar, alterar e adicionar aulas!");
    break;
  case "admin":
    console.log("Você pode fazer tudo no sistema!");
    break;
  default:
    console.log("Usuário desconhecido");
}
