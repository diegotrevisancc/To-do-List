module.exports = getDate;

function getDate () {
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var date = new Date();
    var formatDate = date.toLocaleDateString("pt-BR", options);
    var day = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    return day 
}

