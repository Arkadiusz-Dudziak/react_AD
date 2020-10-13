import React, {Component} from "react"

class RegulationsPopup extends Component
{
    constructor(props)
    {
        super(props)

    }
    render()
    {
        return(
        <div className='RegulationsPopup'>
          <div className='RegulationsPopup_inner'>
                <button onClick={this.props.closePopup}>X</button>
                <ol>
                    <li>Warunki techniczne korzystania z serwisu</li>
                    <ul>
                        <li>
                            Serwis jest napisany w bibliotece JavaScript. Wyłączenie JavaScript 
                            uniemożliwi korzystanie z serwisu.
                        </li>
                        <li>Korzystanie z serwisu opiera się o wykorzystanie technologii
                            Cookies.
                        </li>
                        <li>
                            Przeglądarki pozwalają na wyłączenie plików 'cookie', jednak po ich wyłączeniu 
                            korzystanie z serwisu może być mniej wygodne lub niektóre funkcje mogą być niedostępne.
                        </li>
                    </ul>
                    <li>Dane osobowe i polityka prywatności</li>
                    <ul>
                        <li>
                            Serwis sportaround.pl jest administratorem danych osobowych, szanuje prawo 
                            do prywatności swoich Użytkowników i respektuje prawo ochrony ich danych osobowych. 
                        </li>
                        <li>
                            Dostęp do niektórych usług jest dostępny wyłącznie dla Użytkowników
                            zarejestrowanych.
                        </li>
                        <li>
                            Serwis nie odpowiada za ujawnienie danych osobowych, które nastąpiło poprzez świadomą
                            działalność Użytkownika.
                        </li>
                    </ul>
                    <li>Prawa i obowiązki użytkowników</li>
                    <ul>
                        <li>
                            Zabronione jest umieszczanie treści sprzecznych z polskim prawem, dobrymi obyczajami, naruszającymi
                            prawa innych użytkowników. Zakaz dotyczy danych podawanych na formularzu rejestracyjnym, <b>profilu użytkownika</b>&nbsp;i
                            innym miejscach gdzie możliwe jest wprowadzenie danych przez Użytkownika. Ocena, w jakim stopniu 
                            naruszony został Regulamin, pozostaje w gestii <b>Administratorów</b>. Karą może być usunięcie 
                            zabronionych treści, zablokowanie konta Użytkownika lub usunięcie jego konta. 
                        </li>
                        <li>
                            Zabronione jest wykorzystywanie usług serwisu w celach komercyjnych lub mogących naruszyć prawa autorskie 
                            autorów serwisu. 
                        </li>
                        <li>
                            Użytkownik powien zabezpieczyć login i hasło przed dostępem osób niepowołanych. Konieczne jest ustalenie 
                            hasła na tyle silnego, by niemożliwe było łatwego jego odgadnięcie. 
                        </li>
                        <li>
                            Zabronione jest działanie na szkodę serwisu i jego Użytkowników. W szczególności zabrania się prób 
                            uzyskania nieautoryzowanego dostępu do serwisu lub kont innych użytkowników, a także 
                            celowych prób przeciążenia sewera. 
                        </li>
                    </ul>
                </ol>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>
        )
    }
    
}
export default RegulationsPopup