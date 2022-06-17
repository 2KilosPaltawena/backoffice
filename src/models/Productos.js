export class User {
    constructor(id, name, price, image, category_id, admin_id) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.category_id = category_id;
        this.admin_id = admin_id;
    }
}