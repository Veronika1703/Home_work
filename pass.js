const bcrypt=require('bcrypt');
const pass="veronika";
const rounds=10;
bcrypt.hash(pass,rounds,(err,hashString)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(hashString);
    }
});

let hashFromDb="$2b$10$kx7XPIad4uY1Hi47cB57/eWwdNHwbPDPTCNtvSOKkQvExFT8O3oby";
bcrypt.compare(pass,hashFromDb).then((ans)=>{
    if(ans)
        console.log('ok');
    else
    console.log('not ok');

});