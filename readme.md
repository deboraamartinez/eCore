## e-Core technical case

Technical case repository for internship at e-Core

### Linguagem utilizada: Node.js

### Requisitos

- [X] A funcionalidade do programa é o armazenamento de dados cadastrais de pessoas. Devem constar os seguintes dados no cadastro: Nome e idade.
- [X] Deve ser possível cadastrar / adicionar uma nova pessoa.
- [X] Deve ser possível exibir uma lista de pessoas cadastradas, ordenada por idade (menor para maior) e nome (alfabética crescente).
- [X] Deve ser possível categorizar as pessoas cadastradas por idade, de acordo com os critérios: 0 a 12 anos => Criança, 12 até 19 anos => Adolescente, 20 até 65 => Adulto, 65 ou mais => Idoso.

### Instruções de uso:

- Clone the repo
<git clone https://github.com/deboraamartinez/eCore.git>
- Install Yarn
<yarn install>
- Add the packages
<yarn add express>
- The server will run on port 3000
- To test the features you can make requests through Insomnia or Postman
- To Create a person you need to POST:
<http://localhost:3000/people>
<"Name": "", "Age":"">
-To Read all people you need to GET:
<http://localhost:3000/people>
- To Read sorted by age you need to GET:
<http://localhost:3000/people/age>
- To Read sorted by name you need to GET:
<http://localhost:3000/people/name>
- To Read sorted by age and categorized into children, teens, adults and seniors you need to GET:
<http://localhost:3000/people/age/order>


