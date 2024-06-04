import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {
  static ehIgual(negociacoesDehoje: Negociacao): (value: Negociacao, index: number, array: readonly Negociacao[]) => unknown {
    throw new Error("Method not implemented.");
  }
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === this.data.getDate() &&
      this.data.getMonth() === this.data.getMonth() &&
      this.data.getFullYear() === this.data.getFullYear()
    );
  }
}
