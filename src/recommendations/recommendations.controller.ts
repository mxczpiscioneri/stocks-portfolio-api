import { Controller, Get } from '@nestjs/common';

@Controller('recommendations')
export class RecommendationsController {
  @Get()
  findAll() {
    return {
      "meta": {
        "recordCount": 10,
        "recordTotal": 10,
        "offset": 0,
        "limit": 50
      },
      "records": [
        {
          "name": "Petrobras",
          "code": "PETR4",
          "recomendations": 13,
          "image": "https://br.advfn.com/common/images/companies/BOV_PETR4.png",
          "value": 25.0
        },
        {
          "name": "IRB Brasil Resseguros",
          "code": "IRBR3",
          "recomendations": 6,
          "image": "https://br.advfn.com/common/images/companies/BOV_IRBR3.png",
          "value": 112.27
        },
        {
          "name": "Vale",
          "code": "VALE3",
          "recomendations": 6,
          "image": "https://br.advfn.com/common/images/companies/BOV_VALE3.png",
          "value": 48.57
        },
        {
          "name": "B3",
          "code": "B2SA3",
          "recomendations": 5,
          "image": "https://br.advfn.com/common/images/companies/BOV_B2SA3.png",
          "value": 44.98
        },
        {
          "name": "Itaú Unibanco",
          "code": "ITUB4",
          "recomendations": 5,
          "image": "https://br.advfn.com/common/images/companies/BOV_ITUB4.png",
          "value": 34.91
        },
        {
          "name": "JBS",
          "code": "JBSS3",
          "recomendations": 5,
          "image": "https://br.advfn.com/common/images/companies/BOV_JBSS3.png",
          "value": 31.09
        },
        {
          "name": "Lojas Renner",
          "code": "LREN3",
          "recomendations": 5,
          "image": "https://br.advfn.com/common/images/companies/BOV_LREN3.png",
          "value": 50.05
        },
        {
          "name": "Magazine Luiza",
          "code": "MGLU3",
          "recomendations": 5,
          "image": "https://br.advfn.com/common/images/companies/BOV_MGLU3.png",
          "value": 35.92
        },
        {
          "name": "Suzano",
          "code": "SUZB3",
          "recomendations": 4,
          "image": "https://br.advfn.com/common/images/companies/BOV_SUZB3.png",
          "value": 31.98
        },
        {
          "name": "Banco do Brasil",
          "code": "BBAS3",
          "recomendations": 4,
          "image": "https://br.advfn.com/common/images/companies/BOV_BBAS3.png",
          "value": 47.22
        }
      ]
    }
  }
}
