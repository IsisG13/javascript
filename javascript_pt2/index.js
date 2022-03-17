import { Cliente } from "./Cliente.js";
import { Diretor } from './funcionarios/Diretor.js';
import { Gerente } from './funcionarios/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Paulo", 10000, 12233344441)
diretor.cadastrarSenha("122333444")
const gerente = new Gerente("Daniel", 5000, 47826540276)
gerente.cadastrarSenha("123")
const cliente = new Cliente("Sunny", 78835946823, "1234")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "122333444");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(diretorEstaLogado, "\n", gerenteEstaLogado, "\n", clienteEstaLogado);