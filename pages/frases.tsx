import { GetStaticProps } from "next";
import { allFrases, tFrases } from "../service/base";
import { prisma }  from "../lib/prisma"; "../lib/prisma";
import {Frase} from "@prisma/client";
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useState } from 'react';

interface FrasesProps {
    frases: Frase;

}
//const [size, setSize] = useState<SizeType>('large');
export default function frases({frases}: FrasesProps){
    return  <div>
        <h1>Frases: </h1> 
        <br />

        {
            
            <div key={frases.id}>
                {frases.frase}</div>
        }
        <br />
        <Button  onClick={() => window.location.reload()} type="primary" block shape="round" icon={<DownloadOutlined />} size={"large"}>
        Gerar Nova Frase
      </Button>
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