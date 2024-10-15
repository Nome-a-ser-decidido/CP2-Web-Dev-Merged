alert("Vamos conhecer mais sobre Bikes.");

let question_list = [
    {
        pergunta:"1. Qual é o principal componente de uma bicicleta que permite o movimento?\n a) Pedal\n b) Rodas\n c) Corrente\n d) Quadro",
        resposta:"c"
    },
    {
        pergunta:"2. Qual é a função da corrente em uma bicicleta?\n a) Frear a bicicleta\n b) Transmitir a força do pedal para as rodas\n c) Manter o equilíbrio\n d) Garantir o conforto",
        resposta:"b"
    },
    {
        pergunta:"3. Qual é o nome da peça que liga o guidão à roda dianteira?\n a) Pedivela\n b) Garfo\n c) Mesa\n d) Aro",
        resposta:"b"
    },
    {
        pergunta:"4. Que tipo de bicicleta é ideal para trilhas e terrenos acidentados?\n a) Bicicleta de estrada\n b) Bicicleta dobrável\n c) Mountain bike\n d) Bicicleta urbana",
        resposta:"c"
    },
    {
        pergunta:"5. Qual é a função dos freios de uma bicicleta?\n a) Controlar a direção\n b) Aumentar a velocidade\n c) Parar ou desacelerar a bicicleta\n d) Proteger os pneus",
        resposta:"c"
    },
    {
        pergunta:"6. O que é uma bicicleta elétrica?\n a) Uma bicicleta com luzes\n b) Uma bicicleta com motor auxiliar\n c) Uma bicicleta que funciona apenas com eletricidade\n d) Uma bicicleta usada em competições",
        resposta:"b"
    },
    {
        pergunta: "7. Qual é o nome da peça que sustenta os pedais?\n a) Selim\n b) Aro\n c) Pedivela\n d) Corrente",
        resposta:"c"
    },
    {
        pergunta: "8. O que é um câmbio em uma bicicleta?\n a) Um acessório estético\n b) Um sistema que ajusta a relação entre a pedalada e a roda\n c) Um freio especial\n d) Um tipo de pneu",
        resposta:"b"
    },
    {
        pergunta:"9. Qual é o nome da peça onde você se senta na bicicleta?\n a) Aro\n b) Guidão\n c) Selim\n d) Quadro",
        resposta:"c"
    },
    {
        pergunta:"10. Qual é a função do capacete ao andar de bicicleta?\n a) Melhorar a aerodinâmica\n b) Aumentar a velocidade\n c) Proteger a cabeça em caso de queda\n d) Dar mais estabilidade",
        resposta:"c"
    },
]

let user_points = 0;

for (let x = 0; x < 10; x++){
    let user_input = window.prompt(question_list[x]["pergunta"])
    if (user_input == question_list[x]["resposta"]){    
        user_points += 1;
    }
}

console.log(`Você acertou ${user_points}/10`)