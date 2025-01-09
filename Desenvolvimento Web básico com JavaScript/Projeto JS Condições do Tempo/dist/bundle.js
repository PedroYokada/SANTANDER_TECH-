(() => {
  "use strict";
  ({
    845: function () {
      var e =
        (this && this.__awaiter) ||
        function (e, n, t, o) {
          return new (t || (t = Promise))(function (a, r) {
            function c(e) {
              try {
                u(o.next(e));
              } catch (e) {
                r(e);
              }
            }
            function i(e) {
              try {
                u(o.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function u(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(c, i);
            }
            u((o = o.apply(e, n || [])).next());
          });
        };
      const n = document.querySelector("#search-form > form"),
        t = document.querySelector("#input-localizacao"),
        o = document.querySelector("#tempo-info");
      null == n ||
        n.addEventListener("submit", (n) =>
          e(void 0, void 0, void 0, function* () {
            if ((n.preventDefault(), !t || !o)) return;
            const e = t.value;
            if (e.length < 3)
              alert("O local precisa ter, pelo menos, 3 letras.");
            else
              try {
                const n = yield fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=b995358f9629cc5991f9cfcbb62e06d1&units=metric&lang=pt_br`
                  ),
                  t = yield n.json(),
                  a = {
                    temperatura: Math.round(t.main.temp),
                    local: t.name,
                    icone: `https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,
                  };
                o.innerHTML = `\n      <div class="tempo-dados">\n        <h2>${a.local}</h2>\n        <span>${a.temperatura}ºC</span>\n      </div>\n    \n      <img src="${a.icone}" />\n    `;
              } catch (e) {
                console.log("Deu um erro na obtenção dos dados da API.", e);
              }
          })
        );
    },
  })[845]();
})();
