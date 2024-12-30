async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/vl/user?created=1", {
    headers: {
      "app-id": "63f77cc1b7f489f0b351b30f",
    },
  });

  const users = await resposta.json();

  console.log(users.data);
}

getUsers();

async function getUser() {}

async function createUser() {
  const userData = {
    name: "Pedro Yokada",
    email: "pedro.henrique@gmail.com",
    password: "123456",
  };
  try {
    await fetch("https://dummyapi.io/data/vl/user/create", {
      method: "POST",
      headers: {
        "app-id": "63f77cc1b7f489f0b351b30f",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log("Deu erro ao tentar criar um novo usuário:", erro);
  }
}

createUser();
