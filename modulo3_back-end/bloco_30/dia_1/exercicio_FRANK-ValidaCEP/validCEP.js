// const { default: axios } = require("axios");

// async function validaeconsultaCEP() {
//   const cep = "46.860-000";

//   const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
//   const valida = regexCEP.test(cep);

//   let cepTratado;
//   if (valida) {
//     cepTratado = cep.replace(/[^\d]+/g, "");
//     const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`;

//     const request = await axios.get(URL);
//     console.log(request.data);
//   }
// }

// validaeconsultaCEP();

// ------------------------------------------------------
// principio da responsabilidade unica
// aberta para ser extendida e fechada para modificação

// const { default: axios } = require("axios");

// const CIDADES = {
//   iacu: {
//     cep: "46.860-000",
//   },
//   itaberaba: {
//     cep: "46.880-000",
//   },
// };

// async function consultaCEP(cidade) {
//   const { cep } = CIDADES[cidade];

//   const valida = validaCEP(cep);

//   let cepTratado;
//   if (valida) {
//     cepTratado = cep.replace(/[^\d]+/g, "");
//     const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`;

//     const request = await axios.get(URL);
//     console.log(request.data);
//   }
// }

// function validaCEP(cep) {
//   const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
//   return regexCEP.test(cep);
// }

// consultaCEP("iacu");

// -----------------------------------------------------------
// inversão da dependencia - podendo usar a API desejada sem alterar a função

const { default: axios } = require("axios");

const CIDADES = {
  iacu: {
    cep: "46.860-000",
  },
  itaberaba: {
    cep: "46.880-000",
  },
};

async function consultaCEP(cidade, service) {
  const { cep } = CIDADES[cidade];

  const valida = validaCEP(cep);

  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, "");
    service(cepTratado);
  }
}

async function brasilAPI(cep) {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  const request = await axios.get(URL);
  console.log(request.data);
}

async function viaCEP(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  const request = await axios.get(URL);
  console.log(request.data);
}

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep);
}

consultaCEP("iacu", brasilAPI);
consultaCEP("iacu", viaCEP);