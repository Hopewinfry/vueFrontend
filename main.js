const appInstance = {
    data(){
        return {
          students:[],
          student: {
                firstName:"",
                lastName:"",
                phoneNumber:"",
                Email:""
            },
        };
    },
    method: {
        async registerStudent() {
            let baseUrl = 'http://localhost:3000/';
            console.log('nniiujh')
            try {
                const response = await fetch(baseUrl + '/register', { 
                    // post data in the db
                    method: 'POST',
                    headers: {
                        // type of data we are getting in json form 
                        'content-type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify({
                        'firstName': firstName,
                        'lastName': lastName,
                        'phoneNumber': phoneNumber,
                        'Email' : Email
                    })
                })
                const data = await response.json()
        
            } catch (error) {
                console.log(error)
            }
        }
    },
  }
  
Vue.createApp(appInstance).mount('#app')