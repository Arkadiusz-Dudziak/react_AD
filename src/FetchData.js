import axios from 'axios'
import Cookies from 'universal-cookie'
import { hash_password } from "./HashPassword";

var jwt = require("jsonwebtoken");
const cookies = new Cookies();
var token = cookies.get('user_data');

//--------------------------ZARZĄDZANIE ADMINISTRACJĄ OBIEKTÓW-------------------
export function getObjectsAdminData()
{
    console.log("getObjectsAdminData");
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(config);

    const bodyParameters = {
    key: "value"
    };

    /*axios.post( 
      'http://localhost:8000/api/v1/get_token_payloads',
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
    */  

    return [
        {
            id: 1,
            nazwa: "boisko piłkarskie pod Dębem",
            administrator: "admin2"
        },
        {        
            id: 2,
            nazwa: "Orlik \"Bocianie Gniazdo\"",
            administrator: "3admin3"
        },
        {
            id: 3,
            nazwa: "Estadio Bernabeu",
            administrator: "3admin3"
        },
        {
            id: 4,        
            nazwa: "Camp Nou",
            administrator: "adam_070"
        },
        {
            id: 5,
            nazwa: "Lodowisko \"Arktos\"",
            administrator: "admin341"
        },
        {
            id: 6,
            nazwa: "\"Głębia Poznania\"",
            administrator: ""
        },
        {
            id: 7,
            nazwa: "Lodowisko \"Wywrotka\"",
            administrator: ""
        }
    ]
}


export function getObjectsAdmins()
{
    /*axios.get('/administratorzy_obiektow')
    .then((response) => {
        if(response !== {})
            return response;
        else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API")
    })*/
    return [
        {
            id: 8,  
            login: "skaut"
        },
        {
            id: 10,
            login: "admin2"
        },
        {
            id: 12,
            login: "3admin3"
        },
        {
            id: 14,  
            login: "adam_070"
        },
        {
            id: 15,
            login: "jan_admin9"
        },
        {
            id: 21,
            login: "admin341"
        },
        {
            id: 24,
            login: "zarzadca_15"
        },
        {
            id: 25,
            login: "bosyy"
        },
        {
            id: 31,
            login: "kowalski"
        }
    ]
}


export function setObjectAdmin(objectId, adminLogin)
{//można też usunąć uprawnienia administratora obiektu dając pusty adminLogin
    console.log("setObjectAdmin");
    let params = {
        id_obiektu: objectId,
        login_administratora: adminLogin,
    };
    const header = 
    {
      headers: {}  
    };
    /*axios.post('/admin_do_obiektu', {params})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}



//-------------------ZARZĄDZANIE UŻYTKOWNIKAMI-----------------------------------


export function getUsersData()
{
     /*axios.get('/uzytkownicy')
    .then((response) => {
        if(response !== {})
            return response;
        else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API")
    })*/
    return [
        {
            id: 1,
            email: "liam.neeson@interia.pl",
            login: "iWillFindYou",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {        
            id: 2,
            email: "json.statham@o2.pl",
            login: "transporter",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 3,
            email: "james_bond@gmail.pl",
            login: "agent007",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 4,        
            email: "ezio_auditore@o2.pl",
            login: "templar_slayer",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 5,
            email: "lara_croft@interia.pl",
            login: "TombRaider",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {        
            id: 6,
            email: "user_02@o2.pl",
            login: "letMeIn",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: "2020-12-29"
        },
        {
            id: 7,
            email: "blazkowicz@gmail.pl",
            login: "BJ_William",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: "2021-02-10"
        },
        {
            id: 8,        
            email: "adam_jensen@gmail.pl",
            login: "json45",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: ""
        },
        {
            id: 9,
            email: "jacki_chan@interia.pl",
            login: "Jacek_z_Chin",
            zweryfikowany: "TAK",
            uprawnienia: "administrator",
            ban: ""
        },
        {        
            id: 10,
            email: "vern0nroch3@o2.pl",
            login: "PatriotA",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 11,
            email: "userooo@gmail.pl",
            login: "user0000",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 12,        
            email: "robert@gmail.pl",
            login: "roberto_maximo",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: ""
        }
        ,
        {
            id: 13,
            email: "inter_mediolan@interia.pl",
            login: "club_001",
            zweryfikowany: "TAK",
            uprawnienia: "moderator treści",
            ban: ""
            
        },
        {        
            id: 14,
            email: "dwayne_johnson@o2.pl",
            login: "johs0N",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: ""
        },
        {
            id: 15,
            email: "gear_marcus@gmail.pl",
            login: "feniX",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 16,        
            email: "bruce_wayne@gmail.pl",
            login: "Nocny_Marek",
            zweryfikowany: "TAK",
            uprawnienia: "moderator treści",
            ban: ""
        },
        {
            id: 17,
            email: "cole_phelps@interia.pl",
            login: "detective_N0iR",
            zweryfikowany: "TAK",
            uprawnienia: "administrator",
            ban: ""
        },
        {        
            id: 18,
            email: "stallone@o2.pl",
            login: "Rocky_Balboa",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 19,
            email: "stallone@gmail.pl",
            login: "Pierwszy_Rambo",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 20,        
            email: "ross@gmail.pl",
            login: "geller",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: ""
        },
        {        
            id: 21,
            email: "usain_bolt@o2.pl",
            login: "fast_and_fourius",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: "2022-04-15"
        },
        {
            id: 22,
            email: "ea_play@gmail.pl",
            login: "you_need_to_pay",
            zweryfikowany: "NIE",
            uprawnienia: "administrator obiektu",
            ban: ""
        },
        {
            id: 23,        
            email: "ubisoft@gmail.pl",
            login: "tasty_bugs_for_free",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: ""
        },
        {
            id: 24,        
            email: "watcher@gmail.pl",
            login: "watcher",
            zweryfikowany: "TAK",
            uprawnienia: "użytkownik",
            ban: "pernamentny"
        }
    ]
}

export function setAccountPermissons(userId, accountPermissions)
{
    console.log("setAccountPermissions, ", userId, " uprawnienia: ", accountPermissions)
    /*let params = {
        id_uzytkownika: userId,
        uprawnienia: accountPermissions,
    };
    axios.post('/ustaw_uprawnienia', {params})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}

export function setBanDate(userId, banDate)
{
    console.log("setBanDate, ",userId," data: ",banDate)
    /*let params = {
        id_uzytkownika: userId,
        data_banu: banDate,
    };
    axios.post('/ustaw_date_bana', {params})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}

export function setPernamentBan(userId)
{
    console.log("setPernamentBan, ",userId)
    /*axios.post('/ustaw_pernamentnego_bana', userId)
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}

export function setVerified(userId)
{
    console.log("setVerified, ",userId)
    /*axios.post('/zweryfikuj', userId)
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}

export function clearBan(userId)
{
    console.log("clearBan, ",userId)
    /*axios.post('/anuluj_ban', userId)
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}



//--------------------------OPCJE KONTA-------------------------------------

export function getAccountDescription(userId)
{
    //console.log("getAccountDescription, ", userId)
    /*axios.get('/opis_konta', userId)
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
    return [
        {
            id: 1,
            opis_konta: "Przykładowy opis konta."
        }
    ]
    

}

export function setNewAccountDescription(userId, description)
{
    console.log("setNewAccountDescription, ", userId, " - ", description);
    /*let params = {
        id_uzytkownika: userId,
        opis: description,
    };
    /*axios.post('/opis_konta', {params})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}

export function setNewPassword(newPassword, currentPassword)
{
    var hash_new = hash_password(newPassword)
    var hash_old = hash_password(currentPassword)
    console.log("setNewPassword, new_hash: ", hash_new);
    console.log("old_hash: ", hash_old)
    /*let params = {
        id_uzytkownika: userId,
        nowe_haslo: hash_new,
        obecne_haslo: hash_old
    };
    axios.post('/nowe_haslo', {params}, {withCredentials: true})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}

export function registerSelf(login, hashed_password)
{
    // let params = {
    //     login: login,
    //     haslo: hashed_password,
    // };
    // axios.post('/rejestracja', {params})
    // .then((response) => {
    //     if (response !== {})
    //     return response;
    // else throw Error("Błąd dostępu do danych");
    // })
    // .catch((error) => {
    //     throw Error("Brak poprawnej odpowiedzi serwera API!");
    // })
}

export function authorizateUser(login, hashed_password)
{
    /*let params = {
        login: login,
        haslo: hashed_password,
    };
    axios.post('/login', {params})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
//     $.ajax("https://example.com/v2/login", 
//     {
//      method: 'POST',
//      data: {login_id: login, password: hashed_password},
//      crossDomain: true,
//      success: "sukces",
//      error: "error"
//   });
}

export function resetPassword(email)
{
    console.log("resetowanie hasła: ", email);
}

export function verifySelf(vkey)
{
    console.log(vkey);
}