//Importando dependencias
import{test, expect, vi} from 'vitest';
//Simulando login lento
function loginLento(usuario:string):Promise<string>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(`BEM-VINDO, ${usuario}!`);
        }, 5000);
    });
}

test('Simular login usando fake timers', async ()=>{
    // Ligando a maquina do tempo
    vi.useFakeTimers();
    console.log('⌛ INICIANDO CENÁRIO DE TESTE ;D')

    // Chamando promise de usuário sem await ainda
    const promessaLogin = loginLento("Dona Redonda");

    // Configurar  avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    // Verificar Resultado
    expect(resultado).toBe("BEM-VINDO, Dona Redonda!")
    console.log("Sucesso teste realizado na velocidade da luz 💡")

    // Desligando a maquina do tempo
    vi.useRealTimers();
})