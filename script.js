let hdate = {
    getHDate: function(year,month,day){
        fetch("https://www.hebcal.com/converter?cfg=json&gy="+year+"&gm="+month+"&gd="+day+"&g2h=1") 
        .then((Response)=>Response.json())
        .then((data)=> this.showHebrewDate(data));
    },
    showHebrewDate: function(data){
        const { hy } = data;
        const { hm } = data;
        const { hd } = data;
        const { hebrew } = data;
        document.querySelector(".hebrewDate").innerText = "Hebrew date: \n"+
        hd+", "+hm+", "+hy+ "\n"+ hebrew;
    },
    paraseDate: function(){
        let d;
        d = new Date(document.querySelector(".search-date").value);
        if(!isNaN(d.valueOf())){
            this.getHDate(d.getUTCFullYear(),d.getMonth()+1,d.getDate());
        }else{
            document.querySelector(".hebrewDate").innerText = "Invalid date.";
        }
        
    }
};

document.querySelector(".search button").addEventListener("click" , function(){
    hdate.paraseDate();
});