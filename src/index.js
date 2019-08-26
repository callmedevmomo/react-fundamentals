class ObjectUtilities {
  static mergeObjects = (a, b) => {
    let newobj = { ...a, ...b };
    return newobj;
  };
  static removePassword = obj => {
    const { name, favFood } = obj;
    let newobj = { name, favFood };
    return newobj;
  };
  static freezeObj = obj => {
    let momo = Object.freeze(obj);
    return momo;
  };
  static getOnlyValues = obj => {
    let values = Object.values(obj);
    return values;
  };
  static getOnlyProperties = obj => {
    let property = Object.getOwnPropertyNames(obj);
    return property;
  };
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi"
};

const objB = {
  password: "12345"
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
