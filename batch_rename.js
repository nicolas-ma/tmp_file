const path = require('path');
const fs = require('fs');
const name = path.basename('C:\\temp\\myfile.html');
// const dir = path.dirname();
const current_dir = __dirname+ "\\"
var filescount = {

}
var tmp;
var link_tmp;
fs.readdir(__dirname + "\\rename" ,function(err,files){
    if(err){
        console.log(err);
        return;
    }
    for(var i = 0; i < files.length;i++){
        var ext = path.extname(files[i]);
        var basename = path.basename(files[i], path.extname(files[i]));
        var basenames = basename.split(' ');
   
        for(var j = 0; j < basenames.length; j++){
            if ( !isNaN(basenames[j])){
                tmp = j
            }
        }
        basename = basenames[tmp-1]

        if(!filescount.hasOwnProperty(basename)){
            filescount[basename] = 1
        }
        else{
            filescount[basename] +=1
        }
            
        
        console.log(filescount);
        fs.rename(__dirname + "\\rename\\" + files[i], __dirname + "\\rename\\" +basename+filescount[basename]+ext,function(err){
            if(err){
                console.log(err);
            }
        })
  
        
    }

})
