function Portfolio(){
    //instance variable
    this.stocks = [];


    //helper function
    function findStock(trk,list){
        for(lets = 0;s<this.stocks.length;s++){
            if(tkr == this.stocks[s]){
                return s;
            }
        }
        return -1;
    }

    //instance functions
    this.add = function(stk){
        this.stocks.push(stk)
    };
    this.update = function(tkr,val){
        if(findStock(tkr) >= 0){
            this.stocks[findStock(tkr)].value=val;
        }
    };
    this.buy = function(tkr,qnt){
        if(findStock(tkr)>=0){
            this.stocks[findStock(tkr)].quantity = this.stocks + quantity;
        }
    };
    this.sell = function(tkr,qnt){};
    this.totalValue = function(){
        let total = 0;
        for(let s=0; s<this.stocks.length;s++){
            total = total + this.stocks[s].totalValue();
        }
        return total;
    };
}

module.exports = Portfolio;
