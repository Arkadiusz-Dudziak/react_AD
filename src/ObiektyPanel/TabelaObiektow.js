import Data from '../Data_Objects.json'
import React, {Component} from "react"
import ObjectsRow from "./ObjectsRow"
//import update from 'react-addons-update';
//npm i react-addons-update   ->  do clickList
//import { FaArrowDown, FaArrowUp } from "react-icons/fa";

class TabelaObiektow extends Component 
{
    constructor() 
    {
      super();
      this.state = 
      {
         data: Data,
         clickList: [true,true,true,true,false,false,false,false,false],
         are_any_changes: false,
         value:"",
         changed_objects:[],
      };
      this.onSort = this.onSort.bind(this);
      this.handler = this.handler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.tableChangeConfirm = this.tableChangeConfirm.bind(this);
    }
  
  
    onSort(event, sortKey,index)
    {
      const data = this.state.data;
  
      let corrected_clickList = this.state.clickList
      for(var i=0; i<9; i++)
      {
        if(index===i)
        {
          corrected_clickList[i] = !corrected_clickList[i];
        }
      }

      //zmiana sposobu sortowania
      if(corrected_clickList[index])
      {
        if(sortKey==="id")
          data.sort(function(a,b){return a.id - b.id})
        else
          data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))  //dla pol tekstowych
      }
      else
      {
        if(sortKey==="id")
          data.sort(function(a,b){return b.id - a.id})
        else
          data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))  //dla pol tekstowych
      }

      this.setState({data,corrected_clickList})
    }


    tableChangeConfirm(id, nazwa, administrator, typ, szerokosc_geograficzna, wysokosc_geograficzna)
    {
      //console.log("ACTION "+nazwa+" "+administrator);
      var objects_array = this.state.changed_objects;

      var jsonData = {"id": "", "nazwa":"", "administrator":"", "typ":"", "szerokosc_geograficzna":"", "wysokosc_geograficzna":""};

        jsonData.id = id;
        jsonData.nazwa = nazwa;
        jsonData.administrator = administrator;
        jsonData.typ = typ;
        jsonData.szerokosc_geograficzna = szerokosc_geograficzna;
        jsonData.wysokosc_geograficzna = wysokosc_geograficzna;
        objects_array.push(jsonData);

        
        console.log(objects_array);
        for(var i=0; i<objects_array.length-1; i++)
        {//usuwanie z tablicy uzytkownikow z więcej niż jedną zmianą (liczy się tylko ostatnia zmiana)
          if(jsonData.id===objects_array[i].id)
            objects_array.splice(i,1);
        }
        

        this.setState({changed_objects:objects_array,are_any_changes:true})
    }



    handleSubmit()
    {
      console.log("Handle submit clicked!");
      console.log(this.state.changed_objects);
      //sent data from changed_objects to API 
      this.setState({are_any_changes:false})
    }


    handler(v)
    {
      this.setState({value: v});
      //console.log("HELLO THERE: "+v);
    }

    changeHandler()
    {
      this.setState({change_clicked:true});
    }

    render() {
      var newdata = this.state.data;
      const self = this; //!!!!
      return (
        <table id="objects_table">
          <thead>
            <tr>
              <th onClick={e => this.onSort(e, 'id', 0)}>ID</th>
              <th onClick={e => this.onSort(e, 'nazwa', 0)}>nazwa</th>
              <th onClick={e => this.onSort(e, 'administrator', 0)}>administrator</th>
              <th onClick={e => this.onSort(e, 'typ', 0)}>typ</th>
              <th onClick={e => this.onSort(e, 'szerokosc_geograficzna', 0)}>szerokość geograficzna</th>
              <th onClick={e => this.onSort(e, 'wysokosc_geograficzna', 0)}>wysokość geograficzna</th>
              <th></th>
              {this.state.are_any_changes?<th className="confirmAll" onClick={this.handleSubmit.bind(this)}>Potwierdź wszystko</th>:null}
            </tr>
          </thead>
          <tbody id="tbody">
            {newdata.map(function(objectsDetails, index) {
              return (
                <ObjectsRow index={index} objectsDetails={objectsDetails} action={self.tableChangeConfirm}/> 
              );
            })}
          </tbody>
        </table>
      );
      
    }
  }
  
  export default TabelaObiektow;

  /*
  <td className="permissions" data-title="permissions"> 
    <V2_Select defaultValue={userDetails.permissions} action={self.handler}/>
  </td>
  */
//TODO
/* childComponent spróbować w selectie i options */

  /*const tbody = document.querySelector('#position tbody');
      tbody.addEventListener('click', function (e) 
      {
        const cell = e.target.closest('td');
        if (!cell) {return;} // Quit, not clicked on a cell
        const row = cell.parentElement;
        console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
      });*/


/*
{newdata.map(function(userDetails, index) 
  {
    return (
      <tr key={index} data-item={userDetails}>
          <td data-title="ID">{userDetails.id}</td>
          <td data-title="Nazwa">{self.state.change_clicked===true?<input type="text" defaultValue={userDetails.nazwa}/>:userDetails.nazwa}</td>
          <td data-title="Administrator">{userDetails.administrator} 
          </td>
          <td data-title="Typ"> 
              <V2_Select defaultValue={userDetails.typ} action={self.handler}/>
          </td>
          <td data-title="Szerokosc_geograficzna">{userDetails.szerkosc_geograficzna} </td>  
          <td data-title="Wysokosc_geograficzna">{userDetails.wysokosc_geograficzna} </td>  
          <td>
            <FontAwesomeIcon 
                icon="edit"
                cursor="pointer"
                onClick={self.changeHandler.bind(self)}
            />
          </td>
      </tr>
    );
  })}
*/