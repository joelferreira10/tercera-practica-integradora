export default class Service{
    constructor(dao){
        this.dao=dao
    }
    async getAll() {
        try {
          const response = await this.dao.getAll();
          return response;
        } catch (error) {
          throw new Error(error.message);
        }
      }
    
      async getById(id) {
        try {
          const response = await this.dao.getById(id);
          return response;
        } catch (error) {
            throw new Error(error.message);
        }
      }
    
      async create(obj) {
        try {
          const response = await this.dao.create(obj);
          return response;
        } catch (error) {
            throw new Error(error.message);
        }
      }
    
      async update(id, obj) {
        try {
          await this.dao.update(id, obj);
          return obj;
        } catch (error) {
            throw new Error(error.message);
        }
      }
    
      async delete(id) {
        try {
          const response = await this.dao.delete(id);
          return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}