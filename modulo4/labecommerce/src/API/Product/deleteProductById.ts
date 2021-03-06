import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const deleteProductById = async (req: Request, resp: Response): Promise<void> => {
    let errorCode = 400
    try {
        const id = req.params.id

        const idVerification = await connection.raw(`
            SELECT id FROM labecommerce_products WHERE id = "${id}"
        `)

            if(!idVerification[0].length){
                errorCode = 422
                throw new Error('ID inexistente')
            }

        await interactMySQL(id)

        resp.status(200).send("Deletado")
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}

const interactMySQL = async (id: string): Promise<any> => {
    await connection.raw(`
        DELETE FROM labecommerce_products WHERE id = "${id}";
    `)
} 