import model from '../server/model';


class Controller {

    constructor(){}

    getCrushes(){
        return model.find({});
    }

    select(req, resp){
        this.getCrushes()
        .then(crushes => resp.status(200).json({ 'result': crushes }))
        .catch(error => resp.status(400).json( {'result': error }));  
    }

    getCrushesById(id){
        return model.find(id);
    }

    selectOne(req, resp){

        const id = { id: req.params.id };

        this.getCrushesById(id)
        .then(crush => resp.status(200).json({ 'result': crush }))
        .catch(error => resp.status(400).json( {'result': error }));  
    }

    deleteCrushById(id){
        return model.deleteOne(id);
    }

    delete(req, resp){

        const id = { id: req.params.id };

        this.deleteCrushById(id)
        .then(crushes => resp.status(200).json({ 'result': crushes }))
        .catch(error => resp.status(400).json( {'result': error }));  
    }

    updateCrushById(id, data){
        return model.findByIdAndUpdate(id,data);
    }

    update(req, resp){

        const id = { id: req.params.id };
        const crush = req.body;

        this.updateCrushById(id, crush)
        .then(crushes => resp.status(200).json({ 'result': crushes }))
        .catch(error => resp.status(400).json( {'result': error }));  
    }

    createCrush(data){
        return model.create(data);
    }

    insert(req, resp){
        const crush = req.body;

        this.createCrush(crush)
        .then(crushes => resp.status(200).json({ 'result': crushes }))
        .catch(error => resp.status(400).json( {'result': error }));  
    }

}

export default Controller;