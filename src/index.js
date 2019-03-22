// Стоимость копеек в центах


const valueH = 50; //half-dollars = 50
const valueQ = 25; //quarters = 25
const valueD = 10; //dimes = 10
const valueN = 5; //nickels = 5
const valueP = 1; //pennies = 1

module.exports = function makeExchange(currency) {
    let emptyArray = {};
    let tooRich = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    if (currency > 10000) {
        emptyArray = tooRich
    } else {



        let coinsH = Math.floor(currency / valueH);
        console.log('H', coinsH)
        let coinsQ = Math.floor((currency - coinsH * valueH) / valueQ);
        console.log('Q', coinsQ)
        let coinsD = Math.floor((currency - coinsH * valueH - coinsQ * valueQ) / valueD);
        console.log('D', coinsD)
        //console.log ('lets count: ', "(", currency,  "-",  coinsH*H , "-" , coinsQ*Q, ") /", D)

        let coinsN = Math.floor((currency - coinsH * valueH - coinsQ * valueQ - coinsD * valueD) / valueN);
        console.log('N', coinsN)
        let coinsP = Math.floor((currency - coinsH * valueH - coinsQ * valueQ - coinsD * valueD - coinsN * valueN) / valueP);
        console.log('P', coinsP)


        //let coinsArray = [coinsH, coinsQ, coinsD, coinsN, coinsP]
        let coinsObject = new function () {
            return {
                "H": coinsH,
                "Q": coinsQ,
                "D": coinsD,
                "N": coinsN,
                "P": coinsP
            }


        };

        if (coinsH > 0) emptyArray.H = coinsH;
        if (coinsQ > 0) emptyArray.Q = coinsQ;
        if (coinsD > 0) emptyArray.D = coinsD;
        if (coinsN > 0) emptyArray.N = coinsN;
        if (coinsP > 0) emptyArray.P = coinsP;
    }
    return emptyArray;




}

//console.log(makeExchange(currency))