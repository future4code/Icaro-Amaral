import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const changeProductPriceWithId = async (req: Request, resp: Response): Promise<void> => {
    let errorCode = 400
    try {
        const id: string = req.params.product_id
        let price: number = Number(req.body.price)

        const idVerification = await connection.raw(`
            SELECT id FROM labecommerce_products WHERE id = "${id}";
        `)

            if(!idVerification[0].length){
                errorCode = 404
                throw new Error('ID inexistente')
            }

            if(!price){
                errorCode = 406
                throw new Error('Por Favor, confira se um valor foi informado')
            }

        await interactMySQL(id, price)

            if(price < 0){
                price = 0
                resp.status(200).send("FOR FREEEEEEEEE!")
            }

        resp.status(200).send("Preço alterado com sucesso")
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.mySQL )
    }
}


const interactMySQL = async (id: string, price: number) => {
    await connection.raw(`
        UPDATE labecommerce_products SET price = ${price} WHERE id = "${id}";
        
    `)
} 