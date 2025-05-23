import mongoose from 'mongoose';
import {ProductModel} from '@app/infra/database/models';

const Products = [
  {
    name: 'Camiseta Básica',
    description: 'Camiseta 100% algodão, confortável e ideal para o dia a dia.',
    amount: 4999,
  },
  {
    name: 'Fone de Ouvido Bluetooth',
    description:
      'Fone sem fio com cancelamento de ruído e bateria de longa duração.',
    amount: 12990,
  },
  {
    name: 'Mouse Gamer RGB',
    description: 'Mouse com iluminação RGB, sensor óptico de alta precisão.',
    amount: 8990,
  },
  {
    name: 'Garrafa Térmica 1L',
    description: 'Mantém líquidos quentes ou frios por até 12 horas.',
    amount: 7990,
  },
  {
    name: 'Carregador Portátil 10000mAh',
    description: 'Bateria portátil compatível com carregamento rápido.',
    amount: 11990,
  },
  {
    name: 'Livro - O Poder do Hábito',
    description: 'Best-seller sobre como hábitos moldam nossas vidas.',
    amount: 4500,
  },
  {
    name: 'Tênis Esportivo Masculino',
    description: 'Ideal para corridas e atividades físicas em geral.',
    amount: 15990,
  },
  {
    name: 'Teclado Mecânico',
    description: 'Teclado com switches mecânicos e iluminação LED.',
    amount: 18990,
  },
  {
    name: 'Relógio Digital de Pulso',
    description: 'Design moderno com diversas funcionalidades.',
    amount: 9990,
  },
  {
    name: 'Mochila Executiva',
    description:
      'Espaçosa, resistente à água e com compartimento para notebook.',
    amount: 13990,
  },
];

export const productSeeds = async () => {
  try {
    const promises = Products.map((product) => {
      return ProductModel.build(product).save();
    });

    await Promise.all(promises);
  } catch (err) {
    if (err instanceof mongoose.mongo.MongoServerError) {
      if (err.code === 11000) {
        return;
      }
    }
  }
};
