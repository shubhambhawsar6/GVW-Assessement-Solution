var obj = {
    "Data": [
        {
            "User": "Sharmi",
            "Location": "Chennai"

        },
        {
            "User": "Mano",
            "Location": "Mumbai",
            "Dept": "IT",
            "Gift": "Box"

        },
        {
            "User": "Vishal",
            "Location": "Bangalore",
            "Dept": "Pharma"
        }
    ]


};

//Display all the data
for(var index = 0 ; index<obj.Data.length ; index++){
document.write(" "+obj.Data[index].User + " ");
document.write(" "+obj.Data[index].Location + "   ");
document.write(" "+obj.Data[index].Dept + "   ");
document.write(" "+obj.Data[index].Gift + "</br>");

}

//1.	Change the user “Mano” to “Vino”
document.write("<h1> 1.Update data from Mano to Vino</h1>")
for(var index = 0 ; index<obj.Data.length ; index++){
    if(obj.Data[index].User=="Mano"){
        obj.Data[index].User="Vino";
    }
}

for(var index = 0 ; index<obj.Data.length ; index++){
document.write(" "+obj.Data[index].User + " ");
document.write(" "+obj.Data[index].Location + "   ");
document.write(" "+obj.Data[index].Dept + "   ");
document.write(" "+obj.Data[index].Gift + "</br>");

}

//2.	Delete the entire details of user “Vishal”
document.write("<h1> 2.Deleting Entire Detail of User Vishal</h1>")

for(var index = 0 ; index<obj.Data.length ; index++){
    if(obj.Data[index].User=="Vishal"){
        delete obj.Data[2];
    }
}


for(var index = 0 ; index<obj.Data.length ; index++){
document.write(" "+obj.Data[index].User + " ");
document.write(" "+obj.Data[index].Location + "   ");
document.write(" "+obj.Data[index].Dept + "   ");
document.write(" "+obj.Data[index].Gift + "</br>");

}