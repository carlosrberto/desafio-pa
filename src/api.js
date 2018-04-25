const mockData = {
    items: [
        {id: 1, name: 'Carlos', job: 'Front-End'},
        {id: 2, name: 'João', job: 'Front-End'},
        {id: 3, name: 'Mauricio', job: 'Front-End'},
        {id: 4, name: 'Gustavo', job: 'Front-End'},
        {id: 5, name: 'Olavo', job: 'Front-End'},
        {id: 6, name: 'Munarolo', job: 'Back-End'},
        {id: 7, name: 'Marcelo', job: 'Back-End'},
        {id: 8, name: 'Chan', job: 'Back-End'},
        {id: 9, name: 'Gabriel', job: 'Back-End'},
        {id: 10, name: 'Michael', job: 'Back-End'}
    ]
}

export default {
    developers() {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
                if(Math.round(Math.random())) {
                    resolve(mockData);
                } else {
                    reject({ error: 'Error loading data' });
                }               
           }, 1000);
        });
    }
}