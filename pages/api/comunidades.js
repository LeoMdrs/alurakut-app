import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    // Só executar se a requisição for POST e não GET
    if (request.method === 'POST') {
        const TOKEN = '0dce64555131de0484416e4d9ba815';
        const client = new SiteClient(TOKEN);

        // OBS: Importante validar os dados em uma situação real, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "976896", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "omariosouto"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}