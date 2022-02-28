const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
const orphanage = require('./fakedata')


    Database.then(async db => {

        for(item in orphanage){
            //inserir dados na tabela para
            await saveOrphanage(db, orphanage[item]);
        };
        
    
        //consultar dados na tabela
        const selectedData = await db.all("SELECT * FROM orphanages")
        console.log(selectedData)
    
        //consultar somente 1 orphanato, pelo identifier
    
        //deletar dado da tabela para
        console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    });
    




