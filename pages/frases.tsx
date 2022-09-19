import { GetStaticProps } from "next";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { allFrases, tFrases } from "../service/base";

interface FrasesProps {
    frases: Array<tFrases>;
}

export default function frases({frases}: FrasesProps){
    return  <div>
        <h1>Frases: </h1> 
        <br />

        {
            
            frases.map((frase, index) => 
            (<div key={frase.id}>
                {frase.frase}</div>)
        )}
        <br />
        <button>click aqui</button>
    </div>;
    
}

export const getStaticProps: GetStaticProps = async (context) => {
    const aleatorio = ((Math.random() * allFrases.length)).toFixed(0);
    console.log(aleatorio);
    const  frases = allFrases.filter(
        (frase) => frase.id == aleatorio
    );

    return{
        props: {
            frases,
        },
        revalidate: 1,
    };
  }