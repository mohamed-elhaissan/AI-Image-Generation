const button = document.querySelector('button');
const input = document.querySelector('input');
var OPENAI_API_KEY = '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';
function handlerformsubmission(){
    if (document.querySelector('input').value.length == 0) {
        throw new Error('must field the input');
    }
    else {
        async function genereteimage(){
            const myiamge = input.value;
            // handling error  :)   
            try {
                // send request to generate image
                const respone = await fetch('https://api.openai.com/v1/images/generations',{
                    method : "post",
                    header : {'content-type': 'application/json',
                        'Authorization' : `Bearer ${OPENAI_API_KEY}`
                    },
                    body : JSON.stringify({
                        prompt:myiamge,
                        n : 1,
                        size : '1024x1024',
                        respose_format :'b64_json'
                    })

                })
                if(!respone.ok){throw new Error('wtf is this ! try again')}
                // wait until the data comes and put it on constant data
                const data = await respone.json();
                console.log(data);
            }catch(error){
                alert(error);
            }

        }
        genereteimage();
    }
}
button.addEventListener('click',handlerformsubmission);
