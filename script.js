let quesBank = [
    {
        'ques' : 'What does HTML stand for?' ,
        'a'  : 'Hyper Text Markup Language',
        'b' : 'Hot Mail',
        'c' : 'How to Make Lasagna',
        'ans' : 'a'
    },
    {
        'ques' : 'How many tags are in a regular element?' ,
        'a'  : '2',
        'b' : '1',
        'c' : '3',
        'ans' : 'a'
    },
    {
        'ques' : 'What is the difference between an opening tag and a closing tag?' ,
        'a'  : 'Opening tag has a / in front',
        'b' : 'Closing tag has a / in front',
        'c' : 'There is no difference',
        'ans' : 'b'
    },
    {
        'ques' : '<br/> What type of tag is this?' ,
        'a'  : 'Break tag',
        'b' : 'A broken one',
        'c' : 'An opening tag',
        'ans' : 'a'
    }
]
let index = 0;
let correct = 0;
let wrong = 0;
const sec = document.getElementsByTagName('section')[0];
const questag = document.getElementById('question');
const ques = questag.getElementsByTagName('h3')[0];
const rows = document.getElementsByClassName('row');
const options = document.getElementsByClassName('option');
const sub = document.getElementById('btn');


function checkAns(){
    for(let i=0; i<options.length; i++)
    {
        if(options[i].checked)
        {
            return options[i].value;
        }
    }
}

function thanks() {
    sec.innerHTML =
    `
    <div id="question"style="text-align: center;">
        <h3>Thanks For Participating</h3>
        <br>
        <br>
        <h3>Total Question ${quesBank.length} </h3>
        <h3>Correct Answer ${correct} </h3>
        <h3>Wrong Answer ${wrong} </h3>
    </div>
    `
}

function genQues(index){
    if(index > quesBank.length-1)
    {
        thanks();
    }
    else{
        ques.innerText = quesBank[index].ques;
        rows[0].getElementsByTagName('label')[0].innerText = quesBank[index].a;
        rows[1].getElementsByTagName('label')[0].innerText = quesBank[index].b;
        rows[2].getElementsByTagName('label')[0].innerText = quesBank[index].c;
    }
    
}

sub.addEventListener('click',()=>{
    let crctAns = quesBank[index].ans;;
    let selAns = checkAns();
    if(selAns==undefined)
    {
        alert("Please Select Any One Option");
    }
    else if(crctAns === selAns)
    {
        index++;
        correct++;
        genQues(index);
    }
    else
    {
        index++;
        wrong++;
        genQues(index);
    }
})





genQues(index);