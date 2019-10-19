enum datatypes {
  String= 'string',
  Int= 'int',
  Boolean= 'boolean',
  Unknown= 'unknown'
}

export class Data {
  static estVide(mot) {
    mot = mot.trim();
    return !mot.length;
  }

  static isInt(mot) {
    return !mot.match(/[\D]/);
  }

  static isBoolean(mot) {
    return (mot === 'true' || mot === 'false');
  }

  static isString(mot) {
    return !Data.estVide(mot);
  }

  static isFloat(mot) {
    return mot.match(/[\d]+[/.]?[\d]*/);
  }

  get type(): datatypes {
    if (Data.isInt(this.value)) {
      return datatypes.Int;
    }
    if (Data.isBoolean(this.value)) {
      return datatypes.Boolean;
    }
    if (Data.isString(this.value)) {
      return datatypes.String;
    }
    return datatypes.Unknown;
  }

  set type(value: datatypes) {
    this._type = value;
  }

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  private _value: string;
  private _index: number;
  private _type: datatypes;

  constructor(data: string, index: number) {
    this._value = data;
    this._index = index;
  }

}
