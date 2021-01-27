export class ContactService{

    static APIurl = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

    static send(name, email, message, callbackfn ){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, message})
        };

        fetch(ContactService.APIurl, requestOptions)
            .then(response => {
                callbackfn(response);
                console.log(response);
            })
            .catch(error => console.log('Error:', error));
    }

}