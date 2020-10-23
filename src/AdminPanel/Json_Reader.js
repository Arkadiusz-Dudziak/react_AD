import Data from '../Data.json'
import React, {Component} from "react"

class Json_Reader extends Component
{
    render()
    {
        return(
            <div>
                <h1>Panel Administratora</h1>
                <table>
                    <tr><th>email</th> <th>login</th> <th>zweryfikowany</th> <th>uzytkownik</th> <th>administrator obiektu</th> <th>moderator treści</th>   <th>administrator</th>  </tr>
                    {
                        Data.map((usersDetail, index) => 
                        {
                        return (<tr><td>{usersDetail.email}</td> 
                                <td>{usersDetail.login}</td>  
                                <td>{usersDetail.verified=="1"? "TAK":"NIE"}</td>   
                                <td style={usersDetail.user=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                                <td style={usersDetail.adminofacility=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                                <td style={usersDetail.moderator=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                                <td style={usersDetail.admin=="1"?{backgroundColor:"green"}:{backgroundColor:"red"}}></td>  
                                </tr>)
                        })
                    }
               </table>
            </div>
        )
    }
}

export default Json_Reader;