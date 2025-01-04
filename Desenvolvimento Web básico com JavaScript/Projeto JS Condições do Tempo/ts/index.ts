const form = document.querySelector("#search-form > form");
const input = document.querySelector(
  "#input-localizacao"
) as HTMLInputElement | null;

const sectionTempoInfo = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !sectionTempoInfo) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local precisa ter, pelo menos, 3 letras.");
    return;
  }

  try {
    const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=b995358f9629cc5991f9cfcbb62e06d1&units=metric&lang=pt_br`
      );
    
      const dados = await resposta.json();
    
      const infos = {
        temperatura: Math.round(dados.main.temp),
        local: dados.name,
        icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
      };
    
      sectionTempoInfo.innerHTML = `
      <div class="tempo-dados">
        <h2>${infos.local}</h2>
        <span>${infos.temperatura}ºC</span>
      </div>
    
      <img src="${infos.icone}" />
    `;
  } catch (err){
    console.log("Deu um erro na obtenção dos dados da API.",err);
  }

});
