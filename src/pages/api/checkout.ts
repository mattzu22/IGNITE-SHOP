import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
//fazer com que algumas operações aconteçam pelo serve side, porém operações que são baseadas em ações do usuário
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {priceId} = req.body;
    //caso o usuário tente acessar com outro method que não seja post
    if(req.method !== 'POST'){
        return res.status(405).json({error: 'Method not allowed'})
    }

    if(!priceId){
        return res.status(400).json({error: 'price not found.'})
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;


    const chekcoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ]
    })

    return res.status(201).json({
        checkoutUrl: chekcoutSession.url
    })
}