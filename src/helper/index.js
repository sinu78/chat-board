export function getAnswerByQuestion(q) {
    if(q.includes('hi')) return 'hello'
    else if(q === 'what is your name') return 'My name is bot and I am made by sachin'
    else return 'Could not understand'
}