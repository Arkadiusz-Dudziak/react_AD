import axios from 'axios'

//--------------------------ZARZĄDZANIE ADMINISTRACJĄ OBIEKTÓW-------------------
export function getObjectsAdminData()
{
    /*axios.get('/obiekty_i_admin')
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
            login: "cyberpunk2077"
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
            email: "max_payne@o2.pl",
            login: "boom_headshot",
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
            login: "cyberpunk2077",
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
            email: "geralt_z_rivii@gmail.pl",
            login: "dobry_Mutant",
            zweryfikowany: "NIE",
            uprawnienia: "użytkownik",
            ban: ""
        },
        {
            id: 12,        
            email: "robert_lewandowski@gmail.pl",
            login: "dwie_lewe_nogi",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: "2021-04-13"
        }
        ,
        {
            id: 13,
            email: "corvo_attano@interia.pl",
            login: "SolidMaskedHero",
            zweryfikowany: "TAK",
            uprawnienia: "moderator treści",
            ban: ""
            
        },
        {        
            id: 14,
            email: "dwayne_johnson@o2.pl",
            login: "Ten_Kamien",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: ""
        },
        {
            id: 15,
            email: "gear_marcus@gmail.pl",
            login: "muscular_fenix",
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
            login: "i_love_rachel",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: "2022-02-01"
        },
        {        
            id: 21,
            email: "usain_bolt@o2.pl",
            login: "fastest_man",
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
            ban: "2020-05-07"
        },
        {
            id: 23,        
            email: "ubisoft@gmail.pl",
            login: "tasty_bugs_for_free",
            zweryfikowany: "TAK",
            uprawnienia: "administrator obiektu",
            ban: "2021-02-14"
        },
        {
            id: 24,        
            email: "watch_dogs@gmail.pl",
            login: "uwaga_psy",
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
            "opis_konta": "Przykładowy opis konta."
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

export function setNewPassword(userId, newPassword)
{
    console.log("setNewPassword, ", userId, " - ", newPassword);
    /*let params = {
        id_uzytkownika: userId,
        haslo: newPassword,
    };
    /*axios.post('/nowe_haslo', {params})
    .then((response) => {
        if (response !== {})
        return response;
    else throw Error("Błąd dostępu do danych");
    })
    .catch((error) => {
        throw Error("Brak poprawnej odpowiedzi serwera API!");
    })*/
}