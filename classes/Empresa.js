const faker = require('faker');

class Empresa {
    constructor() {
        this.nombre = faker.company.companyName();
        this.descripcion = faker.company.catchPhrase();
        this.direccion = faker.address.streetAddress();
        this.telefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.logo = faker.image.avatar();
        this.fechaCreacion = faker.date.past();
        this.fechaModificacion = faker.date.past();
        this.fechaEliminacion = faker.date.past();
        this.estado = faker.random.boolean();
    }
}

module.exports = Empresa;
