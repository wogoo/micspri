import Sequelize from 'sequelize';

const sequelize = new Sequelize("auth-db", "user", "root", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false, //acho q verificar a nomeclatura
    define: {
        syncOnAssociation: true, //ele da um reload na tabela, a cada model inserido sincronizar
        timestamps: false, //nao cria colunas de data de criação e atualização
        underscored: true,
        underscoredAll: true, 
        freezeTableName: true, //ele vai congelar o nome da tabela, nao vai mudar o nome da tabela
    },

});

sequelize
    .authenticate()
    .then(() => { 
        console.info("Connection has been established successfully.");
    })
    .catch(err => { 
        console.error("Unable to connect to the database:", err);
        console.error(err.message)
    })

export default sequelize;