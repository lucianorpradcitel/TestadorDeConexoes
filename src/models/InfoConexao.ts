export class InfoConexao
{
    ip: string;
    porta: string;
    cnpj: string;
    razao: string;


    constructor(ip: string, porta:string, cnpj:string, razao:string)
    {
        this.ip = ip;
        this.porta = porta;
        this.cnpj = cnpj;
        this.razao = razao;
    }
}


export default  InfoConexao;