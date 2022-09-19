import { GetStaticProps } from "next";
import { allFrases, tFrases } from "../service/base";
import { prisma }  from "../lib/prisma"; "../lib/prisma";
import {Frase} from "@prisma/client";

interface FrasesProps {
    frases: Frase;
}

export default function frases({frases}: FrasesProps){
    return  <div>
        <h1>Frases: </h1> 
        <br />

        {
            
            <div key={frases.id}>
                {frases.frase}</div>
        }
        <br />
        <button onClick={() => window.location.reload()}>Gerar Nova Frase</button>
    </div>;
    
}

export const getStaticProps: GetStaticProps = async (context) => {
    const aleatorio = ((Math.random() * allFrases.length)).toFixed(0);
    var y: number = +aleatorio;
    const  frases = await prisma.frase.findUnique({
        where: {
            id: y,
        }
     } )

     console.log(y);
    console.log(frases);
    //const  frases = allFrases.filter(
    //    (frase) => frase.id == aleatorio
    //)

    return{
        props: {
            frases,
        },
        revalidate: 1,
    };
  }