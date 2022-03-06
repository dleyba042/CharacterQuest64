const statsList = document.getElementById('char-stats').children;


export const getStats = () =>{

    let stats = {}; //empty arr to fill with character stats

    for(let i =0; i<statsList.length; i++) {

        stats[statsList[i].id] = statsList[i].value;

    }

    return stats;

}

