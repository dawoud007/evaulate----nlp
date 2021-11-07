import { dataposting } from "./posting"


function submit(event) {
    event.preventDefault()

    
    let inputText = document.getElementById('url').value

    if(Client.valid(inputText)) {
  

        dataposting('http://localhost:8081/api', {url:inputText})

    .then(function(data) {
        document.getElementById("subj").innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById("conf").innerHTML = `Confidence: ${data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
        document.getElementById('text').innerHTML = `text: ${data.sentence_list[0].text}`
        document.getElementById('polar').innerHTML = `Polarity: ${data.score_tag}`
        document.getElementById("agree").innerHTML = `Agreement: ${data.agreement}`;
        
    })
    } else {
        alert('invalid url try valid one ');
    }
}



export { submit }
