enum datatypes {
  String,
  Int,
  Boolean
}

export class Data {
  get type(): datatypes {
    return this._type;
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
