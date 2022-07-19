
export default async function handler(req, res) {
	switch (req.method) {
		case "POST": {
            res.send("Jogador salvo com sucesso");
			// return postJogador(req, res);
		}
		case "GET": {
            res.send("Lista de jogadores");
			// return getJogador(req, res);
		}
	}
}
