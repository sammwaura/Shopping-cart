export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor({ id, name, description = '', price = 0, imageUrl = 'https://i2-prod.dailystar.co.uk/incoming/article24004234.ece/ALTERNATES/s615b/0_united1jpeg.jpg' }: { id: any; name: any; description?: string; price?: number; imageUrl?: string; }){
        this.id = id
        this.name= name
        this.description= description
        this.price= price
        this.imageUrl= imageUrl        
    }
}
