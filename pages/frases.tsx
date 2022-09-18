import { GetStaticProps } from "next";

interface FrasesProps {
    frases: Array<string>;
}

export default function frases({frases}: FrasesProps){
    return  <div>
        <h1>Frases: </h1> 
        <br />

        {
            frases.map((frases, index) => 
            (<div key={index}>{
                frases}</div>)
        )}
        <br />
    </div>;
    
}

export const getStaticProps: GetStaticProps = async (context) => {
    const frases = [
        "sem saber que era impossivel, foi la e soube.",
        "Devemos deixar de ser egoístas e começar a pensar em nós mesmos.",
        "É hora de esquecer os erros do passado e começar a pensar nos erros do futuro.",
        "Gostaria de agradecer você a essa crítica que você aí, extremamente destrutiva, realmente ajudou muito a levantar minha moral.",
        "Eu acredito em um amanhã melhor, até porque amanhã é sexta-feira.",
        "Errar é humano, colocar a culpa em alguém é estratégico.",
        "Num dia a gente perde, no outro a gente é derrotado. ",
    ];

    return{
        props: {
            frases,
        },
        revalidate: 10,
    };
  }